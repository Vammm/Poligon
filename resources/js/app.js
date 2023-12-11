import './bootstrap';

import {createApp} from 'vue'

import store from './vue/store/index.js'

import test from './vue/test.vue';

const App = createApp({
    created() {
    },
    methods:{

    },
    mounted() {
        console.log('Create app');
    }
});

App.component('test', test);
App.use(store);
App.mount('#app');
