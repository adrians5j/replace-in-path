# 

![Build](https://github.com/doitadrian/replace-in-path/workflows/Build/badge.svg)
[![](https://img.shields.io/npm/dw/replace-in-path.svg)](https://www.npmjs.com/package/replace-in-path) 
[![](https://img.shields.io/npm/v/replace-in-path.svg)](https://www.npmjs.com/package/replace-in-path)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Install
```
npm install replace-in-path --save-dev
```

Or if you prefer yarn: 
```
yarn add replace-in-path --dev
```

## Quick Example:

```ts
const codeReplacements = [
    {
        find: `const { security } = this.context;`,
        replaceWith: `// const { security } = this.context;`,
    },
    {
        find: "const identity = await security.getIdentity",
        replaceWith: "// const identity = await security.getIdentity",
    },
    {
        find: new RegExp("createdBy: identity.*},", "gms"),
        replaceWith: "/* $& */",
    },
];

replaceInPath(
    path.join(newCodePath, "/resolvers/TargetDataModelsMutation.ts"),
    codeReplacements
);
```
