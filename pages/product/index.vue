<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                sm="6"
            >
                <v-img
                    :width="480"
                    src="https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489"
                >
                </v-img>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <h4 class="text-h4">{ Shirt name }</h4>
                <h6 class="text-h6 pb-10">
                    $ { price }
                </h6>
                <v-form>
                    <v-row>

                        <v-col cols="12">
                            <span class="font-weight-medium">Talla: XG</span>
                        </v-col>
                        <v-col cols="12">
                            <span class="font-weight-medium">Cantidad:</span>
                        </v-col>
                        <v-col cols="5" md="4" lg="3">
                            <v-text-field
                                v-model="shirtCount"
                                type="number"
                                prepend-inner-icon="mdi-plus"
                                append-icon="mdi-minus"
                                class="centered-input"
                                :rules="[rules.count]"
                                hide-spin-buttons
                                outlined
                                dense
                                readonly
                                @click:prepend-inner="addCount"
                                @click:append="reduceCount"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn
                                v-model="addToCart"
                                color="primary"
                                height="48"
                                block
                                depressed
                            >
                                <v-icon left>mdi-cart</v-icon>
                                Añadir al carrito
                            </v-btn>
                        </v-col>

                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'home',
    data () {
        return {
            shirtCount: 1,
            rules: {
                count: value => value > 0 && value <= 10
            }
        }
    },
    methods: {
        addCount () {
            if(this.shirtCount < 10){
                this.shirtCount += 1
            }
        },
        reduceCount () {
            if(this.shirtCount > 1){
                this.shirtCount -= 1
            }
        }
    }
}
</script>

<style>
.text-h6{
    color: #56B280;
}

.centered-input input{
    text-align: center;
}
</style>
