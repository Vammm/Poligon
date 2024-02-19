<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css" />

    <div class="p-x-1 p-y-3">
        <form class="card card-block m-x-auto bg-faded form-width">
            <legend class="m-b-1 text-xs-center">Регистрация</legend>
            <div class="form-group input-group">
                 <span class="has-float-label">
                 <input v-model="name" class="form-control" id="first" type="text" placeholder=""/>
                 <label for="first">Имя</label>
                 </span>
                <span class="has-float-label">
                     <input v-model="secondName" class="form-control" id="last" type="text" placeholder=""/>
                     <label for="last">Фамилия</label>
                 </span>
            </div>
            <div class="form-group input-group">
                <span class="input-group-addon">@</span>
                <span class="has-float-label">
                 <input v-model="email" class="form-control" id="email" type="email" placeholder="" />
                 <label for="email">E-mail</label>
                 </span>
            </div>
            <div class="form-group has-float-label">
                <input class="form-control" type="password" autocomplete="on" placeholder="">
                <label>Пароль</label>
            </div>
            <div class="form-group has-float-label">
                <input class="form-control" type="password" autocomplete="off" placeholder="">
                <label>Пароль повторно</label>
            </div>
            <div class="form-group has-float-label">
                <select class="form-control custom-select" id="country" >
                    <option selected>Россия</option>
                    <option>Казахстан</option>
                    <option>Белоруссия</option>
                </select>
                <label for="country">Страна</label>
            </div>
{{lang}}
            <div class="text-xs-center">
                <button
                    class="btn btn-block btn-primary"
                    type="submit"
                    @click="registration"
                    >Регистрация
                    </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                secondName: '',
                password1: '',
                password2: '',
                email: '',
            }

        },
        components: {

        },
        computed:{
            lang(){
                return this.$store.state.lang.item;
            }
        },
        methods: {
            registration() {

            }
        },
        mounted() {
            console.log(this);
        }

    }
</script>

<style scoped>




</style>
