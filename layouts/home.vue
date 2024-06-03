<template>
    <v-app>
        <v-app-bar
            app
            elevation="4"
            class="px-12"
        >  
            <img src="@/assets/img/acid-pop-dark.png" width="168" height="27" alt="" />
            <v-spacer />
            <v-list color="transparent" class="d-flex justify-space-between py-0">
                <v-list-item-group class="d-flex align-center">
                    <v-list-item
                        link
                        v-for="(item, index) in navMenu"
                        :key="index"
                        :to="item.route"
                        class="mx-2 hidden-sm-and-down"
                    >
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                <v-menu
                    origin="center center"
                    transition="scale-transition"
                    open-on-hover
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
                        >
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
            <v-col
                cols="6"
                class="white--text"
            >
                ACID POP {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
            <v-btn
                v-for="link in 3"
                :key="link"
                color="white"
                text
                rounded
                class="my-2"
            >
                Header link
            </v-btn>
            <v-col
                class="text-center"
                cols="6"
                color="green"
            >
                
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'home',
    data(){
        return {
            navMenu: [
                {title: 'Discovery', route: 'discovery'},
                {title: 'About', route: 'about'},
                {title: 'Contact us', route: 'contact-us'}
            ],
            userOptions: [
                {title: 'Yo'},
                {title: 'Configuration'},
                {title: 'Log Out'}
            ]
        }
    },
    methods: {
        goToCart () {
            this.$router.push('/my-cart')
        }
    }
}
</script>

