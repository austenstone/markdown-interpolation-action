# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

## Usage
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### [Example 1 Workflow](https://github.com/austenstone/markdown-interpolation-action/blob/main/.github/workflows/usage.yml)

<!--USAGE-->
```yml
name: Write Time to README.md
on:
  workflow_dispatch:
    inputs:
      message:
        description: 'A message to show in the README.md file'     
        required: true
        default: 'Hello World!'
  schedule:
    - cron: '* * * * *'

jobs:
  run:
    name: Write Time
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/github-script@v6
        id: values
        env:
          AUTHOR: ${{ github.actor	}}
          MESSAGE: ${{ github.event.inputs.message }}
        with:
          script: |
            const fs = require('fs')
            let usage = fs.readFileSync('.github/workflows/usage.yml').toString();
            usage = usage.replace('uses: austenstone/markdown-interpolation-action@master', 'uses: austenstone/markdown-interpolation-action@master')
            usage = usage.replace(`
            let usage = fs.readFileSync('.github/workflows/usage.yml').toString();
            usage = usage.replace('uses: ./', 'uses: austenstone/markdown-interpolation-action@master')
            usage = usage.replace(\`usage = usage.replace('uses: ./', 'uses: austenstone/markdown-interpolation-action@master')\`, '')`, '')
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
              AUTHOR: process.env.AUTHOR,
              MESSAGE: process.env.MESSAGE,
              USAGE: '\n```yml\n' + usage + '\n```\n'
            }
      - uses: ./
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4

```
<!--END USAGE-->

### Example 1 README
```md
Last updated: <!--TIME-->3/12/2022, 2:03:14 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->
```

### Example 1 Result (LIVE)
Last updated: <!--TIME-->3/12/2022, 2:03:14 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->

### <!--MESSAGE-->Hello World!<!--END MESSAGE-->

## Input Settings
Various inputs are defined in [`action.yml`](action.yml):

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values to interpolate in markdown. | N/A |
| files-regex | File name match as regex. | README.md |
| files-regex-flags | Regex flags for files-regex. | gi |
