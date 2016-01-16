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
                //exclude: /node_modules/,
                query: {
                    cacheDirectory: true,

                    // ignore babelrc, which is used for some package.json scripts.
                    babelrc: false,

                    presets: [
                        'react' // for JSX syntax.
                    ],

                    plugins: [
                        'transform-es2015-arrow-functions',
                        'transform-es2015-block-scoped-functions',
                        'transform-es2015-block-scoping',
                        'transform-es2015-classes',
                        'transform-es2015-computed-properties',
                        'transform-es2015-destructuring',
                        'transform-es2015-for-of',
                        'transform-es2015-function-name',
                        'transform-es2015-literals',
                        'transform-es2015-object-super',
                        'transform-es2015-parameters',
                        'transform-es2015-shorthand-properties',
                        'transform-es2015-spread',
                        'transform-es2015-sticky-regex',
                        'transform-es2015-template-literals',
                        'transform-es2015-typeof-symbol',
                        'transform-es2015-unicode-regex',
                        'transform-regenerator',

                        'transform-async-to-generator',

                        'transform-es5-property-mutators',

                        'transform-es2015-modules-umd', // this is for the global build.
                    ],
                },
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
