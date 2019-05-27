<template>
    <div class="form-item">
        <input type="button" @click="submit" value="Submit" />
    </div>
</template>

<script>
    /**
     *@author       刘文军
     *@date         2019/5/24 14:40
     *@Copyright    天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "form-item",
        components:{

        },
        watch:{

        },
        computed:{

        },
        data(){
            return{

            }
        },
        methods:{
            submit(){
                this.$emit('trigger',new Date().getTime());
            }
        },
        mounted(){

        },
        updated(){
            console.log(`updated:`);
        },
        created(){

        },
        destroyed(){
            console.log('销毁form-item组件中的trigger方法')
            this.$off('trigger');
        }
    }
</script>

<style scoped>

</style>
