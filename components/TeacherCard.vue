<template>
   <div class="w-full h-full min-h-235 overflow-hidden rounded-24 md:rounded-32 relative card">
      <img class="w-full h-full max-h-513 object-cover object-center" src="@/assets/images/teacher.png" alt="">

      <!-- <div v-if="show" class="absolute bottom-0 left-0 w-full p-20 md:p-25 lg:p-30">
         <p class="heading-5 text-white-primary">Justin Perry</p>
         <p class="body text-white-primary">ux/ui design</p>
      </div> -->
      <div v-if="show" class="content">
         <div class="contentBx">
            <h3 class="heading-5 text-white-primary break-words line-clamp-1">{{ item.name }}</h3>
            <p class="body text-white-primary">{{ item.job }}</p>
         </div>
         <ul class="sci">
            <li v-for="(social, index) in item.socials" :key="index" :style="`--i:${index}`">
               <a :href="social.link" target="_blank">
                  <!-- <img class="w-24 h-24" src="@/assets/images/telegram.png" alt=""> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d="social.path" fill="rgba(255,255,255,1)" /></svg>
               </a>
            </li>
            <!-- <li style="--i:2"><a href="https://t.me/mimsoftio" target="_blank"><img class="w-24 h-24" src="@/assets/images/facebook.png" alt=""></a></li>
            <li style="--i:3"><a href="https://t.me/mimsoftio" target="_blank"><img class="w-24 h-24" src="@/assets/images/instagram.png" alt=""></a></li> -->
         </ul>
      </div>
   </div>
</template>


<script>
export default {
   props: {
      show: {
         type: Boolean,
         required: true
      },
      item: {
         type: Object,
         required: false
      }
   }
}
</script>


<style scoped>
.card {
   background: linear-gradient(180deg, rgba(39, 33, 57, 0) 42.19%, rgba(39, 33, 57, 0.8) 100%);
}


.content {
   position: absolute;
   bottom: -130px;
   width: 100%;
   height: 130px;
   display: flex;
   transition: 0.5s;
   padding: 15px 10px;
   align-items: center;
   justify-content: start;
   flex-direction: column;
   backdrop-filter: blur(5px);
   transition-delay: 0.8s;
   border-radius: 10px;
   background: rgba(0, 0, 0, 0.5);
   box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
   border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.card:hover .content {
   bottom: 0;
   transition-delay: 0s;
}

.card .content .contentBx h3 {
   opacity: 0;
   transition: 0.5s;
   text-align: center;
   margin-bottom: 8px;
   transition-delay: 0.6s;
   transform: translateY(-20px);
}

.card:hover .content .contentBx h3 {
   opacity: 1;
   transform: translateY(0px);
}

.card .content .contentBx p {
   opacity: 0;
   /* font-weight: 300; */
   transition: 0.5s;
   text-align: center;
   margin-bottom: 15px;
   transition-delay: 0.6s;
   text-transform: uppercase;
   transform: translateY(-20px);
}

.card:hover .content .contentBx p {
   opacity: 1;
   transform: translateY(0px);
}

.card .content .sci {
   position: relative;
   display: flex;
   align-items: center;
}

.card .content .sci li {
   list-style: none;
   margin: 0 10px;
   opacity: 0;
   transform: translateY(40px);
   transition: 0.5s;
   transition-delay: calc(0.15s * var(--i));
}

.card:hover .content .sci li {
   opacity: 1;
   transform: translateY(0px);
}

.card .content .sci li a {
   color: #fff;
   font-size: 24px;
   margin: 0;
   padding: 0;
}
</style>