<template>
    <form class="form-horizontal">
        <div class="form-group">
            <label for="exampleInputEmail1">Имя</label>
            <input type="text" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Почта</label>
            <input type="text" class="form-control" id="exampleInputEmail1">
        </div>
        <div class="form-group">
            <button type="submit" class="btn  btn-success">Восстановить</button>
        </div>
    </form>
</template>


<script>
    export default {
        data() {
            return {
                login:'',
                email:''
            };
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            console.log('mount recovery');
        }
    }
</script>
