# Search Blog VSCode Extension

Example VSCode Extension

## History

Created by following:

- [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)
  VSCode article
- [How To Create And Deploy A VSCode Extension](https://youtu.be/q5V4T3o3CXE) video

```bash
npm install -g yo generator-code
yo code
# add you extension to the code
npm i -g vsce # tool for publishing extension
```

Publish the package by following the steps below.
From
https://code.visualstudio.com/api/working-with-extensions/publishing-extension

1 - Login to Azure https://dev.azure.com/
2 - Create a project (or select an old one)
3 - Click upper right user icon and select personal access token PAT
4 - Maker sure the "Organization" is set to "All accessible organizations"
5 - Select "custom defined" scopes
6 - At the end on the next page select "Show all scopes"
7 - Select manage form under market place
8 - Save the token in the .env file
9 - Create a publisher by following the link on publishing-extension link noted above
10 - note the ID next to the publisher - needed for login with the PAT

```bash
vsce login AppsForTracking
vsce publish
```
