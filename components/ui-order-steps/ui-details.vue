<template>
    <v-container>
        <div class="text-left pb-10">
            <h2 class="section-title py-4">Contacto</h2>
            <v-text-field
                v-model="userContact"
                label="Correo electrónico"
                outlined
                clearable
                hide-details
            >
            </v-text-field>                    
        </div>
        <div class="text-left">
            <h2 class="section-title py-4">Dirección de entrega</h2>
            <v-form>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            label="Nombre"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            label="Apellido(s)"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="Dirección y número"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="Notas adicionales (opcional)"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="4">
                        <v-text-field
                            label="Ciudad"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="4">
                        <v-text-field
                            label="Código Postal"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="4">
                        <v-text-field
                            label="Provincia"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" sm="12">
                        <v-text-field
                            label="País/Región"
                            outlined
                            clearable
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" class="pt-8">
                        <a 
                            class=""
                            @click="goToCart"
                        >
                            Regresar al carrito</a>
                    </v-col>
                    <v-col cols="6" class="pt-8">
                        <v-btn
                            color="primary"
                            height="48"
                            elevation="0"
                            block
                            @click="$nuxt.$emit('changeStep', 3)"
                        >
                            Ir a envío
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>    
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'uiDetails',
    methods: {
        goToCart () {
            this.$router.push('/my-cart')
        }
    }
}
</script>