<script setup>
import { RouterLink } from 'vue-router';
import RockCollection from "../data/rock-collect.json";
console.log("Rock Collection", RockCollection);
</script>

<template>
 <nav>Home</nav>
  <div class="rock-container">
    <div class="rock-list-name" 
    v-for="(rock, index) in RockCollection" :key="index">
      <RouterLink :to="'/rock/' + rock.name"> 
      {{rock.name}} 
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>