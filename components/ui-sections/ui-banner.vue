<template>
    <v-container fluid class="banner-container">
        <v-card 
            width="348" 
            class="text-center"
            flat
        >
            <v-icon 
                color="primary"
                size="64"
            >
                mdi-tshirt-crew
            </v-icon>
            <v-card-text>
                <h2 class="section-title py-4">¡Videojuegos, pelis, animes y más!</h2>
                    <p class="text-subtitle-2">
                        Encuentra playeras de tus personajes favoritos a
                        los mejores precios
                    </p>
                </v-card-text>
        </v-card>
    </v-container>
    
</template>

<script>
export default {
    name: 'uiMain',
    data: () => ({
        background_img: "https://i.pinimg.com/originals/e4/3e/ad/e43ead7cd777bfdaeb4bb223852feaba.jpg"
    })
}
</script>

<style>
.banner-container{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/originals/e4/3e/ad/e43ead7cd777bfdaeb4bb223852feaba.jpg");
    background-size:cover;
    background-position: center;
    height: 32rem;
}
</style>