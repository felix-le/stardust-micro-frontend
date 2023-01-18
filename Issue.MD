1. it is too hard to connect between among packages (share style, share component, share state, share data, share function, share ... )
2. Had to use lerna to manage packages also config the `next.config.js` in the `hub001` to make it work.

--- learned

1. use prettierrc to format whole file code:

`1. yarn add prettier Add it to package.json: "prettier": "prettier --write ." && `

2.  `yarn lint` to check warning and error before commit. Use storybook to make it easy to develop and test component
3.  use `husky` to make sure the code is clean before commit
<!-- All of these husky should be install by lerna at the root folder with git-->

- lerna add husky
- npx husky install
- --- issue

- can't build because in the news001 you can't find the components in the hub001. The you have to change the code below when import it.

```js
// const Footer = dynamic(() => import('hub/components/footer')); <-- wrong
const Footer = dynamic(() => import('hub/components/' + 'footer')); // <-- right
```
