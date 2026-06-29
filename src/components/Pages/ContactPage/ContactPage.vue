<template>
  <main class="page-shell motion-static">
    <the-heading class="page-heading-left" the-headline="CONTACT"></the-heading>
    <div class="contact-grid">
      <contact-info></contact-info>
      <contact-form @submit-form="sendEmail"></contact-form>
    </div>
  </main>
</template>

<script setup>
import emailjs from '@emailjs/browser';
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import ContactForm from "@/components/Molecules/ContactForm/ContactForm";
import ContactInfo from "@/components/Molecules/ContactInfo/ContactInfo";

function sendEmail(form) {
  emailjs.sendForm('service_r4s4rki', 'template_j2ccbnu', form, 'C5g1rN7i3EKFt0GGq')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
}
</script>

<style scoped>
.motion-static :deep(.motion-item),
.motion-static :deep(.motion-item.is-scroll-up),
.motion-static :deep(.motion-item.is-scroll-down),
.motion-static :deep(.motion-item.is-visible) {
  opacity: 1;
  filter: none;
  transform: none;
  transition: none;
  will-change: auto;
}

.motion-static :deep(.section-heading) {
  opacity: 1;
  animation: none;
  transform: none;
}
</style>
