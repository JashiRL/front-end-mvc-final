<template>
  <v-app>
    <v-app-bar app elevation="4" class="px-12">
      <img
        src="@/assets/img/acid-pop-dark.png"
        width="168"
        height="27"
        alt=""
        class="img-logo"
        @click="goToHome"
      />
      <v-spacer />
      <v-list color="transparent" class="d-flex justify-space-between py-0">
        <v-list-item-group class="d-flex align-center">
          <v-list-item
            link
            v-for="(item, index) in navMenu"
            :key="index"
            :to="item.route"
            class="mx-2 hidden-sm-and-down"
          >
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-menu
          origin="center center"
          transition="scale-transition"
          open-on-hover
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="background"
              icon
            >
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in userOptions"
              :key="index"
              @click="handleUserOptionClick(item.action)"
              :style="item.action === 'logout' ? 'background-color: red; color: white;' : ''"
            >
              <v-list-item-content>
                <div class="d-flex">
                  <v-icon left v-html="item.icon"></v-icon>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn
          color="background"
          icon
          @click="goToCart"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-list>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer
      color="background"
      padless
      class="px-12"
    >
      <v-row class="mx-0 my-0">
        <v-col
          cols="12"
          sm="6"
          class="d-flex align-center justify-center "
        >
          <img
            src="@/assets/img/acid-pop-light.png"
            width="168"
            height="27"
            alt=""
            class="img-logo"
            @click="goToHome"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          class="text-center"
        >
          <v-btn
            v-for="(item, index) in footerMenu"
            :key="index"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>

    <UiSnackbar
      v-model="snackbar"
      :text="snackbarText"
      :color="snackbarColor"
      :timeout="3000"
    />
  </v-app>
</template>

<script>
import UiSnackbar from "@/components/ui-components/ui-snackbar";

export default {
  name: 'Home',
  components: {
    UiSnackbar
  },
  data() {
    return {
      navMenu: [
        { title: 'Productos', route: '/discovery' },
        { title: 'Opiniones', route: '/about' },
        { title: 'Populares', route: '/contact-us' }
      ],
      defaultOptions: [
        { title: 'Log in', icon: 'mdi-login', action: 'goToLogin' }
      ],
      loggedUserOptions: [
        { title: 'Yo', icon: 'mdi-account' },
        { title: 'Mis pedidos', icon: 'mdi-package-variant' },
        { title: 'Editar cuenta', icon: 'mdi-account-cog-outline' },
        { title: 'Cerrar sesión', icon: 'mdi-logout', action: 'logout' }
      ],
      footerMenu: [
        { title: 'Acerca de' },
        { title: 'Contacto' },
        { title: 'Términos' }
      ],
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'info',
      userOptions: [] // This will dynamically hold the user options based on login status
    }
  },
  created() {
    this.updateOptions();
  },
  methods: {
    updateOptions() {
      if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem("token");
        this.userOptions = token ? this.loggedUserOptions : this.defaultOptions;
      }
    },
    goToHome() {
      this.$router.push('/home')
    },
    goToLogin() {
      this.$router.push('/') // Change to the correct login route
    },
    goToCart() {
      this.$router.push('/my-cart');
      this.scrollToTop();
    },
    logout() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.snackbarText = "No token found. Please log in first.";
        this.snackbarColor = "red";
        this.showSnackbar();
        this.$router.push("/");
        return;
      }

      const url = "/logout";
      this.$axios
        .post(url, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("token");
            this.$router.push("/");
            this.snackbarText = "Logout successful.";
            this.snackbarColor = "green";
            this.showSnackbar();
            this.updateOptions(); // Update options after logout
          }
        })
        .catch((err) => {
          this.snackbarText = "Logout failed. Please try again.";
          this.snackbarColor = "red";
          this.showSnackbar();
        });
    },
    showSnackbar() {
      this.snackbar = true;
      setTimeout(() => {
        this.snackbar = false;
      }, 3000); // Close the snackbar after 3 seconds
    },
    updateSnackbar(message, color) {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.showSnackbar();
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
      });
    },
    handleUserOptionClick(action) {
      if (action === 'logout') {
        this.logout();
      } else if (action === 'goToLogin') {
        this.goToLogin();
      }
    }
  },
  watch: {
    // Watch for changes in localStorage to update options dynamically
    userOptions: {
      handler() {
        this.updateOptions();
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.img-logo:hover {
  cursor: pointer;
}
</style>
