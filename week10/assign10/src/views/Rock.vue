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
        <h3>Place Found : </h3><p>{{ rock.place }}</p>
        <h3>Gifted By : </h3><p>{{ rock.who }}</p>
        <h3>Dimentsions (w" h" d")</h3>
        <p>{{ rock.dimensions }}</p>
        <h3>Description :</h3>
        <p>{{ rock.description }}</p>
    </div>
</template>
<style scoped>
@import url("https://use.typekit.net/rbx8lhv.css");

.rock-detail {
    margin: 8px 0px;
    padding: 16px;
    border-collapse: collapse;
    font-family: bookmania, serif;
    vertical-align: middle;
    line-height: 1.35rem;
    border: 8px solid aquamarine;
    max-width: 1044px;
}

h2 {
    font-family: colt-soft, serif;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 8px;
    letter-spacing: 2px;
}

h3 {
    font-family: colt-soft, serif;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 2px;
}

</style>