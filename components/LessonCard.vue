<template>
   <div class="w-full rounded-32 md:rounded-40 p-28 md:p-32 lg:p-40 bgGradient" :class="item == 1 ? 'md:col-span-2' : ''">
      <div class="flex items-center gap-20 mb-28">
         <img class="w-30 h-30 object-cover" src="@/assets/images/terminal.png" alt="">
         <h3 class="heading-3 text-white-primary">Foundation</h3>
      </div>
      <p class="subtitle-1 text-white-primary max-w-800 mb-40 md:mb-30">FrontEnd разработчик создает видимую для пользователя часть веб-страницы, реализовать пользовательскую логику.пользователя часть веб-страницы, реализовать пользовательскую логику.</p>
      <div class="flex items-center gap-20 flex-wrap">
         <div v-for="item in 4" :key="item" class="px-20 py-10 inline-flex items-center gap-10 rounded-40 border border-Old-Lavender">
            <img class="w-24 h-24" src="@/assets/images/html.png" alt="">
            <h4 class="overline-1 text-white-primary">html</h4>
         </div>
      </div>
      <div class="w-full border-t border-Quartz my-28"></div>
      <div :class="item == 1 ? 'block md:flex items-center justify-between' : ''">
         <p class="heading-6 text-white-primary mb-32" :class="item == 1 ? 'md:mb-0' : ''">2 500 000 sum</p>
         <div class="inline-flex flex-col lg:flex-row items-center gap-20" :class="item != 1 ? 'w-full justify-between' : 'w-full md:w-auto md:flex-row'">
            <p class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-white-primary rounded-40 btn cursor-pointer uppercase">yozilish</p>
            <p class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-white-primary rounded-40 border border-white-primary cursor-pointer uppercase hover:bg-blue hover:border-blue transition-all duration-500">Ko‘proq ko‘rish</p>
         </div>
      </div>
   </div>
</template>


<script>
export default {

   props: {
      item: {
         required: true,
         type: Number,
      },
   },
}
</script>