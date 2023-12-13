import './bootstrap';

import {createApp} from 'vue'

import store from './store/index.js'

import test from './vueComponents/test.vue';

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
