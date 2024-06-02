<template>
    <v-row>
            <v-col class="px-12">
                <v-stepper 
                    v-model="orderSteps" 
                    alt-labels
                    elevation="0"
                >
                    <v-stepper-header>
                        <v-stepper-step :complete="orderSteps > 1" step="1">
                            Mi carrito
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="orderSteps > 2" step="2">
                            Detalles
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step :complete="orderSteps > 3" step="3">
                            Envío
                        </v-stepper-step>
                        <v-divider></v-divider>
                        <v-stepper-step step="4">
                            Pago
                        </v-stepper-step>
                    </v-stepper-header>
                    <v-stepper-items>
                        <v-stepper-content step="2">
                            <ui-details />
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <ui-shipping />
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <ui-payment />
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-col>
            <v-divider
                vertical
                class="hidden-sm-and-down"
            >
            </v-divider>
            <v-col class="hidden-sm-and-down" style="background-color: #F2F2F2;">
                <ui-receipt />
            </v-col>
        </v-row>
</template>

<script>

import uiReceipt from '~/components/ui-order-steps/ui-receipt.vue'
import uiDetails from '~/components/ui-order-steps/ui-details.vue'
import uiShipping from '~/components/ui-order-steps/ui-shipping.vue'
import uiPayment from '~/components/ui-order-steps/ui-payment.vue'

export default {
    layout: 'order',
    components: {
        uiReceipt,
        uiDetails,
        uiShipping,
        uiPayment
    },
    data: () => ({
        orderSteps: 2,
    }),
    created () {
        this.$nuxt.$on('changeStep', ($event) => this.nextStep($event))
    },
    methods: {
        nextStep(e){
            console.log('TEST >>', e)
            this.orderSteps = e
        }
    }
}
</script>

<style>

</style>