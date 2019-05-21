<template>
    <div class="animation">
        <Button type="primary" @click="()=>show=!show">toggle</Button>
        <transition name="fade">
            <p v-if="show">
                hello
            </p>
        </transition>
    </div>
</template>

<script>
    export default {
        name:"animation",
        data(){
            return {
                show:true
            }
        },
        methods:{

        }
    }
</script>

<style lang="less">
    .animation{
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }
</style>

