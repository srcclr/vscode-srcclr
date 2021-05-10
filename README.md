This is an initiative to integrate SourceClear agent goodness right into your Visual Studio Code workspaces.

## Features

Enables scanning of VS Code workspaces for vulnerabilities and, for now, simply alerting of the detected vulnerability counts by severity (eg. High, Medium, Low). 

## Requirements

For this to work, SourceClear agent needs to be installed in your machine. Please visit [SourceClear](https://www.sourceclear.com) to set up one.

## Installation

One way to install the extension is through the following steps:
1. Find and download the `.vsix` file included in this project which typically looks like `vscode-srcclr-<version>.vsix`
2. In VSCode Extensions, install the extension by `Install from VSIX...`. Alternatively, in the terminal, run `code --install-extension vscode-srcclr-<version>.vsix`. 
3. Verify by finding `vscode-srcclr` in your list of installed extensions.

### Extension Settings

#### Agent Profile

Override the following configuration property either in your User or Workspace settings (Cmd+p and type `> settings` to search for the User or Workspace settings). 

* `srcclr.profile`: profile to use when scanning. View ~/.srcclr/agent.yml for the list of profiles available. Leave this empty to use the default profile.

## Development

Requires: VS Code and SourceClear agent locally installed with valid profiles.

Clone this repo and open in VS Code

```
git clone git@github.com:srcclr/vscode-srcclr.git 
```

Start debug mode by finding the following in the top menu

```
Run > Start Debugging
```
Debug mode opens a new VS Code window titled `[Extension Development Host]`. In this window, open a repo (`File > Open`) to test the extension on. A sample repo to test on `https://github.com/srcclr/example-ruby`

Make sure to update `settings.json` with a profile before scanning. (Cmd+p and type `> settings` to search for the User or Workspace settings)

```
{
 `srcclr.profile`:  //profile to use when scanning. View ~/.srcclr/agent.yml for the list of profiles available. Leave this empty to use the default profile.
}
```
