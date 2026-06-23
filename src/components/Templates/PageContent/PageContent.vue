<template>
  <main class="font-mono font-extralight">
    <router-view/>
    <NavigationBar></NavigationBar>
  </main>
</template>

<script>
import NavigationBar from "@/components/Organisms/NavigationBar/NavigationBar.vue";
export default {
  name: "PageContent",
  components: {NavigationBar},
}
</script>

<style scoped>

@import 'PageContent.css';

</style>