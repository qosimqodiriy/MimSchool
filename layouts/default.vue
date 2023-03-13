<template>
  <!-- <v-app>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="true" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-app> -->

  <div class="flex flex-col min-h-screen bg-black relative pt-100 md:pt-108">
    <TheHeader />
    <div class="flex-auto">
      <nuxt />
    </div>
    <TheFooter />
  </div>

</template>

<script>
import TheHeader from '@/components/Header.vue'
import TheFooter from '@/components/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  }
  // data() {
  //   return {
  //     clipped: false,
  //     drawer: false,
  //     items: [
  //       {
  //         icon: 'mdi-apps',
  //         title: 'Welcome',
  //         to: '/'
  //       },
  //       {
  //         icon: 'mdi-chart-bubble',
  //         title: 'Inspire',
  //         to: '/inspire'
  //       }
  //     ],
  //     rightDrawer: false,
  //     title: 'Vuetify.js'
  //   }
  // }
}
</script>
