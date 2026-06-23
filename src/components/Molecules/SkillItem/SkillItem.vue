<template>
  <div class="grid col-span-2 justify-items-center gap-4 border-2 border-stone-950 bg-[var(--brutal-paper)] p-5 shadow-[6px_6px_0_#1c1917] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[var(--brutal-pink)] hover:shadow-[10px_10px_0_#ff3b30] max-lg:col-span-4 max-md:col-span-full max-md:gap-3" :class="itemClass">
    <div class="[&_svg]:h-10 [&_svg]:w-10 [&_svg_*]:!stroke-stone-950">
      <slot />
    </div>
    <div class="font-mono text-sm font-black uppercase tracking-[.25em] max-md:tracking-[.14em] max-md:[overflow-wrap:anywhere]">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    label: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    itemClass() {
      return this.featured ? "col-start-2 max-lg:col-start-auto" : "";
    },
  },
}
</script>
