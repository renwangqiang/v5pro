<template>
  <div class="home">
    <div class="box" @click="gotoAbout">aaa</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      list: [{ name: "rwq", age: "18" }],
      user: { userName: "rwq", password: "1222222223456" }
    };
  },
  methods: {
    gotoAbout() {
      // this.setCookie("setCookie", JSON.stringify(this.user), 365);
      // this.$cookieStore.setCookie( 'name' ,JSON.stringify(this.user), 60*60*24*7);//存入用户名，设置有效时间60秒
      this.$router.push({ path: "./About" });
    }
  },
  mounted() {
    // var userData=JSON.parse(this.getCookie('setCookie'));
    // console.log("~~~~~",userData)
    if(this.$cookieStore.getCookie( 'name' )){
      
    }else{
this.$router.push({ path: "./login" });
    }
  }
};
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
  font-size: 22px;
}
</style>
