# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

## EXAMPLE 1
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### [Example 1 Workflow](.github/workflows/example1.yml)

<!--EXAMPLE1-->
```yml
name: Example 1
on:
  schedule:
    - cron: "* * * * *"
jobs:
  write-time:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        id: values
        with:
          script: |
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' }),
            };
      - uses: austenstone/markdown-interpolation-action@master
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_author: github-actions[bot] <github-actions[bot]@users.noreply.github.com>

```
<!--END EXAMPLE1-->

### Example 1 README
```md
##### Last Updated: <!--TIME-->2/9/2023, 12:33:50 AM EST<!--END TIME-->
```

### Example 1 Result (LIVE)
##### Last Updated: <!--TIME-->2/9/2023, 12:33:50 AM EST<!--END TIME-->

## EXAMPLE 2

An example to manually update a message on the README.md file.

### [Example 2 Workflow](.github/workflows/example2.yml)
<!--EXAMPLE2-->
```yml
name: Example 2
on:
  workflow_dispatch:
    inputs:
      message:
        description: "A message to show in the README.md file"
        required: true
        default: "Hello World!"

jobs:
  write-message:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        id: values
        env:
          MESSAGE: ${{ github.event.inputs.message }}
          AUTHOR: ${{ github.actor }}
        with:
          script: |
            return {
              MESSAGE: process.env.MESSAGE,
              AUTHOR: process.env.AUTHOR,
            };
      - uses: austenstone/markdown-interpolation-action@master
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_author: github-actions[bot] <github-actions[bot]@users.noreply.github.com>

```
<!--END EXAMPLE2-->

### Example 2 README
```md
@<!--AUTHOR-->austenstone<!--END AUTHOR--> says <!--MESSAGE-->Hello World!<!--END MESSAGE-->
```

### Example 2 Result (LIVE)
@<!--AUTHOR-->austenstone<!--END AUTHOR--> says <!--MESSAGE-->Hello World!<!--END MESSAGE-->

## EXAMPLE 3

This example is actually upating the README.md examples themselves 🤯
These example `yml` scripts in the README are generated automatically when the files change.

### [Example 3 Workflow](.github/workflows/example3.yml)
<!--EXAMPLE3-->
```yml
name: Example 3
on:
  push:
    branches:
      - "main"
    paths:
      - ".github/workflows/**.yml"

jobs:
  write-examples:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        id: values
        with:
          script: |
            const fs = require('fs');
            const examples = ['example1', 'example2', 'example3', 'example4'];
            const exampleContent = {};
            examples.forEach((example) => {
              let content = fs.readFileSync(`.github/workflows/${example}.yml`).toString();
              content = content.replace('uses: austenstone/markdown-interpolation-action@master', 'uses: austenstone/markdown-interpolation-action@master');
              content = content.replace(/.*- uses: actions\/checkout@v[0-9]+\n/g, '')
              exampleContent[example.toUpperCase()] = '\n```yml\n' + content + '\n```\n';
            });
            return exampleContent;
      - uses: ./
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_author: github-actions[bot] <github-actions[bot]@users.noreply.github.com>

```
<!--END EXAMPLE3-->

### Example 3 Result (LIVE)
yaml code snippets [Example 1](#example-1-workflow), [Example 2](#example-2-workflow), [Example 3](#example-3-workflow), [Example 4](#example-4-workflow).

## EXAMPLE 4

Examine the event context of the last run.
⚠️ This is just an example and shouldn't be used on a public repository.

### [Example 4 Workflow](.github/workflows/example4.yml)
<!--EXAMPLE4-->
```yml
name: Example 4
on:
  issues:
    types:
      - opened
      - edited

jobs:
  write-last-issue:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v6
        id: values
        with:
          script: |
            return {
              TITLE: context.payload.issue.title,
              BODY: context.payload.issue.body,
              NUMBER: '#' + context.payload.issue.number,
            };
      - uses: austenstone/markdown-interpolation-action@master
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_author: github-actions[bot] <github-actions[bot]@users.noreply.github.com>

```
<!--END EXAMPLE4-->

### Example 4 Result (LIVE)
#### <!--TITLE-->Example 4 Test<!--END TITLE--> <!--NUMBER-->#1<!--END NUMBER-->
<!--BODY-->This is a test for Example 4.<!--END BODY-->

## Inputs

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values to interpolate in markdown. | N/A |
| files-regex | File name match as regex. | README.md |
| files-regex-flags | Regex flags for files-regex. | gi |

## Outputs

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values read. (last values) | {} |
