module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  plugins: ['vue', 'import'],
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'max-len': [0, 140],
    'no-param-reassign': ['error', {
      props: true,
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
