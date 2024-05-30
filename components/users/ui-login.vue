<template>
    <v-card width="348" flat class="py-10">
        <v-container>
            <h2 class="text-center">
                Welcome to Acid Pop
            </h2>
            <v-card-text class="text-center">
                Some additional text...
            </v-card-text>
            <v-form>
                <v-text-field
                    v-model="loginEmail"
                    label="Email"
                    hint="example@email.com"
                    color="primary"
                    :rules="[rules.required]"
                    outlined
                    clearable
                >
                </v-text-field>
                <v-text-field
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="loginPassword"
                    label="Password"
                    color="primary"
                    :type="showPass ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]"
                    @click:append="showPass = !showPass"
                    outlined
                    clearable
                >
                </v-text-field>
            </v-form>
            <v-card-actions>
                <v-btn
                    color="primary"
                    block
                    depressed
                    @click=""
                >
                    <span style="color: white;">Log In</span>
                </v-btn>
            </v-card-actions>
            <v-card-text class="text-center">
                Don't have an account? 
                <a color="primary" @click="signupDialog=true">Sign in</a>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="primary"
                            class="mb-3"
                        >
                            <v-icon left>mdi-google</v-icon>
                            Log in with Google
                        </v-btn>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="primary"
                        >
                            <v-icon left>mdi-microsoft</v-icon>
                            Log in with Microsoft
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-container>
        <!--Sign Up Dialog-->
        <v-dialog
            v-model="signupDialog"
            width="448"
            persistent
        >
        <v-card width="448"  flat>
                <v-btn
                    icon
                    @click="signupDialog=false"
                >
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
                <v-container class="px-12">
                    <h2 class="text-center pb-8">Crea una nueva cuenta</h2>
                    <v-form>
                        <v-text-field
                            v-model="signupEmail"
                            label="Correo electrónico"
                            hint="example@email.com"
                            outlined
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="signupPassword"
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
                    <v-checkbox v-model="checkTerms">
                        <template v-slot:label>
                            <div>
                                Estoy de acuerdo con los
                                <a href="">
                                    Términos y condiciones
                                </a>
                            </div>
                        </template>
                    </v-checkbox>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            block
                            depressed
                            :disabled="!checkTerms"
                            @click=""
                        >
                            <span style="color: white;">Sign up</span>
                        </v-btn>
                    </v-card-actions>

                </v-container>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            signupDialog: false,
            showPass: false,
            checkTerms: false,
            rules: {
                required: value => !!value || 'Campo requerido',
                min: v => (v && v.length >= 8) || 'Al menos 8 caracteres'
            }
        }
    }
}
</script>