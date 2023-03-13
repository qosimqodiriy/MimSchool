<template>
   <div class="before">
      <div class="before-anchor" id="register"></div>
      <div class="w-full grid md:grid-cols-2 gap-40 bg-white-primary rounded-32 md:rounded-40 p-28 md:p-36 lg:p-44 2xl:p-56 relative">
         <div class="w-full">
            <p class="heading-2 text-Rich-Black mb-40 md:mb-52 lg:mb-64 2xl:mb-80">Kurs uchun ro'yxatdan o'ting yoki bepul maslahat oling</p>
            <p class="overline-1 text-Spanish-Gray mb-8 md:mb-14 xl:mb-24">{{ lessons[course - 1].name }} kurs narxi</p>
            <div class="flex items-end gap-10">
               <h3 v-for="item in lessons" :key="item.type" v-show="(item.type == course)" class="heading-2 text-Jet">{{ item.price }}</h3>
               <p class="caps-subtitle text-Jet">so'm</p>
            </div>
         </div>

         <form @submit.prevent="submit" class="w-full space-y-24">
            <input type="text" v-model="name" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Ismingizni kiritng" required />
            <input type="number" v-model="phone" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 placeholder:text-Spanish-Gray outline-none" placeholder="Telefon raqamingiz" required />
            <select v-model="course" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle text-Gunmetal bg-Cultured w-full rounded-32 md:rounded-40 outline-none">
               <option v-for="(item, index) in lessons" :key="index.type" v-show="item.show" class="text-Gunmetal w-full max-w-full" :value="item.type">{{ item.name }}</option>
            </select>
            <button type="submit" class="px-20 2xl:px-32 py-15 2xl:py-20 subtitle bg-blue text-center text-white-primary w-full rounded-32 md:rounded-40" id="send">Yozilish</button>
         </form>
      </div>
   </div>
</template>

<script>
import lessons from '@/api/lessons'
export default {
   data() {
      return {
         name: '',
         phone: '',
         course: 1,
         lessons: lessons,
      }
   },

   methods: {
      submit() {
         this.name = ''
         this.phone = ''
         this.course = 1
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
      top: -110px;
      left: 0;
   }

   input {
      border: 1px solid #9A999B;
   }

   select {
      border: 1px solid #9A999B;
   }

   #send {
      color: white !important;
   }
</style>