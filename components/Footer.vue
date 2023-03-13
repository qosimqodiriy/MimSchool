<template>
   <div class="w-full bg-black py-40">
      <div class="myContainer">
         <div class="flex flex-col md:flex-row justify-between flex-wrap gap-40">
            <div class="w-full md:w-30%">
               <nuxt-link @click.native="scrollToTop" to="/" class="overflow-hidden inline-flex items-center gap-10 mb-10">
                  <img class="w-100" src="@/assets/images/logo.svg" alt="" />
                  <!-- <div class="">
                     <p class="text-18 leading-20 text-blue font-bold">MIM</p>
                     <p class="text-18 leading-20 text-blue font-bold">ACADEMY</p>
                  </div> -->
               </nuxt-link>
               <p class="subtitle-1 text-white-primary mb-40 md:mb-44 lg:mb-52 2xl:mb-60">Kelajak kasblari maktabi</p>

               <div class="flex items-center gap-30 flex-wrap">
                  <a v-for="item in lists" :key="item.path" :href="item.path" target="_blank">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path :d="item.icon" fill="rgba(255,255,255,1)" />
                     </svg>
                  </a>
               </div>
            </div>

            <div class="flex gap-40">
               <div class="w-50%">
                  <h3 class="heading-6 text-white-primary mb-24">Kurslar</h3>
                  <div class="flex flex-col gap-12">
                     <nuxt-link @click.native="scrollToTop" to="/computer" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Komyuter</nuxt-link>
                     <nuxt-link @click.native="scrollToTop" to="/faundation" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Faundation</nuxt-link>
                     <nuxt-link @click.native="scrollToTop" to="/frontend" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Front-End</nuxt-link>
                     <nuxt-link @click.native="scrollToTop" to="/backend" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Back-End</nuxt-link>
                     <nuxt-link @click.native="scrollToTop" to="/android" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Android</nuxt-link>
                     <nuxt-link @click.native="scrollToTop" to="/ios" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">IOS</nuxt-link>
                     <!-- <nuxt-link @click.native="scrollToTop" to="/math" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Math</nuxt-link> -->
                     <!-- <nuxt-link @click.native="scrollToTop" to="/president" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">President</nuxt-link> -->
                     <nuxt-link @click.native="scrollToTop" to="/english" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">English</nuxt-link>
                     <!-- <nuxt-link @click.native="scrollToTop" to="/auto" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Auto</nuxt-link> -->
                  </div>
               </div>

               <div class="w-50%">
                  <h3 class="heading-6 text-white-primary mb-24">Menyular</h3>
                  <div class="flex flex-col gap-12">
                     <nuxt-link @click.native="scrollToTop" to="/about" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Biz haqimizda</nuxt-link>
                     <!-- <nuxt-link @click.native="scrollToTop" to="/#courses" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Kurslarimiz</nuxt-link> -->
                     <!-- <nuxt-link @click.native="scrollToTop" to="/teachers" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Ustozlar</nuxt-link> -->
                     <a href="#courses" class="subtitle-m text-Spanish-Gray hover:text-white-primary transition-all duration-500">Kurslarimiz</a>
                  </div>
               </div>
            </div>

            <div class="">
               <h3 class="heading-6 text-white-primary mb-24">Aloqa</h3>
               <a href="https://goo.gl/maps/iahAxBqhCdpv7nNq5" target="_blank" class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/Location.png" alt="">
                  <p class="subtitle-1 text-white-primary">Samarqand sh. Qorasuv mavzesi, 12A, 2-qavat</p>
               </a>
               <a href="mailto:hi@mim.school" class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/email.png" alt="">
                  <p class="subtitle-1 text-white-primary">hi@mim.school</p>
               </a>
               <a href="tel:++998781131551" class="flex items-center gap-6 mb-24">
                  <img class="w-24 h-24" src="@/assets/images/phone.png" alt="">
                  <p class="subtitle-1 text-white-primary">+998 78 113 15 51</p>
               </a>
            </div>
         </div>
         <div class="w-full border-t border-Quartz my-28"></div>
         <div class="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-20 md:gap-30 lg:gap-40">
            <div class="max-w-400">
               <p class="subtitle text-white-primary">© 2023 MimEdu MCHJ</p>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import socials from '@/api/socials'

export default {
   data() {
      return {
         lists: socials
      }
   },

   methods: {
      scrollToTop() {
         window.scrollTo(0, 0)
         this.isMenuOpen = false
      },
   },
}
</script>


<style lang="">
   
</style>