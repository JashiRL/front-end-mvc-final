<template>
   <v-container class="py-10">
        <h2 class="section-title text-center">Testimonios</h2>
        <p class="text-center">Algunos comentarios de nuestros clientes</p>
        <v-row class="px-1">
            <v-col
                v-for="(item, index) in users"
                :key="index"
                cols="12"
                md="4"
            >
                <v-item>
                    <v-card
                        height="288"
                    >
                        <v-container>
                            <div class="pb-8 text-center">
                                <v-avatar
                                    class="ma-3"
                                    size="64"
                                >
                                    <v-img :src="item.src"></v-img>
                                </v-avatar>
                                <v-rating
                                    length="5"
                                    size="24"
                                    :value="item.rating"
                                    readonly
                                >
                                </v-rating>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6">"{{ item.review }}"</h4>
                                <v-card-subtitle v-text="item.name"></v-card-subtitle>
                            </div>
                        </v-container>
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
                { name: 'Tomás', rating: 5, review: 'Las mejores playeras del mundo', src: 'https://randomuser.me/api/portraits/men/1.jpg' },
                { name: 'Christina', rating: 5, review: 'Compraría sin dudarlo otra vez', src: 'https://randomuser.me/api/portraits/women/2.jpg' },
                { name: 'Jashi', rating: 4.5, review: 'No soporté', src: 'https://randomuser.me/api/portraits/men/5.jpg' }
            ]
        }
    }
}
</script>