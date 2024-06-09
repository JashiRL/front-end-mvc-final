<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="7">
        <v-img v-if="product" :src="require(`@/assets/img/products/${product.image}.jpg`)" height="550" width="550"></v-img>
        <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
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
            <v-btn
              :disabled="!product"
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
      const url = `http://localhost:6010/product/${productId}`;
      const response = await axios.get(url);
      this.product = response.data;
    } catch (error) {
      console.error('Error fetching product details:', error);
      this.showSnackbar('Error fetching product details', 'red');
    }
  },
  methods: {
    async addToCart() {
      console.log(this.product, this.product.image)
      // if (!this.product || !this.product.img) {
      //   console.error('Product details are not loaded yet.');
      //   this.showSnackbar('Product details are not loaded yet.', 'red');
      //   return;
      // }

      const productId = this.product.image;
      const quantity = this.shirtCount;

      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const headers = { Authorization: `Bearer ${token}` };

        // Check if the product is already in the cart
        const cartResponse = await axios.get("http://localhost:6010/cart", { headers });
        const cartItems = cartResponse.data.cart.items;

        const existingItem = cartItems.find(item => item.productId === productId);

        if (existingItem) {
          // Product exists in cart, so update quantity
          await this.updateItemQuantity(productId, quantity + existingItem.quantity);
        } else {
          // Product doesn't exist in cart, so add it
          await this.addItemToCart(productId, quantity);
        }

        // this.showSnackbar('Item added to cart successfully', 'green');
      } catch (error) {
        console.error('Error adding to cart:', error);
        // this.showSnackbar('Error adding item to cart', 'red');
      }
    },
    async addItemToCart(productId, quantity) {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const headers = { Authorization: `Bearer ${token}` };

      const url = "http://localhost:6010/cart/add";
      const data = { productId, quantity };

      try {
        console.log(url, data, headers)
        await axios.post(url, data, { headers });
      } catch (error) {
        console.error('Error adding item to cart: ', error);
        console.log("aaaa")
        // this.showSnackbar('Error adding item to cart', 'red');
      }
    },
    async updateItemQuantity(productId, quantity) {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const headers = { Authorization: `Bearer ${token}` };

      const url = "http://localhost:6010/cart/update";
      const data = { productId, quantity };

      try {
        await axios.post(url, data, { headers });
      } catch (error) {
        console.error('Error updating item quantity:', error);
        this.showSnackbar('Error updating item quantity', 'red');
      }
    },
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
    showSnackbar(message, color) {
      // Implement your snackbar method here to show notifications
      console.log(message, color);
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
