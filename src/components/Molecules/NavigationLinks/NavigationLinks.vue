<template>
  <p class="navigation-links pointer-events-auto flex flex-wrap justify-end gap-x-4 gap-y-1 text-xs max-md:justify-start max-md:text-[0.68rem]">
    <a
      v-for="item in items"
      :key="item.label"
      href="#"
      class="border-0 bg-transparent p-0 font-mono font-light normal-case tracking-normal text-current no-underline shadow-none outline-none"
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
        {label: "home", target: "home"},
        {label: "about", target: "about"},
        {label: "photography", target: "photography"},
        {label: "projects", target: "projects"},
        {label: "contact", target: "contact"},
      ],
    },
  },
}
</script>
