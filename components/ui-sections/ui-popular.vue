<template>
    <v-container>
        <h2 class="section-title text-center">Popular</h2>
        <p class="text-center">Nuestros productos más vendidos</p>
        <v-row class="products-container">
            <v-col
                v-for="(item, index) in products"
                :key="index"
                class="item-container"
            >
            <v-item-group>
              <v-item>
                <v-card  
                      color=""
                      class=""
                  >
                      <v-container class="px-4 pt-4">
                          <img
                              width="232"
                              height="232"
                              class="" 
                              :src="item.img" 
                              alt=""
                          >
                          <v-card-text class="bold">
                              <h5 class="text-h5" >{{ item.name }}</h5>
                              <h6 class="text-h6 item-price" >$ {{ item.price }}</h6>
                          </v-card-text>
                          
                      </v-container>    
                  </v-card>
              </v-item>
            </v-item-group>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'uiPopular',
    data: () => ({
        products: [
            { name: 'Yop', price: '199', img: 'https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489' },
            { name: 'Yop', price: '299', img: 'https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489' },
            { name: 'Yop', price: '399', img: 'https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489' },
            { name: 'Yop', price: '499', img: 'https://lemongamesmx.com/cdn/shop/collections/Tokyogang_900x_480x_c5621255-6510-4835-8555-1c88b5044c5e_1200x1200.jpg?v=1669355489' }
        ]
    })
}
</script>

<style>
.products-container{
    flex-wrap: wrap;
    justify-content: center;
}

.item-container{
    max-width: 18rem; /*284px, 250px*/
    flex-basis: 16.5rem;
    flex-grow: 1;
}

.item-price{
    color: #56B280;
}
</style>