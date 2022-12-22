<template>
  <button class="bg-rose-500 hover:bg-rose-600 text-white font-light py-2 px-4 inline-flex items-center animate__animated hover:animate__headShake">
    <font-awesome-icon class="px-2" icon="fa-solid {{buttonIcon}}" />
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