Deployed on https://petr7555.github.io/github-pages-demo.

# GitHub pages demo

- Repository must be public (or with Pro account you can publish private repositories)
- Add `homepage` to `package.json` file:
  ```jsonc
  {
    // ...
    "homepage": "https://GITHUB_USERNAME.github.io/REPOSITORY_NAME"
    // ...
  }
  ```
	- `"homepage": "https://petr7555.github.io/github-pages-demo"` in this case
	- After this `build/index-html` produced as a result of `npm run build` will have a correct path to `manifest.json`
	  and
	  other files. `homepage` is optional with `GITHUB_USERNAME.github.io` special case.

## Manual option

- Select where the source files are (branch and folder)
	- `master` branch and `/docs` in this case
- `BUILD_PATH=./docs npm run build`
- `git add docs`
- `git commit -m "Deploy"`
- `git push origin master`

## Automatic option

- Select where the source files are (branch and folder)
	- `gh-pages` branch and `/(root)` in this case
- `npm i -D gh-pages`
- Add `deploy` script to `package.json`:
  ```jsonc
  {
    // ...
    "scripts": {
      // ...
      "deploy": "npm run build && gh-pages -d build"
    }
    // ...
  }
  ```
- `npm run deploy`
	- `gh-pages` will push the contents of `build` directory to `gh-pages` branch on GitHub

If you want to use client side routing (React Router), you will need to find some workaround (`HashRouter` in React
Router's case).
