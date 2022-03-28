<script>
const props = defineProps(["rock", "index"]);
console.log("chosen rock", props.rock);
</script>

<template>
  <tr
    v-bind:class="{
      gradTwo: index % 2 !== 0,
      gradOne: index % 2 === 0,
      lava: rock.name.toLowerCase().includes('lava'),
    }"
  >
    <td>{{ rock.name }}</td>
    <td>{{ rock.place }}</td>
    <td>{{ rock.who }}</td>
    <td>{{ rock.dimensions }}</td>
    <td>{{ rock.description }}</td>
    <td>
      <button type="button" v-on:click="$emit('deleteItem', rock)">
        Remove Rock
      </button>
    </td>
  </tr>
</template>
