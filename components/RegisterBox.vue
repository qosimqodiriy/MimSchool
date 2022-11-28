<template>
   <div class="w-full grid md:grid-cols-2 gap-40 bg-white-primary rounded-32 md:rounded-40 p-28 md:p-36 lg:p-44 2xl:p-56">
      <div class="w-full">
         <p class="heading-2 text-Rich-Black mb-40 md:mb-52 lg:mb-64 2xl:mb-80">Kurs uchun ro'yxatdan o'ting yoki bepul maslahat oling</p>
         <p class="overline-1 text-Spanish-Gray mb-8 md:mb-14 xl:mb-24">Front-end Kurs narxi</p>
         <div class="flex items-end gap-10">
            <h3 v-if="course == 1" class="heading-2 text-Jet">1 000 000</h3>
            <h3 v-else-if="course == 2" class="heading-2 text-Jet">1 500 000</h3>
            <h3 v-else-if="course == 3" class="heading-2 text-Jet">1 800 000</h3>
            <h3 v-else-if="course == 4" class="heading-2 text-Jet">1 500 000</h3>
            <h3 v-else-if="course == 5" class="heading-2 text-Jet">1 600 000</h3>
            <p class="caps-subtitle text-Jet">sum</p>
         </div>
      </div>

      <div class="w-full space-y-24">
         <input type="text" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Ismingizni kiritng" />
         <input type="number" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Telefon raqamingiz" />
         <select v-model="course" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 outline-none">
            <option class="text-Gunmetal w-full max-w-full" :value="1">Faundation</option>
            <option class="text-Gunmetal w-full max-w-full" :value="2">Front-End</option>
            <option class="text-Gunmetal w-full max-w-full" :value="3">Back-End</option>
            <option class="text-Gunmetal w-full max-w-full" :value="4">Android</option>
            <option class="text-Gunmetal w-full max-w-full" :value="5">IOS</option>
         </select>
         <p class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle bg-blue text-center text-white-primary w-full rounded-32 md:rounded-40">Yozilish</p>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            course: 1,
         }
      }
   }
</script>

<style scoped>
   input {
      border: 1px solid #9A999B;
   }
   select {
      border: 1px solid #9A999B;
   }
</style>