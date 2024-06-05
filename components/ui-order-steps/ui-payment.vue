<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center rounded-field">
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
                <div class="d-flex align-center rounded-field">
                    <h6 class="mr-4 text-subtitle-2" >Tipo de envío</h6>
                    <v-text-field
                        label="Tipo de envío"
                        solo
                        dense
                        hide-details
                        clearable
                        flat
                    >
                    </v-text-field>
                </div>
            </v-col>
            <v-col cols="12" >
                <h2 class="section-title py-6">Método de pago</h2>
                <div style="" class="outlined-card">
                    <div class="d-flex px-7 py-4 outlined-card-header">
                        <v-icon left color="primary">mdi-credit-card</v-icon>
                        <h3 class="text-left section-title">Tarjeta de crédito</h3>
                    </div>
                    <v-form>
                        <v-row class="mx-0 my-0 px-4 py-4">
                            <v-col cols="12">
                                <v-text-field
                                    label="Número de tarjeta"
                                    outlined
                                    hide-details
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Nombre del titular"
                                    outlined
                                    hide-details
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="Expiración (MM/YY)"
                                    outlined
                                    hide-details
                                    clearable
                                ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field
                                    label="CVV"
                                    outlined
                                    hide-details
                                    clearable
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </div>
            </v-col>
            <v-col cols="6" class="pt-8">
                <a class="" @click="$nuxt.$emit('changeStep', 3)">Regresar a envío</a>
            </v-col>
            <v-col cols="6" class="pt-8">
                <v-btn
                    color="primary"
                    height="48"
                    elevation="0"
                    block
                    @click="$nuxt.$emit('changeStep', 5)"         
                >
                    Finalizar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.outlined-card{
    border: 1px solid lightgray;
    border-radius: 1.25rem;
}

.outlined-card-header{
    border-radius: 1.25rem 1.25rem 0 0;
    color: #56B280;
    background: linear-gradient(to right, rgba(86, 178, 128, 0.2), rgba(86, 178, 128, 0.4));
}
</style>