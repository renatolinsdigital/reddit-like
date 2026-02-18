# Code style

This document aims to list coding best practices and style in order to maintain a high quality code base, despite of developers background. So we will consider:

## 1 - Using prettier as default formatter on VS Code + format on save

To do this, open VS Code settings by either going to File > Preferences > Settings or by pressing __Ctrl+,__. In the search bar of the Settings window, search for "format on save" and enable the "Editor: Format On Save" option, or the the equivalent in __settings.json__. You'll have to enable prettier as code formatter for the most commonly used files, so you can consider having the following setup:

```json
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
```

In case you want to disable code formatting for certain types of files (ex: .js only), you can do something like this:

```json
"[javascript]": {
    "editor.formatOnSave": false,
}
```

Once the whole team agrees in having Prettier as the default formatter, these same settings can be shared among developers via a __settings.json__ file inside the __.vscode__ folder, which will override VSCode internal settings. In that case, the folder __.vscode__ is part of project's configuration and should never be added to .gitignore.