<template>
    <v-card flat>
        <v-container>

            <v-card-title>
                Welcome to CandleShop
            </v-card-title>
            <v-card-text>

            </v-card-text>
            <v-form>
                <v-text-field
                    v-model="userEmail"
                    label="Email"
                    hint="example@email.com"
                    color="#56B280"
                    :rules="[rules.required]"
                    outlined
                    clearable
                >
                </v-text-field>
                <v-text-field
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="userPassword"
                    label="Password"
                    color="#56B280"
                    :type="showPass ? 'text' : 'password'"
                    :rules="[rules.required]"
                    @click:append="showPass = !showPass"
                    outlined
                    clearable
                >
                </v-text-field>
            </v-form>
            <v-card-actions>
                <v-btn
                    block
                    depressed
                    color="#56B280"
                >
                    <span style="color: white;">Log In</span>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                Don't have an account? 
                <a style="color: #56B280">Sign in</a>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="#56B280"
                            class="mb-3"
                        >
                            <v-icon left>mdi-google</v-icon>
                            Log in with Google
                        </v-btn>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="#56B280"
                        >
                            <v-icon left>mdi-microsoft</v-icon>
                            Log in with Microsoft
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data () {
        return {
            showPass: false,
            rules: {
                required: value => !!value || 'Field required'
            }
        }
    }
}
</script>