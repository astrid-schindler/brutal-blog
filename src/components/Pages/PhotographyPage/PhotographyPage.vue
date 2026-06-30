<template>
  <div class="minimal-home relative grid min-h-screen w-full bg-page font-mono text-ink">
    <section id="photography" class="w-full pt-[clamp(4.25rem,8vw,6rem)]">
      <photography-gallery></photography-gallery>
    </section>
  </div>
</template>

<script setup>
import PhotographyGallery from "@/components/Organisms/PhotographyGallery/PhotographyGallery";
</script>
