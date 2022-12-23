<template>
    <TheHeading the-headline="Blog"></TheHeading>
        <div v-for="entry in entries" :key="entry.id">
            <div v-if="entry.id % 2 !== 0" class="py-16 grid grid-cols-3 gap-4">
              <div class="...">
                <img class="" :src="`${entry.picture}`" alt="Neon-Pink-Urban">
              </div>
              <div class="col-span-2 ...">
                <div class="text-3xl font-medium content-center">{{entry.title}}</div>
                <div class="py-4 italic text-sm font-light text-stone-500 content-center">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
                <p>
                  {{entry.content}}
                </p>
              </div>
            </div>
          <div v-else class="py-16 grid grid-cols-3 gap-4">
            <div class="col-span-2 ...">
              <div class="text-3xl font-medium content-center text-right">{{entry.title}}</div>
              <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
              <p class="text-right">
                {{entry.content}}
              </p>
            </div>
            <div class="...">
              <img class="" :src="`${entry.picture}`">
            </div>
          </div>
        </div>

    <div class="text-center text-stone-500">
      <p class="pb-5">Page:</p>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">1</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">2</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200">3</a>
      <a href="#" class="px-3 hover:text-pink-700 hover:bg-pink-200" >..</a>
    </div>
</template>

<script>
import blogEntries from "/src/data/blogEntries.json";

import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
export default {
  data() {
    return {
      entries: blogEntries,
    };
  },
  name: "BlogOverview",
  components: {TheHeading,}
}
</script>

<style scoped>

</style>