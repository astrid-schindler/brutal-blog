<template>
  <div class="brutal-bee" aria-hidden="true">
    <div class="brutal-bee__honey-trail"></div>
    <div class="brutal-bee__label">PEACE BZZ</div>
    <div class="brutal-bee__sprite">
      <span class="brutal-bee__wing brutal-bee__wing--left"></span>
      <span class="brutal-bee__wing brutal-bee__wing--right"></span>
      <span class="brutal-bee__antenna brutal-bee__antenna--one"></span>
      <span class="brutal-bee__antenna brutal-bee__antenna--two"></span>
      <span class="brutal-bee__pixel brutal-bee__pixel--eye-one"></span>
      <span class="brutal-bee__pixel brutal-bee__pixel--eye-two"></span>
      <span class="brutal-bee__pixel brutal-bee__pixel--smile-one"></span>
      <span class="brutal-bee__pixel brutal-bee__pixel--smile-two"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrutalBee",
}
</script>

<style scoped>
.brutal-bee {
  position: fixed;
  top: 15vh;
  left: -12rem;
  z-index: 65;
  width: clamp(7rem, 12vw, 10rem);
  height: clamp(5rem, 8vw, 7rem);
  pointer-events: none;
  animation: bee-flight 16s steps(16, end) infinite, bee-bob 720ms steps(2, end) infinite;
  filter: drop-shadow(7px 7px 0 #1c1917);
  image-rendering: pixelated;
}

.brutal-bee__sprite {
  position: absolute;
  inset: 18% 4% 8% 12%;
  background:
    linear-gradient(#1c1917 0 0) 0 30% / 12.5% 40%,
    linear-gradient(#ffd60a 0 0) 12.5% 20% / 12.5% 60%,
    linear-gradient(#1c1917 0 0) 25% 10% / 12.5% 80%,
    linear-gradient(#ffd60a 0 0) 37.5% 0 / 12.5% 100%,
    linear-gradient(#1c1917 0 0) 50% 0 / 12.5% 100%,
    linear-gradient(#ffd60a 0 0) 62.5% 10% / 12.5% 80%,
    linear-gradient(#ffd60a 0 0) 75% 20% / 12.5% 60%,
    linear-gradient(#1c1917 0 0) 87.5% 30% / 12.5% 40%;
  background-repeat: no-repeat;
}

.brutal-bee__sprite::before {
  content: "";
  position: absolute;
  right: -14%;
  top: 26%;
  width: 28%;
  height: 48%;
  background:
    linear-gradient(#ffd60a 0 0) 0 0 / 75% 100%,
    linear-gradient(#1c1917 0 0) 75% 25% / 25% 50%;
  background-repeat: no-repeat;
}

.brutal-bee__wing {
  position: absolute;
  top: -48%;
  width: 34%;
  height: 42%;
  border: 4px solid #1c1917;
  background:
    linear-gradient(rgba(255, 255, 255, 0.92) 0 0) 0 0 / 100% 100%,
    linear-gradient(#7de8ff 0 0) 25% 25% / 50% 50%;
  background-repeat: no-repeat;
  animation: wing-slap 180ms steps(2, end) infinite;
}

.brutal-bee__wing--left {
  left: 16%;
}

.brutal-bee__wing--right {
  left: 48%;
  animation-delay: 90ms;
}

.brutal-bee__antenna {
  position: absolute;
  top: -30%;
  width: 10%;
  height: 30%;
  background:
    linear-gradient(#1c1917 0 0) 40% 0 / 20% 100%,
    linear-gradient(#ff6bb5 0 0) 0 0 / 100% 35%;
  background-repeat: no-repeat;
}

.brutal-bee__antenna--one {
  right: 12%;
  transform: rotate(-18deg);
}

.brutal-bee__antenna--two {
  right: -2%;
  transform: rotate(18deg);
}

.brutal-bee__pixel {
  position: absolute;
  width: 7%;
  aspect-ratio: 1;
  background: #1c1917;
}

.brutal-bee__pixel--eye-one {
  right: 12%;
  top: 30%;
}

.brutal-bee__pixel--eye-two {
  right: 0;
  top: 30%;
}

.brutal-bee__pixel--smile-one {
  right: 7%;
  top: 56%;
}

.brutal-bee__pixel--smile-two {
  right: 14%;
  top: 64%;
}

.brutal-bee__label {
  position: absolute;
  left: -4%;
  top: -12%;
  z-index: 2;
  border: 3px solid #1c1917;
  background: #8cffc1;
  color: #1c1917;
  padding: 0.2rem 0.36rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: clamp(0.56rem, 1.1vw, 0.76rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  box-shadow: 4px 4px 0 #1c1917;
  animation: label-hop 1.4s steps(2, end) infinite;
}

.brutal-bee__honey-trail {
  position: absolute;
  left: -46%;
  top: 45%;
  width: 48%;
  height: 42%;
  background:
    linear-gradient(#fb8500 0 0) 0 42% / 14% 14%,
    linear-gradient(#ffd60a 0 0) 26% 16% / 18% 18%,
    linear-gradient(#fb8500 0 0) 58% 64% / 12% 12%,
    linear-gradient(#fff3a3 0 0) 82% 36% / 10% 10%;
  background-repeat: no-repeat;
  filter: drop-shadow(2px 2px 0 #1c1917);
  animation: honey-splash 520ms steps(2, end) infinite;
}

@keyframes bee-flight {
  0% {
    transform: translate3d(-12vw, 0, 0) scaleX(1);
  }
  18% {
    transform: translate3d(18vw, 12vh, 0) scaleX(1);
  }
  36% {
    transform: translate3d(42vw, -4vh, 0) scaleX(1);
  }
  54% {
    transform: translate3d(68vw, 18vh, 0) scaleX(1);
  }
  76% {
    transform: translate3d(94vw, -3vh, 0) scaleX(1);
  }
  100% {
    transform: translate3d(118vw, 10vh, 0) scaleX(1);
  }
}

@keyframes wing-slap {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0.5rem);
  }
}

@keyframes bee-bob {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: 0.8rem;
  }
}

@keyframes honey-splash {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-0.6rem);
    opacity: 0.58;
  }
}

@keyframes label-hop {
  0%, 100% {
    transform: translate(0, 0) rotate(-3deg);
  }
  50% {
    transform: translate(0.25rem, -0.35rem) rotate(2deg);
  }
}

@media (max-width: 768px) {
  .brutal-bee {
    top: 22vh;
    animation-duration: 12s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .brutal-bee {
    left: auto;
    right: 1rem;
    top: 7rem;
    animation: none;
  }

  .brutal-bee__wing,
  .brutal-bee__honey-trail,
  .brutal-bee__label {
    animation: none;
  }
}
</style>
