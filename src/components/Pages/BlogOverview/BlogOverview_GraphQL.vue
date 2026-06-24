<template>
  <TheHeading data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" the-headline="Projects"></TheHeading>
  <div v-if="data" class="content-center items-center">
      <div v-for="post in data.allPosts" :key="post.id">
        <div v-if="data.allPosts.indexOf(post) % 2 == 0" class="layout-grid py-16 hover:text-stone-700 max-md:py-10 max-md:place-items-stretch" id="post-left">
          <div class="layout-third max-md:order-1">
            <router-link :to="'/blogpost/' + post.id">
              <img :src="`${post.imageUrl}`" alt="Blogpost Picture">
            </router-link>
          </div>
          <div class="layout-two-thirds max-md:order-2">
            <router-link :to="'/blogpost/' + post.id">
              <div class="text-3xl font-light tracking-normal content-center max-md:text-center max-md:text-[clamp(1.5rem,8vw,2rem)]">{{post.title}}</div>
            </router-link>
            <div class="py-4 italic text-xs font-light text-stone-700 content-center max-md:text-center max-md:[overflow-wrap:anywhere]">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
            <p class="contentText text-stone-700 text-xs line-clamp-3 text-justify max-md:text-center" :id="post.id">
              {{post.content}}
            </p>
            <router-link class="text-stone-500 font-light tracking-normal max-md:block max-md:text-center" :to="'/blogpost/' + post.id">Read more</router-link>
          </div>
        </div>
        <div v-else class="layout-grid py-16 place-items-end hover:text-stone-700 max-md:py-10 max-md:place-items-stretch" id="post-left">
          <div class="layout-two-thirds max-md:order-2">
            <router-link :to="'/blogpost/' + post.id">
              <div class="text-3xl font-light tracking-normal content-center text-right max-md:text-center max-md:text-[clamp(1.5rem,8vw,2rem)]">{{post.title}}</div>
            </router-link>
            <div class="py-4 italic text-xs font-light text-stone-700 content-center text-right max-md:text-center max-md:[overflow-wrap:anywhere]">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
            <p class="text-right text-stone-700 text-xs line-clamp-3 text-justify max-md:text-center">
              {{post.content}}
            </p>
            <router-link :to="'/blogpost/' + post.id">
              <p class="text-stone-500 content-center tracking-normal text-right font-light max-md:text-center">Read more</p>
            </router-link>
          </div>
          <div class="layout-third max-md:order-1">
            <router-link :to="'/blogpost/' + post.id">
              <img class="" :src="`${post.imageUrl}`">
            </router-link>
          </div>
        </div>
      </div>
  </div>

  <div class="text-center text-stone-500">
    <p class="pb-5">Page:</p>
    <a href="#" class="px-3 hover:text-stone-500 hover:bg-stone-200">1</a>
    <a href="#" class="px-3 hover:text-stone-500 hover:bg-stone-200">2</a>
    <a href="#" class="px-3 hover:text-stone-500 hover:bg-stone-200">3</a>
    <a href="#" class="px-3 hover:text-stone-500 hover:bg-stone-200" >..</a>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import {useQuery} from "villus";
export default {
  name: "BlogOverview_GraphQL",
  components: {TheHeading},
  setup() {
    const AllPosts = `
      query AllPosts {
        allPosts {
          id
          author
          imageUrl
          category
          publishDate
          published
          content
          slug
          title
        }
      }
    `
    const { data } = useQuery({
      query: AllPosts,
    })
    return { data }
  },
}
</script>
