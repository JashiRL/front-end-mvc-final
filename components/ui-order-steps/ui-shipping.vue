<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center radio-option">
                    <h6 class="mr-4 text-subtitle-2" >Enviar a</h6>
                    <v-text-field
                        label="Dirección"
                        solo
                        dense
                        hide-details
                        clearable
                        flat
                    >
                    </v-text-field>
                </div>
            </v-col>
            <v-col cols="12">
                <h2 class="section-title py-4">Forma de envío</h2>
                <v-radio-group
                    v-model="shipOptions"
                >
                    <div class="d-flex align-center justify-space-between radio-option">
                        <v-radio
                            label="Envío estándar"
                            value="standard-ship"
                        >
                        </v-radio>
                        <strong>Gratis</strong>
                    </div>
                
                    <div class="d-flex align-center justify-space-between radio-option">
                        <v-radio
                            label="Envío rápido"
                            value="fast-ship"
                        >
                        </v-radio>
                        <strong>$ 100.00</strong>
                    </div>
                </v-radio-group>
            </v-col>
            <v-col cols="6">
                <a 
                    class=""
                    @click="$nuxt.$emit('changeStep', 2)"
                >
                    Regresar a Detalles
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
                    Ir al pago
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiShipping',
    data: () => ({
        
    }),
    methods: {
        
    }
}
</script>

<style>
.radio-option{
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
}

.radio-option:hover{
    border: 1px solid #56B280;
}




</style>