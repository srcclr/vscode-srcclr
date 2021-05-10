"use strict";
import {
  commands,
  Disposable,
  window,
  workspace,
  StatusBarAlignment,
  StatusBarItem
} from "vscode";
import * as cp from "child_process";
import { IReport, SecurityStats } from "./types";
import { Report } from "./report";
import { Commands } from "./commands";

export class ScanProjectCommand implements Disposable {
  private _statusBar: StatusBarItem | undefined;

  constructor() {
    commands.registerCommand(Commands.ScanProject, () => this._execute());
  }

  private _execute() {
    // TODO: Enhancement to allow a user-friendly config settings UI to choose from available profiles
    const config = workspace.getConfiguration("srcclr");
    const activeProfile: string = config.get<string>("profile") || "";

    if (activeProfile === "") {
      window.showInformationMessage(
        "Scan failed. Please set 'srcclr.profile' in your Workspace settings"
      );
      return;
    }

    // TODO: Controllers for status bar interactions
    window.showInformationMessage("Scanning for vulnerabilities");

    this._updateStatusBarMessage(`SourceClear scan in progress...`);

    // Build command string to execute in child process.
    const cmd = this._buildCommand(activeProfile, true, true);
    console.log(`Executing: ${cmd}`);

    // TODO: If possible, address SIGTERM better with less arbitrary constant for maxBuffer
    const child = cp.exec(cmd, { maxBuffer: 1024 * 100000 });

    let results = "";
    child.stdout.on("data", data => {
      results += data.toString();
    });

    child.stderr.on("data", data => {
      window.showInformationMessage(`${data}`);
    });

    child.on("exit", (code, signal) => {
      if (code === 0) {
        const reportJson: IReport = JSON.parse(results);
        const report: Report = new Report(reportJson);
        const securityStats: SecurityStats = report.getSecurityStats();

        this._updateStatusBarMessage(
          `${securityStats.high} High | ${securityStats.medium} Medium | ${
            securityStats.low
          } Low`
        );

        window.showInformationMessage(
          `${securityStats.high} High | ${securityStats.medium} Medium | ${
            securityStats.low
          } Low`
        );
        if (Number(securityStats.high) > 0) {
          window.showWarningMessage(
            `${securityStats.high} High risk vulnerabilities detected!`
          );
        }
      } else {
        window.showInformationMessage("Scan failed.");
        this._updateStatusBarMessage("");
      }
    });
  }

  // TODO: A command helper class
  _buildCommand(profile: string, json: boolean, allowDirty: boolean): string {
    const scanPath = `cd ${workspace.rootPath}`;
    const profileOpt = profile !== "" ? `--profile=${profile}` : "";
    const jsonOpt = json ? `--json` : "";
    const allowDirtyOpt = allowDirty ? `--allow-dirty` : "";

    return `${scanPath} && srcclr ${profileOpt} scan . ${jsonOpt} ${allowDirtyOpt}`;
  }

  // TODO: A status bar controller
  _updateStatusBarMessage(text: string) {
    this._statusBar =
      this._statusBar || window.createStatusBarItem(StatusBarAlignment.Left);
    this._statusBar.text = text;
    this._statusBar.show();
  }

  dispose() {}
}
