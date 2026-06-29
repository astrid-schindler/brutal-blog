<template>
  <div class="content-card max-lg:mx-auto max-lg:max-w-compact max-lg:text-center">
    <p class="mb-[clamp(1.5rem,4vw,2.5rem)] mt-0 text-left max-lg:text-center">
      Short notes are perfect. Send the rough version first; we can make it pretty later.
    </p>
    <form ref="form" class="grid gap-[1.35rem] max-lg:justify-items-center" @submit.prevent="$emit('submit-form', $refs.form)">
      <div class="floating-field group">
        <input type="email" name="user_email" id="floating_email" class="floating-control peer" placeholder=" " required />
        <label for="floating_email" class="floating-label">Your e-mail address</label>
      </div>
      <div class="floating-field group">
        <input type="text" name="user_name" id="floating_name" class="floating-control peer" placeholder=" " required />
        <label for="floating_name" class="floating-label">Your name</label>
      </div>
      <div class="floating-field group">
        <textarea rows="5" name="message" id="floating_message" class="floating-control peer" placeholder=" " required />
        <label for="floating_message" class="floating-label">Your message</label>
      </div>
      <the-button class="px-4 py-3 hover:text-ink max-lg:justify-center" button-text="Get it out!"></the-button>
    </form>
  </div>
</template>

<script setup>
/* global defineEmits */
import TheButton from "@/components/Atoms/TheButton/TheButton";

defineEmits(["submit-form"]);
</script>
