# TypeScript Action Template

Last updated: <!--TIME-->3/10/2022, 7:50:54 PM<!--END TIME--> by <!--AUTHOR-->@austenstone<!--END AUTHOR-->

## Usage
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### Default Workflow
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
          AUTHOR: ${{ github.actor	}}
        with:
          script: |
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
              AUTHOR: `@${process.env.AUTHOR}`,
            }
      - uses: austenstone/markdown-interpolation-action@main
        with:
          values: ${{steps.values.outputs.result}}
      - uses: stefanzweifel/git-auto-commit-action@v4
```

## Input Settings
Various inputs are defined in [`action.yml`](action.yml):

| Name | Description | Default |
| --- | - | - |
| github&#x2011;token | Token to use to authorize. | ${{&nbsp;github.token&nbsp;}} |

This GitHub [action](https://docs.github.com/en/actions) serves as a template for TypeScript actions.
