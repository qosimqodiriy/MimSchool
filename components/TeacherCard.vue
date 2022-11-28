<template>
   <div class="w-full h-full min-h-235 overflow-hidden rounded-24 md:rounded-32 relative card">
      <img class="w-full h-full max-h-513 object-cover object-center" src="@/assets/images/teacher.png" alt="">

      <div v-if="show" class="absolute bottom-0 left-0 w-full p-20 md:p-25 lg:p-30">
         <p class="heading-5 text-white-primary">Justin Perry</p>
         <p class="body text-white-primary">ux/ui design</p>
      </div>
   </div>
</template>


<script>
export default {
   props: {
      show: {
         type: Boolean,
         required: true
      }
   }
}
</script>


<style lang="css" scoped>
   .card {
      background: linear-gradient(180deg, rgba(39, 33, 57, 0) 42.19%, rgba(39, 33, 57, 0.8) 100%);
   }
</style>