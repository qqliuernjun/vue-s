<template>
    <div>
        <span>子组件：</span>   
        <Button @click="change">
            {{val}}
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            text:{
                type:String
            }
        },
        watch:{
            val(newVal,oldVal){
                this.$emit("update:text",newVal)
            }
        },
        data(){
            return {
                val:this.text
            }
        },
        methods:{
            change(){
                this.val='子组件改变了';
            }
        },
        created(){

        }
    }
</script>
