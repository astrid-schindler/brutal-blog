<template>
<TheHeading the-headline="LOGIN"></TheHeading>
  <div role="alert" class="text-center px-72 max-sm:px-8 max-md:px-8 hidden" id="alertBox">
    <div class="bg-red-500 text-white font-bold px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center text-center pt-12">
    <form>
      <div class="relative z-0 mb-6 group w-96 text-left max-sm:w-64">
        <input type="text" name="username" id="floating_username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-4 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-stone-600 pl-2 peer" placeholder=" " required />
        <label for="floating_username" class="peer-focus:font-medium absolute pl-2 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-medium tracking-widest text-black">Benutzername</label>
      </div>
      <div class="relative z-0 mb-6 group w-96 text-left max-sm:w-64">
        <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-4 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-stone-500 focus:outline-none focus:ring-0 focus:border-stone-600 pl-2 peer" placeholder=" " required />
        <label for="floating_password" class="peer-focus:font-medium absolute pl-2 text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-stone-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase font-medium tracking-widest text-black">Passwort</label>
      </div>
      <the-button button-icon="fa-envelope" @click="sendingCredentials" button-text="Log in!"></the-button>
    </form>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import TheButton from "@/components/Atoms/TheButton/TheButton";
import axios from 'axios'
//import Cookies from 'js-cookie'

export default {
  name: "LoginPage",
  components: {TheHeading, TheButton},
  props: {

  },
  data () {
    return {
      toggle: false,
      message : String,
    }
  },
  methods:{
    getCredentials: function (){


    },
      sendingCredentials: function (){
        //let username_input = document.getElementById('floating_username').value
        //let password_input = document.getElementById('floating_password').value

        //alert("Don't use my computer, stranger!");

        //if (username_input === "Sherlock" && password_input === "haha"){
          //alert("Don't use this website, Sherlock!");
          //document.getElementById(alertBox).style.visibility = "visible"
          //this.toggle = true
          //this.message = "Don't use this website, Sherlock!"
        //}
        //else {alert(username_input)}

        //window.open('http://127.0.0.1:8000/', '_blank');
        axios.post('http://127.0.0.1:8000/accounts/login/', {
          username: "John",
          password: "Thund3r!nN8",
        }, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        })
            .then(function (response) {
              console.log(response)
            }.bind(this))
            .catch(error => {
              console.log(error.response)
            });

      }
  },
}
</script>