<template>
    <div>
        <Render :data="data" :render="renderContent"></Render>
    </div>
</template>

<script>
    import Render from "../../util/render"
    export default {
        name:"six",
        components:{
            Render
        },
        data(){
            return {
                data:[1,2,3]
            }
        },
        methods:{
            renderContent: (h, {val,data}) => {
                return h('div', [
                    h('span',`${val},${data}`)
                ]);
            }
        },
        created(){

        }
    }
</script>

<style lang="less">

</style>

