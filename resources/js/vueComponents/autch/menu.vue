
<template>
    <div class="offcanvas-header text-start">
        <ul class="top_menu">
    <div class="container">
        <li><a href="{{route('menu')}}" class="active">Home</a></li>

        <li><a href="#contact">Контакты</a></li>
        <li><a href="#feedback">Обратная связь</a></li>
        <li><a href="#about">О проекте</a></li>
        <li><a href="#about" onclick="glb.store.modal.show=1;glb.store.modal.tabActive='login';">Вход</a></li>
    </div>
</ul>
</div>   
    
</template>


<script>
    export default {
        data() {
            return {
           
            };
        },
        computed: {
            
        },
        methods: {
        

        },
        mounted() {
            console.log('mount login');
        }
    }
</script>