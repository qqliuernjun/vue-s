<template>
    <div class="content">
        <template v-for="(item,index) in routerData">
            <Button @click="link(item)">{{item.name}}</Button>
        </template>
    </div>
</template>

<script>
    import router from "../../router"
  export default {
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
                name:item.name
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
