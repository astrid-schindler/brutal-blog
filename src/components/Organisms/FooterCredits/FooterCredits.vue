<template>
  <footer
    class="chrome-reset pointer-events-none text-ink transition-colors duration-200"
    :class="{'hero-tone': isHeroFooter}"
  >
    <p class="pointer-events-auto fixed bottom-[clamp(1rem,3vw,2rem)] left-[clamp(1rem,3vw,2rem)] z-50 text-sm max-md:text-xs max-md:leading-6 max-[480px]:text-[0.65rem] [&_a]:no-underline hover:[&_a]:underline focus-visible:[&_a]:underline [&_a]:underline-offset-[0.18em]">
      <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
      <a href="#"><font-awesome-icon class="pl-6 max-[360px]:pl-4" icon="fa-brands fa-twitter" /></a>
      <a class="max-[360px]:hidden" href="#"><font-awesome-icon class="pl-6" icon="fa-brands fa-behance" /></a>
      <a class="max-[360px]:hidden" href="#"><font-awesome-icon class="pl-6" icon="fa-solid fa-envelope" /></a>
      <span class="pl-2 text-xs max-lg:hidden"> | © 2026 by Arlowe Santoro | All rights reserved.</span>
    </p>

    <aside
      class="github-download-card pointer-events-auto fixed bottom-[clamp(1rem,3vw,2rem)] right-[clamp(3.75rem,6vw,5.5rem)] z-50 w-[min(18.5rem,calc(100vw-7rem))] max-md:w-[min(15.5rem,calc(100vw-8rem))] max-[480px]:right-[clamp(1rem,3vw,2rem)] max-[480px]:w-[min(13rem,calc(100vw-7rem))]"
      aria-label="GitHub project link"
    >
      <a
        class="github-download-card__link"
        href="https://github.com/astrid-schindler/brutal-blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon class="github-download-card__icon" icon="fa-brands fa-github" aria-hidden="true" />
        Code by Astrid :) - GitHub
      </a>
    </aside>
  </footer>
</template>

<script>
import {isOverHomeHero} from "@/functions/heroTone";

export default {
  name: "FooterCredits",
  data() {
    return {
      isHeroFooter: false,
    };
  },
  mounted() {
    this.scheduleFooterToneUpdate();
    window.addEventListener("scroll", this.updateFooterTone, {passive: true});
    window.addEventListener("resize", this.updateFooterTone);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateFooterTone);
    window.removeEventListener("resize", this.updateFooterTone);
  },
  watch: {
    "$route.path"() {
      this.scheduleFooterToneUpdate();
    },
  },
  methods: {
    scheduleFooterToneUpdate() {
      this.$nextTick(() => {
        window.requestAnimationFrame(this.updateFooterTone);
      });
    },
    updateFooterTone() {
      this.isHeroFooter = isOverHomeHero(this.$route.path);
    },
  },
}
</script>

<style scoped>
.github-download-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.35rem;
  padding: 0.55rem 0.9rem;
  border: 1px solid #4a0d14 !important;
  background: #5a111a !important;
  box-shadow: 0 0.5rem 1.5rem rgba(90, 17, 26, 0.22) !important;
  color: #fffaf4;
  font-family: var(--font-mono-serif);
  line-height: 1;
  text-align: center;
  text-transform: none;
  white-space: nowrap;
}

.github-download-card::before {
  content: "";
  position: absolute;
  inset: -0.35rem;
  border: 1px dashed currentColor;
  opacity: 0.42;
  pointer-events: none;
}

.github-download-card__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  color: currentColor !important;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.1;
  text-decoration: underline;
  text-underline-offset: 0.22em;
}

.github-download-card__link::after {
  display: none;
}

.github-download-card__icon {
  flex: 0 0 auto;
  font-size: 0.9em;
}

html[data-theme="dark"] .github-download-card {
  border-color: #7f1d1d !important;
  background: #5a111a !important;
  box-shadow: 0 0.5rem 1.5rem rgba(127, 29, 29, 0.26) !important;
  color: #fffaf4 !important;
}

@media (max-width: 480px) {
  .github-download-card {
    min-height: 2.2rem;
    padding: 0.48rem 0.62rem;
  }

  .github-download-card__link {
    font-size: 0.62rem;
  }
}
</style>
