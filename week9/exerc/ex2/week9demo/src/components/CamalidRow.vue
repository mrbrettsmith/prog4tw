<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>

<template>
    <div>
        <h3>Common Name</h3>
        <p>Binomial Name</p>
        <p>Order</p>
        <p>Family</p>
        <p>Genus</p>
        <p>Species</p>
        <img src="HOLD" alt="commonName">
    </div>

</template>