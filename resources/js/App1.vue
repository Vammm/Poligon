<template>
    <form @submit.prevent>
        <div  class="registration" id="app">
            <h1>Форма регистрации</h1>
            <input
                v-model="login"
                class="input"
                type="text"
                placeholder="Логин" >
            <br>
            <input
                v-model="password"
                class="input"
                type="text"
                placeholder="Пароль" >
            <br>
            <input
                v-model="email"
                class="input"
                type="text"
                placeholder="Email" >
            <br>
            <button
                class="mybtn"
                @click="registration">
                Зарегистрироваться
            </button>
        </div>
    </form>
    <hr>

</template>

<script>


    export default {
        data() {
            return {

                login: '',
                password: '',
                email: '',
            }

        },

        components: {

        },
        methods: {
            registration() {

            }
        }
    }


</script>

