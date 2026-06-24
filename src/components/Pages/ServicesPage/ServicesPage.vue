<template>
  <div>
    <the-heading data-aos="fade-right"
                 data-aos-offset="500"
                 data-aos-easing="ease-in-sine"
                 the-headline="SKILLS / INTERESTS"></the-heading>
    <skills-grid></skills-grid>
    <div class="layout-grid">
      <p class="layout-main brutal-copy text-xs text-justify font-light tracking-normal max-md:text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
    </div>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import SkillsGrid from "@/components/Organisms/SkillsGrid/SkillsGrid";

export default {
  name: "ServicesPage.vue",
  components: {SkillsGrid, TheHeading},
}
</script>
