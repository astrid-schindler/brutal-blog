<template>
  <p
    class="chrome-reset pointer-events-auto fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] z-50 px-0 py-0 text-xs text-ink transition-colors duration-200 [writing-mode:vertical-rl] max-md:text-[0.65rem] max-[480px]:hidden"
    :class="{'hero-tone': isHeroWeather}"
  >
    {{ location }} - {{ currentTemperature }} - {{ currentTime }}<span>:</span>{{ currentMinutes }}<span>:</span>{{ currentSeconds }} {{ currentTimeZone }} - {{ currentCondition }}
    <font-awesome-icon :icon="currentConditionIcon" class="inline-icon ms-[0.35em] me-[0.2em] text-[0.8em]" aria-hidden="true" />
    <font-awesome-icon :icon="['fas', 'arrow-down']" class="inline-icon ms-[0.55em] animate-weather-blink motion-reduce:animate-none" aria-hidden="true" />
  </p>
</template>

<script>
import {isOverHomeHero} from "@/functions/heroTone";

var ROME_WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&current=temperature_2m,weather_code&timezone=Europe%2FRome"

var weatherCodeLabels = {
  0: "clear",
  1: "mainly clear",
  2: "partly cloudy",
  3: "cloudy",
  45: "fog",
  48: "fog",
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  56: "freezing drizzle",
  57: "freezing drizzle",
  61: "rain",
  63: "rain",
  65: "heavy rain",
  66: "freezing rain",
  67: "freezing rain",
  71: "snow",
  73: "snow",
  75: "heavy snow",
  77: "snow grains",
  80: "rain showers",
  81: "rain showers",
  82: "heavy showers",
  85: "snow showers",
  86: "snow showers",
  95: "thunderstorm",
  96: "thunderstorm",
  99: "thunderstorm",
}

var weatherCodeIcons = {
  0: ["fas", "sun"],
  1: ["fas", "cloud-sun"],
  2: ["fas", "cloud-sun"],
  3: ["fas", "cloud"],
  45: ["fas", "smog"],
  48: ["fas", "smog"],
  51: ["fas", "cloud-rain"],
  53: ["fas", "cloud-rain"],
  55: ["fas", "cloud-rain"],
  56: ["fas", "cloud-rain"],
  57: ["fas", "cloud-rain"],
  61: ["fas", "cloud-rain"],
  63: ["fas", "cloud-rain"],
  65: ["fas", "cloud-showers-heavy"],
  66: ["fas", "cloud-rain"],
  67: ["fas", "cloud-rain"],
  71: ["fas", "snowflake"],
  73: ["fas", "snowflake"],
  75: ["fas", "snowflake"],
  77: ["fas", "snowflake"],
  80: ["fas", "cloud-showers-heavy"],
  81: ["fas", "cloud-showers-heavy"],
  82: ["fas", "cloud-showers-heavy"],
  85: ["fas", "snowflake"],
  86: ["fas", "snowflake"],
  95: ["fas", "bolt"],
  96: ["fas", "bolt"],
  99: ["fas", "bolt"],
}

function getCurrentClockTime() {
  var now = new Date()
  var timeParts = Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Europe/Rome",
  }).formatToParts(now)
  var timeZoneName = Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Rome",
    timeZoneName: "short",
  }).formatToParts(now).find((part) => part.type === "timeZoneName")
  var timePart = (type) => timeParts.find((part) => part.type === type)?.value || "00"

  return {
    hours: timePart("hour"),
    minutes: timePart("minute"),
    seconds: timePart("second"),
    timeZone: timeZoneName ? timeZoneName.value : "",
  }
}

export default {
  name: "WeatherModule",
  props: {
    location: {
      type: String,
      default: "Rome, Italy",
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
  data() {
    return {
      currentTemperature: this.temperature,
      currentTime: this.time,
      currentMinutes: this.minutes,
      currentSeconds: "00",
      currentTimeZone: "",
      currentCondition: this.condition,
      currentConditionIcon: ["fas", "cloud"],
      clockInterval: null,
      isHeroWeather: false,
    }
  },
  mounted() {
    this.scheduleWeatherToneUpdate()
    window.addEventListener("scroll", this.updateWeatherTone, {passive: true})
    window.addEventListener("resize", this.updateWeatherTone)
    this.updateClockTime()
    this.clockInterval = window.setInterval(this.updateClockTime, 200)
    this.fetchRomeWeather()
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateWeatherTone)
    window.removeEventListener("resize", this.updateWeatherTone)

    if (this.clockInterval) {
      window.clearInterval(this.clockInterval)
    }
  },
  watch: {
    "$route.path"() {
      this.scheduleWeatherToneUpdate()
    },
  },
  methods: {
    scheduleWeatherToneUpdate() {
      this.$nextTick(() => {
        window.requestAnimationFrame(this.updateWeatherTone)
      })
    },
    updateWeatherTone() {
      this.isHeroWeather = isOverHomeHero(this.$route.path)
    },
    updateClockTime() {
      var clockTime = getCurrentClockTime()
      this.currentTime = clockTime.hours
      this.currentMinutes = clockTime.minutes
      this.currentSeconds = clockTime.seconds
      this.currentTimeZone = clockTime.timeZone
    },
    async fetchRomeWeather() {
      try {
        var response = await fetch(ROME_WEATHER_API_URL)

        if (!response.ok) {
          throw new Error("Weather request failed")
        }

        var data = await response.json()
        var current = data.current

        if (!current) {
          return
        }

        this.currentTemperature = `${Math.round(current.temperature_2m)}°C`
        this.currentCondition = weatherCodeLabels[current.weather_code] || this.condition
        this.currentConditionIcon = weatherCodeIcons[current.weather_code] || this.currentConditionIcon
      } catch (error) {
        console.warn("Weather data could not be loaded.", error)
      }
    },
  },
}
</script>
