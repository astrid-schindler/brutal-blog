<template>
<the-heading the-headline="Contact"></the-heading>
  <div class="pt-10 grid grid-cols-2 gap-48">
    <div>
      <p class="pb-6">If you have a specific interest to cooperate with us, then please write an email or send us a beautiful letter.</p>
      <br>
      <p class="font-bold">Address:</p>
      <p>Mystery Blog</p>
      <p>Baker Street 221b</p>
      <p>LONDON</p>
      <p>NW1 6XE</p>
      <br>
      <p class="font-bold">EMail:</p>
      <p>contact@mystery-blog.com</p>
      <br>
      <p class="font-bold">Phone:</p>
      <p>+44 22 5896646</p>
    </div>
    <div>
      <p class="pb-6">Do you have any simple riddles? Feel free and use our contact form.</p>
      <form>
      <div class="relative z-0 mb-6 w-full group">
        <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="name" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="message" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
      </div>
      <the-button button-icon="fa-envelope" button-text="Submit!"></the-button>
    </form></div>
  </div>

  <div class="pt-10">
    <p>
      We are always looking for special cases. You can try to get a video call with my colleague S.H. But please understand that we are mostly very busy.
    </p>
    <div class="pt-4 content-center"><the-button onclick="location.href='#/video-call'" button-text="Get a video call!"></the-button></div>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import TheButton from "@/components/Atoms/TheButton/TheButton";

export default {
  name: "ContactPage",
  components: {TheButton, TheHeading}
}
</script>

<style scoped>

</style>