<template>
  <div v-if="data">
    <div v-for="post in data.allPosts" :key="post.id">
      <div v-if="data.allPosts.indexOf(post) % 2 == 0" class="py-16 grid grid-cols-3 gap-4 max-sm:grid-cols-1 hover:text-rose-500" id="post-left">
        <div class="">
          <router-link :to="'/blogpost/' + post.id">
            <img class="" :src="`${post.imageUrl}`" alt="Blogpost Picture">
          </router-link>
        </div>
        <div class="col-span-2 ">
          <router-link :to="'/blogpost/' + post.id">
            <div class="text-3xl font-medium content-center">{{post.title}}</div>
          </router-link>
          <div class="py-4 italic text-sm font-light text-stone-500 content-center">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
          <p class="contentText text-black line-clamp-4 text-justify" :id="post.id">
            {{post.content}}
          </p>
          <router-link class="text-rose-500 pl-6 hover:font-medium" :to="'/blogpost/' + post.id">> Read more</router-link>
        </div>
      </div>
      <div v-else class="py-16 grid grid-cols-3 gap-4 place-items-end max-sm:grid-cols-1 hover:text-rose-500" id="post-left">
        <div class="col-span-2">
          <router-link :to="'/blogpost/' + post.id">
            <div class="text-3xl font-medium content-center text-right">{{post.title}}</div>
          </router-link>
          <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
          <p class="text-right text-black line-clamp-4 text-justify">
            {{post.content}}
          </p>
          <router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + post.id"> > Read more </router-link>
        </div>
        <div class="">
          <router-link :to="'/blogpost/' + post.id">
            <img class="" :src="`${post.imageUrl}`">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogpostList"
}
</script>

<style scoped>

</style>