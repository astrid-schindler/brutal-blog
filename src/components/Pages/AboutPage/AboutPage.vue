<template>
  <main class="page-shell">
    <the-heading class="page-heading-left" the-headline="ABOUT"></the-heading>
    <div class="split-grid section-stack">
      <figure class="m-0 w-full max-lg:mx-auto max-lg:max-w-compact">
        <img
          :src="aboutImage"
          alt="Arlowe Santoro sitting in a train compartment with a compact camera by a rainy window"
          class="block aspect-[4/5] w-full object-cover"
        >
      </figure>
      <p class="body-copy text-left">I like portraits without the capital-P Photoshoot feeling. More like a good coat, a strange staircase, coffee balanced somewhere it should not be, and light showing up at the right time for once. No stiff posing, no fake laughing on command, no sudden LinkedIn alter ego. We walk around, talk a little nonsense, find good corners, and make pictures where you still feel like you, just with better timing. A bit cinematic, a bit rough around the edges, very low on cringe. If you want to see yourself a little differently, send me a message. Bring yourself. We will figure out the rest as we go.</p>
    </div>
  </main>
</template>

<script setup>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import aboutImage from "./images/about-arlowe-train-camera-ai.webp";
</script>
