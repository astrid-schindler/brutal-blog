<template>
  <the-heading data-aos="fade-right"
               data-aos-offset="300"
               data-aos-easing="ease-in-sine"
               the-headline="CONTACT"></the-heading>
  <div class="layout-grid pt-20 text-xs font-bold max-md:px-4 max-md:pt-12">
    <contact-info></contact-info>
    <contact-form @submit-form="sendEmail"></contact-form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import ContactForm from "@/components/Molecules/ContactForm/ContactForm";
import ContactInfo from "@/components/Molecules/ContactInfo/ContactInfo";

export default {
  name: "ContactPage",
  components: {ContactForm, ContactInfo, TheHeading},
  methods: {
    sendEmail(form) {
      emailjs.sendForm('service_r4s4rki', 'template_j2ccbnu', form, 'C5g1rN7i3EKFt0GGq')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>
