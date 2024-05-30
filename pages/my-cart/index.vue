<template>
    <v-container>
        <div class="text-center pb-10">
            <h2 class="section-title py-4">Mi carrito</h2>
            <a href="" class="">Regresar al inicio</a>
        </div>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="products"
                    block
                    hide-default-footer
                >
                    <template v-slot:item.quantity="props">
                        <v-edit-dialog
                            :return-value.sync="props.item.quantity"
                            large
                            persistent
                            @save="save"
                            @cancel="cancel"
                            @open="open"
                            @close="close"
                        >
                            <div>{{  props.item.quantity }}</div>
                            <template v-slot:input>
                                <div class="mt-4">
                                    Editar cantidad
                                </div>
                                <v-text-field
                                    v-model="props.item.quantity"
                                    :rules="[rules.count]"
                                    type="number"
                                    prepend-inner-icon="mdi-plus"
                                    append-icon="mdi-minus"
                                    single-line
                                    autofocus
                                    
                                    
                                    outlined
                                    dense
                                    
                                    @click:prepend-inner="addCount"
                                    @click:append="reduceCount"
                                    
                                >
                                </v-text-field>
                            </template>
                        </v-edit-dialog>
                    </template>
                    <template v-slot:item.actions="{ item }"> <!--#[`item.crudActions`] = {item}-->
                        <v-btn
                            icon
                            color="red"
                            @click=""
                        >
                            <v-icon>mdi-window-close</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-col>
            <v-row class="mx-0 my-0 px-3">
                <v-col cols="4" sm="6">
                </v-col>
                <v-col cols="8" sm="6" class="d-flex flex-row justify-space-between align-center">
                    <div>
                        <h6>Subtotal</h6>
                        <span>$ { subtotal }</span>
                    </div>
                <v-btn
                    color="primary"
                    width="120"
                    flat
                    
                >
                    Pagar
                </v-btn>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'home',
    data: () => ({
        headers: [
            {
                text: 'Playera',
                align: 'center',
                sortable: false,
                value: 'name'
            },
            {
                text: 'Price',
                align: 'center',
                sortable: false,
                value: 'price' 
            },
            {
                text: 'Quantity',
                align: 'center',
                sortable: false,
                value: 'quantity' 
            },
            {
                text: 'Total',
                align: 'center',
                sortable: true,
                value: 'total' 
            },
            {
                text: ' ',
                align: 'center',
                sortable: false,
                value: 'actions'
            }
          
        ],
        products: [
            {
                name: 'Playera Gengar',
                price: 200,
                quantity: 2,
                total: 400
            },
            {
                name: 'Playera Zelda',
                price: 200,
                quantity: 2,
                total: 400
            }
        ],
        shirtCount: 1,
        rules: {
            count: value => value > 0 && value <= 10
        }
    }),
    created () {
        
    },
    methods: {
        addCount () {
            if(props.item.quantity < 10){
                props.item.quantity += 1
            }
        },
        reduceCount () {
            if(props.item.quantity > 1){
                props.item.quantity -= 1
            }
        }
    }
}
</script>