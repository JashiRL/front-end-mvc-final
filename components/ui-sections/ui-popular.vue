<template>
    <v-container>
        <h2 class="section-title text-center">Popular</h2>
        <p class="text-center">Nuestros productos más vendidos</p>
        <v-row style="justify-content: center; flex-wrap: wrap">
            <v-col
                v-for="n in 4"
                :key="n"
                style="max-width: 284px; flex-basis: 250px; flex-grow: 1;"
            >
                <v-item>
                    <v-card
                        height="260"
                        color="background"
                    >

                    </v-card>
                </v-item>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiPopular'
}
</script>