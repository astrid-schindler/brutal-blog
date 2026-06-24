<template>
  <p class="navigation-links pointer-events-auto col-start-3 col-end-[-1] flex flex-wrap justify-end gap-x-4 gap-y-1 text-xs max-md:col-start-2 max-md:justify-start max-md:text-[0.68rem] max-[480px]:col-start-2">
    <a
      v-for="item in items"
      :key="item.label"
      href="#"
      @click.prevent="$emit('navigate', item.target)"
    >
      {{ item.label }}
    </a>
  </p>
</template>

<script>
export default {
  name: "NavigationLinks",
  emits: ["navigate"],
  props: {
    items: {
      type: Array,
      default: () => [
        {label: "Home", target: "home"},
        {label: "About", target: "about"},
        {label: "Skills/Interests", target: "skills"},
        {label: "Photography", target: "photography"},
        {label: "Projects", target: "projects"},
        {label: "Contact", target: "contact"},
      ],
    },
  },
}
</script>

<style scoped>
.navigation-links,
.navigation-links a {
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-weight: 300;
  letter-spacing: 0;
  text-transform: none;
}

.navigation-links a {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  text-decoration: none;
}

.navigation-links a:hover,
.navigation-links a:focus-visible {
  text-decoration: underline;
  text-underline-offset: 0.18em;
  outline: none;
}
</style>
