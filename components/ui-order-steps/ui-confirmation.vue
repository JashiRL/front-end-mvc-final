<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-icon center>mdi-check</v-icon>
            </v-col>
            <v-col 
                cols="12"
                class="text-center"    
            >
                <h2 class="section-title">Orden confirmada</h2>
                <p>
                    ¡Gracias por tu compra! Haremos lo posible para que tu pedido llegué
                    lo antes posible

                </p>
            </v-col>
            <v-col cols="3">
            </v-col>
            <v-col cols="6" class="text-center">
                <v-btn
                    color="primary"
                    height="48"
                    elevation="0"
                    block
                    @click="backToHome"         
                >
                    Volver al inicio
                </v-btn>
                <div
                    class="py-8 text-center"
                >
                    <a href="">Imprimir recibo</a>
                </div>
            </v-col>
            <v-col cols="3">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiConfirmation',
    methods: {
        backToHome () {
            this.$router.push('/home')
        }
    }
}
</script>