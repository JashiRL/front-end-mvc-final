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
    addItemToCart() {
      const url = "http://localhost:6010/cart/add";
            const sendData = {
              productId: this.productId,
              quantity: this.quantity,
            };
            this.$axios
              .post(url, sendData)
              .then((res) => {
                if (res.data.message === "Item added to cart successfully") {
                  this.showSnackbar(res.data.message, "green");
                }
              })
              .catch((err) => {
                this.showSnackbar("Item not available", "red");
              });
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
    addToCart() {
      const productId = this.product.id;
      const quantity = this.shirtCount;

      // Check if the product is already in the cart
      axios.get("http://localhost:6010/cart")
        .then((res) => {
          console.log('hell yeah')

          const exists = res.items.productId === productId ? true : false;
          console.log('hell yeah')
          if (exists) {
            // Product exists in cart, so update quantity
            this.updateItemQuantity(productId, quantity);
          } else {
            // Product doesn't exist in cart, so add it
            this.addItemToCart(productId, quantity);
          }
        })
        .catch(error => {
          console.error('Error checking cart:', error);
        });
    },

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
