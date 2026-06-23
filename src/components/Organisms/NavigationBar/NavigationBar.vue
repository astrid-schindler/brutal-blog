<template>
  <header class="pointer-events-none z-50 text-stone-950">
    <nav class="fixed top-[clamp(1rem,3vw,1.5rem)] left-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-50 grid grid-cols-12 items-start gap-x-[var(--layout-gap)] border-4 border-stone-950 bg-[var(--honey-light)] p-2 shadow-[6px_6px_0_#1c1917,12px_12px_0_var(--peace-lilac)] max-lg:grid-cols-8 max-md:grid-cols-4 max-md:gap-y-2 max-[480px]:grid-cols-[auto_minmax(0,1fr)]">
      <span class="pointer-events-auto col-span-1 inline-flex border-4 border-stone-950 bg-[var(--peace-mint)] px-2 py-1 font-mono text-xs font-black text-stone-950 animate__animated animate__fadeInDown hover:bg-stone-950 hover:text-white">A/S</span>
      <navigation-links @navigate="scrollToSection"></navigation-links>
    </nav>
  </header>
</template>

<script>
import NavigationLinks from "@/components/Molecules/NavigationLinks/NavigationLinks";

export default {
  name: "NavigationBar",
  components: {NavigationLinks},
  methods: {
    scrollToSection(target) {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({behavior: "smooth"});
        return;
      }

      if (target === "projects") {
        this.$router.push("/blog");
      }
    }
  },
}
</script>
