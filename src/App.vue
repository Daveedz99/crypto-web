<template>
  <div>
    <Header id="header" />
    <Home id="home" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#header {
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  /* background: url("./assets/imgs/bg-home.jpg") no-repeat center center fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
