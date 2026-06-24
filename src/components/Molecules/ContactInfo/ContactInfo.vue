<template>
  <div class="contact-info brutal-copy col-start-3 col-span-4 tracking-wide max-lg:col-start-2 max-lg:col-span-3 max-md:col-start-auto max-md:col-span-full max-md:min-w-0">
    <p class="pb-6 float-left text-justify text-xs">
      If you have an interest in working with me, please write an e-mail or send a beautiful, old-fashioned letter. :)
    </p>
    <br>
    <p class="uppercase font-light text-justify tracking-[.18em] text-sm">Address:</p>
    <p class="text-justify tracking-wide text-xs">John Doe</p>
    <p class="text-justify tracking-wide text-xs">6916 Lancaster Rd</p>
    <p class="text-justify tracking-wide text-xs">Dublin, CA 94568, USA</p>
    <br>
    <p class="uppercase font-light text-justify tracking-[.18em] text-sm">Mail:</p>
    <p>CONTACT@JOHNDOE.COM</p>
    <br>
    <p class="uppercase font-light text-justify tracking-[.18em] text-sm">Phone:</p>
    <p>+1 (234) 567890</p>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
}
</script>

<style scoped>
@media (max-width: 1024px) {
  .contact-info {
    grid-column: 1 / -1;
    width: min(100%, 34rem);
    margin-inline: auto;
    text-align: center;
  }

  .contact-info p {
    float: none;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .contact-info {
    width: 100%;
  }
}
</style>
