<template>
  <div class="flex flex-col min-h-screen ">
      <NavigationBar></NavigationBar>
      <PageContent></PageContent>
      <FooterCredits></FooterCredits>
  </div>
</template>
<script>
// STYLES
import { useClient } from 'villus';
import 'animate.css';
// COMPONENTS
import NavigationBar from "@/components/Organisms/NavigationBar/NavigationBar";
import PageContent from "@/components/Templates/PageContent/PageContent";
import FooterCredits from "@/components/Organisms/FooterCredits/FooterCredits";

export default {
  components: {FooterCredits, PageContent, NavigationBar},
  setup() {
    useClient({
      url: 'http://localhost:8000/graphql',
    });
  },
}
</script>