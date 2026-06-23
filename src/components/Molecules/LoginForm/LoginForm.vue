<template>
  <form class="layout-main w-full max-w-sm mx-auto max-md:max-w-full" @submit.prevent="$emit('submit-login')">
    <div class="relative z-0 mb-6 group w-full text-left">
      <input type="text" name="username" id="floating_username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-4 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-stone-600 pl-2 peer" placeholder=" " required />
      <label for="floating_username" class="peer-focus:font-medium absolute pl-2 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-medium tracking-widest text-black max-md:tracking-[0.16em] max-md:[overflow-wrap:anywhere]">Benutzername</label>
    </div>
    <div class="relative z-0 mb-6 group w-full text-left">
      <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-4 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:border-stone-600 pl-2 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute pl-2 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-medium tracking-widest text-black max-md:tracking-[0.16em] max-md:[overflow-wrap:anywhere]">Passwort</label>
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
