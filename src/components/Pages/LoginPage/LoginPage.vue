<template>
<TheHeading the-headline="LOGIN"></TheHeading>
  <div role="alert" class="layout-section text-center hidden" id="alertBox">
    <div class="px-4 py-2 font-light text-ink">
      Danger
    </div>
    <div class="px-4 py-3 text-ink">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="layout-grid text-center pt-12">
    <login-form @submit-login="sendingCredentials"></login-form>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
import LoginForm from "@/components/Molecules/LoginForm/LoginForm";
import axios from 'axios'

var message = ref("");

function sendingCredentials() {
  axios.post('http://127.0.0.1:8000/accounts/login/', {
    username: "John",
    password: "Thund3r!nN8",
  }, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  })
      .then((response) => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });
}
</script>
