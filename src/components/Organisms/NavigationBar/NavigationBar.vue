<template>
  <header class="minimal-navigation pointer-events-none z-50">
    <nav class="pointer-events-auto fixed left-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] top-[clamp(1rem,3vw,1.5rem)] z-50 grid grid-cols-12 items-start gap-x-[var(--layout-gap)] bg-white p-0 max-lg:grid-cols-8 max-md:grid-cols-4 max-md:gap-y-2 max-[480px]:grid-cols-[auto_minmax(0,1fr)]">
      <span class="col-span-1 inline-flex px-0 py-1 text-xs">A/S</span>
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

<style scoped>
.minimal-navigation,
.minimal-navigation :deep(*) {
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
</style>
