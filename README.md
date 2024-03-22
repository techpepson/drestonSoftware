<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
=======

# General Overview

# Introduction of project
This is a school system software designed for the purposes of:

## Project Structure
* The project has an organized structure, where directories are carefully segregated with discerning names.
* The project has been grouped into frontend and backend sections, since this a system that will include both stack.
* The frontend directory has sub-folders that include components, state-management, styles, tests, which are all meant to help realize the aim of the frontend design.
* Relevant unit tests will be written for components that need to be tested.
* Config files, license and other relevant files are in the root directory, well named and configured.
* In general, frontend implementation will be in the frontend-source-code directory, whereas backend logic will be in the backend-source-code folder. Images and most static files will be stored in the assets folder, with a handful of files and assets in the public folder.

## Remote Repo Branches
In the remote repository, there are three branches, master,frontend and backend. The master branch will contain all setup and global commits, commits that will span both frontend and backend.
The frontend branch will contain commits for the frontend design logic.
Lastly, the backend branch will contain commits for the backend implementation logic. 
Conventional commits will be used to better describe commits.