<template>
    <v-app light>
        <v-navigation-drawer
                class="hidden-md-and-up"
                v-model="menu"
                fixed
                app
                right
                clipped
        >
            <v-list dense>
                <template v-for="item in menuItems">
                    <v-list-tile :key="item.name" :to="item.to">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.name }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="black" dark fixed clipped-right>
            <v-toolbar-title v-text="title">
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="hidden-sm-and-down">
              <v-btn v-for="item, key in menuItems" flat :key="`menu-item-${key}`" :to="item.to">
                  <v-icon>{{ item.icon }}</v-icon> &nbsp;
                  {{ item.name }}
              </v-btn>
            </span>
            <span class="hidden-md-and-up">
                <v-btn dark icon @click.stop="menu = !menu"><v-icon>menu</v-icon></v-btn>
            </span>
        </v-toolbar>
        <v-content>
            <nuxt/>
            <section dark class="blue-grey darken-3 white--text">
                <v-container grid-list-xl>
                    <v-layout row wrap justify-center class="my-5 white--text">
                        <v-flex xs12 sm4>
                            <v-card class="elevation-0 transparent white--text">
                                <v-card-title primary-title class="layout my-0 py-0">
                                    <div class="headline">Find Us.</div>
                                </v-card-title>
                                <v-card-text class="pa-1 ma-0">
                                    <p class="pa-0 ma-0"><a :href="mapUrl" target="_blank" class="white--text">The Miners Standard<br>
                                        Bank Top<br>
                                        Winster<br>
                                        Matlock<br>
                                        DE4 2DR</a></p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 sm4 offset-sm1>
                            <v-card class="elevation-0 transparent white--text">
                                <v-card-title primary-title class="layout">
                                    <div class="headline">Contact us.</div>
                                </v-card-title>
                                <v-list class="transparent white--text">
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text">phone</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>01629 650 279</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                    <v-list-tile>
                                        <v-list-tile-action>
                                            <v-icon class="blue--text">email</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-content>
                                            <v-list-tile-title>info@theminersstandard.com</v-list-tile-title>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                </v-list>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </section>

            <v-footer class="blue-grey darken-4">
                <v-layout row wrap align-center>
                    <v-flex xs12>
                        <div class="white--text ml-3">
                            <!--Made with-->
                            <!--<v-icon class="red&#45;&#45;text">favorite</v-icon>-->
                            <!--by <a class="white&#45;&#45;text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>-->
                            <!--and <a class="white&#45;&#45;text" href="https://github.com/vwxyzjn">Costa Huang</a>-->
                        </div>
                    </v-flex>
                </v-layout>
            </v-footer>
        </v-content>
    </v-app>
</template>
<script>
  export default {
    data () {
      return {
        menu: false,
        title: 'The Miners Standard',
        mapUrl: 'https://www.google.co.uk/maps/dir//The+Miners+Standard,+Bank+Top,+Winster,+Matlock+DE4+2DR/@53.1386283,-1.7160361,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487a273f03c4f911:0x69e37fd7dd54c087!2m2!1d-1.6459966!2d53.1386488',
        menuItems: [
          {name: 'About', to: '/', icon: 'home'},
          {name: 'Events', to: '/news-and-events', icon: 'event'},
          {name: 'Eat & Drink', to: '/menu', icon: 'local_dining'},
          {name: 'Sleep', to: '/accommodation', icon: 'local_hotel'},
          {name: 'Contact', to: '/contact-us', icon: 'phone'}
        ]
      }
    }
  }
</script>

<style>
    .transparent-box {
        background-color: rgba(0, 0, 0, 0.40);
        padding: 20px;
    }
</style>
