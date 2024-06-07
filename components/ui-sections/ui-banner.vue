<template>
    <v-container fluid class="banner-container">
        <v-card 
            width="480" 
            class="text-center"
            flat
        >
            <v-container>
                <v-icon 
                    color="primary"
                    size="64"
                >
                    mdi-tshirt-crew
                </v-icon>
                <v-card-text>
                    <h2 v-text="cardInfo[0]" class="section-title py-4"></h2>
                    <p v-text="cardInfo[1]" class="text-subtitle-2"></p>
                </v-card-text>
                <v-btn
                    color="primary"
                    height="48"
                    depressed
                    @click="$vuetify.goTo('#products', options)"
                >
                    Explorar
                </v-btn>
            </v-container>
        </v-card>
    </v-container>
    
</template>

<script>
export default {
    name: 'uiMain',
    data: () => ({

        cardInfo: [
            "¡Videojuegos, pelis, anime y más!",
            "Encuentra playeras de tus personajes favoritos a los mejores precios"
        ],
        background_img: "https://i.pinimg.com/originals/e4/3e/ad/e43ead7cd777bfdaeb4bb223852feaba.jpg"
    })
}
</script>

<style>
.banner-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-image: url("https://i.pinimg.com/originals/e4/3e/ad/e43ead7cd777bfdaeb4bb223852feaba.jpg");
    background-size:cover;
    background-position: center;
    height: 32rem;
}
</style>