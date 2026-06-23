<template>
  <main class="font-mono font-medium tracking-normal">
    <router-view/>
    <BrutalBee></BrutalBee>
    <NavigationBar></NavigationBar>
    <WeatherModule></WeatherModule>
    <FooterCredits></FooterCredits>
  </main>
</template>

<script>
import FooterCredits from "@/components/Organisms/FooterCredits/FooterCredits";
import BrutalBee from "@/components/Organisms/BrutalBee/BrutalBee";
import NavigationBar from "@/components/Organisms/NavigationBar/NavigationBar.vue";
import WeatherModule from "@/components/Molecules/WeatherModule/WeatherModule";

export default {
  name: "PageContent",
  components: {BrutalBee, FooterCredits, NavigationBar, WeatherModule},
}
</script>
