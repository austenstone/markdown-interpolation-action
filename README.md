# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

## Usage
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### [Example 1 Workflow](https://github.com/austenstone/markdown-interpolation-action/blob/main/.github/workflows/usage.yml)

<!--USAGE--><!--END USAGE-->

```
### Example 1 README
```md
Last updated: <!--TIME-->3/12/2022, 1:48:07 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->
```

### Example 1 Result (LIVE)
Last updated: <!--TIME-->3/12/2022, 1:48:07 AM<!--END TIME--> (EST) by @<!--AUTHOR-->austenstone<!--END AUTHOR-->

### <!--MESSAGE-->Hello World!<!--END MESSAGE-->

## Input Settings
Various inputs are defined in [`action.yml`](action.yml):

| Name | Description | Default |
| --- | - | - |
| **values** | JSON values to interpolate in markdown. | N/A |
| files-regex | File name match as regex. | README.md |
| files-regex-flags | Regex flags for files-regex. | gi |
