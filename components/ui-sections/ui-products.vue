<template>
  <v-container>
      <h2 class="section-title text-center">Productos</h2>
      <p class="text-center">Ordena para ti o para tus seres queridos</p>
      <v-row style="justify-content: center; flex-wrap: wrap;">
          <v-col
              v-for="(product, index) in products"
              :key="index"
              style="max-width: 300px; flex-basis: 300px; flex-grow: 1;"
          >
          <v-item-group>
            <v-item>
                <v-card
                    height="400"
                    color="transparent"
                    @click="goToProductDetails(product.id)"
                >
                    <v-img
                        :src="require(`@/assets/img/products/${product.image}`)"
                        height="300"
                        contain
                    ></v-img>
                    <v-card-title class="text-center">{{ product.name }}</v-card-title>
                    <v-card-subtitle class="text-center">${{ product.price }}</v-card-subtitle>
                </v-card>
            </v-item>
          </v-item-group>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'uiProducts',
  data() {
      return {
          products: [
              { id: 1, name: 'Playera Pikachu 64', price: 250, image: '1.jpg' },
              { id: 2, name: 'Playera Self Love Ducks', price: 250, image: '2.jpg' },
              { id: 3, name: 'Playera Pochita', price: 250, image: '3.jpg' },
              { id: 4, name: 'Playera GB Gengar', price: 250, image: '4.jpg' },
              { id: 5, name: 'Playera EVA OXXO', price: 200, image: '5.jpg' },
              { id: 6, name: 'Playera Kirby Norteño', price: 250, image: '6.jpg' },
              { id: 7, name: 'Playera Majoras Mask', price: 250, image: '7.jpg' },
              { id: 8, name: 'Playera Mi Hyliano Favorito', price: 250, image: '8.jpg' },
              { id: 9, name: 'Playera Team Rocket', price: 250, image: '9.jpg' },
              { id: 10, name: 'Playera Squirtle Squad', price: 250, image: '10.jpg' }
          ]
      };
  },
  methods: {
      goToProductDetails(productId) {
          this.$router.push(`/product/${productId}`);
      }
  }
}
</script>

<style>
.section-title {
font-family: 'Poppins', 'sans-serif';
}
</style>
