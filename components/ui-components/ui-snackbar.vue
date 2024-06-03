<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="snackColor"
    >
        {{ text }}
        <v-btn
            color="primary"
            text
            v-bind="attrs"
            @click="snackbar=false"
        >
            Cerrar
        </v-btn>
    </v-snackbar>
</template>

<script>
export default {
    name: 'uiSnackbar',
    data: () => ({
        snackbar: false,
        timeout: 5000,
        text: ''

    }),
    props: {

    }
}
</script>