<template>
   <div class="sticky top-0 w-full bg-black py-20 md:py-25 z-50">
      <div class="myContainer ">
         <!-- <div class="menu">
            <a href="#" class="brand">Brand</a>
            <nav>
               <ul>
                  <li><a href="#">Home</a></li>
                  <li>
                     <a href="#">About</a>
                     <ul>
                        <li><a href="#">List 1</a></li>
                        <li><a href="#">List 2</a></li>
                        <li><a href="#">List 3</a></li>
                        <li><a href="#">List 4</a></li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">Services</a>
                     <ul>
                        <li><a href="#">List 1</a></li>
                        <li><a href="#">List 2</a></li>
                        <li><a href="#">List 3</a></li>
                        <li><a href="#">List 4</a></li>
                        <li><a href="#">List 5</a></li>
                        <li><a href="#">List 6</a></li>
                        <li><a href="#">List 7</a></li>
                     </ul>
                  </li>
                  <li><a href="#">Portfolio</a></li>
                  <li>
                     <a href="#">Pages</a>
                     <ul>
                        <li><a href="#">List 1</a></li>
                        <li><a href="#">List 2</a></li>
                        <li><a href="#">List 3</a></li>
                        <li><a href="#">List 4</a></li>
                     </ul>
                  </li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </nav>
         </div> -->
         <div class="w-full flex items-center justify-between">
            <nuxt-link @click.native="scrollToTop" to="/" class="inline-flex items-center gap-10">
               <img src="@/assets/images/logo.svg" alt="" />
               <div class="">
                  <p class="text-18 leading-20 text-blue font-bold">MIM</p>
                  <p class="text-18 leading-20 text-blue font-bold">ACADEMY</p>
               </div>
            </nuxt-link>

            <!-- <div class="navbar relative">
               <div class="navbar_inner_1 hidden lg:inline-flex items-center gap-10 px-20 py-6 rounded-30 border border-white-primary">
                  <p class="subtitle text-white-primary">Barcha kurslar</p>
                  <img class="w-24 h-24" src="@/assets/images/arrow-down-s-white.png" alt="" />
               </div>

               <div class="navbar_inner_2">
                  <p>wf;ejf;ew fewjf;oew;ejwriewhuewr </p>
                  <p>wf;ejf;ew fewjf;oew;ejwriewhuewr </p>
                  <p>wf;ejf;ew fewjf;oew;ejwriewhuewr </p>
                  <p>wf;ejf;ew fewjf;oew;ejwriewhuewr </p>
               </div>
            </div> -->

            <div class="hidden lg:flex items-center gap-30">
               <nuxt-link to="/faundation" @click.native="scrollToTop" class="text-white-primary text-18">IT</nuxt-link>
               <nuxt-link to="/faundation" @click.native="scrollToTop" class="text-white-primary text-18">Math</nuxt-link>
               <nuxt-link to="/faundation" @click.native="scrollToTop" class="text-white-primary text-18">English</nuxt-link>
               <nuxt-link to="/faundation" @click.native="scrollToTop" class="text-white-primary text-18">Auto School</nuxt-link>
               <!-- <nuxt-link to="/faundation" @click.native="scrollToTop" class="text-white-primary text-18">Faundation</nuxt-link>
               <nuxt-link to="/frontend" @click.native="scrollToTop" class="text-white-primary text-18">Front-End</nuxt-link>
               <nuxt-link to="/backend" @click.native="scrollToTop" class="text-white-primary text-18">Back-End</nuxt-link>
               <nuxt-link to="/android" @click.native="scrollToTop" class="text-white-primary text-18">Android</nuxt-link>
               <nuxt-link to="/ios" @click.native="scrollToTop" class="text-white-primary text-18">IOS</nuxt-link> -->
            </div>

            <div class="hidden md:flex items-center gap-30 lg:gap-40">
               <nuxt-link to="/teachers" @click.native="scrollToTop" class="text-white-primary text-18">Ustozlar</nuxt-link>
               <nuxt-link to="/about" @click.native="scrollToTop" class="text-white-primary text-18">Biz haqimizda</nuxt-link>
            </div>

            <div class="block md:hidden text-white-primary">
               <svg @click="burger = true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0H24V24H0z"/>
                  <path d="M21 18v2H3v-2h18zM6.596 3.904L8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5l4.596-4.596zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z" fill="rgba(255,255,255,1)"/>
               </svg>
            </div>
         </div>
      </div>

      <div class="burger_div w-full min-h-screen fixed md:hidden overflow-hidden top-0 right-0 z-40" :class="burger ? 'active' : ''">
         <div @click="burger = false" class="w-full z-40 min-h-screen absolute top-0 left-0"></div>
         <div class="w-80% burger_bg bg-Rich-Black z-50 min-h-screen absolute top-0 right-0 px-10 pt-50">
            <div class="flex flex-col items-center gap-16">
               <nuxt-link @click.native="scrollToTop" to="/faundation" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Faundation</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/frontend" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Front-End</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/backend" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Back-End</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/android" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Android</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/ios" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">IOS</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/teachers" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Ustozlar</nuxt-link>
               <nuxt-link @click.native="scrollToTop" to="/about" class="font-inter text-18 font-semibold transition-all duration-200 text-white-primary">Biz haqimizda</nuxt-link>
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
         burger: false,
         isMenuOpen: false,
      }
   },

   methods: {
      scrollToTop() {
         this.burger = false;
         window.scrollTo(0, 0);
         this.isMenuOpen = false;
      }
   },
}
</script>



<style scoped lang="css">
   .burger_div {
      transition: 0.5s;
      transform: translateX(768px);
      /* backdrop-filter: blur(0px); */
   }
   .burger_div.active {
      transform: translateX(0px);
      /* backdrop-filter: blur(10px); */
      /* background: linear-gradient(5deg,
        rgba(25, 24, 31, 0) 10%,
        rgba(25, 24, 31, 0.8) 100%); */
   }
   .burger_bg {
      backdrop-filter: blur(10px);
      background: linear-gradient(5deg,
        rgba(17, 17, 18, 0) 10%,
        rgba(0, 0, 0, 0.8) 100%);
   }

   .navbar {
      position: relative;
   }

   .navbar_inner_2 {
      /* opacity: 0; */
      /* display: none; */
      background-color: white;
      /* transform: translateY(200px); */
      position: absolute;
      top: 40%;
      left: 0;
      width: 100%;
   }

   .navbar:hover .navbar_inner_2 {
      /* opacity: 1; */
      /* display: block; */
      /* transform: translateY(0); */
   }
</style>