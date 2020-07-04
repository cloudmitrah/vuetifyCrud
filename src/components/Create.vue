<template>
<v-form v-on:submit.prevent="addItem">
  <v-card
    class="mx-auto"
    width="500"
    elevation="10"
  >
  <v-card-title primary-title class="justify-center">
  <div class="display-1 text--primary">
    Add Product
  </div>
</v-card-title>
    <v-card-text>
      
    <v-text-field v-model="item.name"  label="Name" required></v-text-field>
    <v-text-field v-model="item.quantity"  label="Quantity" required></v-text-field>
     <v-text-field v-model="item.price"  label="Price" required></v-text-field>
    </v-card-text>


<v-card-actions class="justify-center">
       <v-btn type="submit" color="success" class="mr-4">Submit</v-btn>
    </v-card-actions>
<v-spacer></v-spacer>
  </v-card>
    
  </v-form>
</template>
<script>
export default {
   
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:8013/addProduct';
            this.axios.post(uri, this.item).then((response) => {
                       this.$router.push({name: 'home'});
                console.log(response.data)
            });
        }
    }
}
</script>