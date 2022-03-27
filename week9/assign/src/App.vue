<script setup>

</script>

<template>
  <div class="collection-wrattoer">
    <header>
      <h1>Brett's Rock Collection</h1>
      <p>Lava rocks are highlighted pink</p>
    </header>
    <table>
      <thead>
        <th>Name</th>
        <th>Place</th>
        <th>Who found the Rock</th>
        <th>Dimensions <div>(w", h", d")</div></th>
        <th>Description</th>
        <!-- <th>Image</th> -->
      </thead>
      <tbody>
        <tr v-for="(rock, idx) in rocks" v-bind:key="idx"
          v-bind:class="{
            gradTwo: idx % 2 !== 0,
            gradOne: idx % 2 === 0,
            lava: rock.name.toLowerCase().includes('lava'),
        }">
          <td>{{rock.name}}</td>
          <td>{{rock.place}}</td>
          <td>{{rock.who}}</td>
          <td>{{rock.dimensions}}</td>
          <td>{{rock.description}}</td>
          <td><button type="button" v-on:click="deleteItem(rock)">Remove Rock</button></td>
        </tr>
      </tbody>
    </table>
    <form v-on:submit.prevent="addRock">
      <fieldset> 
        <legend>Add a new rock to the database</legend>
        <div class="form-container">
        <div>
          <label for="name">Name</label>
          <input id="name " type="text" v-model="newRockObj.name"
              placeholder="name the rock">
        </div>
        <div>
          <label for="place">Place</label>
          <input id="place " type="text" v-model="newRockObj.place"
                    placeholder="where it was found">
        </div>
        <div>
          <label for="who">Who found it?</label>
          <input id="who " type="text" v-model="newRockObj.who" placeholder="who gifted the rock">
        </div>
        <div>
          <label for="dimensions">Dimensions</label>
          <input id="dimensions" type="text" v-model="newRockObj.dimensions" placeholder="w, h, d, in inches">
        </div>
        <div class="new-rock-description">
          <label for="description">Description</label>
          <!-- <input id="description "type="text" v-model="newRockObj.description" placeholder="describe characteristics"> -->
          <textarea id="description" rows="1" cols="30" type="text" v-model="newRockObj.description" placeholder="describe characteristics"> </textarea>
        </div>
        <button type="submit" class="new-rock-button"> Submit Rock</button>
      </div>
      </fieldset>
    </form>
  </div>
</template>

<style>

</style>
