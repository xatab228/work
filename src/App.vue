<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn @click="$router.push('/')" color="blue" icon text large>
        <v-icon>
          mdi-vuetify
        </v-icon>
      </v-btn>
      <v-spacer/>
      <v-btn @click="$router.push('/test')" color="black" icon text large>
        <v-icon>
          mdi-wrench
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="app-main">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.app-main {
}
</style>
