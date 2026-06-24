<template>
  <section class="pixel-hero relative grid h-screen w-full content-center items-center overflow-hidden bg-white px-[clamp(1rem,3vw,2.5rem)] max-md:h-[100svh] max-md:py-0">
    <div class="pixel-sun" aria-hidden="true"></div>
    <div class="absolute left-[clamp(1rem,5vw,4rem)] top-28 honey-sticker rotate-[-3deg] px-3 py-2 text-xs max-md:top-24 max-md:text-[0.65rem]">
      Pixel Peace Honey
    </div>
    <div class="absolute bottom-16 right-6 hidden border border-stone-700 bg-white px-3 py-2 text-xs font-light tracking-normal md:block">
      Calm Future / 2026
    </div>
    <div class="absolute right-[clamp(1rem,6vw,5rem)] top-[32%] honey-sticker rotate-[4deg] bg-[var(--peace-lilac)] px-4 py-3 text-sm max-lg:hidden">
      Soft Arcade Energy
    </div>
    <div class="hero-stack">
      <p class="hero-kicker">8-bit portfolio garden</p>
      <h1 class="rainbow-text hero max-w-[10ch] bg-white p-[clamp(1rem,3vw,2rem)] font-mono text-7xl font-light leading-[0.9] max-lg:max-w-[calc(100vw-2rem)] max-lg:text-[clamp(5.5rem,14vw,9rem)] max-lg:[overflow-wrap:anywhere] max-md:text-[clamp(3rem,16vw,5.4rem)] max-md:leading-[0.95]">
        Honey Pixel CEO<span class="pixel-cursor">■</span>
      </h1>
      <p class="hero-subline">peaceful, playful, sharp enough for 2026</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeHero",
}
</script>

<style scoped>
.pixel-hero {
  background:
    linear-gradient(90deg, rgba(28, 25, 23, 0.12) 2px, transparent 2px),
    linear-gradient(rgba(28, 25, 23, 0.12) 2px, transparent 2px),
    linear-gradient(135deg, #ffffff, #ffffff);
  background-size: 2rem 2rem, 2rem 2rem, auto;
}

.pixel-sun {
  position: absolute;
  right: clamp(2rem, 14vw, 12rem);
  top: clamp(6rem, 14vw, 10rem);
  width: clamp(7rem, 14vw, 12rem);
  aspect-ratio: 1;
  background:
    linear-gradient(#44403c 0 0) 12.5% 12.5% / 75% 12.5%,
    linear-gradient(#44403c 0 0) 0 25% / 100% 50%,
    linear-gradient(#44403c 0 0) 12.5% 75% / 75% 12.5%,
    linear-gradient(#ffffff 0 0) 25% 0 / 50% 100%,
    linear-gradient(#ff6bb5 0 0) 0 37.5% / 100% 25%;
  background-repeat: no-repeat;
  filter: drop-shadow(8px 8px 0 #44403c);
  animation: pixel-sun-pulse 3.2s steps(4, end) infinite;
}

.hero-stack {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.7rem;
  width: fit-content;
}

.hero-kicker,
.hero-subline {
  width: fit-content;
  border: 3px solid #44403c;
  background: #ffffff;
  box-shadow: 5px 5px 0 #44403c;
  padding: 0.35rem 0.55rem;
  font-family: var(--font-mono-serif);
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  font-weight: 300;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  animation: text-nudge 2.6s steps(2, end) infinite;
}

.hero-subline {
  justify-self: end;
  background: #ffffff;
  animation-delay: -1.2s;
}

.hero {
  font-size: 14rem;
}

.rainbow-text {
  background: #ffffff;
  background-color: #ffffff;
  background:
    linear-gradient(90deg, #44403c 0 100%);
  background-size: 140%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-text-animation-rev 2.5s steps(8, end) infinite;
  cursor: pointer;
}

.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s steps(4, end) forwards;
}

.pixel-cursor {
  display: inline-block;
  margin-left: 0.08em;
  -webkit-text-fill-color: #44403c;
  color: #44403c;
  animation: cursor-blink 700ms steps(2, end) infinite;
}

@keyframes rainbow-text-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -4em 0;
  }
}

@keyframes rainbow-text-animation-rev {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -2em 0;
  }
}

@keyframes cursor-blink {
  0%, 45% {
    opacity: 1;
  }
  46%, 100% {
    opacity: 0;
  }
}

@keyframes text-nudge {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0.35rem, -0.18rem);
  }
}

@keyframes pixel-sun-pulse {
  0%, 100% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.08) rotate(3deg);
  }
}

@media (max-width: 768px) {
  .pixel-sun {
    right: -1.4rem;
    top: 8rem;
    opacity: 0.55;
  }
}
</style>
