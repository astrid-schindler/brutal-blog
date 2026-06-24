<template>
  <footer class="minimal-footer pointer-events-none">
    <p class="pointer-events-auto fixed bottom-[clamp(1rem,3vw,2rem)] left-[clamp(1rem,3vw,2rem)] z-50 text-sm max-md:left-auto max-md:right-[clamp(1rem,3vw,2rem)] max-md:max-w-[calc(100vw-(2*clamp(1rem,3vw,2rem)))] max-md:text-right max-md:text-xs max-md:leading-6 max-[480px]:text-[0.65rem]">
      <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
      <a href="#"><font-awesome-icon class="pl-6" icon="fa-brands fa-twitter" /></a>
      <a href="#"><font-awesome-icon class="pl-6" icon="fa-brands fa-behance" /></a>
      <a href="#"><font-awesome-icon class="pl-6" icon="fa-solid fa-envelope" /></a>
      <span class="pl-2 text-xs"> | © 2026 by Astrid Schindler | All rights reserved.</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterCredits"
}
</script>

<style scoped>
.minimal-footer,
.minimal-footer :deep(*) {
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-weight: 300;
  letter-spacing: 0;
  text-transform: none;
  background: transparent;
  border: 0;
  box-shadow: none;
  animation: none;
}

.minimal-footer a {
  text-decoration: none;
}

.minimal-footer a:hover,
.minimal-footer a:focus-visible {
  text-decoration: underline;
  text-underline-offset: 0.18em;
  outline: none;
}
</style>
