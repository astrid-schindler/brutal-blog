<template>
  <the-heading data-aos="fade-right"
               data-aos-offset="500"
               data-aos-easing="ease-in-sine" the-headline="ABOUT"></the-heading>
  <div class="about-section layout-grid pt-24 max-md:pt-12">
    <figure class="about-section__figure">
      <img
        :src="aboutImage"
        alt="Portrait of the photographer and content creator"
        class="about-section__image"
      >
      <figcaption class="about-section__caption">photographer / content owner</figcaption>
    </figure>
    <p class="about-section__copy">I like mono fonts. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
  </div>
</template>

<script>

import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import aboutImage from "./images/about-photographer.jpg";

export default {
  name: "AboutPage",
  components: {TheHeading, },
  data() {
    return {
      aboutImage,
    };
  },
}
</script>

<style scoped>
.about-section__figure {
  grid-column: 2 / span 4;
  margin: 0;
}

.about-section__image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  filter: saturate(0.82) contrast(0.96);
}

.about-section__caption {
  margin-top: 0.6rem;
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: 0.72rem;
  line-height: 1.5;
}

.about-section__copy {
  grid-column: 7 / span 5;
  align-self: center;
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-size: 0.78rem;
  font-weight: 300;
  line-height: 1.9;
  text-align: left;
  text-transform: none;
}

@media (max-width: 1024px) {
  .about-section {
    row-gap: 2rem;
  }

  .about-section__figure,
  .about-section__copy {
    grid-column: 1 / -1;
    width: min(100%, 34rem);
    margin-inline: auto;
  }

  .about-section__copy {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .about-section__figure,
  .about-section__copy {
    width: 100%;
  }
}
</style>
