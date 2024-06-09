<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="7">
        <v-img v-if="product" :src="require(`@/assets/img/products/${product.image}.jpg`)" height="550" width="550"></v-img>
      </v-col>
      <v-col cols="12" sm="5">
        <h4 v-if="product" class="text-h4 mt-10">{{ product.name }}</h4>
        <v-row class="mt-4">
          <v-col cols="12" sm="4" class="d-flex flex-column">
            <h6 v-if="product" class="text-h6 pb-10 mt-4">
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
              v-if="product"
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
import axios from 'axios';

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
      const url = `http://localhost:6010/product/${productId}`
      const response = await axios.get(url);
      this.product = response.data;
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
