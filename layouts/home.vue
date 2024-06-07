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
                <v-list-item-group class="d-flex align-center">
                    <v-list-item
                        link
                        v-for="(item, index) in navMenu"
                        :key="index"
                        class="mx-2 hidden-sm-and-down"
                        @click="$vuetify.goTo(item.target, options)"
                    >
                        <v-list-item-title class="font-weight-bold">{{item.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
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
            <!--Edit Dialog-->
            <v-dialog
                v-model="editDialog"
                width="448"
                persistent
            >
                <v-card width="448"  flat>
                    <v-btn
                        icon
                        @click="editDialog=false"
                    >
                        <v-icon>mdi-window-close</v-icon>
                    </v-btn>
                    <v-container class="px-12">
                        <h2 class="text-center pb-8">Editar cuenta</h2>
                        <v-form>
                            <v-text-field
                                v-model="editEmail"
                                label="Correo electrónico"
                                hint="example@email.com"
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="editPassword"
                                label="Nueva contraseña"
                                color="primary"
                                hint="Al menos 8 caracteres"
                                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPass ? 'text' : 'password'"
                                :rules="[rules.required, rules.min]"
                                @click:append="showPass = !showPass"
                                outlined
                                clearable
                                counter
                            >
                            </v-text-field>
                        </v-form>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                height="48"
                                block
                                depressed
                                @click=""
                            >
                                <span style="color: white;">Registrarme</span>
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                </v-card>
            </v-dialog>
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
    name: 'home',
    data(){
        return {
            editDialog: false,
            editEmail: null,
            editPassword: null,
            showPass: false,
            rules: {
                required: value => !!value || 'Campo requerido',
                min: v => (v && v.length >= 8) || 'Al menos 8 caracteres'
            },
            navMenu: [
                {title: 'Productos', target: "#products"},
                {title: 'Opiniones', target: "#opinions"},
                {title: 'Populares', target: "#popular"}
            ],
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
            ]
        }
    },
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

<style>
.img-logo:hover{
    cursor: pointer;
}
</style>