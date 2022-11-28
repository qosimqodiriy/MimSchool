<template>
   <div class="w-full bg-white-primary rounded-24 md:rounded-32 px-40 pb-36 md:pb-40 pt-40 md:pt-44 lg:pt-54">
      <div class="flex items-end gap-14 mb-5">
         <p class="heading-4 text-Rich-Black">{{ count }}</p>
         <p class="subtitle text-Rich-Black pb-5 md:pb-10 lg:pb-15">{{ name }}</p>
      </div>
      <p class="subtitle text-Rich-Black">{{ title }}</p>
   </div>
</template>


<script>
export default {
   props: {
      count: {
         type: String,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      title: {
         type: String,
         required: true
      }
   }
}
</script>