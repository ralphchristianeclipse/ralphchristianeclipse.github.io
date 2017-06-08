import Vue from 'vue';

import Vuetify from 'vuetify';

import Components from './components';

import './utils';

Vue.use(Vuetify);


const app = new Vue({
    el: '#app',
    render: h => h(Components.App)
});
