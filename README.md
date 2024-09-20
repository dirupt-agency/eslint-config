# DIRUPT ESLint Config - For ESLint 9

<br />

<div align="center">
  <h3>ESLint presets used by the DIRUPT core team</h3>
  <p>
    DIRUPT ESLint Config provides a set of carefully curated ESLint rules and configurations to ensure consistent code style and quality across projects. This package encapsulates the best practices and coding standards used by the DIRUPT core team, helping developers write clean, maintainable, and error-free JavaScript and TypeScript code.
  </p>
</div>

<br />

<div align="center">

[![license-image]][license-url] [![npm-image]][npm-url]

</div>

## Installation

Install the package from the npm registry.

```sh
pnpm add -D @dirupt/eslint-config

# Make sure also to install the following packages
pnpm add -D eslint@9 prettier@3
```

## Usage

After installation, use one of the following presets depending on the nature of your application/library/project.

**For AdonisJS:**
```js
// eslint.config.{js,mjs,ts}
import { configApp } from '@adonisjs/eslint-config'
import { configAdonis } from '@dirupt/eslint-config'

export default configApp(configAdonis())
```

## Roadmap

We are continuously working to improve and expand our ESLint configurations. Here's what you can expect in the near future:

- [ ] Add preset for React
- [ ] Add preset for TypeScript
- [ ] Add Recommended preset

These upcoming presets will provide tailored linting configurations for React and TypeScript projects, as well as a recommended configuration that combines best practices for general JavaScript development. Stay tuned for updates!

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/philippe-desplats">Philippe Desplats</a> - Project based on <a href="https://github.com/adonisjs/eslint-config">AdonisJS Prettier Config</a></sub>
</div>

[npm-image]: https://img.shields.io/npm/v/@dirupt/eslint-config/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@dirupt/eslint-config/v/latest 'npm'
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/dirupt-agency/eslint-config?style=for-the-badge
