<template>
  <div class="fixed text-stone-700 right-10 bottom-1/3 pb-6 z-50">
    <div class="fixed grid z-50">
      <p class="[writing-mode:vertical-rl] font-mono font-extralight text-xs pr-2">Dresden, Saxony – 3°C – 23<span class="animate__animated animate__flash animate__infinite animate__slower">:</span>37 – cloudy <span class="animate__animated animate__flash animate__infinite animate__slower">→</span></p>
    </div>
  </div>
  <header class="z-50">
    <nav class="z-50">
      <div class="flex flex-row justify-between top-10 left-10 fixed">
          <span class="animate__animated animate__fadeInDown font-mono text-xs text-stone-700 pr-72">A | S</span>
        <p class="font-mono text-stone-700 font-extralight text-xs">
          <a href="#" v-on:click="myFunction" class="hover:underline hover:text-emerald-300">(1) Home </a>
          <a href="#" v-on:click="myFunction" class="hover:underline hover:text-emerald-300">(2) About </a>
          <a href="#" v-on:click="myFunction" class="hover:underline hover:text-emerald-300">(3) Skills/Interests </a>
          <a href="#" v-on:click="myFunction" class="hover:underline hover:text-emerald-300">(4) Projects </a>
          <a href="#" v-on:click="myFunction" class="hover:underline hover:text-emerald-300">(5) Contact </a>
        </p>
      </div>
    </nav>
      <div class="fixed top-10 right-10">
        <div class="grid z-50">

        </div>
        </div>
      <div class="fixed bottom-10 left-10">
        <div class="fixed z-50">
          <p class="font-mono text-stone-700 font-light text-sm tracking-[.20em]">
            <a href="#" class="hover:text-gray-300"><font-awesome-icon class="" icon="fa-brands fa-facebook" /></a>
            <a href="#" class="hover:text-gray-300"><font-awesome-icon class="pl-6" icon="fa-brands fa-twitter" /></a>
            <a href="#" class="hover:text-gray-300"><font-awesome-icon class="pl-6" icon="fa-brands fa-behance" /></a>
            <a href="#" class="hover:text-gray-300"><font-awesome-icon class="pl-6" icon="fa-solid fa-envelope" /></a>
            <span class="pl-2 text-stone-700 text-xs tracking-tighter"> | © 2026 by Astrid Schindler | All rights reserved.</span>
          </p>
        </div>
      </div>

  </header>

</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    myFunction() {
      const element = document.getElementById("box2");
      element.scrollIntoView({behavior: "smooth"});
    }
  },
}
</script>

<style scoped>
@import "NavigationBar.css";
</style>