<template>
  <div>
    <ImageText :page-headline="post.title"
               :page-type="'blog'"
               :blog-author="post.author"
               :blog-category="post.category"
               :blog-date="post.date"
               :page-picture="post.picture"
               :page-content="post.content"
    />
  </div>
</template>

<script>
import ImageText from "@/components/Molecules/ImageText/ImageText";
import blogData from "../../../data/blogEntries.json";

export default {
  name: "BlogEntry",
  components: {ImageText},
  data() {
    return {
      posts: blogData,
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let post = this.posts.find((post) => post.id === ID);
    this.post = post;
  },
}
</script>

<style scoped>

</style>