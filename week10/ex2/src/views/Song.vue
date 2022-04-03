<script setup>
import { useRoute } from 'vue-router';
import MusicList from "../data/music-list.json"
const route = useRoute();
console.log(route.params);
const song = MusicList.find((song) => {
    return song.slug === route.params.slug;
});
</script>

<template>
    <div class="song-detail" :class="{
        rising: song.rank > song.position.positionLastWeek,
        falling: song.rank < song.position.positionLastWeek,
        same: song.rank === song.position.positionLastWeek }">
    <h1>{{ song.title }}</h1>
    <h2>{{ song.rank }}</h2>
    <img :src="song.cover" :alt="song.title" /> 
    <p> Artist: {{song.artist }}</p>   
        
    </div>
</template>

<style scoped>
.song-detail {
    width: 300px;
    max-width: 100%;
    padding: 2rem;
    text-align: center;
    border-radius: 1rem;
}
.song-detail.rising {
    background-color: greenyellow;
}
.song-detail.falling {
    background-color: red;
}
.song-detail.same {
    background-color: lightsalmon;
}
</style>