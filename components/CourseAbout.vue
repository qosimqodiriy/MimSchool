<template>
   <div class="w-full bg-black py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <div class="bgGradient w-full rounded-32 md:rounded-40 py-40 px-20 md:px-25 lg:px-32 xl:px-40">
            <p class="heading-2 text-white-primary mb-32">Bu kurs kimlar uchun?</p>

            <div class="grid lg:grid-cols-2 gap-y-32 gap-x-64 lg:gap-x-100">
               <div v-for="item in CourseAbout[type-1].Whom">
                  <div class="flex items-start gap-10 mb-8">
                     <img class="w-28 h-28" src="@/assets/images/tick.png" alt="">
                     <h3 class="heading-5 text-white-primary">{{ item.title }}</h3>
                  </div>
                  <p class="subtitle text-white-primary">{{ item.text }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
export default {
   props: {
      type: {
         type: Number,
         required: true
      }
   },

   data() {
      return {
         CourseAbout: [
            {
               type: 1,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 2,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 3,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 4,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 5,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 6,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 7,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
            {
               type: 8,
               Whom: [
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
                  {
                     title: "Dasturlashni yangi boshlovchilar uchun",
                     text: "dasturlash sohasida hech qanday bilimga ega bo'lmagan har qanday inson dasturlashni oson o'rganib olishi mumkin."
                  },
               ]
            },
         ]
      }
   },
}
</script>


<style lang="">
   
</style>