<script setup>
import { reactive } from "vue";
import TableRow from "./components/tableRow.vue";
// 'componant.vue' must be capitalized!!

const rocks = [
  {
    name: "Ledge Lump",
    place: "'The Ledges', Alfred, New York",
    who: "Erin Smith",
    dimensions: "4.5, 4, 1.75",
    description:
      "Smooth, flat bottom with a pitted fossil haunted top. Collected from the rocky ledges my sister 3D scanned for ceramic printing.",
  },
  {
    name: "Alamo Pebble",
    place: "The Alamo, San Antonio, Texas",
    who: "Beth Checkola",
    dimensions: "1.5, 1.5, 1",
    description:
      "Small, egg-shaped rock. Pale color. Taken from an interior wall of the Alamo",
  },
  {
    name: "Snow Canyon Lava",
    place: "Snow Canyon State Park, Utah",
    who: "Molly Raben",
    dimensions: "7.5, 4, 4",
    description:
      "Black lava rock with dusty red mottling over a pitted surface. Gathered from the area 'The Conqueror' was filmed. Used for an art exhibition at the White Page Gallery in Minneapolis",
  },
  {
    name: "Weird Y Coral",
    place: "Hawaii",
    who: "Matt Miller",
    dimensions: "1, 2, .5",
    description: "Smooth glossy white coral with with branching arms.",
  },
  {
    name: "Crazy Horse Fragment",
    place: "Crazy Horse, South Dakota",
    who: "Sophie Weil",
    dimensions: "6, 4, 4.5",
    description: "Blast trailing from the monumental sculpture",
  },
];

const newRockObj = {
  name: "",
  place: "",
  who: "",
  dimensions: "",
  description: "",
};
// const state = reactive({rocks: rocks, newRockObj: newRockObj}) what the below is doing, yo!
const state = reactive({ rocks, newRockObj });

// This function works with this concat formation without adding all of the descriptors??! I am going to leave it!
function addRock() {
  console.log("submitted");
  state.rocks = state.rocks.concat(state.newRockObj);
  state.newRockObj.name = "";
  state.newRockObj.place = "";
  state.newRockObj.who = "";
  state.newRockObj.dimensions = "";
  state.newRockObj.description = "";
}
// function willDeleteRock(itemToDelete) {
//   state.rocks = state.rocks.filter((itemToCheck) => {
//     return itemToDelete.name !== itemToCheck.name;
//   });
// }

function handleDelete(itemToDelete) {
  console.log(itemToDelete.name)
  state.rocks = state.rocks.filter((itemToCheck) => {
    return itemToDelete !== itemToCheck;
  });
}
</script>

<template>
  <div class="collection-wrapper">
    <header>
      <h1>Brett's Rock Collection</h1>
      <p>Lava rocks are highlighted pink</p>
    </header>
    <table>
      <thead>
        <th>Name</th>
        <th>Place</th>
        <th>Who found the Rock</th>
        <th>
          Dimensions
          <div>(w", h", d")</div>
        </th>
        <th>Description</th>
        <th></th>
        <!-- Image -->
      </thead>
      <tbody>
        <TableRow
          v-for="(rock, index) in state.rocks"
          v-bind:key="index"
          v-bind:rock="rock"
          v-bind:index="index"
          v-on:delete-item="handleDelete"
        />
        <!-- Moved to tableRow.vue -->
        <!-- <tr
          v-for="(rock, idx) in state.rocks"
          v-bind:key="idx"
          v-bind:class="{
            gradTwo: idx % 2 !== 0,
            gradOne: idx % 2 === 0,
            lava: rock.name.toLowerCase().includes('lava'),
          }"
        >
          <td>{{ rock.name }}</td>
          <td>{{ rock.place }}</td>
          <td>{{ rock.who }}</td>
          <td>{{ rock.dimensions }}</td>
          <td>{{ rock.description }}</td>
          <td>
            <button type="button" v-on:click="deleteItem(rock)">
              Remove Rock
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
    <form v-on:submit.prevent="addRock">
      <fieldset>
        <legend>Add a new rock to the database</legend>
        <div class="form-container">
          <div>
            <label for="name">Name</label>
            <input
              id="name "
              type="text"
              v-model="newRockObj.name"
              placeholder="name the rock"
            />
          </div>
          <div>
            <label for="place">Place</label>
            <input
              id="place "
              type="text"
              v-model="newRockObj.place"
              placeholder="where it was found"
            />
          </div>
          <div>
            <label for="who">Who found it?</label>
            <input
              id="who "
              type="text"
              v-model="newRockObj.who"
              placeholder="who gifted the rock"
            />
          </div>
          <div>
            <label for="dimensions">Dimensions</label>
            <input
              id="dimensions"
              type="text"
              v-model="newRockObj.dimensions"
              placeholder="w, h, d, in inches"
            />
          </div>
          <div class="new-rock-description">
            <label for="description">Description</label>
            <!-- <input id="description "type="text" v-model="newRockObj.description" placeholder="describe characteristics"> -->
            <textarea
              id="description"
              rows="1"
              cols="30"
              type="text"
              v-model="newRockObj.description"
              placeholder="describe characteristics"
            >
            </textarea>
          </div>
          <button type="submit" class="new-rock-button">Submit Rock</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<style>
h1 {
  font-family: colt-soft, serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 0px;
  color: aquamarine;
}

Header {
  margin: 0em 2em;
  text-align: center;
  font-family: bookmania, serif;
  font-weight: 300;
  font-style: italic;
  color: #ff0095;
  padding: 0;
  border: aquamarine 5px solid;
}

table {
  margin: 0em 2em;
  /* border: none; */
  padding: 10px 15px;
  border-collapse: collapse;
  font-family: bookmania, serif;
  vertical-align: middle;
  line-height: 1.35rem;
}

thead {
  font-family: bookmania, serif;
  font-weight: 700;
  font-style: normal;
  background-color: aquamarine;
}

th,
td {
  border: none;
  padding: 10px 30px;
}

.gradOne {
  color: rgb(49, 49, 30);
  background: linear-gradient(45deg, #e2c78e, #a19467);
}

.gradTwo {
  color: rgb(49, 49, 30);
  background: linear-gradient(45deg, #a19467, #e2c78e);
}
.lava {
  color: rgb(215, 236, 236);
  background: linear-gradient(45deg, #e68964, #ff0095);
}

button {
  background: none;
  color: aquamarine;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 5px;
  font-family: bookmania, serif;
  font-weight: 300;
  font-style: italic;
  line-height: 1em;
  transition-duration: 0.4s;
}

button:hover {
  background-color: aquamarine;
  color: black;
}

.new-rock-button:hover {
  background-color: white;
  color: black;
}

form {
  font-family: bookmania, serif;
  font-weight: 700;
  font-style: normal;
  background-color: aquamarine;
  margin: 0em 2em;
  padding: 1.5em 15px 1em;
  border-collapse: collapse;
}

form button {
  color: #ff0095;
  max-width: 100%;
}

form textarea {
  min-width: 100%;
  max-width: 100%;
  max-height: auto;
  resize: none;
  box-sizing: border-box;
  border: none;
}

input {
  /* box-sizing: border-box; */
  width: 100%;
  border: none;
}

form legend {
  font-family: colt-soft, serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 0px;
  text-align: center;
  color: #ff0095;
}

.form-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 4rem 4rem;
  grid-gap: 1rem;
  min-width: 0;
  grid-gap: 1rem;
}

.form-container div {
  color: #ff0095;
  max-width: 100%;
}

.new-rock-description {
  grid-column: 1 / 5;
  grid-row: 2 / 3;
}

.new-rock-button {
  grid-column: 5 / 6;
  grid-row: 1 / 3;
}
</style>
