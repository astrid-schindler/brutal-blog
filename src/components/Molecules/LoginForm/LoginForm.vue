<template>
  <form class="login-form layout-main w-full max-w-sm mx-auto px-4 max-md:max-w-full max-md:px-0" @submit.prevent="$emit('submit-login')">
    <div class="floating-field group mb-6 text-left">
      <input type="text" name="username" id="floating_username" class="floating-control peer px-2 py-2.5 focus:border-stone-600" placeholder=" " required />
      <label for="floating_username" class="floating-label text-sm duration-300 peer-focus:left-2 peer-focus:text-stone-600">Benutzername</label>
    </div>
    <div class="floating-field group mb-6 text-left">
      <input type="password" name="password" id="floating_password" class="floating-control peer px-2 py-2.5 focus:border-stone-600" placeholder=" " required />
      <label for="floating_password" class="floating-label text-sm duration-300 peer-focus:left-2 peer-focus:text-stone-600">Passwort</label>
    </div>
    <the-button button-text="Log in!"></the-button>
  </form>
</template>

<script setup>
/* global defineEmits */
import TheButton from "@/components/Atoms/TheButton/TheButton";

defineEmits(["submit-login"]);
</script>
