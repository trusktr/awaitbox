// These are the Webpack settings used when compiling the global version of the library.

module.exports = {
    resolve: {
        extensions: [ "", ".js", ".jsx", ]
        // add more extensions as needed.
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                },

                // if you disable a preset here, you can also delete the dependency from package.json.
                presets: [
                    'react' // just provides JSX syntax. Disable if you don't need.
                ],

                // if you disable a plugin here, you can also delete the dependency from package.json.
                plugins: [

                    // es2015 preset, manual version:
                    'transform-es2015-arrow-functions',
                    'transform-es2015-block-scoped-functions',
                    'transform-es2015-block-scoping',
                    'transform-es2015-classes',
                    'transform-es2015-computed-properties',
                    'transform-es2015-destructuring',
                    'transform-es2015-for-of',
                    'transform-es2015-function-name',
                    'transform-es2015-literals',
                    'transform-es2015-modules-commonjs',
                    'transform-es2015-object-super',
                    'transform-es2015-parameters',
                    'transform-es2015-shorthand-properties',
                    'transform-es2015-spread',
                    'transform-es2015-sticky-regex',
                    'transform-es2015-template-literals',
                    'transform-es2015-typeof-symbol',
                    'transform-es2015-unicode-regex',
                    'transform-regenerator', // not needed in Chrome or Firefox. Soon won't be needed in Edge or Safari.

                    // support for async/await, which gets converted to
                    // generator form using the Facebook regenerator runtime.
                    // This will be native in all browsers really soon, since
                    // all the vendors love it, at which point we can remove
                    // this unless we are still targetting older browsers.
                    'transform-async-to-generator',

                    'transform-es5-property-mutators',

                    // module support. We write in ES6, and these plugins
                    // convert to the other forms as need by our build scripts.
                    'transform-es2015-modules-amd',
                    'transform-es2015-modules-systemjs',
                    'transform-es2015-modules-umd',
                ],
            },
            // add more loaders here as needed.
        ],
    },

    // Makes Webpack output source maps for each source file. These are for
    // convenience if you want to use them. You may have to modify the comment
    // at the end of each source file to point to the correct location on your
    // server where you'll serve the source maps from.
    devtool: "source-map",
}
