<template>
  <v-container>
    <div class="text-center pb-10">
      <h2 class="section-title py-4">Mi carrito</h2>
      <a class="" @click="backToHome">Regresar al inicio</a>
    </div>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="products"
          block
          hide-default-footer
        >
          <template v-slot:item.quantity="props">
            <v-edit-dialog
              :return-value.sync="props.item.quantity"
              large
              persistent
              @save="save(props.item)"
              @cancel="cancel"
              @open="open"
              @close="close" 
            >
            
              <div>{{ props.item.quantity }}</div>
              <template v-slot:input>
                <div class="mt-4">Editar cantidad</div>
                <v-text-field
                  v-model="props.item.quantity"
                  :rules="[rules.count]"
                  type="number"
                  prepend-inner-icon="mdi-plus"
                  append-icon="mdi-minus"
                  single-line
                  autofocus
                  outlined
                  dense
                  @click:prepend-inner="addCount(props.item)"
                  @click:append="reduceCount(props.item)"
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>
          <template v-slot:item.total="{ item }">
            $ {{ (parseFloat(item.price) * item.quantity).toFixed(2) }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon color="red" @click="removeFromCart(item)">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
      <v-row class="mx-0 my-0 px-3">
        <v-col cols="4" sm="6"></v-col>
        <v-col
          cols="8"
          sm="6"
          class="d-flex flex-row justify-space-between align-center"
        >
          <div>
            <h6>Subtotal</h6>
            <span>$ {{ subtotal.toFixed(2) }}</span>
          </div>
          <v-btn color="primary" width="120" elevation="0" @click="checkout">
            Pagar
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  layout: 'home',
  data() {
    return {
      headers: [
        { text: 'Playera', align: 'center', sortable: false, value: 'name' },
        { text: 'Precio', align: 'center', sortable: true, value: 'price' },
        { text: 'Cantidad', align: 'center', sortable: true, value: 'quantity' },
        { text: 'Total', align: 'center', sortable: true, value: 'total' },
        { text: ' ', align: 'center', sortable: false, value: 'actions' }
      ],
      products: [],
      rules: {
        count: value => value > 0 && value <= 10
      }
    };
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get('http://localhost:6010/cart', { headers });
      const cartItems = response.data.cart.items;

      const productPromises = cartItems.map(async item => {
        const productResponse = await axios.get(`http://localhost:6010/product/${item.productId}`);
        const product = productResponse.data;
        return {
          ...item,
          price: parseFloat(product.price), // Fetch and parse the price from the product details
          name: product.name, // Assuming the product name is also fetched
          total: parseFloat(product.price) * item.quantity
        };
      });

      this.products = await Promise.all(productPromises);
    } catch (error) {
      console.error('Error fetching cart or products:', error);
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/home');
    },
    async addCount(item) {
      if (item.quantity < 10) {
        item.quantity += 1;
        await this.updateCartItem(item);
      }
    },
    async reduceCount(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        await this.updateCartItem(item);
      }
    },
    async removeFromCart(item) {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        await axios.post('http://localhost:6010/cart/remove', { productId: item.productId }, { headers });
        this.products = this.products.filter(product => product.productId !== item.productId);
      } catch (error) {
        console.error('Error removing item from cart:', error);
      }
    },
    async updateCartItem(item) {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        await axios.post('http://localhost:6010/cart/update', { productId: item.productId, quantity: item.quantity }, { headers });
        this.updateCart();
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    },
    updateCart() {
      this.products.forEach(product => {
        product.total = parseFloat(product.price) * product.quantity;
      });
    },
    async checkout() {
      console.log('Procesando pago...');
      // Add your checkout logic here
    },
    cancel() {
      this.fetchCart();
    },
    save(item) {
      this.updateCartItem(item);
    },
    open() {
      // Any necessary logic when opening the edit dialog
    },
    close() {
      // Any necessary logic when closing the edit dialog
    },
    async fetchCart() {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get('http://localhost:6010/cart', { headers });
        const cartItems = response.data.cart.items;

        const productPromises = cartItems.map(async item => {
          const productResponse = await axios.get(`http://localhost:6010/product/${item.productId}`);
          const product = productResponse.data;
          return {
            ...item,
            price: parseFloat(product.price), // Fetch and parse the price from the product details
            name: product.name, // Assuming the product name is also fetched
            total: parseFloat(product.price) * item.quantity
          };
        });

        this.products = await Promise.all(productPromises);
      } catch (error) {
        console.error('Error fetching cart or products:', error);
      }
    }
  },
  computed: {
    subtotal() {
      return this.products.reduce((acc, curr) => {
        return acc + (parseFloat(curr.price) * curr.quantity);
      }, 0);
    }
  }
};
</script>

<style>
.section-title {
  font-family: 'Poppins', 'sans-serif';
}
</style>
