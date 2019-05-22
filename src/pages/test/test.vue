<template>
    <div>
        <Button @click="switch1">切换组件</Button>
        <component :is="componentId"></component>
    </div>
</template>

<script>
import btn from "./button"
import index from "../../components/index"
export default {
    name:"test1",
    components:{
        btn,
        index
    },
    data(){
        return {
            componentId:"index"
        }
    },
    computed:{
        a(){
            return 'a'
        },
        b(){
            return this.a
        }

    },
    methods:{
        switch1(){
            this.componentId=='index'?this.componentId='btn':this.componentId='index'
        }

    },
    mounted(){
    
    }
}
</script>

<style lang="less">
      
</style>