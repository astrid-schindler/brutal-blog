<template>
  <div class="text-stone-700">
      <PageContent></PageContent>
  </div>
</template>
<script>
import { useClient } from 'villus';
import 'animate.css';
// COMPONENTS
import PageContent from "@/components/Templates/PageContent/PageContent";

export default {
  components: { PageContent },
  setup() {
    useClient({
      url: 'http://localhost:8000/graphql',
    });
  },
  methods: {
    myFunction() {
      const element = document.getElementById("box");
      element.scrollIntoView({behavior: "smooth"});
    }
  },
}
</script>
<style scoped>

</style>