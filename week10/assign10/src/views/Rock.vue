<script setup>
    import { useRoute } from 'vue-router';
    import RockCollection from "../data/rock-collect.json";
    const route = useRoute();
    const rock = RockCollection.find((rock) => {return rock.name === route.params.name;});
</script>

<template>
    <div class="rock-detail">
        <h2>{{ rock.name }}</h2>
        <img :src="rock.photo" :alt="rock.name" />
        <p>{{ rock.place }}</p>
        <p>{{ rock.who }}</p>
        <p>{{ rock.dimensions }}</p>
        <p>{{ rock.description }}</p>
    </div>
</template>
<style scoped>
@import url("https://use.typekit.net/rbx8lhv.css");

.rock-detail {
    margin: 0em 2em;
    padding: 10px 15px;
    border-collapse: collapse;
    font-family: bookmania, serif;
    vertical-align: middle;
    line-height: 1.35rem;
}


</style>