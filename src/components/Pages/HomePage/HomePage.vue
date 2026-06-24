<template>
  <div class="minimal-home relative grid">
    <section id="home">
      <home-hero></home-hero>
    </section>
    <section id="about" ref="sectionRefEl" class="h-screen grid items-center content-center z-20 max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
      <about-page></about-page>
    </section>
    <section id="skills" class="h-screen w-full grid items-center justify-center content-center max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
      <services-page></services-page>
    </section>
    <section id="photography" class="w-full">
      <photography-gallery></photography-gallery>
    </section>
    <section id="contact" class="h-screen w-full grid items-center justify-center content-center max-md:h-auto max-md:min-h-[100svh] max-md:py-20">
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

export default {
  name: "HomePage",
  components: {AboutPage, ContactPage, HomeHero, PhotographyGallery, ServicesPage},
  methods: {
    myFunction() {
      const element = document.getElementById("about");
      element.scrollIntoView({behavior: "smooth"});
    }
  },
}
</script>

<style scoped>
.minimal-home {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #44403c;
  font-family: var(--font-mono-serif);
}

.minimal-home section {
  background: #ffffff;
  color: #44403c;
  font-family: inherit;
}

.minimal-home :deep(*) {
  font-family: inherit;
  box-shadow: none !important;
  text-shadow: none !important;
  letter-spacing: 0;
}

.minimal-home :deep(.pixel-hero) {
  border: 0;
  background: #ffffff;
}

.minimal-home :deep(.pixel-sun),
.minimal-home :deep(.honey-sticker),
.minimal-home :deep(.pixel-hero > .absolute) {
  display: none;
}

.minimal-home :deep(.hero-kicker),
.minimal-home :deep(.hero-subline),
.minimal-home :deep(.hero) {
  border: 0;
  background: transparent;
  color: #44403c;
  -webkit-text-fill-color: currentColor;
}

.minimal-home :deep(.hero) {
  padding: 0;
  font-weight: 300;
  text-transform: none;
}

.minimal-home :deep(.rainbow-text) {
  background: transparent;
  color: #44403c;
  cursor: default;
}

.minimal-home :deep(.pixel-cursor) {
  display: none;
}

.minimal-home :deep(p),
.minimal-home :deep(a),
.minimal-home :deep(button),
.minimal-home :deep(input),
.minimal-home :deep(textarea),
.minimal-home :deep([class]) {
  background-color: transparent !important;
  background-image: none !important;
  color: #44403c;
  text-transform: none !important;
}

.minimal-home :deep([class]:not(input):not(textarea):not(button)) {
  border: 0 !important;
}

.minimal-home :deep(.contact-form input),
.minimal-home :deep(.contact-form textarea),
.minimal-home :deep(.contact-form button) {
  border: 1px solid #44403c !important;
}

.minimal-home :deep(a) {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

@media (max-width: 1024px) {
  .minimal-home section {
    justify-items: center;
  }

  .minimal-home :deep(.layout-grid) {
    width: min(100% - 2rem, 48rem);
    margin-inline: auto;
    justify-items: center;
  }

  .minimal-home :deep(.layout-main),
  .minimal-home :deep(.layout-wide),
  .minimal-home :deep(.layout-half),
  .minimal-home :deep(.layout-third),
  .minimal-home :deep(.layout-two-thirds) {
    grid-column: 1 / -1;
    width: min(100%, 34rem);
    margin-inline: auto;
  }

  .minimal-home :deep(.brutal-copy),
  .minimal-home :deep(.brutal-panel),
  .minimal-home :deep(.pixel-card) {
    width: min(100%, 34rem);
    margin-inline: auto;
  }
}

@media (max-width: 768px) {
  .minimal-home section {
    width: 100%;
    overflow-x: hidden;
    text-align: center;
  }

  .minimal-home :deep(.layout-grid) {
    width: min(100% - 2rem, 34rem);
    row-gap: 2rem;
  }

  .minimal-home :deep(.brutal-copy),
  .minimal-home :deep(.brutal-panel),
  .minimal-home :deep(.pixel-card) {
    width: 100%;
  }
}
</style>
