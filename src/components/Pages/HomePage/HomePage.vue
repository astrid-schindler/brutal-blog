<template>
  <div class="absolute grid bg-[var(--honey-light)]">
    <pixel-peace-graphics></pixel-peace-graphics>
    <section id="home" class="honeycomb-bg">
      <div class="honey-drip-line" aria-hidden="true"></div>
      <home-hero></home-hero>
    </section>
    <section id="about" ref="sectionRefEl" class="honeycomb-bg h-screen grid items-center content-center bg-[var(--honey-gold)] z-20 max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
      <div class="honey-drip-line honey-drip-line--offset" aria-hidden="true"></div>
      <about-page></about-page>
    </section>
    <section id="skills" class="honeycomb-bg h-screen w-screen grid items-center justify-center content-center bg-[var(--honey-light)] max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
      <div class="honey-drip-line" aria-hidden="true"></div>
      <services-page></services-page>
    </section>
    <section id="photography" class="w-screen bg-[var(--peace-mint)]">
      <photography-gallery></photography-gallery>
    </section>
    <section id="contact" class="honeycomb-bg h-screen w-screen grid items-center justify-center content-center bg-[var(--honey-gold)] max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
      <div class="honey-drip-line honey-drip-line--offset" aria-hidden="true"></div>
      <contact-page></contact-page>
    </section>
  </div>
</template>

<script>
import ServicesPage from "@/components/Pages/ServicesPage/ServicesPage";
import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import AboutPage from "@/components/Pages/AboutPage/AboutPage";
import HomeHero from "@/components/Organisms/HomeHero/HomeHero";
import PhotographyGallery from "@/components/Organisms/PhotographyGallery/PhotographyGallery";
import PixelPeaceGraphics from "@/components/Organisms/PixelPeaceGraphics/PixelPeaceGraphics";

export default {
  name: "HomePage",
  components: {AboutPage, ContactPage, HomeHero, PhotographyGallery, PixelPeaceGraphics, ServicesPage},
  methods: {
    myFunction() {
      const element = document.getElementById("about");
      element.scrollIntoView({behavior: "smooth"});
    }
  },
}
</script>
