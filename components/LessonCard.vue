<template>
   <div class="w-full rounded-32 md:rounded-40 p-28 md:p-32 lg:p-40 relative bgGradient animate-pulse overflow-hidden" :class="item.type == 99 ? 'md:col-span-2' : ''">
      <div class="relative">
         <div class="flex items-center gap-20 mb-28">
            <!-- <img class="w-30 h-30 object-cover" src="@/assets/images/terminal.png" alt=""> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d="item.icon" fill="rgba(255,255,255,1)" /></svg>
            <h3 class="heading-3 text-white-primary">{{ item.name }}</h3>
         </div>
         <p class="subtitle-1 text-white-primary max-w-800 mb-40 md:mb-30">{{ item.description }}</p>
         <div class="flex items-center gap-20 flex-wrap">
            <div v-for="framework in item.frameworks" :key="framework.id" class="px-20 py-10 inline-flex items-center gap-10 rounded-40 border border-Old-Lavender">
               <!-- <img class="w-24 h-24" src="@/assets/images/html.png" alt=""> -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d="framework.icon" fill="rgba(255,255,255,1)" /></svg>
               <h4 class="overline-1 text-white-primary uppercase">{{ framework.name }}</h4>
            </div>
         </div>
         <div class="w-full border-t border-Quartz my-28"></div>
         <div :class="item.type == 99 ? 'block md:flex items-center justify-between' : ''">
            <p class="heading-6 text-white-primary mb-32" :class="item.type == 99 ? 'md:mb-0' : ''">{{ item.price }} so'm</p>
            <div class="inline-flex flex-col lg:flex-row items-center gap-20" :class="item.type != 99 ? 'w-full justify-between' : 'w-full md:w-auto md:flex-row'">
               <a href="#register" class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-white-primary rounded-40 btn cursor-pointer uppercase">yozilish</a>
               <nuxt-link :to="item.link" class="text-14 md:text-16 lg:text-18 font-semibold py-15 lg:py-20 px-56 w-full lg:w-auto text-center text-white-primary rounded-40 border border-white-primary cursor-pointer uppercase hover:bg-blue hover:border-blue transition-all duration-500">Ko‘proq ko‘rish</nuxt-link>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
export default {

   props: {
      item: {
         type: Object,
         required: true,
      },
   },
}
</script>