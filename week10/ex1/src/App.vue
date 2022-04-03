<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
   <nav>
     <RouterLink to="/">Home</RouterLink> |
     <RouterLink to="/alpaca">Alpaca</RouterLink> |
     <RouterLink to="/llama">Llama</RouterLink>
   </nav>
   <div class="container">
     <RouterView></RouterView>
   </div>
</template>

<style>
html {
  font-size: 1rem;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
nav {
  width: 100%;
  height: 45px;
  background-color: blueviolet;
  text-align: center;
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color: blanchedalmond;
  font-weight: 800;
  font-size: 30px;
  line-height: 1.75;
}
nav a.router-link-active {
  text-decoration: line-through;
  color: aqua;

}
.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
}
.container h1, h3{
font-size: 40px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
text-align: center;
}
.container p {
  width: 800px;
  margin: Auto;
}
.container img {
  display: block;
  max-width: 800px;
  width: 100%;
  margin: 15px auto 15px;
}
</style>
