<template>
  <v-card>
    <v-card-title>
      Product List
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-detail
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers"  sort-by="id"  :items-per-page="5"
      :loading="loading" :search="search" :items="products" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-icon  color="blue darken-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon color="red" @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      products: [],
      headers: [
        {
          text: "id",
          align: "start",
          sortable: true,
          value: "id"
        },
        { text: "Name", value: "name" },
        { text: "Quantity", value: "quantity" },
        { text: "Price", value: "price" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  created: function() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      let uri = "http://localhost:8013/products";
      this.axios.get(uri).then(response => {
        this.products = response.data;
      });
    },

    deleteItem(item) {
      let id = item.id;
        confirm('Are you sure you want to delete this item?') && this.products.splice(id,1)
      this.axios.delete(`http://localhost:8013/delete/${id}`).then(() => {
        this.fetchItems();
      });
    },
    editItem (item) {
        this.$router.push({name: 'Edit', params: { id: item.id }});
      },
  }
};
</script>