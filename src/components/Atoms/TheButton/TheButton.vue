<template>
  <button class="border-2 border-stone-700 hover:text-stone-300 text-stone-700 tracking-[.35em] font-medium uppercase py-2 px-4 text-xs inline-flex items-center animate__animated hover:animate__headShake">
    <span>{{buttonText}}</span>
  </button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    bgColor : String,
    fontColor : String,
    buttonText : String,
    buttonIcon : String,
    buttonLink: String,
  }
}
</script>

<style scoped>

</style>