<template>
   <div class="main w-full bg-black flex items-center justify-center relative overflow-hidden">
      <div class="myContainer py-30 md:py-36 h-full z-40 overflow-hidden">
         <div class="animate__animated animate__fadeInUp overflow-hidden">
            <h1 class="headText-1 text-white-primary text-center mb-20 md:m-0">Zamonaviy Kasblar Maktabi</h1>
            <h2 class="heading-1 text-center mb-40 headText-2">Auto.School</h2>
            <div class="flex justify-center mb-100 md:mb-60 lg:mb-80">
               <a href="#register" class="caps-subtitle btn text-white-primary px-60 md:px-80 py-10 md:py-15 rounded-54">Yozilish</a>
            </div>

            <div class="flex justify-center">
               <div class="inline-flex py-20 px-18 rounded-32 linear">
                  <div class="flex flex-wrap items-center justify-around gap-x-20 gap-y-10">
                     <router-link :to="item.link" v-for="item in lessons" :key="item.type" class="px-10 md:px-20 py-10 md:py-15">
                        <p class="heading-6 text-white-primary text-center mb-8">{{ item.name }}</p>
                        <p class="subtitle text-white-primary">{{ item.price }}</p>
                     </router-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="absolute top-0 w-full h-full left-0 overflow-hidden z-30">
         <video class="w-full h-full object-cover" src="@/assets/videos/main.mp4" muted loop autoplay></video>
      </div>
   </div>
</template>

<script>
import lessons from '/api/lessons'
export default {
   data() {
      return {
         lessons: lessons
      }
   },
}
</script>

<style scoped>
.main {
   overflow: hidden;
   min-height: calc(100vh - 92px);
}

.headText-1 {
   font-size: 72px;
   line-height: 80px;
   font-family: 'Firs-Neue';
}

.headText-2 {
   text-shadow: 0 0 1px rgba(40, 87, 253, 0.8);
   color: rgba(60, 100, 238, 0.32);
}

.linear {
   backdrop-filter: blur(20px);
   background: rgba(39, 33, 57, 0.16);
   box-shadow: inset 0px 0px 84px rgba(182, 179, 193, 0.12);
}

.card:nth-child(5) {
   border: none;
}


@media (max-width: 1440px) {
   .headText-1 {
      font-size: 60px;
      line-height: 64px;
   }
}

@media (max-width: 1024px) {
   .headText-1 {
      font-size: 48px;
      line-height: 52px;
   }
}

@media (max-width: 768px) {
   .main {
      min-height: calc(100vh - 82px);
   }
   .headText-1 {
      font-size: 36px;
      line-height: 44px;
   }
}
</style>