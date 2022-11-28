<template>
   <div class="w-full bg-black py-30 md:py-36 lg:py-44 xl:py-56">
      <div class="myContainer">
         <div class="flex flex-col lg:flex-row-reverse gap-60 md:gap-70 lg:gap-84 xl:gap-95 2xl:gap-120">
            <img class="w-full lg:w-40%" v-if="type == 1" src="@/assets/images/teachers.svg" alt="">
            <img class="w-full lg:w-40%" v-else-if="type == 2" src="@/assets/images/mimsoftLogo.svg" alt="">

            <div class="w-full lg:w-60%">
               <h2 class="heading-4 text-white-primary mb-32">{{ title }}</h2>
               <p class="subtitle text-white-primary mb-40 max-w-830">Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq.</p>
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
      title: {
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