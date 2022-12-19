<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "tableComponent",
  props: {
    header: {
      type: Object,
      required: true,
    },
    itemList: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="item in header">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itemList">
          <td v-for="items in item">{{ items }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table {
  width: 100%;
}
.table,
th,
td {
  border-collapse: collapse;
  border: 1px solid black;
}
</style>
