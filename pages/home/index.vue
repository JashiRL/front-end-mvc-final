<template>
    <v-container>
        <ui-products />
        <ui-testimonials />
        <ui-popular />
    </v-container>
</template>



<script>

import uiProducts from '~/components/ui-sections/ui-products.vue'
import uiTestimonials from '~/components/ui-sections/ui-testimonials.vue'
import uiPopular from '~/components/ui-sections/ui-popular.vue'


export default {
    name: 'HomePage',
    layout: 'home',
    components: {
        uiProducts,
        uiTestimonials,
        uiPopular
    }
}
</script>