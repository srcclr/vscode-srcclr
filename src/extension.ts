'use strict';

import { ExtensionContext } from 'vscode';
import { ScanProjectCommand } from './scanProjectCommand';

export function activate(context: ExtensionContext) {
    console.log('Srcclr is now active');
    context.subscriptions.push(new ScanProjectCommand());
}

// this method is called when your extension is deactivated
export function deactivate() {
}