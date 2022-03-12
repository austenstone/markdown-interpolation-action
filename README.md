# Markdown Interpolation Action

This action interpolates markdown with variables.

See [Markdown Interpolation](https://github.com/austenstone/markdown-interpolation#writing) to understand how to use the interpolation syntax.

---

## EXAMPLE 1
Create a workflow (eg: `.github/workflows/run.yml`). See [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

#### [Example 1 Workflow](.github/workflows/example1.yml)

<!--EXAMPLE1-->
```yml
name: Example 1
on:
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
        with:
          script: |
            return {
              TIME: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
            };
      - uses: austenstone/markdown-interpolation-action@master
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4

```
<!--END EXAMPLE1-->

### Example 1 README
```md
##### Last Updated: <!--TIME-->3/12/2022, 10:34:19 AM<!--END TIME-->
```

### Example 1 Result (LIVE)
##### Last Updated: <!--TIME-->3/12/2022, 10:34:19 AM<!--END TIME-->

---

## EXAMPLE 2

An example to manually update a message on the README.md file.

#### [Example 2 Workflow](.github/workflows/example2.yml)
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
  run:
    name: Write Time to README.md
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
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

```
<!--END EXAMPLE2-->

### Example 2 README
```md
@<!--AUTHOR-->austenstone<!--END AUTHOR--> says <!--MESSAGE-->Hello World!<!--END MESSAGE-->
```

### Example 2 Result (LIVE)
@<!--AUTHOR-->austenstone<!--END AUTHOR--> says <!--MESSAGE-->Hello World!<!--END MESSAGE-->

---

## EXAMPLE 3

This example is actually upating the README.md examples themselves 🤯

#### [Example 3 Workflow](.github/workflows/example3.yml)
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
  run:
    name: Write EXAMPLE to README.md
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/github-script@v6
        id: values
        with:
          script: |
            const fs = require('fs');
            const examples = ['example1', 'example2', 'example3'];
            const values = {};
            examples.forEach((example) => {
              let content = fs.readFileSync(`.github/workflows/${example}.yml`).toString();
              content = content.replace('uses: austenstone/markdown-interpolation-action@master', 'uses: austenstone/markdown-interpolation-action@master');
              values[example.toUpperCase()] = '\n```yml\n' + content + '\n```\n';
            });
            return values;
      - uses: ./
        with:
          values: ${{ steps.values.outputs.result }}
      - uses: stefanzweifel/git-auto-commit-action@v4

```
<!--END EXAMPLE3-->

### Example 3 Result (LIVE)
yaml code snippets [Example 1](#example-1-workflow), [Example 2](#example-2-workflow), [Example 3](#example-3-workflow), [Example 4](#example-4-workflow).


---

## EXAMPLE 4

Examine the event context of the last run.
⚠️ This is just an example and shouldn't be used on a public repository.

#### [Example 4 Workflow](.github/workflows/example4.yml)
<!--EXAMPLE4-->
<!--END EXAMPLE4-->

### Example 4 Result (LIVE)
<!--CONTEXT-->{
  "payload": {
    "after": "ec926645afbbc43fef3cabb67f2089f6a9bd9a9a",
    "base_ref": null,
    "before": "07de7f31a8ce3b831faec2dc8d0a73954f0a8673",
    "commits": [
      {
        "author": {
          "email": "austenstone@github.com",
          "name": "Austen Stone",
          "username": "austenstone"
        },
        "committer": {
          "email": "austenstone@github.com",
          "name": "Austen Stone",
          "username": "austenstone"
        },
        "distinct": true,
        "id": "1d147ba46d54446f0cb8c772346445a09294cc83",
        "message": "Example 4",
        "timestamp": "2022-03-12T10:34:44-05:00",
        "tree_id": "e7fb53cf7565ccf059def3311eb14eac92cad67a",
        "url": "https://github.com/austenstone/markdown-interpolation-action/commit/1d147ba46d54446f0cb8c772346445a09294cc83"
      },
      {
        "author": {
          "email": "austenstone@github.com",
          "name": "Austen Stone",
          "username": "austenstone"
        },
        "committer": {
          "email": "austenstone@github.com",
          "name": "Austen Stone",
          "username": "austenstone"
        },
        "distinct": true,
        "id": "ec926645afbbc43fef3cabb67f2089f6a9bd9a9a",
        "message": "Merge branch 'main' of https://github.com/austenstone/markdown-interpolation-action into main",
        "timestamp": "2022-03-12T10:34:47-05:00",
        "tree_id": "a3991d5b6e2c33e5abb4c0d40151ed28a7959722",
        "url": "https://github.com/austenstone/markdown-interpolation-action/commit/ec926645afbbc43fef3cabb67f2089f6a9bd9a9a"
      }
    ],
    "compare": "https://github.com/austenstone/markdown-interpolation-action/compare/07de7f31a8ce...ec926645afbb",
    "created": false,
    "deleted": false,
    "forced": false,
    "head_commit": {
      "author": {
        "email": "austenstone@github.com",
        "name": "Austen Stone",
        "username": "austenstone"
      },
      "committer": {
        "email": "austenstone@github.com",
        "name": "Austen Stone",
        "username": "austenstone"
      },
      "distinct": true,
      "id": "ec926645afbbc43fef3cabb67f2089f6a9bd9a9a",
      "message": "Merge branch 'main' of https://github.com/austenstone/markdown-interpolation-action into main",
      "timestamp": "2022-03-12T10:34:47-05:00",
      "tree_id": "a3991d5b6e2c33e5abb4c0d40151ed28a7959722",
      "url": "https://github.com/austenstone/markdown-interpolation-action/commit/ec926645afbbc43fef3cabb67f2089f6a9bd9a9a"
    },
    "pusher": {
      "email": "austenstone@github.com",
      "name": "austenstone"
    },
    "ref": "refs/heads/main",
    "repository": {
      "allow_forking": true,
      "archive_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/{archive_format}{/ref}",
      "archived": false,
      "assignees_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/assignees{/user}",
      "blobs_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/git/blobs{/sha}",
      "branches_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/branches{/branch}",
      "clone_url": "https://github.com/austenstone/markdown-interpolation-action.git",
      "collaborators_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/collaborators{/collaborator}",
      "comments_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/comments{/number}",
      "commits_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/commits{/sha}",
      "compare_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/compare/{base}...{head}",
      "contents_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/contents/{+path}",
      "contributors_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/contributors",
      "created_at": 1646952568,
      "default_branch": "main",
      "deployments_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/deployments",
      "description": "An action for text interpolation that lets you incorporate dynamic string values into your markdown files.",
      "disabled": false,
      "downloads_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/downloads",
      "events_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/events",
      "fork": false,
      "forks": 0,
      "forks_count": 0,
      "forks_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/forks",
      "full_name": "austenstone/markdown-interpolation-action",
      "git_commits_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/git/commits{/sha}",
      "git_refs_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/git/refs{/sha}",
      "git_tags_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/git/tags{/sha}",
      "git_url": "git://github.com/austenstone/markdown-interpolation-action.git",
      "has_downloads": true,
      "has_issues": true,
      "has_pages": false,
      "has_projects": true,
      "has_wiki": true,
      "homepage": "",
      "hooks_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/hooks",
      "html_url": "https://github.com/austenstone/markdown-interpolation-action",
      "id": 468534605,
      "is_template": false,
      "issue_comment_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/issues/comments{/number}",
      "issue_events_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/issues/events{/number}",
      "issues_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/issues{/number}",
      "keys_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/keys{/key_id}",
      "labels_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/labels{/name}",
      "language": "TypeScript",
      "languages_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/languages",
      "license": null,
      "master_branch": "main",
      "merges_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/merges",
      "milestones_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/milestones{/number}",
      "mirror_url": null,
      "name": "markdown-interpolation-action",
      "node_id": "R_kgDOG-1FTQ",
      "notifications_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/notifications{?since,all,participating}",
      "open_issues": 0,
      "open_issues_count": 0,
      "owner": {
        "avatar_url": "https://avatars.githubusercontent.com/u/22425467?v=4",
        "email": "austenstone@github.com",
        "events_url": "https://api.github.com/users/austenstone/events{/privacy}",
        "followers_url": "https://api.github.com/users/austenstone/followers",
        "following_url": "https://api.github.com/users/austenstone/following{/other_user}",
        "gists_url": "https://api.github.com/users/austenstone/gists{/gist_id}",
        "gravatar_id": "",
        "html_url": "https://github.com/austenstone",
        "id": 22425467,
        "login": "austenstone",
        "name": "austenstone",
        "node_id": "MDQ6VXNlcjIyNDI1NDY3",
        "organizations_url": "https://api.github.com/users/austenstone/orgs",
        "received_events_url": "https://api.github.com/users/austenstone/received_events",
        "repos_url": "https://api.github.com/users/austenstone/repos",
        "site_admin": true,
        "starred_url": "https://api.github.com/users/austenstone/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/austenstone/subscriptions",
        "type": "User",
        "url": "https://api.github.com/users/austenstone"
      },
      "private": false,
      "pulls_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/pulls{/number}",
      "pushed_at": 1647099287,
      "releases_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/releases{/id}",
      "size": 575,
      "ssh_url": "git@github.com:austenstone/markdown-interpolation-action.git",
      "stargazers": 0,
      "stargazers_count": 0,
      "stargazers_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/stargazers",
      "statuses_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/statuses/{sha}",
      "subscribers_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/subscribers",
      "subscription_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/subscription",
      "svn_url": "https://github.com/austenstone/markdown-interpolation-action",
      "tags_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/tags",
      "teams_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/teams",
      "topics": [
        "actions",
        "interpolation",
        "markdown"
      ],
      "trees_url": "https://api.github.com/repos/austenstone/markdown-interpolation-action/git/trees{/sha}",
      "updated_at": "2022-03-11T02:38:06Z",
      "url": "https://github.com/austenstone/markdown-interpolation-action",
      "visibility": "public",
      "watchers": 0,
      "watchers_count": 0
    },
    "sender": {
      "avatar_url": "https://avatars.githubusercontent.com/u/22425467?v=4",
      "events_url": "https://api.github.com/users/austenstone/events{/privacy}",
      "followers_url": "https://api.github.com/users/austenstone/followers",
      "following_url": "https://api.github.com/users/austenstone/following{/other_user}",
      "gists_url": "https://api.github.com/users/austenstone/gists{/gist_id}",
      "gravatar_id": "",
      "html_url": "https://github.com/austenstone",
      "id": 22425467,
      "login": "austenstone",
      "node_id": "MDQ6VXNlcjIyNDI1NDY3",
      "organizations_url": "https://api.github.com/users/austenstone/orgs",
      "received_events_url": "https://api.github.com/users/austenstone/received_events",
      "repos_url": "https://api.github.com/users/austenstone/repos",
      "site_admin": true,
      "starred_url": "https://api.github.com/users/austenstone/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/austenstone/subscriptions",
      "type": "User",
      "url": "https://api.github.com/users/austenstone"
    }
  },
  "eventName": "push",
  "sha": "ec926645afbbc43fef3cabb67f2089f6a9bd9a9a",
  "ref": "refs/heads/main",
  "workflow": "Example 4",
  "action": "values",
  "actor": "austenstone",
  "job": "run",
  "runNumber": 2,
  "runId": 1973667538,
  "apiUrl": "https://api.github.com",
  "serverUrl": "https://github.com",
  "graphqlUrl": "https://api.github.com/graphql"
}<!--END CONTEXT-->
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
