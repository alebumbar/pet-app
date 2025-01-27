<template>
  <v-app>
    <v-app-bar app>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <router-link
            v-for="(next, i) in navBar"
            :key="i"
            :to="next.href"
            class="subheading mx-3"
          >
            {{ next.text }}
          </router-link>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    navBar: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Pets",
        href: "/pets",
      },
      {
        text: "About",
        href: "/about",
      },
    ],
  }),
};
</script>
