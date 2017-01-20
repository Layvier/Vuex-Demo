// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue';

import Router from 'vue-router';
import {routes} from './routes';

let VueResource = require('vue-resource');

import Vuex from 'vuex';
import VuexStore from './vuex/store';
import {sync} from 'vuex-router-sync';

import App from './App.vue';

Vue.use(Router);
Vue.use(VueResource);
Vue.use(Vuex);

const store = new Vuex.Store(VuexStore);
const router = new Router({
    routes,
    mode: 'history',
});
sync(store, router);

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');