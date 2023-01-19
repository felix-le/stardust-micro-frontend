# Micro front end with NextJS version 13

- tailwindcss

# Folder structure

To work on this project, please replicate the following folder structure:

```
 |- /packages
    |- /hub001
    |- /new001
```

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

1- Run the frontend: `yarn hub`

## To install a package in a specific module (Frontend):

1- `lerna add [packageName] [pathToModule]`
Example: `lerna add axios packages/hub001/website`

To install a package in all frontend modules:

2- `lerna add [packageName]`
Example: `lerna add axios`
