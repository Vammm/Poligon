import { createStore } from 'vuex'


export default createStore({
    state: {
        lang:{
            locale:'en',
            item:{},
        },
    },
    actions: {
        lang(context, pack='vueLang'){
            let locale = context.state.lang.locale;
            axios.get('/lang/'+locale+'/'+pack)
                .then(response => {
                    context.state.lang.item=response.data;
                });
        }
    },
    getters: {
    },
    mutations: {

    }
});
