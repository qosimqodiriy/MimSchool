import Vue from 'vue'
import AboutCard from '~/components/AboutCard.vue'
import LessonCard from '~/components/LessonCard.vue'
import VacancyBox from '~/components/VacancyBox.vue'
import IndexMainVue from '~/components/IndexMain.vue'
import MainSection from '~/components/MainSection.vue'
import CourseAbout from '~/components/CourseAbout.vue'
import QuestionBox from '~/components/QuestionBox.vue'
import RegisterBox from '~/components/RegisterBox.vue'
import TeacherCard from '~/components/TeacherCard.vue'
import IndexAboutVue from '~/components/IndexAbout.vue'
import AboutSection from '~/components/AboutSection.vue'
import MainSectionTwo from '~/components/MainSectionTwo.vue'
import TeacherSection from '~/components/TeacherSection.vue'
import QuestionRegister from '~/components/QuestionRegister.vue'

const components = { AboutCard, LessonCard, VacancyBox, IndexMainVue, MainSection, CourseAbout, QuestionBox, RegisterBox, TeacherCard, IndexAboutVue, AboutSection, MainSectionTwo, TeacherSection, QuestionRegister }

Object.entries(components).forEach(([name, component]) => {
   Vue.component(name, component)
})