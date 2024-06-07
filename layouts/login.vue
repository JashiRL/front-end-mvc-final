<template>
  <v-app>
    <v-main>
      <ui-snackbar
        :text="message"
        :snackColor="snackColor"
        :timeout="timeout"
        v-model="showSnackbar"
      ></ui-snackbar>
      <v-row align-content="center" justify="center">
        <Nuxt />
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import UiSnackbar from '~/components/ui-components/ui-snackbar.vue';

export default {
  components: {
    UiSnackbar
  },
  data() {
    return {
      message: 'This is a snackbar message',
      snackColor: 'success',
      timeout: 3000,
      showSnackbar: false
    };
  },
  methods: {
    triggerSnackbar(message, color = 'info', timeout = 3000) {
      this.message = message;
      this.snackColor = color;
      this.timeout = timeout;
      this.showSnackbar = true;
    }
  }
};
</script>

<style>
</style>
