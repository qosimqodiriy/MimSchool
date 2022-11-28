<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <div class="grid grid-cols-1 gap-14 md:gap-20 lg:gap-24">
            <div v-for="(item, index) in 4" :key="index" class="flex flex-col md:flex-row gap-24 md:gap-32 lg:gap-40 bg-white-primary rounded-24 md:rounded-32 lg:rounded-40 p-28 md:p-32 lg:p-36 xl:p-40">
               <div class="w-full md:w-342 h-420 md:h-390 shrink-0">
                  <teacher-card :show="true" />
               </div>
               <div>
                  <h2 class="heading-2 text-Jet mb-8 md:mb-12">Justin Perry</h2>
                  <h3 class="overline-1 text-Spanish-Gray mb-32 md:mb-36">ux/ui design</h3>
                  <p class="subtitle text-Davys-Grey mb-32 md:mb-36">.Net platformasi, C# va Golang dasturlash tillari, HTML, CSS, JS, TypeScript, React, NodeJS kabi bir qator veb-texnologiyalar va yana koʻplab yoʻnalishlar boʻyicha oliy toifali mutaxassis, dasturlash sohasida 20 yildan ziyod malakaga ega ustoz. 2011-yildan buyon moliya va bank sohasida avtomatlashtirish bilan shugʻullanuvchi Malayziyaning Consolsys Technologies kompaniyasida faoliyat yuritadi.</p>
                  <div class="flex flex-wrap items-center gap-20 md:gap-26 lg:gap-32 xl:gap-40">
                     <div v-for="item in 3" :key="item" class="inline-flex items-center gap-20 rounded-30 bg-Cultured p-6">
                        <div class="w-48 h-48 rounded-full bg-white-primary flex items-center justify-center">
                           <img class="w-24 h-24" src="@/assets/images/instagram-dark.png" alt="">
                        </div>
                        <p class="subtitle hidden lg:block text-Rich-Black pr-30">Instagram</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
</template>