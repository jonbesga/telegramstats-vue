module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('svg')
            .uses.clear().end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
};