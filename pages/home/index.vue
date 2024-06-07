<template>
    <v-container>
        <ui-banner />
        <ui-products id="products" />
        <ui-testimonials id="opinions" />
        <ui-popular id="popular" />
    </v-container>
</template>



<script>
import uiBanner from '~/components/ui-sections/ui-banner.vue'
import uiProducts from '~/components/ui-sections/ui-products.vue'
import uiTestimonials from '~/components/ui-sections/ui-testimonials.vue'
import uiPopular from '~/components/ui-sections/ui-popular.vue'


export default {
    name: 'HomePage',
    layout: 'home',
    components: {
        uiBanner,
        uiProducts,
        uiTestimonials,
        uiPopular
    }
}
</script>