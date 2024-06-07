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
              @save="save"
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
            $ {{ item.price * item.quantity }}
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
            <span>$ {{ subtotal }}</span>
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
  created() {
    if (process.client) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      this.products = cart.map(product => ({
        ...product,
        total: product.price * product.quantity
      }));
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/home');
    },
    addCount(item) {
      if (item.quantity < 10) {
        item.quantity += 1;
        this.updateCart();
      }
    },
    reduceCount(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.updateCart();
      }
    },
    removeFromCart(item) {
      this.products = this.products.filter(product => product.id !== item.id);
      this.updateCart();
    },
    updateCart() {
      if (process.client) {
        this.products.forEach(product => {
          product.total = product.price * product.quantity;
        });
        localStorage.setItem('cart', JSON.stringify(this.products));
      }
    },
    checkout() {
      console.log('Procesando pago...');
      // Lógica para procesar el pago
    },
    cancel() {
      if (process.client) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.products = cart;
      }
    },
    save() {
      this.updateCart();
    },
    open() {
      // Any necessary logic when opening the edit dialog
    },
    close() {
      // Any necessary logic when closing the edit dialog
    }
  },
  computed: {
    subtotal() {
      return this.products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    }
  }
};
</script>

<style>
.section-title {
  font-family: 'Poppins', 'sans-serif';
}
</style>
