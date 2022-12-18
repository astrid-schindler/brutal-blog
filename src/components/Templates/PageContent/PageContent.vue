<template>
  <div class="intheback font-mono font-light">
      <TheHeading></TheHeading>
    <div id="videos">
      <video class="video-player" id="user-1" autoplay playsinline></video>
      <video class="video-player" id="user-2" autoplay playsinline></video>
    </div>
    <div class="p-12 grid place-items-center"><TheButton class="p-5"></TheButton></div>
  </div>
</template>

<script>
import TheButton from "@/components/Atoms/TheButton/TheButton";
let localStream;

let CameraOn = async () => {


  //Access to camera
  localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
  //Display in video frame
  document.getElementById('user-1').srcObject = localStream

}

CameraOn()

import TheHeading from "@/components/Atoms/TheHeading/TheHeading";
export default {
  name: "PageContent",
  components: {TheButton, TheHeading},
}
</script>

<style scoped>
@import 'PageContent.css';
</style>