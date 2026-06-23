<template>
  <div class="uppercase text-stone-700 font-extralight flex flex-row text-center font-mono text-6xl justify-center items-center tracking-widest p-6">
    <h1 class="border-4 border-stone-700 tracking-widest p-6">{{theHeadline}}</h1>
  </div>
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