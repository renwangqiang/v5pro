<template>
  <div class="login">
    <h1>This is an login page</h1>
        <div class="box" @click="gotoAbout">aaa</div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
    msg:'',
    user: { userName: "rwq", password: "123452222222222226" }
    }
  },
    methods: {
    gotoAbout() {
    //   this.setCookie("setCookie", JSON.stringify(this.user), 365);
            this.$cookieStore.setCookie( 'name' ,JSON.stringify(this.user), 60*60*24*7);//存入用户名，设置有效时间60秒
      console.log("~~~~~~存储账户密码")
      this.$router.push({ path: "home" });
    }
  },
  mounted(){
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