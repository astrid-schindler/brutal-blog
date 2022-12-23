<template>
  <div class="flex h-full justify-center items-center">
    <div class="text-center">
      <the-heading the-headline="This is a Blog by"></the-heading>
      <the-heading class="text-rose-500" the-headline="John Watson."></the-heading>
    </div>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
export default {
  name: "HomePage",
  components: {TheHeading}
}
</script>

<style scoped>

</style>