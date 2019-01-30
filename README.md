# Oh Hello!

My name is `mono.ts`. I'm a minimal example of a typescript mono-repo.

# I'm Different

Unlike many similar examples I can do the following, **before you build anything**:

## Run Tests

`/package.json`:

`"test": "jest"`

## VSCode Package Linking

If you click on `@geo/point` (`/packages/line/src/index.ts`):

```typescript
import { Point, getDistance } from '@geo/point';
```

VScode will take you to `/packages/point/src/index.ts`

# The Stuff I'm Made Of

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [Lerna](https://lernajs.io/)
- [Typescript 3 Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Jest](https://mochajs.org/) (using ts-jest)

# How do I work?

There are basically two parallel typescript configuration hierarchies.

## Pre-build

This tree is using aliases (or _paths_ in typescript world). This allows VSCode to reference the correct files, and tests to run.

- `/tsconfig.base.json` (common configuration for both pre-build and build configurations)
  - `/tsconfig.json`
    - `/packages/line/tsconfig.json`

## Build

This tree uses typescript's project reference for optimised builds.

- `/tsconfig.base.json`
  - `/tsconfig.build.json`
    - `/packages/point/tsconfig.build.json`
    - `/packages/line/tsconfig.build.json`

Note that to build the packages you run (`/package.json`):

`"build": "tsc --build tsconfig.build.json"`

This is allegedly better than letting `yarn` or `lerna` build the packages in turn based on the dependency tree.

## Customise

Change scope from @geo.

- `/package.json`
- `/tsconfig.json`
- `/jest.config.js`
- `/packages/line/package.json`
- `/packages/line/tsconfig.build.json`
