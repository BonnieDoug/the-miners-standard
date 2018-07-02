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
                        <v-list-tile :key="item.name" @click="">
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
              <v-btn v-for="item, key in menuItems" flat :key="`menu-item-${key}`">{{ item.name }}</v-btn>
            </span>
                <span class="hidden-md-and-up">
                <v-btn dark icon @click.stop="menu = !menu"><v-icon>menu</v-icon></v-btn>
            </span>
            </v-toolbar>
            <v-content>
                <nuxt/>
                <section>
                    <v-container grid-list-xl>
                        <v-layout row wrap justify-center class="my-5">
                            <v-flex xs12 sm4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Company info</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                        turpis
                                        egestas.
                                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                        Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm4 offset-sm1>
                                <v-card class="elevation-0 transparent">
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Contact us</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    </v-card-text>
                                    <v-list class="transparent">
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">phone</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>777-867-5309</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">place</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>Chicago, US</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                        <v-list-tile>
                                            <v-list-tile-action>
                                                <v-icon class="blue--text text--lighten-2">email</v-icon>
                                            </v-list-tile-action>
                                            <v-list-tile-content>
                                                <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                                            </v-list-tile-content>
                                        </v-list-tile>
                                    </v-list>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </section>

                <v-footer class="blue darken-2">
                    <v-layout row wrap align-center>
                        <v-flex xs12>
                            <div class="white--text ml-3">
                                Made with
                                <v-icon class="red--text">favorite</v-icon>
                                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
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
        clipped: false,
        menu: false,
        fixed: false,
        items: [
          {icon: 'apps', title: 'Welcome', to: '/'},
          {icon: 'bubble_chart', title: 'Inspire', to: '/inspire'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'The Miners Standard',
        menuItems: [
          {name: 'Home', to: '', icon: 'home'},
          {name: 'News & Events', to: '', icon: 'event'},
          {name: 'About', to: '', icon: 'help'},
          {name: 'Find Us', to: '', icon: 'place'},
          {name: 'Contact Us', to: '', icon: 'phone'}
        ]
      }
    }
  }
</script>
