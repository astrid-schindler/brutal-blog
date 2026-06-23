module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend:
        {
          fontFamily: {
              'cormorant': ['Cormorant', 'serif'],
              'poppins': ['Poppins', 'sans-serif'],
              'jost': ['Jost', 'sans-serif'],
              'cormorant-garamond':['Cormorant Garamond', 'sans-serif'],
          },
        },
  },
  plugins: [
      require('flowbite/plugin'),
      require('@tailwindcss/line-clamp'),
  ],
}

