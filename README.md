# Vue Express Template

A full-stack app template, using:

- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/v6/)

This project references submodules from two other templates, [vue-ts-template](https://github.com/biggestcookie/vue-ts-template) and [express-ts-template](https://github.com/biggestcookie/express-ts-template).

This template repo exists as a monorepo template, allowing you to clone and deploy a single repository for your entire app. Additionally, it also contains linting configuration, and references to shared TypeScript interfaces used across both apps.

## Setup

1. Clone the project:
   - Generate your project from this template by clicking the 'Use this template' button, or [here](https://github.com/biggestcookie/vue-express-template/generate).
   - If you're first cloning your repository, use this command to also pull the referenced submodules:
     ```
     git clone --recursive your-forked-project-url.git
     ```
   - If you've already cloned your repository locally, use this command to pull the referenced submodules:
     ```
     git submodule update --init --recursive
     ```
   - Remove all references to the original submodules by deleting the `.git` folder in the `client` and `server` folders, deleting the root `.gitmodules` file, and running `git rm --cached client server`
   - Follow [these instructions](https://github.blog/2016-02-01-working-with-submodules/) if you wish to break out your `client` and `server` folders into their own submodule repositories.
2. Run `npm install` in the root folder, which will install dependencies in the root and subproject folders.
3. Run the dev servers for each app:
   - If you are using Visual Studio Code, press `Ctrl/Cmd + Shift + B` to run the default dev task, which will run dev servers for each app simultaneously.
   - If you are not using Visual Studio Code or wish to run these tasks manually, run `npm run dev:client` and `npm run dev:server` in the root folder in two separate terminals.
4. Build the project:
   - Run `npm run build` in the root folder.
   - When deploying each app, point your deployment to each respective app folder.
