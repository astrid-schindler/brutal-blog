<template>
  <div v-show="toggle" role="alert" class="layout-section pb-8 text-center">
    <div class="bg-red-500 text-white font-bold px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox"
}
</script>

<style scoped>

</style>
