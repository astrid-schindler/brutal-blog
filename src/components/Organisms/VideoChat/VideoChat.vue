<template>
  <TheHeading the-headline="Call us"></TheHeading>
  <p class="py-6">We are always looking for special cases. You can try to get a video call with me or my colleague S.H. But please understand that we are mostly very busy.</p>
  <div id="videos">
    <video class="video-player" id="user-1" autoplay playsinline></video>
    <video class="video-player" id="user-2" autoplay playsinline></video>
  </div>
  <div class="p-12 grid place-items-center"><TheButton id="start-call" bg-color="pink" font-color="grey" button-text="Start Video Chat" class="p-5"></TheButton></div>
</template>

<script>
import TheButton from "@/components/Atoms/TheButton/TheButton";
import TheHeading from "@/components/Atoms/TheHeading/TheHeading";

let localStream;

let cameraOn = async () => {
  //Access to camera
  localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
  //Display in video frame
  document.getElementById('user-1').srcObject = localStream
  // Console
  console.log ("Camera on!")
}

function buttonClicked(){
  console.log("Button clicked");
}

window.onload=function(){
  let btn = document.getElementById("start-call");
  btn.addEventListener("click", buttonClicked, true);
}

//document.getElementById("start-call").addEventListener("click", cameraOn);

export default {
  name: "VideoChat",
  components: {TheButton, TheHeading},
  methods: {
    cameraOn,
  }
}
</script>

<style scoped>
@import "VideoChat.css";
</style>