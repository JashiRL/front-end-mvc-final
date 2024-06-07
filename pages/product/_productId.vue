<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="7">
        <v-img :src="require(`@/assets/img/products/${product.image}`)" height="600" width="600"></v-img>
      </v-col>
      <v-col cols="12" sm="5">
        <h4 class="text-h4 mt-10">{{ product.name }}</h4>
        <v-row class="mt-4">
          <v-col cols="12" sm="4" class="d-flex flex-column">
            <h6 class="text-h6 pb-10 mt-4">
              $ {{ product.price }}
            </h6>
            <v-text-field
              v-model="shirtCount"
              type="number"
              prepend-inner-icon="mdi-plus"
              append-icon="mdi-minus"
              :rules="[rules.count]"
              hide-spin-buttons
              outlined
              dense
              readonly
              @click:prepend-inner="addCount"
              @click:append="reduceCount"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="10" class="d-flex flex-column">
            <v-select
              label="Talla"
              dense
              outlined
              class="mt-4"
              :items="[product.details]"
            >
            </v-select>
            <v-btn
              color="primary"
              depressed
              class="mt-4 d-flex align-center justify-center"
              @click="addToCart"
            >
              <v-icon left>mdi-cart</v-icon>
              Añadir al carrito
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProductDetails',
  layout: 'home',
  data() {
    return {
      product: null,
      shirtCount: 1,
      rules: {
        count: value => value > 0 && value <= 10
      }
    };
  },
  async created() {
    try {
      const productId = this.$route.params.productId;
      const products = [
        { id: 1, name: 'Pikachu 64', image: '1.jpg', price: '250.00', details: 'Talla: G' },
        { id: 2, name: 'Self Love Ducks', image: '2.jpg', price: '200.00', details: 'Talla: M' },
        { id: 3, name: 'Pochita', image: '3.jpg', price: '250.00', details: 'Talla: CH' },
        { id: 4, name: 'GB Gengar', image: '4.jpg', price: '250.00', details: 'Talla: G' },
        { id: 5, name: 'EVA OXXO', image: '5.jpg', price: '200.00', details: 'Talla: CH' },
        { id: 6, name: 'Kirby Norteño', image: '6.jpg', price: '250.00', details: 'Talla: XG' },
        { id: 7, name: 'Majoras Mask', image: '7.jpg', price: '250.00', details: 'Talla: M' },
        { id: 8, name: 'Mi Hyliano Favorito', image: '8.jpg', price: '250.00', details: 'Talla: G' },
        { id: 9, name: 'Team Rocket', image: '9.jpg', price: '250.00', details: 'Talla: G' },
        { id: 10, name: 'Squirtle Squad', image: '10.jpg', price: '250.00', details: 'Talla: CH' }
      ];
      this.product = products.find(product => product.id === parseInt(productId));
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  },
  methods: {
    addCount() {
      if (this.shirtCount < 10) {
        this.shirtCount += 1;
      }
    },
    reduceCount() {
      if (this.shirtCount > 1) {
        this.shirtCount -= 1;
      }
    },
    addToCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productInCart = cart.find(item => item.id === this.product.id);
      if (productInCart) {
        productInCart.quantity += this.shirtCount;
      } else {
        cart.push({
          ...this.product,
          quantity: this.shirtCount
        });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      this.$router.push('/my-cart');
    }
  }
};
</script>

<style>
.text-h4 {
  font-family: 'Poppins', 'sans-serif';
}

.text-h6 {
  color: #56B280;
}
</style>
