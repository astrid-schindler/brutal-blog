<template>
<TheHeading the-headline="Login"></TheHeading>
  <div v-show="toggle" role="alert" class="pb-8 text-center px-72 max-sm:px-8 max-md:px-8">
    <div class="bg-red-500 text-white font-bold px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center text-center">
    <form>
      <div class="relative z-0 mb-6 group w-96 text-left max-sm:w-64">
        <input type="text" name="username" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
      </div>
      <div class="relative z-0 mb-6 group w-96 text-left max-sm:w-64">
        <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer" placeholder=" " required />
        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      <the-button button-icon="fa-envelope" @click="toggle = !toggle" button-text="Log in!"></the-button>
    </form>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import TheButton from "@/components/Atoms/TheButton/TheButton";
export default {
  name: "LoginPage",
  components: {TheHeading, TheButton},
  props: {
    message : String,
  },
  data () {
    return {
      toggle: false,
    }
  },
  methods:{
    readInput: function (){

    }
  },
}
</script>