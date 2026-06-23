<template>
  <div v-if="data">
    <div v-for="post in data.allPosts" :key="post.id">
      <div v-if="data.allPosts.indexOf(post) % 2 == 0" class="layout-grid py-16 hover:text-rose-500 max-md:py-10 max-md:place-items-stretch" id="post-left">
        <div class="layout-third max-md:order-1">
          <router-link :to="'/blogpost/' + post.id">
            <img class="" :src="`${post.imageUrl}`" alt="Blogpost Picture">
          </router-link>
        </div>
        <div class="layout-two-thirds max-md:order-2">
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
      <div v-else class="layout-grid py-16 place-items-end hover:text-rose-500 max-md:py-10 max-md:place-items-stretch" id="post-left">
        <div class="layout-two-thirds max-md:order-2">
          <router-link :to="'/blogpost/' + post.id">
            <div class="text-3xl font-medium content-center text-right max-md:text-left">{{post.title}}</div>
          </router-link>
          <div class="py-4 italic text-sm font-light text-stone-500 content-center text-right max-md:text-left">{{post.publishDate}} | {{post.author}} | {{post.category}}</div>
          <p class="text-right text-black line-clamp-4 text-justify max-md:text-left">
            {{post.content}}
          </p>
          <router-link class="text-rose-500 hover:font-medium" :to="'/blogpost/' + post.id"> > Read more </router-link>
        </div>
        <div class="layout-third max-md:order-1">
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
