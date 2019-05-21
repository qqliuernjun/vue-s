<template>
    <div :class="prefixCls">
        <span><slot name="first"></slot></span>
        <button :class="classes" @click="btnCli(1,$event)">
            测试按钮
            <slot></slot>
        </button>
        <slot name="tail"></slot>
    </div>
</template>

<script>
const prefixCls='ico';
export default {
    name:"test",
    data(){
        return {
            prefixCls:prefixCls,
            showStatus:''
        }
    },
    computed:{
        classes(){
            return [
                `${this.prefixCls}`,
                {
                    [`${this.prefixCls}-btnclass`]:true,
                    [`${this.prefixCls}-btnclass1`]:true
                }
            ]
        }
    },
    methods:{
        btnCli(val,event){
            console.log(val)
            console.log(event)
            console.log(prefixCls);
        }
    },
    mounted(){
        console.log(this.$slots)
        this.showStatus=this.prefixCls=='ico'
    }
}
</script>

<style lang="less">
    .ico{
        span{
            color: purple
        }
        .ico-btnclass{
            color: white;
            background: red;
        }
    }
    
</style>