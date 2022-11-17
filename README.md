# Github Pages

This is by far the easiest option (assuming you are using Github for hosting of your git repository). Each repository
can be published directly from your versioned source code.

Prerequisites are:

- Repository must be public (or with Pro account you can publish private repositories)
- Select where the source files are (branch and/or specific folder)

And that's it.

You can set it up in the settings tab in the web interface of your Github repository. By default, the page will be
hosted on `https://GITHUB_USERNAME.github.io/REPOSITORY_NAME` url.
https://petr7555.github.io/github-pages-demo
There is also one special case where if you create a repository named `GITHUB_USERNAME.github.io` it will be hosted
on `https://GITHUB_USERNAME.github.io` directly.

To redeploy the page all you need to do is push a new commit to the `gh-pages` branch and github actions will take care
of
the rest.

## `gh-pages` package
To make it even easier for deploying CRA apps specifically, there is a `gh-pages` package which you can use to deploy
your
app with a single command.

```
yarn add -D gh-pages
```

After adding this package to your dev dependencies you need to make some changes to your `package.json`.

```json
{
  // ...
  // homepage is optional with GITHUB_USERNAME.github.io special case
  "homepage": "https://GITHUB_USERNAME.github.io/REPOSITORY_NAME",
  // ...
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
    // ...
  }
}
```

Now by running `yarn deploy` your app will get built by `react-scripts` and pushed to `gh-pages` branch in your
repository.

## Conclusion
There are few negatives to keep in mind though. Deployed site is completely static which means that in order to achieve
some server-side functionality you would have to look for other solutions.

Another problem is that if you want to use client side routing (React Router), you will need to find some
workaround (`HashRouter` in React Router's case) that works around the fact that there is no way of setting up custom
routes for
Github Pages hosted sites.
