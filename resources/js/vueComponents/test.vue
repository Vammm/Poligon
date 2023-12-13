<template>
    <h1 class="">
        test 43 sdf
    </h1>
    <button type="button" class="btn">Base class</button>
    <button type="button" class="btn btn-primary">Primary</button>
{{$root.$store.state.test.ppp}}{{test}}
    <div class="card-body text-center">
        <i class="bi bi-bag-heart-fill"></i>
        <i class="bi bi-app"></i>
        <i class="bi bi-arrow-right-square-fill"></i>
        <i class="bi bi-bag-check-fill"></i>
        <i class="bi bi-calendar-plus-fill"></i>
    </div>

</template>


<script>
    export default {
        data() {
            return {
                test:'11111',
            };
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            console.log('mount test');
        }
    }
</script>
