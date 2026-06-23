<template>
  <TheHeading data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" the-headline="Projects"></TheHeading>
  <div v-if="data" class="content-center items-center w-3/4">
      <div v-for="post in data.allPosts" :key="post.id">
        <div v-if="data.allPosts.indexOf(post) % 2 == 0" class="py-16 grid grid-cols-3 gap-4 max-sm:grid-cols-1 hover:text-stone-300 border-black px-16" id="post-left">
          <div class="">
            <router-link :to="'/blogpost/' + post.id">
              <img :src="`${post.imageUrl}`" alt="Blogpost Picture">
            </router-link>
          </div>
          <div class="col-span-2 ">
            <router-link :to="'/blogpost/' + post.id">
              <div class="text-3xl font-medium uppercase tracking-widest content-center">{{post.title}}</div>
            </router-link>
            <div class="py-4 italic text-xs font-light text-white content-center">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
            <p class="contentText text-white text-xs line-clamp-3 text-justify" :id="post.id">
              {{post.content}}
            </p>
            <router-link class="text-stone-500 font-medium uppercase tracking-widest" :to="'/blogpost/' + post.id">Read more</router-link>
          </div>
        </div>
        <div v-else class="py-16 grid grid-cols-3 gap-4 place-items-end max-sm:grid-cols-1 hover:text-stone-300 border-black px-16" id="post-left">
          <div class="col-span-2">
            <router-link :to="'/blogpost/' + post.id">
              <div class="text-3xl font-medium uppercase tracking-widest content-center text-right">{{post.title}}</div>
            </router-link>
            <div class="py-4 italic text-xs font-light text-white content-center text-right">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
            <p class="text-right text-white text-xs line-clamp-3 text-justify">
              {{post.content}}
            </p>
            <router-link :to="'/blogpost/' + post.id">
              <p class="text-stone-500 content-center uppercase tracking-widest text-right font-medium">Read more</p>
            </router-link>
          </div>
          <div class="">
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