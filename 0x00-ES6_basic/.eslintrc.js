module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['jest'],
  rules: {}
};

