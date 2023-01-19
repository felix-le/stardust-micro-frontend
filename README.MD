# Micro front end with NextJS version 13

- tailwindcss

# Folder structure

To work on this project, please replicate the following folder structure:

```
 |- /packages
    |- /hub001
    |- /new001
```

## Feature of project

1. This project uses lerna to manage monorepo
2. This project uses nextjs to build micro front end
3. This project uses pre-commit: to commit / push on repo, it will automatic use husky to run eslint (cached)

## feature of hub001

1. hub to show login/logout
2. header/footer ...
3. general information.
4. hub control style and theme
5. **all files in src/components and src/pages will be share cross the app and other monorepo**

## Style

1. hub001 to control style and theme
2. Can use tailwindcss or css-in-js

### Installation

- root folder:

`yarn && yarn initpakages`

- for run project:
  `yarn hub`
  `yarn news`

## To run the hub:

1- Run the frontend of Hub001 / news001: `yarn hub` / `yarn news`
2- Prettier whole project: `yarn prettier`

## To install a package in a specific module (Frontend):

1- `lerna add [packageName] [pathToModule]`
Example: `lerna add axios packages/hub001/website`

To install a package in all frontend modules:

2- `lerna add [packageName]`
Example: `lerna add axios`
