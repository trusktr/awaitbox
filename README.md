awaitbox
========

A box of useful things to await for in async functions.

#### `npm i awaitbox --save`

> NOTE: It's recommended that you install only the packages that you need,
> rather than this package directly.

Available tools
----------------

- [`documentReady()`](https://github.com/awaitbox/document-ready) - Await for the `document` to be ready.
- [`windowLoaded()` ](https://github.com/awaitbox/window-loaded)  - Await for the `window` to be loaded.
- [`meteorStartup()`](https://github.com/awaitbox/meteor-startup) - Await for Meteor's environment to be ready.
- [`sleep()`        ](https://github.com/awaitbox/sleep)          - Await for a certain amount of time.

Compatibility
-------------

This package is written in ES2016+ JavaScript. To use this in pre-ES2016
environments, you'll need to run this through a transpiler like
[Babel](http://babeljs.io) (and I recommend using the
[fast-async](https://github.com/MatAtBread/fast-async) plugin to get the best
results). See [some tips](http://2ality.com/2017/06/pkg-esnext.html) on wiring
it up with [Webpack](https://webpack.js.org).

Contributing
------------

Please open an issue or PR if you have any ideas! :]
