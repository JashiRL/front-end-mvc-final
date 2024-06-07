<template>
    <v-app>
        <v-app-bar
            app
            elevation="4"
            class="px-12"
        >  
            <img 
                src="@/assets/img/acid-pop-dark.png" 
                width="168" 
                height="27" 
                alt=""
                class="img-logo" 
                @click="goToHome"
            />
            <v-spacer />
            <v-list 
                color="transparent" 
                class="d-flex justify-space-between py-0"
                flat
            >
                <v-menu
                    origin="center center"
                    transition="scale-transition"
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            color="background"
                            icon
                        >
                            <v-icon>mdi-account-outline</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                            v-for="(item, index) in userOptions"
                            :key="index"
                            link
                        >
                            <v-list-item-content @click="isOptionSelected(index)">
                                <div class="d-flex">
                                    <v-icon left v-text="item.icon"></v-icon>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <v-btn 
                    color="background" 
                    icon
                    @click="goToCart"
                >
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
            </v-list>
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
        <v-footer 
            color="background" 
            padless
            class="px-12"
        >
            <v-row class="mx-0 my-0">
                <v-col
                    cols="12"
                    sm="6"
                    class="d-flex align-center justify-center "
                >
                    <img 
                        src="@/assets/img/acid-pop-light.png" 
                        width="168" 
                        height="27" 
                        alt=""
                        class="img-logo" 
                        @click="goToHome"
                    />
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    class="text-center"
                >
                <v-btn
                    v-for="(item, index) in footerMenu"
                    :key="index"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ item.title }}
                </v-btn>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'default',
    data: () => ({
        userOptions: [
            { title: '', icon: '' },
            { title: 'Mis pedidos', icon: 'mdi-package-variant', action: 'logout' },
            { title: 'Editar cuenta', icon: 'mdi-account-cog-outline', action: 'logout' },
            { title: 'Cerrar sesión', icon: 'mdi-logout', action: 'logout' }
        ],
        footerMenu: [
            { title: 'Acerca de', },
            { title: 'Contacto' },
            { title: 'Términos'}
        ],
    }),
    methods: {
        goToHome () {
            this.$router.push('/home')
        },

        goToCart () {
            this.$router.push('/my-cart')
        },
        isOptionSelected(i){
            var pagePath = ''
            switch(i){
                case 1:
                    pagePath = '/my-orders'
                break
                case 2:
                    pagePath = '/edit-account'
                break
                case 3:
                    pagePath = '/'
                break
                default:
                    pagePath = '/error'
            }

            this.$router.push(pagePath)
            console.log('PATH', i)
        }
    }
}
</script>