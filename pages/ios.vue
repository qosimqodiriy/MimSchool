<template>
   <div>
      <main-section :type="5" />
      <vacancy-box />
      <course-about :type="5" />
      <question-register />
   </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';

const VacancyBox = defineAsyncComponent(() => import('@/components/VacancyBox.vue'))
const MainSection = defineAsyncComponent(() => import('@/components/MainSection.vue'))
const CourseAbout = defineAsyncComponent(() => import('@/components/CourseAbout.vue'))
const QuestionRegister = defineAsyncComponent(() => import('@/components/QuestionRegister.vue'))

export default {
   components: {
      VacancyBox,
      MainSection,
      CourseAbout,
      QuestionRegister,
   }
}
</script>