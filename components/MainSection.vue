<template>
   <div class="w-full bg-black py-30 md:py-36 lg:py-44 xl:py-56">
      <div class="myContainer">
         <div v-for="item in data" :key="item.type" v-show="(item.type == type)">
            <div class="flex flex-col md:flex-row-reverse gap-60 md:gap-70 lg:gap-84 xl:gap-95 2xl:gap-120 mb-60 md:mb-76 lg:mb-95 xl:mb-120">
               <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  
                  class="w-full md:w-50% lg:w-40%">

                  <img class="vanillaCard w-full" v-if="(item.type == 1)" src="@/assets/images/faundation.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 2)" src="@/assets/images/frontend.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 3)" src="@/assets/images/backend.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 4)" src="@/assets/images/android.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 5)" src="@/assets/images/ios.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 6)" src="@/assets/images/ios.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 7)" src="@/assets/images/ios.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 8)" src="@/assets/images/ios.png" alt="">
               </div>

               <div class="w-full md:w-50% lg:w-60%">
                  <h2 
                     data-aos="fade-right"
                     data-aos-offset="200"
                     data-aos-once="false"
                     data-aos-mirror="true"
                     data-aos-duration="500"
                     data-aos-easing="ease-in-out"
                     
                     class="heading-4 text-white-primary mb-32">
                     {{ item.name }} kursi
                  </h2>
                  <div 
                     data-aos="fade-up"
                     data-aos-offset="200"
                     data-aos-once="false"
                     data-aos-mirror="true"
                     data-aos-duration="500"
                     data-aos-easing="ease-in-out">
                     
                     <p class="subtitle text-white-primary mb-40 max-w-830" v-html="item.text"></p>
                     <a href="#register" class="subtitle w-full md:w-auto px-100 xl:px-120 py-15 2xl:py-20 btn text-center text-white-primary rounded-32 md:rounded-40">Yozilish</a>
                  </div>
               </div>
            </div>

            <div class="w-full rounded-32 md:rounded-40 bgGradient py-40 px-20 md:px-25 lg:px-32 xl:px-40">
               <h3 class="heading-2 text-white-primary mb-32">Nimalarni o'rganasiz</h3>
               <div class="grid lg:grid-cols-2 gap-y-32 gap-x-64">
                  <div v-for="(lear, index) in item.learning" :key="index">
                     <div class="flex items-start gap-10 mb-8">
                        <img class="w-28 h-28" src="@/assets/images/tick.png" alt="">
                        <h3 class="heading-5 text-white-primary">{{ lear.title }}</h3>
                     </div>
                     <p class="subtitle text-white-primary">{{ lear.text }}</p>
                  </div>
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
         // returnType: this.type ? this.type : 1,
         data: [
            {
               type: 1,
               name: "Faundation",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 2,
               name: "Front-End",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 3,
               name: "Back-End",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 4,
               name: "Android",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 5,
               name: "IOS",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 6,
               name: "Matematika",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 7,
               name: "Ingliz tili",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
            },
            {
               type: 8,
               name: "Auto maktab",
               text: "Veb-developerlarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. <br/> <br/> So'nggi bir necha yil ichida deyarli barcha biznes oflayn rejimidan onlayn rejimga o'tdi, shuning uchun UX/UI dizaynerlar talab yuqori bo’lgan kasb egalari xisoblanadi.",
               learning: [
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  },
                  {
                     title: "Veb-saytingizni HTML va CSS-da yarating",
                     text: "Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling."
                  }
               ]
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