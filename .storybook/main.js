module.exports = {
  stories: ['../stories/**/*.stories.[tj]s'],
  webpackFinal: async config => {
    // // find web-components rule for extra transpilation
    // const webComponentsRule = config.module.rules.find(
    //   rule => rule.use && rule.use.options && rule.use.options.babelrc === false
    // );
    // // add your own `my-library`
    // webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)my-library(.*)\\.js$`));

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // Prefer `dart-sass`
            implementation: require('sass'),
          },
        },
      ],
    });
    config.resolve.extensions.push('.scss', '.sass');
    return config;
  },
};
