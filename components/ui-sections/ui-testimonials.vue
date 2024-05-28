<template>
   <v-container>
        <h2 class="section-title text-center">Testimonios</h2>
        <p class="text-center">Algunos comentarios de nuestros clientes</p>
        <v-row class="px-1">
            <v-col
                v-for="i in 3"
                :key="i"
                cols="12"
                sm="4"
            >
                <v-item>
                    <v-card
                        height="300"
                    >

                    </v-card>
                </v-item>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiTestimonials',
    data () {
        return {
            items: [
                {name: ''}
            ]
        }
    }
}
</script>