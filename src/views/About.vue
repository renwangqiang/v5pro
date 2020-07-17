<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{msg}}
        <div class="box" @click="delc">退出</div>
  </div>
</template>

<script>
export default {
  name:'about',
  data(){
    return{
    msg:''
    
    }
  },
   methods: {
    delc() {
      // this.$cookieStore.delCookie( 'name' );//删除
      this.$cookieStore.delCookie( 'name' )
      if(this.$cookieStore.getCookie( 'name' )){
      
    }else{
this.$router.push({ path: "./login" });
    }
    }
  },
  mounted(){
    this.msg=JSON.parse(this.$cookieStore.getCookie( 'name' ));
  }
}
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
  font-size: 22px;
}
</style>