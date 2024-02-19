import './bootstrap'
import {createApp} from 'vue'

const App = createApp({
    created() {
    },
    methods:{

    },
    mounted() {
        console.log('mounted vue');
        this.$store.state.lang.locale='ru';
        this.$store.dispatch('lang');
    }
});

import store from './store';
App.use(store);

import App2 from './App2.vue';
App.component('App2', App2);

// import mylogin from './vueComponents/autch/login.vue';
// App.component('mylogin', mylogin);


App.mount('#app');
