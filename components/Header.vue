<template>
   <div class="sticky top-0 w-full bg-black py-20 md:py-25 z-50">
      <div class="myContainer ">
         <div class="w-full flex items-center justify-between">
            <nuxt-link @click.native="scrollToTop" to="/">
               <img src="@/assets/images/logo.svg" alt="" />
            </nuxt-link>

            <div class="hidden lg:flex items-center gap-30">
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/faundation">Faundation</nuxt-link>
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/frontend">Front-End</nuxt-link>
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/backend">Back-End</nuxt-link>
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/android">Android</nuxt-link>
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/ios">IOS</nuxt-link>
            </div>

            <div class="hidden md:flex items-center gap-30 lg:gap-40">
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/teachers">Ustozlar</nuxt-link>
               <nuxt-link class="text-white-primary text-18" @click.native="scrollToTop" to="/about">Biz haqimizda</nuxt-link>
            </div>

            <div class="block md:hidden text-white-primary">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
               </svg>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'TheHeader',

   data() {
      return {
         isMenuOpen: false,
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