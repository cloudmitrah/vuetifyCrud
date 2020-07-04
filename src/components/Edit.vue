<template>
<v-form v-on:submit.prevent="updateItem">
  <v-card
    class="mx-auto"
    width="500"
    elevation="10"
  >
    <v-card-text>
      <v-text-field disabled="disabled" v-model="products.id"  label="Id" required></v-text-field>
    <v-text-field v-model="products.name"  label="Name" required></v-text-field>
    <v-text-field v-model="products.quantity"  label="Quantity" required></v-text-field>
     <v-text-field v-model="products.price"  label="Price" required></v-text-field>
    </v-card-text>
<v-card-actions class="justify-center">
       <v-btn type="submit" color="success" class="mr-4">Submit</v-btn>
    </v-card-actions>
<v-spacer></v-spacer>
  </v-card>
  </v-form>
</template>


<script>
export default{
        data(){
            return{
                products:{}
            }
        },
        created: function(){
            this.getItem();
        },
        methods: {
            getItem()
            {
              let uri = 'http://localhost:8013/productById/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.products = response.data;
                });
            },
            updateItem()
            {
              let uri = 'http://localhost:8013/update/'+ this.$route.params.id;
                this.axios.put(uri, this.products).then((response) => {
                  this.$router.push({name: 'home'});
                    this.products = response.data;
                });
            }
        }
    }
</script>