<template>
  <TheHeading :the-headline="pageHeadline"></TheHeading>
  <div v-show="pageType === 'blog'" class="p-4 italic text-sm font-light text-stone-500 content-center text-center ">{{blogDate}} | {{blogAuthor}} | {{blogCategory}}</div>
  <img class="py-6" :src="`${pagePicture}`" alt="Neon-Pink-Urban">
  <div class="p-12 whitespace-pre-line sm:p-3.5 md:p-6" >
    {{pageContent}}
  </div>
</template>

<script>

import TheHeading from "@/components/Atoms/TheHeading/TheHeading";

export default {
  name: "ImageText",
  components: {TheHeading},
  extends: TheHeading,
  props: {
    pageHeadline: String,
    pagePicture: String,
    blogDate : String,
    blogAuthor : String,
    blogCategory : String,
    pageType : String,
    pageContent : String,
  }
}
</script>