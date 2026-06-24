<template>
    <TheHeading data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" the-headline="Projects"></TheHeading>
        <div v-for="entry in entries" :key="entry.id">
            <div v-if="entry.id % 2 !== 0" class="layout-grid py-16 hover:text-stone-700 max-md:py-10">
              <div class="layout-third max-md:order-1">
                <router-link :to="'/blogpost/' + entry.id">
                <img class="" :src="`${entry.picture}`" alt="Neon-Pink-Urban">
                </router-link>
              </div>
              <div class="layout-two-thirds max-md:order-2">
                <router-link :to="'/blogpost/' + entry.id">
                <div class="text-3xl font-light content-center max-md:text-center max-md:text-[clamp(1.5rem,8vw,2rem)]">{{entry.title}}</div>
                </router-link>
                <div class="py-4 italic text-sm font-light text-stone-500 content-center max-md:text-center max-md:[overflow-wrap:anywhere]">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
                <p class="contentText text-stone-700 max-md:text-center" :id="entry.id" >
                  {{entry.content}} <router-link class="text-stone-700 hover:font-light" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
                </p>
              </div>
            </div>
          <div v-else class="layout-grid py-16 hover:text-stone-700 max-md:py-10">
            <div class="layout-two-thirds max-md:order-2">
              <router-link :to="'/blogpost/' + entry.id">
              <div class="text-3xl font-light content-center text-right max-md:text-center max-md:text-[clamp(1.5rem,8vw,2rem)]">{{entry.title}}</div>
              </router-link>
              <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right max-md:text-center max-md:[overflow-wrap:anywhere]">{{entry.date}} | {{entry.author}} | {{entry.category}}</div>
              <p class="text-right text-stone-700 max-md:text-center">
                {{entry.content}}<router-link class="text-stone-700 hover:font-light" :to="'/blogpost/' + entry.id"> Read more ... </router-link>
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
      <a href="#" class="px-3 hover:text-stone-700 hover:bg-rose-200">1</a>
      <a href="#" class="px-3 hover:text-stone-700 hover:bg-rose-200">2</a>
      <a href="#" class="px-3 hover:text-stone-700 hover:bg-rose-200">3</a>
      <a href="#" class="px-3 hover:text-stone-700 hover:bg-rose-200" >..</a>
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
