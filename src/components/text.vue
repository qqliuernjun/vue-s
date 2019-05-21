<template>
    <div>
        <span>子组件：</span>   
        <Button @click="change">
            {{value}}
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            val:{
                type:String
            }
        },
        model:{
            prop:"val",
            event:"zz"
        },
        data(){
            return {
                value:this.val
            }
        },
        methods:{
            change(){
                this.value='子组件改变了'
                this.$emit('zz',this.value);
            }
        },
        created(){
            
        }
    }
</script>
