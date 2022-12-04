<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <div class="grid grid-cols-1 gap-14 md:gap-20 lg:gap-24">
            <div v-for="(item, index) in data" :key="index" class="flex flex-col md:flex-row gap-24 md:gap-32 lg:gap-40 bg-white-primary rounded-24 md:rounded-32 lg:rounded-40 p-28 md:p-32 lg:p-36 xl:p-40">
               <div class="w-full md:w-342 h-420 md:h-390 shrink-0">
                  <teacher-card class="vanillaCard" :show="false" />
               </div>
               <div>
                  <h2 class="heading-2 text-Jet mb-8 md:mb-12">{{ item.name }}</h2>
                  <h3 class="overline-1 text-Spanish-Gray mb-32 md:mb-36">{{ item.job }}</h3>
                  <p class="subtitle text-Davys-Grey mb-32 md:mb-36" v-html="item.description"></p>
                  <div class="flex flex-wrap items-center gap-20 md:gap-26 lg:gap-32 xl:gap-40">
                     <div v-for="social in item.socials" :key="social.type">
                        <a :href="social.link" target="_blank" class="inline-flex items-center gap-20 rounded-30 bg-Cultured p-6">
                           <div class="w-48 h-48 rounded-full bg-white-primary flex items-center justify-center">
                              <!-- <img class="w-24 h-24" src="@/assets/images/instagram-dark.png" alt=""> -->
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d="social.path"/></svg>
                           </div>
                           <p class="subtitle hidden lg:block text-Rich-Black pr-30">{{ social.name }}</p>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
</template>


<script>
import teachers from '@/api/teachers'
export default {
   data() {
      return {
         data: teachers
      }
   }
}
</script>