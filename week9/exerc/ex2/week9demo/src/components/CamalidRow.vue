<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>

<template>
    <div>
        <h3>{{props.animal.commonName}}</h3>
        <p>Binomial Name: {{props.animal.binomialName}}</p>
        <p>Order: {{props.animal.order}}</p>
        <p>Family: {{props.animal.family}}</p>
        <p>Genus: {{props.animal.genus}}</p>
        <p>Species: {{props.animal.species}}</p>
        <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName">
    </div>

</template>