<template>
    <div class="modal" :class="{'fade':!show, 'show':show}" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" @click="showClose()"></button>
                </div>
                <div class="modal-body">
                    <div class="tab">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs">
                            <li :class="{'active':tabActive=='login'}"><a @click="tabActive='login'" href="#">Войти</a></li>
                            <li :class="{'active':tabActive=='sign_up'}"><a @click="tabActive='sign_up'" href="#">Зарегистрироваться</a></li>
                            <li :class="{'active':tabActive=='recovery'}"><a @click="tabActive='recovery'" href="#">Забыли пароль?</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content tabs">
                            <div class="tab-pane" :class="{'active':tabActive=='login'}">
                                <login></login>
                            </div>
                            <div class="tab-pane" :class="{'active':tabActive=='sign_up'}">
                                <sign_up></sign_up>
                            </div>
                            <div class="tab-pane" :class="{'active':tabActive=='recovery'}">
                                <recovery></recovery>
                            </div>

                        </div>
                    </div>
                </div>
             <!--   <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="showClose()">Закрыть</button>
                    <button type="button" class="btn btn-primary">Сохранить изменения</button>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    const set={
        show:false,
        tabActive:'login',
    };
    export default {
        data() {
            return set;
        },
        computed: {

        },
        methods: {
            showClose(){
                this.show=!this.show;
            }
        },
        mounted() {
            this.$store.state.modal=set;
            console.log('mount modal');
        }
    }
</script>