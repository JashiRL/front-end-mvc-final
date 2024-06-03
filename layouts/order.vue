<template>
    <v-app>
        <v-app-bar
            app
            elevation="0"
            class="px-sm-12"
        >
            <img src="@/assets/img/acid-pop-dark.png" width="168" height="27" alt="" />
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'order'
}
</script>