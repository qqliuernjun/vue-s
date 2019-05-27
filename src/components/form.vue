<template>
    <div class="form">
        <form action="form_action.asp" method="get">
            <p>First name: <input type="text" name="fname" /></p>
            <p>Last name: <input type="text" name="lname" /></p>
            <slot></slot>
        </form>
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
        name: "form.vue",
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

        },
        mounted(){

        },
        created(){

        }
    }
</script>

<style scoped>

</style>
