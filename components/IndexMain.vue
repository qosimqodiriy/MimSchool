<template>
   <div class="main w-full bg-black">
      <div class="myContainer py-30 md:py-36 h-full">
         <div class="">
            <h1 class="heading-1 text-white-primary text-center mb-40">IT sohasini qulay ravishda o‘rganing</h1>
            <div class="flex justify-center mb-100 md:mb-60 lg:mb-80"><button class="caps-subtitle btn text-white-primary px-60 md:px-80 py-10 md:py-15 rounded-54">Yozilish</button></div>

            <div class="flex justify-center">
               <div class="inline-flex py-20 px-18 rounded-32 linear">
                  <div class="flex flex-wrap justify-center items-center">
                     <div v-for="item in 5" :key="item" class="px-10 md:px-20 py-10 md:py-15 card">
                        <p class="heading-6 text-white-primary mb-8">Front-end</p>
                        <p class="subtitle text-white-primary">2 500 000 sum</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
   .main {
      min-height: calc(100vh - 92px);
   }

   .linear {
      backdrop-filter: blur(20px);
      background: rgba(39, 33, 57, 0.16);
      box-shadow: inset 0px 0px 84px rgba(182, 179, 193, 0.12);
   }

   .card {
      border-right: 1px solid #272139;
   }

   .card:nth-child(5) {
      border: none;
   }


   @media (max-width: 768px) {
      .main {
         min-height: calc(100vh - 82px);
      }
   }
</style>