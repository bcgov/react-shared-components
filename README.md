[![Maintainability](https://api.codeclimate.com/v1/badges/df18a9729ae95e933fb2/maintainability)](https://codeclimate.com/github/bcgov/react-shared-components/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/df18a9729ae95e933fb2/test_coverage)](https://codeclimate.com/github/bcgov/react-shared-components/test_coverage)

# React Shared Components

Shared reusable react BCGov themed components. See [https://bcgov.github.io/react-shared-components/](https://bcgov.github.io/react-shared-components/) for documentation.

## Getting Started

In order for a project to use these components, add the latest [release](https://github.com/bcgov/react-shared-components/releases) to the project's package.json. Example: (current release)

```
"dependencies": {
    ...
    "shared-components": "https://github.com/bcgov/react-shared-components/releases/download/1.2.0/shared-components-1.0.0.tgz",
    ...
},
```

## Creating a Release

Run the following commands locally when ready to release:

```bash
yarn install
```

```bash
npm pack
```

Running the pack command will create a _shared-components-X.X.X.tgz_ file in the root level of the project that contains the components ready for consumption by any project.
