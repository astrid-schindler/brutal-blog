<template>
  <div class="contact-page">
    <the-heading data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 the-headline="CONTACT"></the-heading>
    <div class="contact-page__grid layout-grid pt-20 text-xs font-light max-md:px-4 max-md:pt-12">
      <contact-info></contact-info>
      <contact-form @submit-form="sendEmail"></contact-form>
    </div>
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

<style scoped>
.contact-page {
  width: 100%;
}

@media (max-width: 1024px) {
  .contact-page {
    display: grid;
    justify-items: center;
    width: min(100%, 48rem);
    margin-inline: auto;
  }

  .contact-page__grid {
    width: 100%;
    justify-items: center;
    row-gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .contact-page {
    width: min(100%, 34rem);
  }

  .contact-page__grid {
    row-gap: 2rem;
  }
}
</style>
