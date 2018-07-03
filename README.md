# Vue 2

## Todo

* propagate locale changes to other components
* add to toolbar
  * _sign-in_/_sign-out_ button
  * _about_ button
  * avatar (with initials)
* add _gitbook_generated docs to _help_-button
* [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout) for dashboard
* [How to create Vue.js Transitions](https://medium.com/vue-mastery/how-to-create-vue-js-transitions-6487dffd0baa)
* integrate with _gradle_ and _spring boot_
* ~~add missing fields to sign-up form~~
* ~~_cancel_ button in forms~~
* ~~locale switcher with label~~

## Useful yarn commands

* `yarn add ...`
* `yarn remove ...`
* `yarn autoclean --force`

## Intro

* [Vue 2 + Firebase: How to build a Vue app with Firebase authentication system in 15 minutes](https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c)

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

### UI components

* [11 Vue.js UI Component Libraries You Should Know In 2018](https://blog.bitsrc.io/11-vue-js-component-libraries-you-should-know-in-2018-3d35ad0ae37f)

#### Vuetify

```bash
# scaffold project with vuetify webpack template
vue init vuetifyjs/webpack vue-app
# or
yarn add vuetify
```

#### Bootstrap Vue

* [Bootstrap + Vue](https://bootstrap-vue.js.org/docs)

```bash
vue init bootstrap-vue/webpack-simple vue-app
# or
yarn add bootstrap-vue
```

### vue-i18n

```bash
yarn add vue-i18n
yarn add @kazupon/vue-i18n-loader --dev
yarn add yam-loader --dev
```

More [here]((http://kazupon.github.io/vue-i18n/introduction.html)) and in:

* [Internationalization with vue-i18n: Part 1](https://medium.com/vuejoy/internationalization-in-vue-with-vue-i18n-part-1-a1a3c6b47755)
* [Internationalization with vue-i18n: Part 2](https://medium.com/vuejoy/internationalization-with-vue-i18n-part-2-8256e80c2302)
* Read [here](http://kazupon.github.io/vue-i18n/guide/sfc.html#basic-usage) how to add loader to `build/webpack.base.conf.js`.

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

### Firebase

```bash
yarn add firebase
```

### Vuex

```bash
yarn add vuex
```

### Pug

```bash
yarn add pug pug-plain-loader --dev
```

## Gitbook

* [gitbook toolchain](https://toolchain.gitbook.com/)

```bash
yarn add gitbook-cli --dev
#
yarn gitbook init docs
yarn gitbook serve docs
# or build static website with
yarn gitbook build [--debug] docs
```

### Pdf

* install [calibre-ebook](https://calibre-ebook.com/download_windows64) locally
* following commands require new shell because of updated _path_ variable

```bash
yarn add ebook-convert --dev
yarn gitbook pdf docs/ docs/mybook.pdf
```
