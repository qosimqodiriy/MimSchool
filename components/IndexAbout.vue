<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <div class="grid md:grid-cols-7 gap-24 w-full">
            <div class="p-28 md:p-32 lg:p-40 md:col-span-4 bg-white-primary rounded-32 md:rounded-40">
               <p class="overline-1 text-Old-Lavender mb-8">Biz haqimizda</p>
               <h2 class="heading-2 text-Jet max-w-600 mb-32">Mim School haqida</h2>
               <p class="overline-2 mb-40">MimSchool markazi Samarqand shahridagi birinchi ko'p tarmoqli markaz bo'lib bir vaqtning o'zida IT va dasturlashdan tortib abituriyentlar, yosh bolalar uchun til va ixtisoslashgan maktablarga tayyorlash,  xodimlarining offis ishlariga tayyorlashgacha bo'lgan mutaxassisliklarni o'rgatadi. Markazning dars sifati va o'quv sharoitlari kafolatlanadi.</p>
               <div class="flex flex-col lg:flex-row items-center gap-20">
                  <router-link to="/about" class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-white-primary rounded-40 bg-blue hover:bg-white-primary hover:text-blue border border-white-primary hover:border-blue cursor-pointer uppercase transition-all duration-500">Ko‘proq ko‘rish</router-link>
                  <!-- <a href="#register" class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-blue rounded-40 bg-white-primary hover:bg-blue hover:text-white-primary border-blue border cursor-pointer uppercase transition-all duration-500">Kursga yozilish</a> -->
               </div>
            </div>

            <div class="w-full md:col-span-3 overflow-hidden rounded-32 md:rounded-40">
               <img class="w-full hover:scale-110 transition-all duration-500 delay-150" src="@/assets/images/about.png" alt="">
            </div>
         </div>
      </div>
   </div>
</template>