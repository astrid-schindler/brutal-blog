<template>
<the-heading data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine" the-headline="CONTACT"></the-heading>
  <div class="breite">
  <div class="pt-20 font-extralight grid grid-cols-2 gap-x-28 gap-y-16 max-sm:grid-cols-1 text-xs">
    <div class="tracking-wide">
      <p class="pb-6 float-left text-justify text-xs">If you have an interest in working with me, please write an e-mail or send a beautiful, old-fashioned letter. :)</p>
      <br>
      <p class="uppercase font-medium text-justify tracking-[.25em] text-sm">Address:</p>
      <p class="text-justify tracking-wide text-xs">John Doe</p>
      <p class="text-justify tracking-wide text-xs">6916 Lancaster Rd</p>
      <p class="text-justify tracking-wide text-xs">Dublin, CA 94568, USA</p>
      <br>
      <p class="uppercase font-medium text-justify tracking-[.25em] text-sm">Mail:</p>
      <p>CONTACT@JOHNDOE.COM</p>
      <br>
      <p class="uppercase font-medium text-justify tracking-[.25em] text-sm">Phone:</p>
      <p>+1 (234) 567890</p>
    </div>
    <div>
    <p class="pb-6 text-justify tracking-wide text-xs">Do you have a short question, then feel free to use the contact form. I'm looking forward to hearing from you.</p>
      <form ref="form" @submit.prevent="sendEmail">
      <div class="relative z-0 mb-6 w-full group">
        <input type="email" name="user_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-2 border-stone-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-stone-400 font-light tracking-widest pl-2 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute pl-2 text-xs text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-900 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 uppercase font-medium tracking-[.35em] peer-focus:-translate-y-6">Your e-mail address</label>
      </div>
        <div class="relative z-0 mb-6 w-full group">
          <input type="email" name="user_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-2 border-stone-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-stone-400 font-light tracking-widest pl-2 peer" placeholder=" " required />
          <label for="floating_email" class="peer-focus:font-medium absolute pl-2 text-xs text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-900 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 uppercase font-medium tracking-[.35em] peer-focus:-translate-y-6">Your name</label>
        </div>
      <div class="relative z-0 mb-6 w-full group">
        <textarea rows="5" name="message" id="floating_message" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-stone-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-stone-400 font-light tracking-widest pl-2 peer" placeholder=" " required />
        <label for="floating_message" class="peer-focus:font-medium absolute pl-2 text-xs text-stone-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-900 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 uppercase font-medium tracking-[.35em] peer-focus:-translate-y-6">Your message</label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      </div>
      <the-button class="hover:text-emerald-300" button-icon="fa-envelope" button-text="Get it out!"></the-button>
    </form>
    </div>
  </div>

  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import TheButton from "@/components/Atoms/TheButton/TheButton";

export default {
  name: "ContactPage",
  components: {TheButton, TheHeading},
  methods: {
    sendEmail() {
      emailjs.sendForm('service_r4s4rki', 'template_j2ccbnu', this.$refs.form, 'C5g1rN7i3EKFt0GGq')
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
.breite{
  width: 920px;
}
</style>