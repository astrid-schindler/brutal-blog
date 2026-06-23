<template>
  <p class="pointer-events-auto col-start-3 col-end-[-1] flex flex-wrap justify-end gap-2 font-mono text-xs font-bold uppercase text-stone-950 max-md:col-start-2 max-md:justify-start max-md:text-[0.68rem] max-[480px]:col-start-2">
    <a
      v-for="item in items"
      :key="item.label"
      href="#"
      class="brutal-link"
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
