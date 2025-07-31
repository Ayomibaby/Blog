<template>
  <section
    class="bg-black h-[100vh] flex justify-between items-center text-white"
  >
    <div class="w-[50%] flex flex-col justify-center items-center">
      <div class="w-[60%]">
        <div class="">
          <h1 class="text-5xl text-left">Create your account</h1>
          <p class="text-[#f8f8f8] text-base mt-3 text-left">
            Sign up to explore more features
          </p>
        </div>

        <div class="mt-[60px]">
          <div class="input-container flex justify-center cursor-pointer">
            <div class="w-[20px] h-[20px]">
              <img
                src="@/assets/images/google-icon.png"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="p-2">Sign up with google</h3>
          </div>
          <div class="my-5 flex items-center gap-3">
            <hr class="grow" />
            <div class="text-center text-base font-medium">or sign up with</div>
            <hr class="grow" />
          </div>
          <form @submit.prevent="userSignup" class="mt-[20px]">
            <div>
              <label class="default-label"
                >Email address <span class="text-[#AE372A]">*</span></label
              >
              <div class="input-container">
                <img src="@/assets/images/sms.svg" />
                <input
                  class="default-input"
                  type="email"
                  placeholder="Enter email"
                  v-model="SignUpValues.email"
                />
              </div>
            </div>
            <div class="mt-3">
              <label class="default-label"
                >Password <span class="text-[#AE372A]">*</span></label
              >
              <div class="input-container">
                <img src="@/assets/images/lock.svg" />
                <input
                  class="default-input"
                  :type="passType ? 'text' : 'password'"
                  placeholder="Enter password"
                  v-model="SignUpValues.password"
                />
                <img
                  :src="getIcon()"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </div>
            </div>

            <button
              class="mt-5 w-[100%] bg-[#a2b18a] p-3 rounded-lg text-base font-medium rounded-lg cursor-pointer text-black flex justify-center gap-2 items-center disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              :disabled="disabled"
            >
              <ClipLoader color="black" v-if="isLoading" />
              <span v-else> Sign up </span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="w-[45%] h-full relative">
      <img
        src="@/assets/images/loginBg-2.jpg"
        class="h-[100%] w-[100%] object-cover"
      />
      <div class="inset-0 absolute bg-[#00000030]"></div>
    </div>
  </section>
</template>

<script>
import { signUp } from "@/store/Auth";

export default {
  name: "Sign up",
  data() {
    return {
      SignUpValues: {
        email: "",
        password: "",
      },

      passType: false,
      isLoading: false,
      disabled: true,
      isOpen: false,
    };
  },
  watch: {
    SignUpValues: {
      handler(newValue) {
        if (this.SignUpValues.email && this.SignUpValues.password) {
          this.disabled = false;
        } else {
          this.disabled = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    showOptions() {
      this.isOpen = true;
    },
    userSignup() {
      // email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;
      if (!emailRegex.test(this.SignUpValues.email)) {
        return;
      }
      signUp(this.SignUpValues.email, this.SignUpValues.password);
    },
    togglePassword() {
      this.passType = !this.passType;
    },
    getIcon() {
      return new URL(
        `../../assets/images/${this.passType ? "eye-crossed.svg" : "eye.svg"}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<style></style>
