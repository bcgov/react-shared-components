# React Shared Components

Shared reusable react BCGov themed components. See [https://bcgov.github.io/react-shared-components/](https://bcgov.github.io/react-shared-components/) for documentation.

## Getting started

In order for projects to use these components, add the latest [release](https://github.com/bcgov/react-shared-components/releases) to the projects package.json. Example: (current release)

```
"dependencies": {
    ...
    "shared-components": "https://github.com/bcgov/react-shared-components/releases/download/0.5.3/shared-components-0.5.3.tgz",
    ...
},
```

## Creating a release

Run the following commands locally when ready to release:

```bash
yarn install
```

```bash
npm pack
```

Running the pack command will create a _shared-components-X.X.X.tgz_ file in the root level of the project that contains the components ready for consumption by any project.
