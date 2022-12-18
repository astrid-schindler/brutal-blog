<template>
  <NavigationBar></NavigationBar>
  <PageContent></PageContent>
  <FooterCredits></FooterCredits>
</template>

<script>
import NavigationBar from "@/components/Organisms/NavigationBar/NavigationBar";
import PageContent from "@/components/Templates/PageContent/PageContent";
import FooterCredits from "@/components/Organisms/FooterCredits/FooterCredits";

export default {
  name: 'App',
  components: {
    FooterCredits,
    NavigationBar,
    PageContent,
  }
}
</script>
