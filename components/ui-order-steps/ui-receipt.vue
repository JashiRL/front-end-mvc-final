<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="(item, i) in cartList"
                :key="i"
                cols="12"
                class="py-1"
            >
                <v-card elevation="0" color="light_background" class="py-2">
                    <div class="d-flex flex-no-wrap">
                        <v-avatar width="120" height="120" class="mr-10" tile>
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                        <div>
                            <div class="d-flex m-0 p-0">
                                <v-card-subtitle
                                    class="py-1 subtitle-2"
                                    v-text="item.name"
                                >
                                </v-card-subtitle>
                                <v-card-subtitle
                                    class="py-1 subtitle-2"
                                >
                                    <strong>x{{ item.amount }}</strong>
                                
                                </v-card-subtitle>
                            </div>
                            <div class="m-0 p-0 primary--text">
                                <v-card-title class="py-1 text-h6">
                                    $ {{ item.price }}
                                </v-card-title>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    label="Cupón de descuento"
                    background-color="#FFFFFF"
                    outlined
                    dense
                >

                </v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn
                    height="40"
                    elevation="0"
                    color="background"
                    dark
                    flat
                >
                    Agregar
                </v-btn>
            </v-col>
            <v-col cols="12" class="py-5 ">
                <v-divider></v-divider>
                <div class="d-flex justify-space-between py-5">
                    <h6 class="text-subtitle-2">Subtotal</h6>
                    <h6 class="text-subtitle-2">$ {{ subtotal }}</h6>
                </div>
                <div class="d-flex justify-space-between py-5">
                    <h6 class="text-subtitle-2">Descuento</h6>
                    <h6 class="text-subtitle-2">{{ discount }}</h6>
                </div>
                <div class="d-flex justify-space-between py-5">
                    <h6 class="text-subtitle-2">Envío</h6>
                    <h6 class="text-subtitle-2">{{ shippingType }}</h6>
                </div>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
                <div class="d-flex justify-space-between">
                    <h6 class="text-h6">Total</h6>
                    <h6 class="text-h6">$ {{ total }}</h6>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiReceipt',
    data: () => ({
        cartList: [
            {
                name: "GBA Gengar",
                price: 250.00,
                details: "Talla: G",
                amount: 3,
                src: "https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489"
            },
            
        ]
    })
}
</script>