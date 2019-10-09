const preprocessOptions = {
    transformers: {
        postcss: {
            plugins: [
                require('postcss-import')(),
                require('postcss-nested')(),
            ],
        },
    },
};

module.exports = {
    preprocess: require('svelte-preprocess')(preprocessOptions),
};
