<template>
    <h1 class="">
        test 43 sdf
    </h1>
    <button type="button" class="btn">Base class</button>
    <button type="button" class="btn btn-primary">Primary</button>
{{$root.$store.state.test.ppp}}     {{test}}
    <slot>Привет мир</slot>
    <div class="card-body text-lg-start">
        <i class="bi bi-bag-heart-fill"></i>
        <i class="bi bi-app"></i>
        <i class="bi bi-arrow-right-square-fill"></i>
        <i class="bi bi-bag-check-fill"></i>
        <i class="bi bi-calendar-plus-fill"></i>
    </div>
    <div>
        <p>Двойные фигурные скобки: {{ rawHtml }}</p>
        <p>Директива v-html: <span v-html="rawHtml"></span></p>
    </div>


</template>


<script>
    export default {
        data() {
            return {
                test:'22222',
                rawHtml: `<i style="color: red;" onclick="alert(123)">123</i>`,
            };
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            console.log('mount test', this.rawHtml);
        }
    }
</script>
