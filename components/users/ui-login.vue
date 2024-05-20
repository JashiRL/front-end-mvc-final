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
                    color="green"
                    :rules="[rules.required]"
                    outlined
                    clearable
                >
                </v-text-field>
                <v-text-field
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="userPassword"
                    label="Password"
                    color="green"
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
                    color="green"
                >
                    <span color="white">Log In</span>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                Don't have an account? Sign in
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="green"
                        >
                            <v-icon left>mdi-google</v-icon>
                            Log in with Google
                        </v-btn>
                        <v-btn 
                            block
                            outlined
                            depressed
                            color="green"
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
                required: v => !!v || 'Field required'
            }
        }
    }
}
</script>