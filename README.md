# Dirupt - Code Standard for Typescript and React project

## How to install
You need ESLint and Prettier installed as development dependencies on your project. You can install them by using npm or yarn.

### NPM
1. Install ESLint and Prettier :
	```bash
	$ npm install --save-dev eslint prettier
	```
2. Install all peer dependencies (npm > v5) :
	```bash
	$ npx install-peerdeps --dev @dirupt/eslint-config
	```

### Yarn
1. Install ESLint and Prettier :
   ```bash
   $ yarn add -D eslint prettier
   ```
2. Install the peer dependencies tool :
   ```bash
   $ yarn global add install-peerdeps
   ```
3. 
	```bash
 	$ install-peerdeps @dirupt/eslint-config
	```

## How to use
Modify your `.eslintrc` file in your project to include the following code :
```json5
{
	"extends": [
		// ... your existing extends configuration
		"@dirupt/eslint-config"
	]
}
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:
```
{
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
	"editor.formatOnSave": false
  },
  "[javascriptreact]": {
	"editor.formatOnSave": false
  },
  // show eslint icon at bottom toolbar
  "eslint.alwaysShowStatus": true,
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
	"source.fixAll": true
  }
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

If you have previously configured ESLint to run via a File Watcher, [turn that off.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

### If you choose Local / Per Project Install Above
1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
1. Select **Automatic ESLint Configuration**
1. Check **Run eslint --fix on save**

### Ensure the Prettier plugin is disabled if installed.

1. Open Prettier configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > Prettier (optionally just search settings for "prettier")
1. Uncheck both **On code reformat** and **On save**
1. *Optional BUT IMPORTANT:* If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already.
	1. Make sure the **Run for files** glob does not include `js,ts,jsx,tsx`.
	2. An example glob for styles, config, and markdown. `{**/*,*}.{yml,css,sass,md}`

## License

Copyright © 2023 [Dirupt](https://www.di-rupt.com/?utm_source=github). This library is licensed under the MIT [license](/LICENCE).

## Authors

- Philippe DESPLATS [philippe@di-rupt.com](mailto:philippe@di-rupt.com)

## Support

For support, email [support@di-rupt.com](mailto:support@di-rupt.com).
