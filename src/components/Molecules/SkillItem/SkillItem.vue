<template>
  <div class="grid col-span-2 justify-items-center gap-4 border border-stone-700 bg-white p-5 transition-opacity duration-150 hover:opacity-70 max-lg:col-span-4 max-lg:w-full max-md:col-span-full max-md:gap-3" :class="itemClass">
    <div class="[&_svg]:h-10 [&_svg]:w-10 [&_svg_*]:!stroke-stone-700">
      <slot />
    </div>
    <div class="font-mono text-sm font-light tracking-normal max-md:text-center max-md:[overflow-wrap:anywhere]">
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
