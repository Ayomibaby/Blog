<template>
  <section>
    <h1>SIgn up</h1>

    <form @submit.prevent="userSignup">
      <label>Email</label>
      <input type="email" placeholder="enter email" v-model="email" />

      <label>Password</label>
      <input type="password" placeholder="enter password" v-model="password" />

      <button type="submit">sign up</button>
    </form>
  </section>
</template>

<script>
import { signUp } from "@/store/Auth";

export default {
  name: "Sign up",
  data() {
    return {
      email: "",

      password: "",
    };
  },
  methods: {
    userSignup() {
      signUp(this.email, this.password);
    },
  },
};
</script>

<style></style>
