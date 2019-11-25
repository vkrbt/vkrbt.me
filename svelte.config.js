const preprocessOptions = {
    transformers: {
        postcss: {
            plugins: [
                require('postcss-nested')(),
            ],
        },
    },
};

module.exports = {
    preprocess: require('svelte-preprocess')(preprocessOptions),
};
