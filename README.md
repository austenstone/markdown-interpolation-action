# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

## EXAMPLE
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### [Example 1 Workflow](.github/workflows/example1.yml)

<!--EXAMPLE1-->
```yml
name: Example 1
on:
  workflow_dispatch:
    inputs:
      message:
        description: "A message to show in the README.md file"
        required: true
        default: "Hello World!"
  schedule:
    - cron: "* * * * *"

jobs:
  run:
    name: Write Time to README.md
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/github-script@v6
        id: values
        env:
          AUTHOR: ${{ github.actor }}
          MESSAGE: ${{ github.event.inputs.message }}
        with:
          script: |
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
              AUTHOR: process.env.AUTHOR,
              MESSAGE: process.env.MESSAGE,
            };
      - uses: austenstone/markdown-interpolation-action@master
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4

```
<!--END EXAMPLE1-->

### Example 1 README
```md
Last updated: <!--TIME-->3/12/2022, 2:22:46 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->
```

### Example 1 Result (LIVE)
Last updated: <!--TIME-->3/12/2022, 2:22:46 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->

### <!--MESSAGE--><!--END MESSAGE-->

### Example 2
This example is actually updating the code examples for both examples 🤯.

#### [Example 2 Workflow](.github/workflows/example2.yml)
<!--EXAMPLE2-->
```yml
name: Example 2
on:
  push:
    branches:
      - "main"
    paths:
      - ".github/workflows/**.yml"

jobs:
  run:
    name: Write EXAMPLE to README.md
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/github-script@v6
        id: values
        env:
          AUTHOR: ${{ github.actor }}
          MESSAGE: ${{ github.event.inputs.message }}
        with:
          script: |
            const fs = require('fs');
            let example1 = fs.readFileSync('.github/workflows/example1.yml').toString();
            let example2 = fs.readFileSync('.github/workflows/example2.yml').toString();
            example1 = example1.replace('uses: austenstone/markdown-interpolation-action@master', 'uses: austenstone/markdown-interpolation-action@master');
            example2 = example2.replace('uses: ./', 'uses: austenstone/markdown-interpolation-action@master');
            return {
              EXAMPLE1: '\n```yml\n' + example1 + '\n```\n',
              EXAMPLE2: '\n```yml\n' + example2 + '\n```\n'
            };
      - uses: ./
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4

```
<!--END EXAMPLE2-->

## Inputs

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values to interpolate in markdown. | N/A |
| files-regex | File name match as regex. | README.md |
| files-regex-flags | Regex flags for files-regex. | gi |

## Outputs

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values read. (last value) | {} |
