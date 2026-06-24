<template>
<TheHeading the-headline="LOGIN"></TheHeading>
  <div role="alert" class="layout-section text-center hidden" id="alertBox">
    <div class="bg-red-500 text-stone-700 font-light px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-stone-700">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="layout-grid text-center pt-12">
    <login-form @submit-login="sendingCredentials"></login-form>
  </div>
</template>

<script>
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import LoginForm from "@/components/Molecules/LoginForm/LoginForm";
import axios from 'axios'
//import Cookies from 'js-cookie'

export default {
  name: "LoginPage",
  components: {LoginForm, TheHeading},
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
