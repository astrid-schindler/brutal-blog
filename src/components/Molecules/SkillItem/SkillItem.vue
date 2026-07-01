<template>
  <div class="grid justify-items-center gap-4 p-5 transition-opacity duration-150 hover:opacity-70 max-md:gap-3">
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
}
</script>
