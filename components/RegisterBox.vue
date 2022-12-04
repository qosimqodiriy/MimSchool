<template>
   <div class="before">
      <div class="before-anchor" id="register"></div>
      <div class="w-full grid md:grid-cols-2 gap-40 bg-white-primary rounded-32 md:rounded-40 p-28 md:p-36 lg:p-44 2xl:p-56 relative">
         <div class="w-full">
            <p class="heading-2 text-Rich-Black mb-40 md:mb-52 lg:mb-64 2xl:mb-80">Kurs uchun ro'yxatdan o'ting yoki bepul maslahat oling</p>
            <p class="overline-1 text-Spanish-Gray mb-8 md:mb-14 xl:mb-24">Front-end Kurs narxi</p>
            <div class="flex items-end gap-10">
               <h3 v-for="item in lessons" :key="item.type" v-show="(item.type == course)" class="heading-2 text-Jet">{{ item.price }}</h3>
               <p class="caps-subtitle text-Jet">sum</p>
            </div>
         </div>

         <div class="w-full space-y-24">
            <input type="text" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Ismingizni kiritng" />
            <input type="number" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Telefon raqamingiz" />
            <select v-model="course" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 outline-none">
               <option v-for="(item, index) in lessons" :key="index.type" class="text-Gunmetal w-full max-w-full" :value="item.type">{{ item.name }}</option>
            </select>
            <p class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle bg-blue text-center text-white-primary w-full rounded-32 md:rounded-40">Yozilish</p>
         </div>
      </div>
   </div>
</template>

<script>
import lessons from '@/api/lessons'
export default {
   data() {
      return {
         course: 1,
         lessons: lessons
      }
   }
}
</script>

<style scoped>
   .before {
      position: relative;
   }

   .before-anchor {
      position: absolute;
      top: -152px;
      left: 0;
   }

   input {
      border: 1px solid #9A999B;
   }

   select {
      border: 1px solid #9A999B;
   }
</style>