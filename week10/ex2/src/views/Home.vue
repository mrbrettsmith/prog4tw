<script setup>
import { RouterLink } from 'vue-router';
import MusicList from "../data/music-list.json";
console.log("Music List", MusicList);
</script>

<template>
    <div class="song-container">
        <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
        <RouterLink :to="'/song/' + song.slug"> {{song.title}} </RouterLink>
    </div>
    </div>
    
</template>
<style scoped>
.song-container {
    background-color: salmon;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
}

.song-list-item {
    width: auto;
    padding: 1rem;
    margin: 1rem;
    background-color: beige;
    border: 3px solid black;
    border-radius: 1rem;
}
.song-list-item a {
    color: black;
}

.song-list-item:hover {
    background-color: salmon;
    border: 3px solid beige;
}

.song-list-item:hover a {
    color: beige;
}
</style>