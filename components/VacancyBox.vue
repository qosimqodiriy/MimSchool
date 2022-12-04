<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer">
         <div class="w-full rounded-32 md:rounded-40 bg-white-primary py-40 px-20 md:px-25 lg:px-32 xl:px-40">
            <div class="flex flex-col md:flex-row items-start gap-20 md:gap-30 lg:gap-40 mb-32">
               <img class="max-w-112" src="@/assets/images/hh.png" alt="">
               <h2 class="heading-5 text-Rich-Black max-w-428">www.hh.uz saytida joylashtirilgan ma’lumotlar asosida</h2>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-30 lg:gap-40">
               <div 
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-offset="100"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  class="w-full">
                  <p class="heading-5 text-Rich-Black mb-18">{{ data.count }} bo'sh ish o'rinlari</p>
                  <p class="subtitle text-Rich-Black">{{ data.countDescription }}</p>
               </div>
               <div 
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-offset="120"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  class="w-full">
                  <p class="heading-5 text-Rich-Black mb-18">{{ data.price }} so‘m</p>
                  <p class="subtitle text-Rich-Black">{{ data.priceDescription }}</p>
               </div>
               <div 
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-offset="140"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  
                  class="w-full">
                  <p class="heading-5 text-Rich-Black mb-18">{{ data.month }} oy</p>
                  <p class="subtitle text-Rich-Black">{{ data.monthDescription }}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import vacancy from '@/api/vacancy'
export default {
   data() {
      return {
         data: {
            id: '',
            path: '',
            price: '',
            month: '',
            count: '',
            priceDescription: "boshlang'ich ish haqi uchun talablari",
            countDescription: "veb-dasturchilar hh.uz saytida 2022-yil iyul oyida ma’lumot",
            monthDescription: "platformada intensiv mashg'ulotlar birinchi ishingizni olish uchun etarli"
         },
         pathName: ''
      }
   },

   mounted() {
      this.pathName = this.$router.currentRoute.name

      if (this.pathName == 'faundation') {
         this.data = vacancy[0]   
      } 
      else if (this.pathName == 'frontend') {
         this.data = vacancy[1]   
      } 
      else if (this.pathName == 'backend') {
         this.data = vacancy[2]   
      } 
      else if (this.pathName == 'android') {
         this.data = vacancy[3]   
      } 
      else if (this.pathName == 'ios') {
         this.data = vacancy[4]   
      }
   }
}
</script>