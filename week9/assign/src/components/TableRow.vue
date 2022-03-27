<script>
const props = defineProps(["rock"]);
console.log("chosen rock", props.rock);
</script>


<template>
  <tr>
    <td>{{ rock.name }}</td>
    <td>{{ rock.place }}</td>
    <td>{{ rock.who }}</td>
    <td>{{ rock.dimensions }}</td>
    <td>{{ rock.description }}</td>
    <td>
      <button type="button" v-on:click="deleteItem(rock)">Remove Rock</button>
    </td>
  </tr>
</template>
