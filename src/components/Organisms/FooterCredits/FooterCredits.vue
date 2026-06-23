<template>
  <footer class="pointer-events-none text-stone-950">
    <p class="pointer-events-auto fixed left-[clamp(1rem,3vw,2rem)] bottom-[clamp(1rem,3vw,2rem)] z-50 border-2 border-stone-950 bg-[var(--brutal-lime)] px-3 py-2 font-mono text-sm font-black tracking-[.12em] shadow-[5px_5px_0_#1c1917] max-md:left-auto max-md:right-[clamp(1rem,3vw,2rem)] max-md:max-w-[calc(100vw-(2*clamp(1rem,3vw,2rem)))] max-md:text-right max-md:text-xs max-md:leading-6 max-[480px]:text-[0.65rem]">
      <a href="#" class="hover:text-red-500"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
      <a href="#" class="hover:text-red-500"><font-awesome-icon class="pl-6" icon="fa-brands fa-twitter" /></a>
      <a href="#" class="hover:text-red-500"><font-awesome-icon class="pl-6" icon="fa-brands fa-behance" /></a>
      <a href="#" class="hover:text-red-500"><font-awesome-icon class="pl-6" icon="fa-solid fa-envelope" /></a>
      <span class="pl-2 text-xs tracking-tighter text-stone-950"> | © 2026 by Astrid Schindler | All rights reserved.</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterCredits"
}
</script>
