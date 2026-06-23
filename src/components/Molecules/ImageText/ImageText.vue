<template>
  <TheHeading :the-headline="pageHeadline"></TheHeading>
  <div class="layout-grid">
    <div v-show="pageType === 'blog'" class="layout-full p-4 italic text-sm font-light text-stone-500 content-center text-center max-md:px-0 max-md:[overflow-wrap:anywhere]">{{blogDate}} | {{blogAuthor}} | {{blogCategory}}</div>
    <img class="layout-wide py-6" :src="`${pagePicture}`" alt="Neon-Pink-Urban">
    <div class="layout-main p-12 whitespace-pre-line sm:p-3.5 md:p-6 font-light max-md:py-4 max-md:px-0 max-md:text-[0.95rem] max-md:leading-7">
      {{pageContent}}
    </div>
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
