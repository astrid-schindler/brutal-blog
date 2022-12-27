<template>
  <div class="animate__animated animate__fadeInDown pb-12 text-6xl font-medium text-center tracking-widest max-sm:text-3xl max-sm:pb-3 max-md:text-4xl max-md:pb-6 max-lg:text-5xl max-lg:pb-6">{{theHeadline}}</div>
</template>

<script>
export default {
  name: "TheHeading",
  props:{
    theHeadline : String,
  }
}
</script>

<style scoped>

</style>