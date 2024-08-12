# Agileworks mono repo

This is a monorepo of agileworks with a single docs site ([./apps/gs-awds-docs](./apps/gs-awds-app)) that has installed two local packages:

- [./packages/gs-awds](./packages/gs-awds): Exports UI components that use TypeScript and Tailwind CSS and is compiled by SWC.
- [./packages/gs-awds-utils](./packages/gs-awds-utils): Exports utility functions that use TypeScript.

The monorepo is using [Turborepo](https://turborepo.org/) and [pnpm workspaces](https://pnpm.io/workspaces) to link packages together.

run `apps/docs` in development mode:

```bash
pnpm dev
```

## release

```bash
npx changeset
pnpm bump
pnpm release
```

The app should be up and running at <http://localhost:3000>.
