import './bootstrap';

import {createApp} from 'vue'

const App = createApp({
    created() {
    },
    methods:{

    },
    mounted() {
        console.log('mounted vue');
    }
});

App.mount('#app');
