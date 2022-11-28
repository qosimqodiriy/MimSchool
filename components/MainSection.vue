<template>
   <div class="w-full bg-black py-30 md:py-36 lg:py-44 xl:py-56">
      <div class="myContainer">
         <div class="flex flex-col lg:flex-row-reverse gap-60 md:gap-70 lg:gap-84 xl:gap-95 2xl:gap-120 mb-60 md:mb-76 lg:mb-95 xl:mb-120">
            <img v-if="type == 1" src="@/assets/images/faundation.svg" alt="">
            <img v-else-if="type == 2" src="@/assets/images/frontend.svg" alt="">
            <img v-else-if="type == 3" src="@/assets/images/backend.svg" alt="">
            <img v-else-if="type == 4" src="@/assets/images/android.svg" alt="">
            <img v-else-if="type == 5" src="@/assets/images/ios.svg" alt="">
            <img v-else src="@/assets/images/frontend.svg" alt="">

            <div class="w-full">
               <h2 class="heading-4 text-white-primary mb-32">{{ name }} kursi</h2>
               <p class="subtitle text-white-primary mb-40 max-w-830">Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.</p>
               <div><button class="caps-subtitle text-white-primary btn w-full md:w-auto py-15 lg:py-20 px-120 rounded-32 lg:rounded-40">Yozilish</button></div>
            </div>
         </div>

         <div class="w-full rounded-32 md:rounded-40 bgGradient py-40 px-20 md:px-25 lg:px-32 xl:px-40">
            <h3 class="heading-2 text-white-primary mb-32">Nimalarni o'rganasiz</h3>
            <div class="grid lg:grid-cols-2 gap-y-32 gap-x-64">
               <div v-for="item in 4" :key="item">
                  <div class="flex items-start gap-10 mb-8">
                     <img class="w-28 h-28" src="@/assets/images/tick.png" alt="">
                     <h3 class="heading-5 text-white-primary">Veb-saytingizni HTML va CSS-da yarating</h3>
                  </div>
                  <p class="subtitle text-white-primary">Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling.</p>
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
      },
      name: {
         type: String,
         required: true
      }
   },

   data() {
      return {
         returnType: this.type ? this.type : 1
      }
   },
}
</script>