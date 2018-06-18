# Vue 2

## Build Setup

```bash
# install vue command line interface globally
npm install -g vue-cli
# or
yarn global add vue-cli
yarn global upgrade vue-cli

# scaffold project with webpack template
vue init webpack vue-app

# navigate to project folder
cd vue-app

# install dependencies
npm install
# or
yarn [install]

# serve with hot reload at localhost:8080
npm run dev
# or
yarn [run] dev

# build for production with minification
npm run build
# or
yarn [run] build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit
# or
yarn [run] unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Plugins

### vuetify

```bash
# scaffold project with vuetify webpack template
vue init vuetifyjs/webpack vue-app
# or
yarn add vuetify
```

### vue-i18n

```bash
yarn add vue-i18n
```

More [here]((http://kazupon.github.io/vue-i18n/introduction.html)) and in:

* [Internationalization with vue-i18n: Part 1](https://medium.com/vuejoy/internationalization-in-vue-with-vue-i18n-part-1-a1a3c6b47755)
* [Internationalization with vue-i18n: Part 2](https://medium.com/vuejoy/internationalization-with-vue-i18n-part-2-8256e80c2302)

### vue-i18n-loader

```bash
yarn add @kazupon/vue-i18n-loader
```

Read [here](http://kazupon.github.io/vue-i18n/guide/sfc.html#basic-usage) how to add loader to `build/webpack.base.conf.js`.

### Material Icons

```bash
yarn add material-design-icons-iconfont -D
```

More [here](https://next.vuetifyjs.com/en/framework/icons).

### Vue Flag Icon

```bash
yarn add vue-flag-icon -D
```

More [here](https://github.com/vikkio88/vue-flag-icon).

### Axios

```bash
yarn add axios
```

More [here](https://alligator.io/vuejs/rest-api-axios/) and [here](https://github.com/axios/axios).
