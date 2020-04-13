module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-unused-vars": [
      "warn"
    ],
    "no-var": [
      "off"
    ],
    "one-var": [
      "off"
    ],
    "no-tabs": [
      "off"
    ],
    "indent": [
      "error",
      "tab"
    ],
    "no-console": [
      "off"
    ],
    "import/no-unresolved": [
      "off"
    ],
    "dot-notation": [
      "off"
    ],
    "prefer-destructuring": [
      "off"
    ]
  }
};
