<template>
   <div>
      <div id="courses" class="relative -top-50"></div>
      <div class="w-full bg-black py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
         <div class="myContainer">
            <p class="overline-1 text-Cool-Grey mb-8 uppercase text-center md:text-start">Kurslarimiz</p>
            <h2 class="heading-2 text-white-primary mb-40 md:mb-32 text-center md:text-start">Bizning darslar</h2>
            <div class="grid col-span-1 md:grid-cols-2 gap-24 mb-60 md:mb-72 lg:mb-84 xl:mb-100 2xl:mb-120">
               <lesson-card v-for="(item, index) in lessons" :key="index" :item="item" v-show="item.show" />
            </div>

            <!-- Bu vaqtinchalik o'chirilgan IT parkka qo'shiguncha -->
            <!-- <p class="overline-1 text-Cool-Grey mb-8 uppercase text-center md:text-start">O‘qituvchilar</p>
            <h2 class="heading-2 text-white-primary mb-40 md:mb-32 text-center md:text-start">Akademiyada o’qitadigan ustozlar</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-14 lg:gap-20">
               <teacher-card v-for="(teacher, index) in teachers" :key="index" :item="teacher" :show="true" />
            </div> -->
         </div>
      </div>

      <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
         <div class="myContainer">
            <question-box class="mb-200" />

            <register-box />
         </div>
      </div>
   </div>
</template>



<script>
import lessons from '@/api/lessons'
import teachers from '@/api/teachers'
export default {
   data() {
      return {
         lessons: lessons,
         teachers: teachers,
      }
   },
}
</script>