<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <question-box class="mb-60 md:mb-72 lg:mb-84 xl:mb-100 2xl:mb-120" />
         <register-box />
      </div>
   </div>
</template>


<script>
import QuestionBox from '@/components/QuestionBox.vue'
import RegisterBox from '@/components/RegisterBox.vue'

export default {
   components: {
      QuestionBox,
      RegisterBox,
   }
}
</script>