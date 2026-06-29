var defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "var(--page-background)",
        ink: "var(--text-color)",
        hero: "var(--hero-navigation-color)",
      },
      fontFamily: {
        mono: [
          "var(--font-mono-serif)",
          ...defaultTheme.fontFamily.mono,
        ],
        display: [
          "var(--font-display-mono)",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      maxWidth: {
        page: "76rem",
        readable: "39rem",
        compact: "34rem",
      },
      spacing: {
        "page-x": "clamp(1.25rem,4vw,3rem)",
        "page-y": "clamp(4.75rem,9vw,7rem)",
        "section-gap": "clamp(3rem,7vw,5.5rem)",
      },
      transitionTimingFunction: {
        motion: "var(--motion-ease)",
        snap: "var(--motion-snap)",
      },
      keyframes: {
        "heading-float": {
          "0%, 72%, 100%": {
            opacity: "0.94",
            transform: "translate3d(0,0,0) rotateX(0)",
          },
          "38%": {
            opacity: "1",
            transform: "translate3d(0,-0.14rem,0) rotateX(0.6deg)",
          },
        },
        "heading-float-down": {
          "0%, 72%, 100%": {
            opacity: "0.94",
            transform: "translate3d(0,0,0) rotateX(0)",
          },
          "38%": {
            opacity: "1",
            transform: "translate3d(0,-0.18rem,0) rotateX(0.7deg)",
          },
        },
        "heading-float-up": {
          "0%, 72%, 100%": {
            opacity: "0.94",
            transform: "translate3d(0,0,0) rotateX(0)",
          },
          "38%": {
            opacity: "1",
            transform: "translate3d(0,0.12rem,0) rotateX(-0.5deg)",
          },
        },
        "weather-blink": {
          "0%, 45%": {opacity: "1"},
          "46%, 100%": {opacity: "0"},
        },
      },
      animation: {
        "heading-float": "heading-float 6.5s cubic-bezier(0.37,0,0.63,1) infinite",
        "heading-float-down": "heading-float-down 6.5s cubic-bezier(0.37,0,0.63,1) infinite",
        "heading-float-up": "heading-float-up 6.5s cubic-bezier(0.37,0,0.63,1) infinite",
        "weather-blink": "weather-blink 1.2s steps(2,end) infinite",
      },
    },
  },
  plugins: [],
};
