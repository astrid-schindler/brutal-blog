<template>
  <div class="heading-frame flex flex-row items-center justify-center p-6 text-center font-mono text-6xl font-light tracking-normal text-stone-700 max-lg:px-4 max-lg:text-[clamp(2.5rem,7vw,4rem)] max-md:p-4 max-md:text-[clamp(1.75rem,10vw,3rem)]">
    <h1 class="pixel-heading max-w-full bg-white p-6 text-stone-700 [overflow-wrap:anywhere] max-md:p-4" :data-text="theHeadline">{{theHeadline}}</h1>
  </div>
</template>

<script>
export default {
  name: "TheHeading",
  props:{
    theHeadline : String,
  }
}
</script>

<style scoped>
.heading-frame {
  perspective: 900px;
}

.pixel-heading {
  position: relative;
  isolation: isolate;
  animation: heading-float 6.5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  transform-origin: center;
}

:global(html[data-scroll-direction="up"]) .pixel-heading {
  animation-name: heading-float-up;
}

:global(html[data-scroll-direction="down"]) .pixel-heading {
  animation-name: heading-float-down;
}

@keyframes heading-float {
  0%, 72%, 100% {
    opacity: 0.94;
    transform: translate3d(0, 0, 0) rotateX(0);
  }
  38% {
    opacity: 1;
    transform: translate3d(0, -0.14rem, 0) rotateX(0.6deg);
  }
}

@keyframes heading-float-down {
  0%, 72%, 100% {
    opacity: 0.94;
    transform: translate3d(0, 0, 0) rotateX(0);
  }
  38% {
    opacity: 1;
    transform: translate3d(0, -0.18rem, 0) rotateX(0.7deg);
  }
}

@keyframes heading-float-up {
  0%, 72%, 100% {
    opacity: 0.94;
    transform: translate3d(0, 0, 0) rotateX(0);
  }
  38% {
    opacity: 1;
    transform: translate3d(0, 0.12rem, 0) rotateX(-0.5deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pixel-heading {
    animation: none;
  }
}
</style>
