<template>
    <TheHeading the-headline="Blog"></TheHeading>
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
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
export default {
  name: "BlogOverview",
  components: {TheHeading, ListedEntry}
}
</script>

<style scoped>

</style>