<template>
  <form class="login-form layout-main w-full max-w-sm mx-auto px-4 max-md:max-w-full max-md:px-0" @submit.prevent="$emit('submit-login')">
    <div class="relative z-0 mb-6 group w-full text-left">
      <input type="text" name="username" id="floating_username" class="block py-2.5 w-full text-sm text-stone-700 bg-transparent border border-stone-700 appearance-none focus:outline-none focus:ring-0 focus:border-stone-600 px-2 peer" placeholder=" " required />
      <label for="floating_username" class="absolute left-2 top-3 bg-white px-1 text-sm duration-300 transform -translate-y-7 scale-75 origin-[0] peer-focus:left-2 peer-focus:text-stone-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 font-light tracking-normal text-stone-700 max-md:[overflow-wrap:anywhere]">Benutzername</label>
    </div>
    <div class="relative z-0 mb-6 group w-full text-left">
      <input type="password" name="password" id="floating_password" class="block py-2.5 w-full text-sm text-stone-700 bg-transparent border border-stone-700 appearance-none focus:outline-none focus:ring-0 focus:border-stone-600 px-2 peer" placeholder=" " required />
      <label for="floating_password" class="absolute left-2 top-3 bg-white px-1 text-sm duration-300 transform -translate-y-7 scale-75 origin-[0] peer-focus:left-2 peer-focus:text-stone-600 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-75 font-light tracking-normal text-stone-700 max-md:[overflow-wrap:anywhere]">Passwort</label>
    </div>
    <the-button button-icon="fa-envelope" button-text="Log in!"></the-button>
  </form>
</template>

<script>
import TheButton from "@/components/Atoms/TheButton/TheButton";

export default {
  name: "LoginForm",
  components: {TheButton},
  emits: ["submit-login"],
}
</script>
