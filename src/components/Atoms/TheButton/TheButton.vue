<template>
  <button class="inline-flex items-center px-4 py-2 text-xs font-light tracking-normal text-ink hover:text-stone-500 max-md:max-w-full max-md:justify-center max-md:whitespace-normal max-md:text-center">
    <span>{{buttonText}}</span>
  </button>
</template>

<script setup>
/* global defineProps */
defineProps({
  buttonText: String,
});
</script>
