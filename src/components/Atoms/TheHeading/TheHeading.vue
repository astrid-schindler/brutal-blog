<template>
  <div class="flex flex-row items-center justify-center p-6 text-center font-mono text-6xl font-black uppercase tracking-[0.12em] text-stone-950 max-lg:px-4 max-lg:text-[clamp(2.5rem,7vw,4rem)] max-md:p-4 max-md:text-[clamp(1.75rem,10vw,3rem)] max-md:tracking-[0.06em]">
    <h1 class="pixel-heading max-w-full border-4 border-stone-950 bg-[var(--peace-lilac)] p-6 text-stone-950 shadow-[8px_8px_0_#1c1917,14px_14px_0_var(--peace-mint)] [overflow-wrap:anywhere] max-md:p-4">{{theHeadline}}</h1>
  </div>
</template>

<script>
export default {
  name: "TheHeading",
  props:{
    theHeadline : String,
  }
}
</script>

<style scoped>
.pixel-heading {
  animation: pixel-heading-shift 3.5s steps(3, end) infinite;
}

@keyframes pixel-heading-shift {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0.35rem, -0.25rem);
  }
}
</style>
