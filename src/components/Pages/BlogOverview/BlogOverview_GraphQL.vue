<template>
  <TheHeading the-headline="Blog GQL"></TheHeading>
  <div v-if="data">
  <div v-for="post in data.allPosts" :key="post.id">
    <div class="py-16 grid grid-cols-3 gap-4 max-sm:grid-cols-1 hover:text-rose-500">
      <div class="">
        <router-link :to="'/blogpost_gql/' + post.id">
          <img class="" :src="`${post.imageUrl}`" alt="Neon-Pink-Urban">
        </router-link>
      </div>
      <div class="col-span-2 ">
        <router-link :to="'/blogpost_gql/' + post.id">
          <div class="text-3xl font-medium content-center">{{post.title}}</div>
        </router-link>
        <div class="py-4 italic text-sm font-light text-stone-500 content-center">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
        <p class="contentText text-black line-clamp-3 max-h-32" :id="post.id" >
          {{post.content}}
        </p>
        <router-link class="text-rose-500 pl-6 hover:font-medium" :to="'/blogpost_gql/' + post.id">> Read more</router-link>
      </div>
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