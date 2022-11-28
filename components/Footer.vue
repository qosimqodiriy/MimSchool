<template>
   <div class="w-full bg-black py-40">
      <div class="myContainer">
         <div class="flex flex-col md:flex-row justify-between flex-wrap gap-40">
            <div class="w-full md:w-30%">
               <img class="mb-40 md:mb-44 lg:mb-52 2xl:mb-60" src="@/assets/images/logo.svg" alt="" />

               <div class="flex items-center gap-30 flex-wrap">
                  <img v-for="item in 5" :key="item" class="w-24 h-24" src="@/assets/images/instagram.png" alt="">
               </div>
            </div>

            <div class="flex gap-40">
               <div class="w-50%">
                  <h3 class="heading-6 text-white-primary mb-24">Kurslar</h3>
                  <p class="subtitle-m text-Spanish-Gray mb-16">Front-end</p>
                  <p class="subtitle-m text-Spanish-Gray mb-16">Back-end</p>
                  <p class="subtitle-m text-Spanish-Gray mb-16">Android</p>
                  <p class="subtitle-m text-Spanish-Gray">IOS</p>
               </div>

               <div class="w-50%">
                  <h3 class="heading-6 text-white-primary mb-24">Menyular</h3>
                  <p class="subtitle-m text-Spanish-Gray mb-16">Biz haqimizda</p>
                  <p class="subtitle-m text-Spanish-Gray mb-16">Kurslarimiz</p>
                  <p class="subtitle-m text-Spanish-Gray">Ustozlar</p>
               </div>
            </div>

            <div class="">
               <h3 class="heading-6 text-white-primary mb-24">Biz bilan bog’laning</h3>
               <div class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/Location.png" alt="">
                  <p class="subtitle-1 text-white-primary">Город: Зенит, р.Мирабад г.Ташкент, Узбекситан</p>
               </div>
               <div class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/email.png" alt="">
                  <p class="subtitle-1 text-white-primary">index@mimsoft.com</p>
               </div>
               <div class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/phone.png" alt="">
                  <p class="subtitle-1 text-white-primary">+998 99 200 02 02</p>
               </div>
            </div>
         </div>
         <div class="w-full border-t border-Quartz my-28"></div>
         <div class="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-20 md:gap-30 lg:gap-40">
            <div class="max-w-400">
               <p class="subtitle text-white-primary">© 2022 Mimsoft education</p>
               <p class="subtitle text-white-primary">Shaxsiy ma'lumotlarni qayta ishlash siyosati</p>
            </div>

            <div class="inline-flex items-start gap-10 max-w-400">
               <img src="@/assets/images/footer-icon.png" alt="">
               <p class="subtitle-2 text-white-primary"><span class="subtitle-2 text-blue">Сайт разработан в</span> National Development Community Перейти на сайт разработчиков</p>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
export default {
   
}
</script>


<style lang="">
   
</style>