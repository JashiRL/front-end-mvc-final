<template>
    <v-container>
        <div>
            
        </div>
        <div>
            <h2 class="section-title">Método de pago</h2>
            <v-form>
                <v-row>
                    <v-col cols="6">
                <a 
                    @click="$nuxt.$emit('changeStep', 3)"
                >
                    Regresar a Envío
                </a>
            </v-col>
            <v-col cols="6">
                <v-btn
                    color="primary"
                    height="48"
                    elevation="0"
                    block
                    @click="$nuxt.$emit('changeStep', 4)"         
                >
                    Finalizar
                </v-btn>
            </v-col>
                </v-row>
            </v-form>
        </div>
    </v-container>
</template>

<script>
export default {

}
</script>