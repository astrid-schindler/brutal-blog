<template>
    <TheHeading the-headline="Blog"></TheHeading>
        <div v-for="entry in entries" :key="entry.id">
            <div v-if="entry.id % 2 !== 0" class="py-16 grid grid-cols-3 gap-4 max-sm:grid-cols-1 hover:text-rose-500">
              <div class="">
                <router-link :to="'/blogpost/' + entry.id">
                <img class="" :src="`${entry.picture}`" alt="Neon-Pink-Urban">
                </router-link>
              </div>
              <div class="col-span-2 ">
                <router-link :to="'/blogpost/' + entry.id">
                <div class="text-3xl font-medium content-center">{{entry.title}}</div>
                </router-link>
                <div class="py-4 italic text-sm font-light text-stone-500 content-center">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
                <p class="contentText text-black" :id="entry.id" >
                  {{entry.content}} <router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
                </p>
              </div>
            </div>
          <div v-else class="py-16 grid grid-cols-3 gap-4 max-sm:grid-cols-1 hover:text-rose-500">
            <div class="col-span-2">
              <router-link :to="'/blogpost/' + entry.id">
              <div class="text-3xl font-medium content-center text-right">{{entry.title}}</div>
              </router-link>
              <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
              <p class="text-right text-black">
                {{entry.content}}<router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
              </p>
            </div>
            <div class="">
              <router-link :to="'/blogpost/' + entry.id">
              <img class="" :src="`${entry.picture}`">
              </router-link>
            </div>
          </div>
        </div>

    <div class="text-center text-stone-500">
      <p class="pb-5">Page:</p>
      <a href="#" class="px-3 hover:text-rose-500 hover:bg-rose-200">1</a>
      <a href="#" class="px-3 hover:text-rose-500 hover:bg-rose-200">2</a>
      <a href="#" class="px-3 hover:text-rose-500 hover:bg-rose-200">3</a>
      <a href="#" class="px-3 hover:text-rose-500 hover:bg-rose-200" >..</a>
    </div>
</template>

<script>
import blogEntries from "/src/data/blogEntries.json";
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";

function trim () {
  let node = document.getElementsByClassName('contentText')
  let rawStr
  rawStr = node.textContent
  console.log('String:' + rawStr)
  return rawStr
}

export default {
  data() {
    return {
      entries: blogEntries,
    };
  },
  name: "BlogOverview",
  components: {TheHeading,},
  methods: trim(),
}
</script>

<style scoped>

</style>