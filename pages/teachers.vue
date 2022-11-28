<template>
   <div class="bg-black">
      <main-box :type="1" title="Mentorlar" />
      <teacher-section />
   </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';

const MainBox = defineAsyncComponent(() => import('@/components/MainSectionTwo.vue'))
const TeacherSection = defineAsyncComponent(() => import('@/components/TeacherSection.vue'))
export default {
   components: {
      MainBox,
      TeacherSection,
   }
}
</script>


<style lang="">
   
</style>