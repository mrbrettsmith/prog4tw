<script setup>
import { RouterLink } from 'vue-router';
import RockCollection from "../data/rock-collect.json";
console.log("Rock Collection", RockCollection);
</script>

<template>
  <div class="rock-container">
    <div class="rock-list-name" 
    v-for="(rock, index) in RockCollection" :key="index">
      <RouterLink :to="'/rock/' + rock.name"> <img :src="rock.photo" :alt="rock.name" />
      {{rock.name}} 
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

.rock-container {
  margin: 0em;
  /* padding: 10px 15px; */
  border-collapse: collapse;
  font-family: bookmania, serif;
  vertical-align: middle;
  line-height: 1.35rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1062px;
  column-gap: 8px;
}

.rock-list-name {
  padding: 1rem;
  margin: 8px 0px;
  border: 8px solid aquamarine;
  max-width: 300px;
}

.rock-list-name img{
max-width: 300px;
}

.rock-list-name a:link {
  text-decoration: none;

}
.rock-list-name a:visited {
  color: inherit;
}

</style>