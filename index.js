// https://github.com/benmosher/eslint-plugin-import/issues/1396
const resolver = {
  [require.resolve('eslint-import-resolver-node')]: {},
}

// in case the project does not depend on @kdujs/cli-service
try {
  resolver[require.resolve('eslint-import-resolver-webpack')] = {
    config: require.resolve('@kdujs/cli-service/webpack.config.js'),
  }
} catch (e) {}

module.exports = {
  extends: [
    require.resolve('eslint-config-standard')
  ],
  settings: {
    'import/resolver': resolver,
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
}
