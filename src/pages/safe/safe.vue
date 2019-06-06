<template>
    <div class="safe">
        <a href="/user/1">
            {{user_name}}
        </a>
        <img :src="image_url">
        <img src="" onerror="alert(1)">
    </div>
</template>

<script>
    /**
     *@author       刘文军
     *@date         2019/6/4 16:15
     *@Copyright    天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "safe",
        data(){
            return {
                user_name:this.$route.query.date,
                image_url:`" onerror="alert(1)`
            }
        },
        created(){
            console.log(this.$route.query.date)
        }
    }
</script>

<style lang="less">

</style>
