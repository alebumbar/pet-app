<template>
  <v-col cols="12" md="4">
    <v-card class="mx-auto my-4" max-width="400">
      <v-img :src="pet.image" alt="Pet Image" height="200"></v-img>
      <v-card-title>{{ pet.name }}</v-card-title>
      <v-card-text>
        <div>{{ pet.description }}</div>
        <div><strong>Breed:</strong>{{ pet.breed }}</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "PetCard",
  props: {
    pet: {
      type: Object,
      required: true,
    },
  },
};
</script>
