module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['req', 'request', 'res', 'response'],
      },
    ],
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['VLabel'],
        controlComponents: ['VInput', 'VField'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
