<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent="logIn">
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First name"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
      ></v-text-field>

      <v-btn class="mt-2" type="submit" block>Login</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length >= 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    password: "123",
    passwordRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
  methods: {
    logIn() {
      window.user = this.username;
      this.router.push({name: 'Protected'})
    },
  },
};
</script>
