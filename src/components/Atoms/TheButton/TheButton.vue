<template>
  <button class="border border-stone-700 hover:text-stone-500 text-stone-700 tracking-normal font-light py-2 px-4 text-xs inline-flex items-center max-md:max-w-full max-md:justify-center max-md:whitespace-normal max-md:text-center">
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
