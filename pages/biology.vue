<template>
    <div>
        <main-section :type="12" />
        <course-about :type="12" />
        <question-register />
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue';

const MainSection = defineAsyncComponent(() => import('@/components/MainSection.vue'))
const CourseAbout = defineAsyncComponent(() => import('@/components/CourseAbout.vue'))
const QuestionRegister = defineAsyncComponent(() => import('@/components/QuestionRegister.vue'))

export default {
    components: {
        MainSection,
        CourseAbout,
        QuestionRegister,
    }
}
</script>