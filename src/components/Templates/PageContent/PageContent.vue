<template>
  <main class="font-mono font-light tracking-normal">
    <router-view/>
    <NavigationBar></NavigationBar>
    <WeatherModule></WeatherModule>
    <FooterCredits></FooterCredits>
  </main>
</template>

<script setup>
import FooterCredits from "@/components/Organisms/FooterCredits/FooterCredits";
import NavigationBar from "@/components/Organisms/NavigationBar/NavigationBar.vue";
import WeatherModule from "@/components/Molecules/WeatherModule/WeatherModule";
</script>
