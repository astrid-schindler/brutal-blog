<template>
  <header
    class="chrome-reset pointer-events-none z-50 text-ink transition-colors duration-200"
    :class="{'hero-tone': isHeroNavigation}"
  >
    <nav class="pointer-events-auto fixed left-[clamp(1rem,3vw,2rem)] right-[clamp(1rem,3vw,2rem)] top-[clamp(1rem,3vw,1.5rem)] z-50 grid grid-cols-12 items-start gap-x-[var(--layout-gap)] p-0 max-lg:grid-cols-8 max-md:grid-cols-4 max-md:gap-y-2 max-[480px]:grid-cols-[auto_minmax(0,1fr)]">
      <span class="col-span-2 inline-flex items-center px-0 py-0 font-mono text-xs font-normal lowercase leading-none max-md:col-span-1 max-md:text-[0.68rem]">
        arlowe santoro
      </span>
      <div class="minimal-navigation__actions col-start-3 col-end-[-1] flex items-start justify-end gap-x-4 gap-y-1 max-md:col-start-2">
        <button
          type="button"
          class="minimal-navigation__menu-button hidden border-0 bg-transparent p-0 font-mono text-[0.68rem] font-light leading-none text-current shadow-none"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-controls="site-navigation-links"
          @click="toggleMenu"
        >
          {{ isMenuOpen ? "Close" : "Menu" }}
        </button>
        <div
          id="site-navigation-links"
          class="minimal-navigation__menu"
          :class="{'minimal-navigation__menu--open': isMenuOpen}"
        >
          <navigation-links class="minimal-navigation__links" @navigate="handleNavigate"></navigation-links>
          <button
            type="button"
            class="minimal-navigation__theme-button minimal-navigation__theme-button--mobile"
            :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleDarkMode"
          >
            {{ isDarkMode ? "Light mode" : "Dark mode" }}
          </button>
        </div>
        <button
          type="button"
          class="minimal-navigation__theme-button minimal-navigation__theme-button--desktop grid h-4 w-4 flex-none place-items-center p-0 text-[0.72rem] leading-none [&_svg]:h-[0.78rem] [&_svg]:w-[0.78rem]"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDarkMode ? 'Light mode' : 'Dark mode'"
          @click="toggleDarkMode"
        >
          <font-awesome-icon :icon="isDarkMode ? ['fas', 'sun'] : ['fas', 'moon']" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import NavigationLinks from "@/components/Molecules/NavigationLinks/NavigationLinks";
import {isOverHomeHero} from "@/functions/heroTone";

export default {
  name: "NavigationBar",
  components: {NavigationLinks},
  data() {
    return {
      isHeroNavigation: false,
      isDarkMode: false,
      isMenuOpen: false,
      themeTimer: null,
    };
  },
  mounted() {
    this.applyBrowserTimeTheme();
    this.scheduleBrowserTimeThemeUpdate();
    this.scheduleNavigationToneUpdate();
    window.addEventListener("scroll", this.updateNavigationTone, {passive: true});
    window.addEventListener("resize", this.updateNavigationTone);
  },
  beforeUnmount() {
    window.clearTimeout(this.themeTimer);
    window.removeEventListener("scroll", this.updateNavigationTone);
    window.removeEventListener("resize", this.updateNavigationTone);
  },
  watch: {
    "$route.path"() {
      this.isMenuOpen = false;
      this.scheduleNavigationToneUpdate();
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleNavigate(target) {
      this.isMenuOpen = false;
      this.scrollToSection(target);
    },
    scheduleNavigationToneUpdate() {
      this.$nextTick(() => {
        window.requestAnimationFrame(this.updateNavigationTone);
      });
    },
    updateNavigationTone() {
      this.isHeroNavigation = isOverHomeHero(this.$route.path);
    },
    scrollToSection(target) {
      var pageRoutes = {
        about: "/about",
        blog: "/blog",
        contact: "/contact",
      };

      if (pageRoutes[target]) {
        this.$router.push(pageRoutes[target]);
        return;
      }

      var element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({behavior: "smooth"});
        return;
      }

      if (target === "home" || target === "photography") {
        this.$router.push("/").then(() => {
          this.$nextTick(() => {
            document.getElementById(target)?.scrollIntoView({behavior: "smooth"});
          });
        });
      }
    },
    syncDarkMode() {
      this.isDarkMode = document.documentElement.dataset.theme === "dark";
    },
    getBrowserTimeTheme(date = new Date()) {
      var hour = date.getHours();
      return hour >= 20 || hour < 7 ? "dark" : "light";
    },
    applyBrowserTimeTheme() {
      window.localStorage.removeItem("theme");
      document.documentElement.dataset.theme = this.getBrowserTimeTheme();
      this.syncDarkMode();
    },
    scheduleBrowserTimeThemeUpdate() {
      window.clearTimeout(this.themeTimer);

      var now = new Date();
      var nextSwitch = new Date(now);
      var currentHour = now.getHours();

      if (currentHour < 7) {
        nextSwitch.setHours(7, 0, 0, 0);
      } else if (currentHour < 20) {
        nextSwitch.setHours(20, 0, 0, 0);
      } else {
        nextSwitch.setDate(nextSwitch.getDate() + 1);
        nextSwitch.setHours(7, 0, 0, 0);
      }

      this.themeTimer = window.setTimeout(() => {
        this.applyBrowserTimeTheme();
        this.scheduleBrowserTimeThemeUpdate();
      }, Math.max(1000, nextSwitch.getTime() - now.getTime()));
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.dataset.theme = this.isDarkMode ? "dark" : "light";
      this.isMenuOpen = false;
    },
  },
}
</script>

<style scoped>
.minimal-navigation__actions {
  min-width: 0;
}

.minimal-navigation__actions :deep(.navigation-links) {
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  min-width: 0;
}

.minimal-navigation__theme-button {
  border: 0;
  background: transparent;
  box-shadow: none;
}

.minimal-navigation__theme-button--mobile {
  display: none;
  width: max-content;
  padding: 0;
  font-family: var(--font-mono-serif);
  font-size: 0.68rem;
  font-weight: 300;
  line-height: 1;
  text-align: right;
}

@media (max-width: 768px) {
  .minimal-navigation__actions,
  .minimal-navigation__actions :deep(.navigation-links) {
    justify-content: flex-start;
  }

  .minimal-navigation__actions {
    position: relative;
    justify-content: flex-end;
  }

  .minimal-navigation__menu-button {
    display: inline-flex;
  }

  .minimal-navigation__theme-button--desktop {
    display: none;
  }

  .minimal-navigation__menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    display: none !important;
    width: max-content;
    max-width: min(14rem, calc(100vw - 2rem));
    justify-items: end;
    row-gap: 0.55rem;
    padding: 0;
    text-align: right;
  }

  .minimal-navigation__menu--open {
    display: grid !important;
  }

  .minimal-navigation__menu :deep(.navigation-links) {
    display: grid;
    justify-items: end;
    row-gap: 0.55rem;
  }

  .minimal-navigation__theme-button--mobile {
    display: inline-flex;
  }

  .minimal-navigation__links :deep(a) {
    width: max-content;
  }
}
</style>
