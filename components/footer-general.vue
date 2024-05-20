<template>
  <v-container>
    <div class="text-center">
      <h2>Newsletter</h2>
    </div>
    <v-row align="center" justify="center">
      <v-form ref="form"  lazy-validation>
        <v-text-field   label="E-mail" required>
          <template v-slot:append>
            <v-btn depressed  color="success">Aceptar</v-btn>
          </template>
        </v-text-field>
      </v-form>
    </v-row>
  </v-container>
</template>
