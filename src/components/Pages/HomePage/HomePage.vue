<template>
  <div class="absolute grid body-background">
  <section class="h-screen w-screen grid items-center content-center">
    <h1 class="rainbow-text text-stone-700 hero leading-tight font-mono text-7xl">Your NEW Google CEO<span class="text-emerald-300 animate__animated animate__flash animate__infinite animate__slower">¶</span></h1>
  </section>
    <section id="box" ref="sectionRefEl" class="h-screen grid items-center content-center bg-transparent z-20">
      <about-page></about-page>
    </section>
  <section id="box2" class="h-screen w-screen grid grid-cols-5 items-center justify-center content-center">
    <services-page class="col-start-2 col-span-3"></services-page>
  </section>
  <section id="box" class="h-screen w-screen grid items-center justify-center content-center">
    <contact-page class=""></contact-page>
  </section>
    <section id="box" class="grid items-center justify-center content-center">
    </section>
  </div>

</template>

<script>

import ServicesPage from "@/components/Pages/ServicesPage/ServicesPage";
import ContactPage from "@/components/Pages/ContactPage/ContactPage";
import AboutPage from "@/components/Pages/AboutPage/AboutPage";

export default {
  name: "HomePage",
  components: {AboutPage, ContactPage, ServicesPage},
  methods: {
    myFunction() {
      const element = document.getElementById("box");
      element.scrollIntoView({behavior: "smooth"});
    }
  },
}
</script>

<style scoped>

.body-background {
  background-color: #ffffff;
}

.hero {
  font-size: 14rem;
  left: -200px;
}

.text {
  font-weight: 200;
  transition: all 0.5s ease;
}

.text:hover {
  animation: smoothHover 0.5s forwards;
}

@keyframes smoothHover {
  0% {
    font-weight: 200;
    transform: scale(1);
  }
  50% {
    font-weight: 500;
  }
  100% {
    font-weight: 500;
  }
}

/* Style the rainbow text element. */
.rainbow-text {
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #CA4246;
  background-color: #CA4246;
  background: conic-gradient(
      #CA4246 16.666%,
      #E16541 16.666%,
      #E16541 33.333%,
      #F18F43 33.333%,
      #F18F43 50%,
      #8B9862 50%,
      #8B9862 66.666%,
      #8c98b2 66.666%,
      #a7bad9 83.333%,
      #A7489B 83.333%);

  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animate the text when loading the element. */
  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 2.5s ease forwards;

  cursor: pointer;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}

</style>