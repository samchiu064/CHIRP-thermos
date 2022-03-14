## Files related

- components/
  - ProductsView.vue
- methods/
  - filter.js

## Steps

1. Create a file filter.js with currency & date functions.
2. Import and registered the file as global properties in main.js
   `(syntax: app.config.globalProperties.[$custom-name] = { [function-name]) }`
3. Apply global properties by using [$custom-name].[function-name]{{ vue.data }}
