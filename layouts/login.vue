<template>
    <v-app>
        <v-main>
            <ui-snackbar
                :text="Message"
            >

            </ui-snackbar>
            <v-row align-content="center" justify="center">
                <Nuxt />
            </v-row>
        </v-main>
    </v-app>
</template>


<script>
export default {

}
</script>