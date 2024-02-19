<template>
    <form class="form-horizontal">
        <div class="form-group">
            <label for="exampleInputEmail1">Имя</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
        </div>
        <div class="form-group">
            <div class="main-checkbox">
                <input value="None" id="checkbox1" name="check" type="checkbox">
                <label for="checkbox1"><span class="lowercase" >Оставаться&nbsp;в&nbsp;системе</span></label>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success" @click="sendLogin({email,password})">Войти</button>

            <button type="submit" class="btn btn-success">Забыли пароль ?</button>
        </div>
    </form>
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
        },
        methods: {
            sendLogin(payload){
                //this.$store.dispatch('login', payload);
            },

        },
        mounted() {
            console.log('mount login');
        }
    }
</script>
