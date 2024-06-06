<template>
   <v-container>
        <h2 class="section-title text-center">Testimonios</h2>
        <p class="text-center">Algunos comentarios de nuestros clientes</p>
        <v-row class="px-1">
            <v-col
                v-for="(item, index) in users"
                :key="index"
                cols="12"
                sm="4"
            >
                <v-item>
                    <v-card
                        height="300"
                    >
                        <v-avatar>
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <div class="text-center">
                            <h4 v-text="item.review" class="text-h6"></h4>
                            <v-card-subtitle v-text="item.name"></v-card-subtitle>
                        </div>
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
            users: [
                { name: 'Juan', review: 'Las mejores del mundo', src: '' },
                { name: 'Juan', review: 'Compraría sin dudarlo otra vez', src: '' },
                { name: 'Juan', review: 'No soporté', src: '' }
            ]
        }
    }
}
</script>