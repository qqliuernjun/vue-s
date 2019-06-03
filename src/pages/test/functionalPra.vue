<template>
    <div class="functionalPra">
        <FunctionalTemplate v-model="datas[item.prop]" v-for="item in temData"  v-bind="item"/>
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
                datas:{
                    inputVal:"",
                    selectVal:"",
                    checkboxVal:[]
                },
                temData:[
                    {
                        type:'Input',
                        placeholder:"请输入111",
                        class: {
                            foo: true
                        },
                        on:{
                            'on-change':(event)=>{
                                console.log(event)
                            }
                        },
                        prop:"inputVal"
                    },
                    {
                        type:'Select',
                        style: {
                            width:'700px'
                        },
                        on:{
                            'on-change':(val)=>{
                                console.log(`触发了Select的on-change事件,${val}`)
                            }
                        },
                        children: {
                            childType:"Option",
                            childData:[
                                {label: "张三", value: "0"},
                                {label: "李四", value: "1"}
                            ]
                        },
                        prop:"selectVal"
                    },
                    {
                        type:'CheckboxGroup',
                        prop:'checkboxVal',
                        class: {
                            bar: true
                        },
                        children: {
                            childType:"Checkbox",
                            childData:[
                                {label: "香蕉"},
                                {label: "苹果"},
                                {label: "西瓜"}
                            ]
                        }
                    },
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
        .bar{
            margin-top: 10px;
        }
    }
</style>
