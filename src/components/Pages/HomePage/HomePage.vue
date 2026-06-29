<template>
  <div class="minimal-home relative grid min-h-screen w-full bg-page text-ink font-mono">
    <section id="home">
      <home-hero></home-hero>
    </section>
    <section id="photography" class="w-full">
      <photography-gallery></photography-gallery>
    </section>
  </div>
</template>

<script setup>
import HomeHero from "@/components/Organisms/HomeHero/HomeHero";
import PhotographyGallery from "@/components/Organisms/PhotographyGallery/PhotographyGallery";
</script>
