<template>
    <div>
        <Form>
            <FormItem @trigger="(val1)=>val=val1"></FormItem>
        </Form>
    </div>
</template>

<script>
    /**
     *@author       刘文军
     *@date         2019/5/24 14:47
     *@Copyright    天源迪科信息技术股份有限公司
     *@Description
     */
    import Form from "../../components/form"
    export default {
        name: "seven",
        components:{
            Form,
            FormItem:Form.Item
        },
        watch:{
          val(newVal){
              console.log(newVal);
          }
        },
        data(){
            return {
                val:'',
                value:""
            }
        },
        methods:{

        },
        created(){

        }
    }
</script>

<style scoped>

</style>
