import './bootstrap'

import {createApp} from 'vue'

const App = createApp({
    created() {
    },
    methods:{
    },
    mounted() {
        console.log('Create app');
    }
});

import login from './vueComponents/autch/login.vue'
import post from './vueComponents/autch/post.vue'
import recovery from './vueComponents/autch/recovery.vue';

// const App = createApp();
App.component('post', post);
App.component('login', login);
App.component('recovery', recovery);
App.mount('#app');


// import store from './store/index.js'
// import test from './vueComponents/test.vue';
// import modal from './vueComponents/autch/modal.vue';
// import login from './vueComponents/autch/login.vue';
// import sign_up from './vueComponents/autch/sign_up.vue';
// import recovery from './vueComponents/autch/recovery.vue';

// const App = createApp({
//     created() {
//     },
//     methods:{

//     },
//     mounted() {
       
//         console.log('Create app');
//     }
// });

// App.component('test', test);
// App.component('modal', modal);
// App.component('login', login);
// App.component('sign_up', sign_up);
// App.component('recovery', recovery);

// App.use(store);
// App.mount('#app');