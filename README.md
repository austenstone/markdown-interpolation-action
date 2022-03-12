# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

## Usage
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### [Example 1 Workflow](https://github.com/austenstone/markdown-interpolation-action/blob/main/.github/workflows/usage.yaml)
```yml
name: Write Time to README.md
on:
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
          AUTHOR: ${{ github.actor }}
        with:
          script: |
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
              AUTHOR: process.env.AUTHOR
            }
      - uses: austenstone/markdown-interpolation-action@main
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4
```
### Example 1 README
```md
Last updated: <!--TIME-->3/11/2022, 7:18:55 PM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->
```

### Example 1 Result (LIVE)
Last updated: <!--TIME-->3/11/2022, 7:18:55 PM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->

### <!--MESSAGE--><!--END MESSAGE-->

## Input Settings
Various inputs are defined in [`action.yml`](action.yml):

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values to interpolate in markdown. | N/A |
| files-regex | File name match as regex. | README.md |
| files-regex-flags | Regex flags for files-regex. | gi |
