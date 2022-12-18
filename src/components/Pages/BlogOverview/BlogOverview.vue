<template>
    <div class="pb-12 text-6xl font-medium content-center text-center ">Blog</div>

    <ListedEntry></ListedEntry>

    <div class="text-center text-stone-500">
      <p class="pb-5">Page:</p>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">1</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">2</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">3</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200" >..</a>
    </div>
</template>

<script>
import ListedEntry from "@/components/Molecules/ListedEntry/ListedEntry";
export default {
  name: "BlogOverview",
  components: {ListedEntry}
}
</script>

<style scoped>

</style>