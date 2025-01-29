<template>
  <v-app>
    <v-app-bar app>
      <router-link id="logo" to="home">Pet Adoption App</router-link>
      <v-row justify="center">
        <v-col cols="auto" v-for="route in routes" :key="route.path">
          <div>
            <router-link :to="route.path" class="nav-link">{{
              route.name
            }}</router-link>
          </div>
          <router-view />
        </v-col>
      </v-row>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      routes: [],
    };
  },
  created() {
    return (this.routes = this.$router.options.routes);
  },
};
</script>

<style scoped>
#logo {
  text-decoration: none;
  color: black;
}
.nav-link {
  text-decoration: none;
  color: black;
}
</style>
