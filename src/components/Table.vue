<template>
  <table>
    <thead>
      <tr>
        <th>Nazwa</th>
        <th>Opis</th>
        <th>Link</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="`items_${index}`">
        <td>{{ item.name }}</td>
        <td>{{ item.tag }}</td>
        <td>{{ item.url }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableDemo",
  props: ["items"],
};
</script>

<style>
table {
  border-collapse: collapse;
  position: absolute;
  top: 40%;
  left: 230px;
  width: 1300px;
}
td,
th {
  border: 2px solid red;
  padding: 15px;
  width: 550px;
  text-align: center;
}
</style>
