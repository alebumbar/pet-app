<template>
  <v-container class="pet-container">
    <div class="pet-card-wrapper">
      <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" />
    </div>
  </v-container>
</template>

<script>
import PetCard from "../components/PetCard.vue";
import petDetails from "../data.json";

export default {
  name: "PetsPage",
  components: {
    PetCard,
  },
  data() {
    return {
      pets: petDetails.pets,
    };
  },
};
</script>
