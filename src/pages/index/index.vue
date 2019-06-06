<template>
    <div class="content">
        <template v-for="(item,index) in routerData">
            <Button @click="link(item)">{{item.name}}</Button>
        </template>
        <!--<hello></hello>-->
    </div>
</template>

<script>
    import hello from "../../components/HelloWorld"
    import router from "../../router"
  export default {
      name:"index",
      components:{
          hello
      },
      data() {
        return {
            router
        }
      },
      computed:{
          routerData(){
              return this.router.options.routes.filter(item=>{
                 return !!item.name
              });
          }
      },
      methods:{
        link(item){
            this.$router.push({
                name:item.name,
                query:{
                    date:new Date().getTime()
                }
            })
        }
      },
      created(){

      }
    }
</script>

<style scoped lang="less">
    button{
        margin: 0 5px 0 5px;
    }
</style>
