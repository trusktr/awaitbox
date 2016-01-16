npm-package-skeleton
====================

A skeleton for getting started with NPM packages.

Getting started (things you have to do)
---------------------------------------

To get the gist of what this does, try running

```sh
npm install # this also runs `npm prepublish` behind the scenes.
```

then look at the generated files in the root of the project. To customize to
your needs, follow the following steps:

1. Personalize `package.json` with the details of your package (name,
  description, etc), replacing things that are `ALL-CAPS` with your own things.
2. Add dependencies as needed into the `dependencies` or `devDependencies` fields.
3. Open and customize `scripts/build-global.sh` (read the comments there).
4. Open and customize `scripts/clean.sh` (read the comments there).
5. Open and customize `.gitignore` (read the comments there).
6. Optionally customize `.npmignore` (it's empty by default).
7. `npm install` to install dependencies and dev-dependencies.
8. Run `npm run clean` at any point to clean automatically-built files (caused
  by `npm install`, `npm prepublish`, and `npm publish`, for example).
9. Write code inside the `src` folder using ES2015 modules and/or syntax (ES2016
  language features are not yet supported, TODO), with index.js being the main
  file (the file that gets evaluated when someone runs
  `require('your-package-name')` for example)
10. Once you've written your package code, run `npm prepublish` manually which
    compiles everything to CommonJS format in the root of the project, and also
    builds a global.js file.
11. To test your package, you can use `npm link your-package-name` (see [the
  docs](https://docs.npmjs.com/cli/link)) to link your package into a test
  project for local testing.
12. When you're ready to publish, just make sure you update the `version` field
  of your `package.json` then run `npm publish`.

These are just rough guidelines, and are flexible. It's up to you to modify
this to your needs (for example, add gulp or grunt, or use Webpack to watch
file changes, etc). It's just a starting point.

Features
--------

One of the goals of this skeleton is to let you get started making a package
that builds itself out-of-the-box for NPM when you run `npm publish`, and that
supports various end-user workflows like Browserify+NPM, Webpack+NPM, JSPM (by
Guy Bedford, who leads efforts on things like [loading modules over
HTTP/2](https://twitter.com/guybedford/status/509373243619549184)),
Bower+RequireJS (yes, we can! Bower still has hundreds of thousands of
downloads per week), and a global build (a build system without a build system
that many people still use :laughing:). The aim is to support this common set
of build system workflows without any extra layers (no gulp or grunt is needed
for this, end-users can add those layers if they wish).

The package skeleton is made with generic the latest standardized features in
mind (such as the source of the package in the `src` folder using ES2015 (ES6)
Modules, included scripts for building to various other module formats, and the
latest released ecmascript language features via Babel) that let the package be
consumed in workflows we haven't considered.

Some things explained:

- package.json includes scripts to build to AMD, CJS, and UMD modules formats
  (we write our package code in ES2015 (ES6) module format).
- Source files live in the `src` folder, with index.js as the main entrypoint
  to the package.
- On prepublish to NPM, files are built to CJS format into the root of the
  package, then published. Prepublish only uses the `build-cjs` script, and the
  other scripts are there in case someone wants to make use of them, for
  convenience (for example, someone might have a custom RequireJS workflow, and
  can use the build-amd script to get AMD files). The clean script removes the
  build files after prepublish, or manually if needed.
- The package is published with both the built CJS files in the root and the
  original source files in the `src` folder to maximize coverage of use cases.
  Some people will require the root files directly, using Webpack or
  Browserify, or perhaps even natively in some Node.js-based app.  We publish
  the `src` folder intact so that people who use JSPM can set `directories.lib`
  to `src` and JSPM will set that folder as the root of the package once it is
  installed. Other people might like to set an alias in Webpack to the `src`
  folder in order to use the original ES2015 source modules. Basically, let's let
  people do what they want. Other people might just like to use the original
  ES6 source modules in some other ES2015-module-compatible system.
- The `devDependencies` include `babelify` in case someone configures
  Browserify to use the `src` folder's ES2015 modules instead of the root's
  CommonJS ones. There's no harm done including it.
- There are some extra fields in `package.json` for JSPM and Bower. Bower is
  still TODO.
- The `babel-runtime` package is a runtime dependency, which simply includes
  some function helpers like those used to create prototype-based classes in
  ES5, etc. The `--optional` runtime option in the `build-*` scripts tells
  babel not to include helper functions in each and every file, instead using
  `require` to get the helpers from a single source. It's a good thing to have
  the runtime in order to eliminate duplicate helper code in your output files.
- The `format` property helps some build systems. F.e., JSPM doesn't have to
  make a guess as to the format of the modules.
- The `browser`, `main`, and `global` fields help in some cases too.

Basically, the idea is to maximize coverage of the most notable workflows and
use cases.

TODO
----

- [ ] Upgrade to Babel 6.x
- [ ] Support not-yet-completed experimental language features (ES7/ES2016 at
  the time of writing).

Contributing
------------

Feel free to open an issue if you have any ideas! :]
