<template>
  <div class="pixel-peace-graphics" aria-hidden="true">
    <span class="pixel-sprite pixel-sprite--flower pixel-sprite--one"></span>
    <span class="pixel-sprite pixel-sprite--flower pixel-sprite--two"></span>
    <span class="pixel-sprite pixel-sprite--heart"></span>
    <span class="pixel-sprite pixel-sprite--smile"></span>
    <span class="pixel-sprite pixel-sprite--spark pixel-sprite--spark-one"></span>
    <span class="pixel-sprite pixel-sprite--spark pixel-sprite--spark-two"></span>
    <span class="pixel-marquee">PEACE MODE 2026 - HONEY PIXELS -</span>
  </div>
</template>

<script>
export default {
  name: "PixelPeaceGraphics",
}
</script>

<style scoped>
.pixel-peace-graphics {
  position: fixed;
  inset: 0;
  z-index: 12;
  pointer-events: none;
  overflow: hidden;
}

.pixel-sprite {
  position: absolute;
  display: block;
  width: var(--sprite-size, 4rem);
  aspect-ratio: 1;
  image-rendering: pixelated;
  filter: drop-shadow(5px 5px 0 #1c1917);
  animation: pixel-float 7s steps(7, end) infinite;
}

.pixel-sprite--flower {
  background:
    linear-gradient(#1c1917 0 0) 38% 0 / 24% 24%,
    linear-gradient(#1c1917 0 0) 0 38% / 24% 24%,
    linear-gradient(#1c1917 0 0) 76% 38% / 24% 24%,
    linear-gradient(#1c1917 0 0) 38% 76% / 24% 24%,
    linear-gradient(#ff4fd8 0 0) 38% 0 / 24% 24%,
    linear-gradient(#00e5ff 0 0) 0 38% / 24% 24%,
    linear-gradient(#7cff00 0 0) 76% 38% / 24% 24%,
    linear-gradient(#fb8500 0 0) 38% 76% / 24% 24%,
    linear-gradient(#fff3a3 0 0) 38% 38% / 24% 24%;
  background-repeat: no-repeat;
}

.pixel-sprite--one {
  --sprite-size: clamp(3.2rem, 7vw, 5.5rem);
  top: 19%;
  left: 5%;
  animation-delay: -1s;
}

.pixel-sprite--two {
  --sprite-size: clamp(2.6rem, 5vw, 4rem);
  right: 7%;
  bottom: 18%;
  animation-delay: -4s;
}

.pixel-sprite--heart {
  --sprite-size: clamp(2.8rem, 5vw, 4.5rem);
  top: 52%;
  left: 7%;
  background:
    linear-gradient(#ff4fd8 0 0) 20% 18% / 20% 20%,
    linear-gradient(#ff4fd8 0 0) 60% 18% / 20% 20%,
    linear-gradient(#ff4fd8 0 0) 0 38% / 100% 20%,
    linear-gradient(#ff4fd8 0 0) 20% 58% / 60% 20%,
    linear-gradient(#ff4fd8 0 0) 40% 78% / 20% 20%;
  background-repeat: no-repeat;
  animation-delay: -2.4s;
}

.pixel-sprite--smile {
  --sprite-size: clamp(3rem, 6vw, 5rem);
  right: 10%;
  top: 22%;
  border: 4px solid #1c1917;
  background:
    linear-gradient(#1c1917 0 0) 25% 30% / 15% 15%,
    linear-gradient(#1c1917 0 0) 62% 30% / 15% 15%,
    linear-gradient(#1c1917 0 0) 28% 66% / 12% 12%,
    linear-gradient(#1c1917 0 0) 40% 74% / 24% 12%,
    linear-gradient(#1c1917 0 0) 64% 66% / 12% 12%,
    #ffd60a;
  background-repeat: no-repeat;
  animation-delay: -3.2s;
}

.pixel-sprite--spark {
  --sprite-size: clamp(1.9rem, 3vw, 2.8rem);
  background:
    linear-gradient(#fff3a3 0 0) 40% 0 / 20% 100%,
    linear-gradient(#fff3a3 0 0) 0 40% / 100% 20%,
    linear-gradient(#1c1917 0 0) 40% 0 / 20% 100%,
    linear-gradient(#1c1917 0 0) 0 40% / 100% 20%;
  background-repeat: no-repeat;
  animation: pixel-blink 1.2s steps(2, end) infinite;
}

.pixel-sprite--spark-one {
  left: 24%;
  top: 14%;
}

.pixel-sprite--spark-two {
  right: 22%;
  bottom: 12%;
  animation-delay: -0.6s;
}

.pixel-marquee {
  position: absolute;
  left: 0;
  bottom: clamp(0.75rem, 2vw, 1.25rem);
  border-block: 3px solid #1c1917;
  background: #fff3a3;
  color: #1c1917;
  box-shadow: 0 5px 0 #1c1917;
  padding: 0.35rem 0;
  width: max-content;
  min-width: 100%;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: clamp(0.68rem, 1.2vw, 0.9rem);
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
  animation: marquee-slide 12s linear infinite;
}

@keyframes pixel-float {
  0%, 100% {
    transform: translate(0, 0) rotate(-4deg);
  }
  35% {
    transform: translate(0.8rem, -1rem) rotate(3deg);
  }
  70% {
    transform: translate(-0.6rem, 0.7rem) rotate(-2deg);
  }
}

@keyframes pixel-blink {
  0%, 45% {
    opacity: 1;
    transform: scale(1);
  }
  46%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
}

@keyframes marquee-slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-16rem);
  }
}

@media (max-width: 768px) {
  .pixel-sprite--one,
  .pixel-sprite--heart {
    left: -1.1rem;
  }

  .pixel-sprite--smile,
  .pixel-sprite--two {
    right: -1rem;
  }

  .pixel-sprite--spark-one {
    top: 25%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pixel-sprite,
  .pixel-marquee {
    animation: none;
  }
}
</style>
