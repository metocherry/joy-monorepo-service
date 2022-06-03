# Joy Monorepo Service

## Journey

### Create project using turborepo

```shell
npx create-turbo@latest
```

### Use yarn berry

```shell
yarn set version berry
yarn
```

and then, update .gitignore

### Add turbo as a development dependency

The turbo package is a little shell that will install the proper turbo-<os>-<arch> package for you operating system and architecture.

```shell
yarn add trubo --dev
```

### Update turbo.json

```json
{
  "$schema": "https://turborepo.org/schema.json",
  "baseBranch": "origin/main"
}
```
