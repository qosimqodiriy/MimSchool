<template>
   <div class="w-full bg-white-secondary py-60 md:py-72 lg:py-84 xl:py-100 2xl:py-120">
      <div class="myContainer space-y-56 md:space-y-64 lg:space-y-76 xl:space-y-90">
         <div>
            <h2 class="heading-2 text-Rich-Black mb-56 max-w-900 md:mb-60 lg:mb-70">Mavjud kurslarimiz:</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
               <about-card
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-offset="100"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  count="5" name="ta" title="Kurslarimiz" />
               <about-card
                  data-aos="fade-left"
                  data-aos-delay="400"
                  data-aos-offset="110"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  count="4" name="oy" title="davom etadi" />
               <about-card
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-offset="120"
                  data-aos-once="false"
                  data-aos-mirror="true"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  count="12" name="ta" title="mentorlarimiz" />
            </div>
         </div>

         <!-- <div>
            <p class="overline-1 text-Cool-Grey mb-8 uppercase text-center md:text-start">O‘qituvchilar</p>
            <h2 class="heading-2 text-Rich-Black mb-40 md:mb-32 text-center md:text-start">Akademiyada o’qitadigan ustozlar</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-14 lg:gap-20">
               <teacher-card class="vanilla" v-for="item in teachers" :key="item.id" :item="item" :show="true" />
            </div>
         </div> -->

         <div class="grid grid-cols-1 lg:grid-cols-5 gap-24">
            <div class="w-full min-h-370 rounded-24 lg:col-span-2 overflow-hidden bg-white-primary map">
               <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383276.026384595!2d64.5663583!3d38.6296998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d17d5dd1b9235%3A0x86d97fec2dc78e59!2sMim%20School!5e0!3m2!1sen!2s!4v1675919437561!5m2!1sen!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="w-full rounded-24 bg-white-primary lg:col-span-3 p-28 pb-25 pt-40 md:px-30 lg:px-40">
               <p class="heading-2 text-Rich-Black mb-40 md:mb-44 lg:mb-52">Bizning manzilimiz</p>
               <div class="w-full flex flex-col lg:flex-row items-center gap-40 mb-40">
                  <div class="w-full">
                     <p class="overline-1 text-Rich-Black mb-8">Contacts:</p>
                     <a href="tel:++998781131551">
                        <p class="subtitle text-Rich-Black">+998 78 113 15 51</p>
                     </a>
                  </div>
                  <div class="w-full">
                     <p class="overline-1 text-Rich-Black mb-8">Email:</p>
                     <a href="mailto:hi@mim.school">
                        <p class="subtitle text-Rich-Black">hi@mim.school</p>
                     </a>
                  </div>
               </div>
               <p class="overline-1 text-Rich-Black mb-8">Manzil:</p>
               <a href="https://goo.gl/maps/iahAxBqhCdpv7nNq5" target="_blank">
                  <p class="subtitle text-Rich-Black">Samarqand sh. Qorasuv mavzesi, 12A, 2-qavat</p>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import teachers from '@/api/teachers'
export default{

   data() {
      return {
         teachers: teachers
      }
   }
}
</script>

<style scoped>
   .map {
      background: url('@/assets/images/map.png') no-repeat center center;
      background-size: cover;
   }
</style>