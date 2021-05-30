<template>
  <div class="topnav">
    <ul>
      <li>
        <a class="active" href="#home">Home</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.topnav {
  background-color: #333;
  overflow: hidden;
  width: 100%;
}

ul {
  list-style-type: none;
}
a{
  color: rgb(218, 218, 218);
  text-decoration: none;
}
</style>
