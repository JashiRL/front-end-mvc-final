<template>
    <v-container>
        <h2 class="section-title text-center">Products</h2>
        <p class="text-center">Ordena para ti o para tus seres queridos</p>
        <v-row style="justify-content: center; flex-wrap: wrap;">
            <v-col
                v-for="n in 8"
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
    name: 'uiProducts'
}
</script>

<style>
.section-title{
    font-family: 'Poppins', 'sans-serif';
}
</style>