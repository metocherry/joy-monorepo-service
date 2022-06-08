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

create a pipeline to define your monorepo's task dependency graph.

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"],
      "outputs": [],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
    },
    "lint": {
      "outputs": []
    },
    "deploy": {
      "dependsOn": ["build", "test", "lint"],
      "outputs": []
    },
    "dev": {
      "cache": false
    }
  }
}
```

## Cetificate

```shell
brew install mkcert
mkcert -install
mkcert [domain] # ex. mkcert local.domain.com
```

and then, add domin in `/etc/hosts`

```txt
127.0.0.1   [local.domain.com]
```

## Automated Release
