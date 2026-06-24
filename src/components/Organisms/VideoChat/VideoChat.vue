<template>
  <TheHeading the-headline="Call us"></TheHeading>
  <p class="layout-section py-6 max-md:py-8 max-md:text-[0.95rem] max-md:leading-7">We are always looking for special cases. You can try to get a video call with me or my colleague S.H. But please understand that we are mostly very busy.</p>
  <div id="videos" class="layout-grid gap-[2em] max-lg:gap-4">
    <video class="layout-half bg-stone-700 w-full h-[300px] object-cover max-lg:h-[clamp(220px,32vw,300px)] max-md:h-[clamp(180px,56vw,280px)]" id="user-1" autoplay playsinline></video>
    <video class="layout-half bg-stone-700 w-full h-[300px] object-cover max-lg:h-[clamp(220px,32vw,300px)] max-md:h-[clamp(180px,56vw,280px)]" id="user-2" autoplay playsinline></video>
  </div>
  <div class="p-12 grid place-items-center max-md:py-8 max-md:px-4"><TheButton @click="cameraOn" bg-color="pink" font-color="grey" button-text="Start Video Chat" class="p-5"></TheButton></div>
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

export default {
  name: "VideoChat",
  components: {TheButton, TheHeading},
  methods: {
    cameraOn,
  }
}
</script>
