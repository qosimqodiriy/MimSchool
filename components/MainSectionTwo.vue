<template>
   <div class="w-full bg-black py-30 md:py-36 lg:py-44 xl:py-56">
      <div class="myContainer">
         <div v-for="(item, index) in data" :key="index" v-show="item.type == type" class="flex flex-col lg:flex-row-reverse gap-60 md:gap-70 lg:gap-84 xl:gap-95 2xl:gap-120">
            <div
               data-aos="fade-down"
               data-aos-offset="200"
               data-aos-once="false"
               data-aos-mirror="true"
               data-aos-duration="500"
               data-aos-easing="ease-in-out"

               class="w-full md:w-50% lg:w-40%">

               <img class="vanillaCard w-full" v-if="item.type == 1" src="@/assets/images/teachers.png" alt="">
               <img class="vanillaCard w-full" v-else-if="item.type == 2" src="@/assets/images/mimsoftLogo.png" alt="">
            </div>

            <div
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-once="false"
               data-aos-mirror="true"
               data-aos-duration="500"
               data-aos-easing="ease-in-out"
               
               class="w-full md:w-50% lg:w-60%">
               <h2 class="heading-4 text-white-primary mb-32">{{ item.name }}</h2>
               <p class="subtitle text-white-primary mb-40 max-w-830">{{ item.text }}</p>
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
         returnType: this.type ? this.type : 1,
         data: [
            {
               type: 1,
               name: "Mentorlar",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq.",
            },
            {
               type: 2,
               name: "Biz haqimizda",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq.",
            }
         ]
      }
   },

   mounted() {
      VanillaTilt.init(document.querySelectorAll(".vanillaCard"), {
         max: 25,
         speed: 400,
         glare: true,
         "max-glare": 1,
      });
   },
}
</script>