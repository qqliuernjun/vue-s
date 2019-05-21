<template>
    <div>
        <!-- 双向绑定原理 -->
        <!-- <Input :value="text" @input="val=>text=val" placeholder="请输入"/>
        {{text}} -->

        <!-- 子父组件传值 -->
        <!-- <text-vue v-model="text"></text-vue>
        <span>父组件:</span>  {{text}}-->

        <!-- <pra :text="text" :text.sync="text"></pra><br/>
        <span>父组件:</span> {{text}} -->

    </div>
</template>

<script>
import textVue from "./text.vue"
import pra from "./text1.vue"
    export default {
        name:"index",
        components:{
            textVue,
            pra
        },
        data(){
            return {
                text:'111111'
            }
        },
        methods:{
            
        },
        created(){

        }
    }
</script>

<style>
    
</style>

