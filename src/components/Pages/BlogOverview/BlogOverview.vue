<template>
    <TheHeading data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" the-headline="Projects"></TheHeading>
        <div v-for="entry in entries" :key="entry.id">
            <div v-if="entry.id % 2 !== 0" class="layout-grid py-16 hover:text-rose-500 max-md:py-10">
              <div class="layout-third max-md:order-1">
                <router-link :to="'/blogpost/' + entry.id">
                <img class="" :src="`${entry.picture}`" alt="Neon-Pink-Urban">
                </router-link>
              </div>
              <div class="layout-two-thirds max-md:order-2">
                <router-link :to="'/blogpost/' + entry.id">
                <div class="text-3xl font-medium content-center ">{{entry.title}}</div>
                </router-link>
                <div class="py-4 italic text-sm font-light text-stone-500 content-center">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
                <p class="contentText text-black" :id="entry.id" >
                  {{entry.content}} <router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
                </p>
              </div>
            </div>
          <div v-else class="layout-grid py-16 hover:text-rose-500 max-md:py-10">
            <div class="layout-two-thirds max-md:order-2">
              <router-link :to="'/blogpost/' + entry.id">
              <div class="text-3xl font-medium content-center text-right max-md:text-left">{{entry.title}}</div>
              </router-link>
              <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right max-md:text-left">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
              <p class="text-right text-black max-md:text-left">
                {{entry.content}}<router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
              </p>
            </div>
            <div class="layout-third max-md:order-1">
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
