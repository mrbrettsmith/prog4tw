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