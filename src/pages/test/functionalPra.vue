<template>
    <div class="functionalPra">
        <FunctionalTemplate v-for="item in temData" :key="item" v-bind="item"/>
    </div>
</template>

<script>
    /**
     *@author       刘文军
     *@date         2019/5/31 14:36
     *@Copyright    天源迪科信息技术股份有限公司
     *@Description
     */
    import FunctionalTemplate from "../../util/functionalTemplate"
    export default {
        name: "functionalPra",
        components:{
            FunctionalTemplate
        },
        data(){
            return{
                temData:[
                    {
                        type:'Input',
                        placeholder:"请输入111",
                        class: {
                            foo: true
                        },
                        on:{
                            'on-change':(event)=>{
                                console.log(event);
                            }
                        }
                    },
                    {
                        type:'Select',
                        class: {
                            bar: true
                        },
                        style: {
                            width:'700px'
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .functionalPra{
        width: 1200px;
        margin: 0 auto;
        .foo {
            margin-bottom: 15px;
            width: 600px;
        }
    }

</style>
