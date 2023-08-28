import Vue from 'vue'
import AboutCard from '~/components/AboutCard.vue'
import IndexMain from '~/components/IndexMain.vue'
import IndexAbout from '~/components/IndexAbout.vue'
import LessonCard from '~/components/LessonCard.vue'
import VacancyBox from '~/components/VacancyBox.vue'
import MainSection from '~/components/MainSection.vue'
import CourseAbout from '~/components/CourseAbout.vue'
import QuestionBox from '~/components/QuestionBox.vue'
import RegisterBox from '~/components/RegisterBox.vue'
import TeacherCard from '~/components/TeacherCard.vue'
import IndexSection from '~/components/IndexSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import MainSectionTwo from '~/components/MainSectionTwo.vue'
import TeacherSection from '~/components/TeacherSection.vue'
import QuestionRegister from '~/components/QuestionRegister.vue'

const components = { AboutCard, LessonCard, VacancyBox, IndexMain, MainSection, CourseAbout, QuestionBox, RegisterBox, TeacherCard, IndexAbout, IndexSection, AboutSection, MainSectionTwo, TeacherSection, QuestionRegister }

Object.entries(components).forEach(([name, component]) => {
   Vue.component(name, component)
})