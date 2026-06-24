<template>
  <p class="minimal-weather pointer-events-auto fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-50 px-0 py-0 text-xs [writing-mode:vertical-rl] max-md:text-[0.65rem] max-[480px]:hidden">
    {{ location }} - {{ temperature }} - {{ time }}<span>:</span>{{ minutes }} - {{ condition }}
    <span class="minimal-weather__arrow">-&gt;</span>
  </p>
</template>

<script>
export default {
  name: "WeatherModule",
  props: {
    location: {
      type: String,
      default: "Dresden, Saxony",
    },
    temperature: {
      type: String,
      default: "3°C",
    },
    time: {
      type: String,
      default: "23",
    },
    minutes: {
      type: String,
      default: "37",
    },
    condition: {
      type: String,
      default: "cloudy",
    },
  },
}
</script>

<style scoped>
.minimal-weather,
.minimal-weather * {
  color: #44403c;
  font-family: var(--font-mono-serif);
  font-weight: 300;
  letter-spacing: 0;
  text-transform: none;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.minimal-weather__arrow {
  display: inline-block;
  animation: weather-arrow-blink 1.2s steps(2, end) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .minimal-weather__arrow {
    animation: none;
  }
}

@keyframes weather-arrow-blink {
  0%, 45% {
    opacity: 1;
  }

  46%, 100% {
    opacity: 0;
  }
}
</style>
