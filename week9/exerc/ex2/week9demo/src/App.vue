<script setup>
import CamalidRow from './components/CamalidRow.vue';
const camelids = [
  {
    commonName: "Lama",
    binomialName: "Lama glama",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Lama",
    species: "L. glama",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
  },
  {
    commonName: "Alpaca",
    binomialName: "Vicugna pacos",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Vicugna",
    species: "V. pacos",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg"
  },
]
</script>

<template>
<!-- html here -->
<h1>Camelid Componant Page</h1>
<CamalidRow
  v-for="critter in camelids"
  v-bind:key="critter.commonName"
  v-bind:animal="critter"
/>

</template>

<style>
/* styyyles  */
</style>
