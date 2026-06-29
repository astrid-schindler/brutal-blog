<template>
  <div class="heading-frame flex flex-row items-center justify-center p-6 text-center font-mono text-6xl font-light tracking-normal text-ink [perspective:900px] max-lg:px-4 max-lg:text-[clamp(2.5rem,7vw,4rem)] max-md:p-4 max-md:text-[clamp(1.75rem,10vw,3rem)]">
    <h1 class="section-heading relative isolate max-w-full origin-center animate-heading-float p-6 text-ink [overflow-wrap:anywhere] motion-reduce:animate-none max-md:p-4" :data-text="theHeadline">{{theHeadline}}</h1>
  </div>
</template>

<script setup>
/* global defineProps */
defineProps({
  theHeadline: String,
});
</script>

<style scoped>
:global(html[data-scroll-direction="up"]) .section-heading {
  animation-name: heading-float-up;
}

:global(html[data-scroll-direction="down"]) .section-heading {
  animation-name: heading-float-down;
}
</style>
