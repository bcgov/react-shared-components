# React Shared Components

Shared reusable react BCGov themed components.

## Release packaging

Run the following commands locally when ready to release:

`bash yarn install`

`bash npm pack`

Running the pack command will create a *shared-components-X.X.X.tgz* file in the root level of the project that contains the components ready for consumption by any project.

In order for projects to consume a new version, create a new release on this repository with the updated semantic version. Once the release is created, edit the release and upload the generated *shared-components-X.X.X.tgz* file to the release. Once this is complete, update your projects package.json to the following:

`"dependencies": {
    ...
    "shared-components": "https://github.com/SierraSystems/bcgov-shared-components/releases/download/X.X.X/shared-components-X.X.X.tgz",
    ...
  },`

Make sure that X.X.X is replaced with the appropriate version you're looking to target.
