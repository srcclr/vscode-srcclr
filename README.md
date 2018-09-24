This is an initiative to integrate SourceClear agent goodness right into your Visual Studio Code workspaces.

## Features

Enables scanning of VS Code workspaces for vulnerabilities and, for now, simply alerting of the detected vulnerability counts by severity (eg. High, Medium, Low). 

## Requirements

For this to work, SourceClear agent needs to be installed in your machine. Please visit [SourceClear](https://www.sourceclear.com) to set up one.  

## Development

Requires: VS Code and SourceClear agent locally installed with valid profiles.

Clone this repo and open in VS Code

```
git clone git@git.ci.srcclr.io:jonah/vscode-srcclr.git
```

Start debug mode by finding the following in the top menu

```
Debug > Start Debugging
```
Debug mode opens a new VS Code window titled `[Extension Development Host]`. In this window, open a repo (`File > Open`) to test the extension on. A sample repo to test on `https://github.com/srcclr/example-ruby`

Make sure to update `settings.json` with a profile before scanning.

```
{
 `srcclr.profile`:  //profile to use when scanning. View ~/.srcclr.yml for the list of profiles available
}
```

## Extension Settings

Override the following configuration property either in your User or Workspace settings.

* `srcclr.profile`: profile to use when scanning. View ~/.srcclr.yml for the list of profiles available  
