<template>
   <div class="w-full">
      <p class="overline-1 text-center text-Spanish-Gray uppercase">faq</p>
      <p class="heading-2 text-center text-Jet mb-40">Ko‘p so‘ralgan savollar</p>

      <div class="rounded-16 overflow-hidden border border-white-secondary max-w-1200 mx-auto">
         <div class="rounded-t-16 md:rounded-16 overflow-hidden border border-white-secondary">
            <div v-for="(item, index) in lists" :key="index" class="contentBox overflow-hidden bg-white-primary" :class="tab == index ? 'active bg-gray' : ''">
               <div @click="clickMe(index)" class="header w-full flex items-center justify-between gap-15 p-10 px-15 md:py-12 lg:py-15 md:px-20 lg:px-25 cursor-pointer">
                  <p class="font-medium  text-16 md:text-18 lg:text-20 text-black-primary">{{ item.title }}</p>
                  <img class="icon w-24 md:w-28" src="@/assets/images/arrow-down-s.png" alt="">
               </div>
               <div class="title text-black-primary">
                  <p class="text-12 md:text-14 lg:text-16 px-15 pb-5 md:pb-10 md:px-20 lg:px-25">{{ item.text }}</p> 
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import questions from '@/api/question'

export default {
   data() {
      return {
         tab: null,
         active: null,
         contentBox: null,
         lists: questions
      }
   },

   methods: {
      clickMe(index) {
         if(this.tab != index) {
            this.tab = index
         } else this.tab = null


         setTimeout(() => {
            this.active = document.querySelector('.active')
            
            this.contentBox.forEach(element => {
               element.style.height = element.children[0].offsetHeight + 'px'
            });

            // console.log(this.active);

            if(this.active) {
               let header = this.active.children[0].offsetHeight
               let title = this.active.children[1].offsetHeight

               this.active.style.height = header + title + 'px'
            }
         }, 50);
      }
   },
   
   mounted() {
      this.active = document.querySelector('.active')
      this.contentBox = document.querySelectorAll('.contentBox')

      this.contentBox.forEach((element) => {
         element.style.height = element.children[0].offsetHeight + 'px'
      });

      // console.log(this.elementHeight);

      // console.log(element.scrollHeight);
      // console.log(element.offsetHeight);
      // console.log(element.clientHeight);
   },
}
</script>




<style scoped>
.contentBox {
   width: 100%;
   height: 44px;
   transition: 0.3s;
   overflow: hidden;
   border-bottom: 1px solid #E7E7E7;
}

.contentBox.active {
   width: 100%;
   overflow: hidden;
}

/* .contentBox .title {
   transition: 0.3s;
   transform: translateY(200px);
}

.contentBox.active .title {
   transition: 0.3s;
   transform: translateY(0px);
} */

.icon {
   transition: 0.3s;
   transform: rotate(0deg);
}

.contentBox.active .icon {
   transform: rotate(180deg);
}
</style>