<template>
  <p class="pointer-events-auto fixed right-[clamp(1rem,3vw,2rem)] bottom-[33vh] z-50 border-2 border-stone-950 bg-[var(--brutal-pink)] px-2 py-3 [writing-mode:vertical-rl] font-mono text-xs font-black uppercase shadow-[5px_5px_0_#1c1917] max-md:bottom-[20vh] max-md:text-[0.65rem] max-[480px]:hidden">
    {{ location }} - {{ temperature }} - {{ time }}<span class="animate__animated animate__flash animate__infinite animate__slower">:</span>{{ minutes }} - {{ condition }}
    <span class="animate__animated animate__flash animate__infinite animate__slower">-&gt;</span>
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
