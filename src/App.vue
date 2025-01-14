<template>
  <v-app>
    <v-app-bar app>
      <v-row justify="center">
        <v-col cols="12" md="4">
          <router-link
          v-for="(next, i) in navBar"
          :key="i"
          :href="next.href"
          class="subheading mx-3"
          target="_blank"
        >
          {{ next.text }}
        </router-link>
        <router-view/>
      </v-col>
      </v-row>
    </v-app-bar>
    
    <v-main>
      <v-container fluid>
       <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" />
      </v-container>
    </v-main>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import PetCard from "./components/PetCard.vue";

export default {
  name: "App",

  components: {
    PetCard,
  },
  data: () => ({
    navBar: [
      {
        text: "Home",
        href: "",
      },
      {
        text: "Pets",
        href: "",
      },
      {
        text: "About",
        href: "",
      },
    ],
    pets: [
      {
        id: 1,
        name: "Luna",
        description:
          "A friendly dog looking for a home, loves to cuddle and massages.",
        breed: " Golden Retriever",
        image: "assets/images/pet_image.jpg",
      },
      {
        id: 2,
        name: "Sam",
        description: "Loves to purrrr",
        breed: " British short",
        image: "assets/images/pet_image.jpg",
      },
      {
        id: 3,
        name: "Mittens",
        description: " A playful kitten with lots of energy.",
        breed: " Tabby Cat",
        image: "assets/images/pet_image.jpg",
      },
    ],
  }),
};
</script>