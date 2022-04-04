<script setup>
  import {RouterView, RouterLink} from "vue-router"
</script>

<template>
  <nav class="header">
    <RouterLink to="/"><h1>Brett's Rock Collection</h1></RouterLink> 
    
  </nav>
  <RouterView />
</template>

<style>
@import url("https://use.typekit.net/rbx8lhv.css");
body {
  margin: 1rem;
  max-width: 1062px;
}
h1 {
  font-family: colt-soft, serif;
  letter-spacing: 2px;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 0px;
  color: aquamarine;
  margin: auto;
}
.header {
    padding: 1rem;
    border: 8px solid aquamarine;
    max-width: 100%;
}
a {
  text-decoration: none;
}
.header:hover {
  background-color: aquamarine;
}
.header:hover a h1 {
    color: white;
}

</style>