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
                  <img class="vanillaCard w-full" v-else-if="(item.type == 6)" src="@/assets/images/math.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 7)" src="@/assets/images/english.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 8)" src="@/assets/images/car.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 9)" src="@/assets/images/president.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 10)" src="@/assets/images/computer.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 11)" src="@/assets/images/kimyo.png" alt="">
                  <img class="vanillaCard w-full" v-else-if="(item.type == 12)" src="@/assets/images/biologiya.png" alt="">
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
               text: "Foundation kursi o’quvchilarga dasturlashning C++ kompyuter tilidan foydalangan holda dasturlash asoslarini o’rgatadi. Ushbu kurs talabalarga dasturlash va dasturiy ta’minot ishlab chiqarish bilan bog’liq bo’lgan asosiy tushunchalar, texnikalar, jarayonlarni va ular bilan qanday ishlashni taqdim etadi. Foundation kursi asosan dasturlashda muammolarni hal qilish ko’nikmalarini o’rgatadi va ushbu kursni muvaffaqaiyatli tugatgan o’quvchilar xohlagan dasturlash tilini oson o’rgana oladilar.",
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
               text: "Frontend bu yaratilayotgan veb-ilovaning foydalanuvchilarga ko’rinadigan qismidir.Frontend dasturchisi mijozlar uchun turli-xil vebsayt va veb ilovalar yaratadi. Dasturchi Html, Css, Java Script tillaridan foydalanib saytni siz-u biz foydalanadigan holatga keltiradi. <br> <br> Frontend kursimizda HTML, CSS, Java Script tillari va Vue.js freymvorki o’rgatiladi. Bu kursda siz real loyihalar bilan ishlab o’z tajribangizni oshirasiz.",
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
               text: "Backend - bu vebsahifalar va ilovalarning oddiy foydalanuvchilarga ko’rinmaydigan qismi hisoblanib, backend dasturchilari asosan informatsiyalar, ma’lumotlar bazalari bilan ishlaydi. Backend ITning eng muhim sohasi hisoblanib, deyarli barcha: frontend developerdan tortib, android/ios developerlar bilan  ishlaydi. Backend development uchun kotlin, java, ruby, php kabi tillar ishlatiladi. <br> <br> Backend development kursida Kotlin dasturlash tilidan foydalanib backend’ni o’rganamiz.",
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
               text: "Dunyodagi smartfonlarning 80 foizidan ortig’i android tizimida ishlaydi va bu hamma joyda dasturchilar uchun ajoyib imkoniyatdir. Sizning ham android dunyosida yuqori o’rinlarni egallashga imkon bor. Ushbu Android ilovalarini ishlab chiqish asoslari kursi sizni Android dunyosi bilan tanishtiradi va android ilovalarini noldan yaratishni o'rgatadi. Siz asta-sekin asoslarni o’rganishdan boshlaysiz va Android studio bilan tanishasiz. Shundan so'ng siz barcha muhim mavzularni o'rganishga o'tasiz, barcha muhim tushunchalar va texnikalar sizni mukammal Android dasturchisiga aylantiradi. Oxirida siz Androidda o'zingizning ilovangizni yaratish orqali o'rgangan narsalaringizni amaliyotda qo'llash imkoniyatiga ega bo'lasiz.",
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
               text: "iOS kursi bu Apple’ning barcha qurilmalari uchun ilovalar yaratadigan dasturlashning bir sohasidir. Ushbu kurs sizni to'liq boshlang'ichdan o'ziga ishongan amaliyotchi darajasigacha olib boradi, chunki biz nazariyani e'tiborsiz qoldirmasdan amaliy rivojlanishiga e'tibor qaratamiz! <br> <br> Biz kurs davomida haqiqiy ilovalar, o'yinlar va mavjud mashhur ilovalarning klonlarini va yana ko’p narsalarni yaratamiz. Ushbu loyihalar va amaliy mashg’ulotlar davomida siz Swift va iOS’ning barcha tafsilotlarini, jumladan Swift dasturlash tili asoslari, UIKit, SwiftUI’larni o’rganasiz va amaliyotda qo’llaysiz. <br> <br> Nimalarni o’rganasiz. <br> Swift dasturlash tili -  Barcha apple qurilmalari uchun ishlatiladigan swift’ni o’rganasiz. UIKit - UIK freymvorkini.",
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
               text: "Oliy o’quv yurtlariga kirish yoki kelajak kasblarini egallash uchun matematika asosiy o’rin tutadi. Mim school’da abituriyentlar hamda kelajak kasblarini egallash uchun matematikadan tayyorlov kurslari mavjud bo’lib, darslar uzoq yillik tajribaga ega ustozlar ko’magida haftada uch kun, o’quvchilar uchun qulay vaqtlarda bo’lib o’tadi. Bundan tashqari, o’quvchilarning bilimini tekshirish va mustahkamlash uchun oylik testlar hamda qo’shimcha musobaqalar o’tkazib boriladi.",
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
               text: "Kelajagingizga investitsiyani aynan  ingliz tilini o’rganish orqali kiriting. Chunki, statistikalarga ko’ra, hozirda ingliz tilini bilish sizni bilmaydiganlardan ko’ra o’n karra ortiq muvaffaqiyatli qiladi. Mim school’da muvaffaqiyatga eltish uchun bolalar, kattalar va abituriyentlarga mo’ljallangan ingliz tili kurslari tashkil etilgan. Darslar malakali ustozlar tomonidan haftada eng kamida uch marotaba va ikki soatdan oshiqroq vaqt mobaynida o’tiladi.",
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
               name: "Avtomaktab",
               text: "Avtomaktabimiz qisqa muddatlarda sizga imtihondan muvaffaqiyatli o’tib, haydovchilik guvohnomasini olishingizga ko’maklashadi. Avtomaktab 15 yildan ortiq tajribaga ega bo’lib, asosiy maqsadi o’quvchilarni atrofdagi hamma narsadan xabardor bo’lishi va ruldagi ishonchini mustahkamlash orqali hushyor va tajribali haydovchilar tayyorlashdir.",
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
               type: 9,
               name: "Prezident maktabiga tayyorlov",
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
               type: 10,
               name: "Kompyuter savodxonligi",
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
               type: 11,
               name: "Kimyo",
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
               type: 12,
               name: "Biologiya",
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