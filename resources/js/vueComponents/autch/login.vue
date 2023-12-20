<template>
    <form class="form-horizontal" v-if="!info.item.auth">
        <div class="form-group">
            <label for="exampleInputEmail1">Имя</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
            <div v-if="info.errors.email">{{info.errors.email}}</div>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            <div v-if="info.errors.password">{{info.errors.password}}</div>
        </div>
        <div class="form-group">
            <div class="main-checkbox">
                <input value="None" id="checkbox1" name="check" type="checkbox">
                <label for="checkbox1"><span class="lowercase" >Оставаться&nbsp;в&nbsp;системе</span></label>
            </div>
        </div>
        <div v-if="info.errors.auth">{{info.errors.auth}}</div>
        <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success" @click="sendLogin({email,password})">Войти</button>

            <button type="submit" class="btn btn-success">Забыли пароль ?</button>

        </div>
    </form>
    <div v-else>
        login!!!
    </div>
</template>


<script>
    export default {
        data() {
            return {
                email:'',
                password:''
            };
        },
        computed: {
            info(){
                return this.$store.state.login;
            },
        },
        methods: {
            sendLogin(payload){
                this.$store.dispatch('login', payload);
            },

        },
        mounted() {
            console.log('mount login');
        }
    }
</script>
