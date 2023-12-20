import { createStore } from 'vuex'


export default createStore({
    state: {
        test:{
            ppp:'tesssstttt',
        },
        modal:{},
        login:{
            item:{},
            errors:{},
        },
    },
    actions: {
        login(context, payload){
            axios.post('/login', payload)
                .then(response => {
                    context.commit('LOGIN_OK', response.data);
                })
                .catch(error => {
                    context.commit('LOGIN_ERROR', error.response.data);
                })
        }
    },
    getters: {
    },
    mutations: {
        LOGIN_OK(state, payload){
            state.login.errors={};
            return state.login.item = payload;
        },
        LOGIN_ERROR(state, payload){
            state.login.item={};
            return state.login.errors = payload;
        }
    }
});
