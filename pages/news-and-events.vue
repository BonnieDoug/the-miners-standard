<template>
    <div>
        <section>
            <v-parallax v-bind:src="require('@/assets/hero3.jpg')" height="650" class="hero-1">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <div class="transparent-box">
                        <h1 class="white--text mb-2 display-1 text-xs-center"
                            style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                            News & Events</h1>
                        <div class="subheading mb-3 text-xs-center"
                             style="text-shadow: 2px 2px #111; font-size: 140% !important;">Fun for the entire family
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 md12 lg8 offset-lg2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-3">Upcoming Events</h2>
                        <hr>
                        <template>
                            <v-container
                                    fluid
                                    grid-list-xl
                            >
                                <v-layout row wrap>
                                    <v-flex xs12 md6 v-for="event, key in events" :key="key">
                                        <v-card class="elevation-6">
                                            <v-card-media
                                                    class="white--text"
                                                    height="280px"
                                                    v-bind:src="event.image"
                                                    v-if="event.image"
                                            >
                                                <v-container fill-height>
                                                    <v-layout align-end>
                                                        <v-flex>
                                                            <span class="headline pa-2"
                                                                  :style="'background-color:' + event.colour">{{ event.name }}</span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-media>
                                            <v-card-title v-else :class="event.colour">
                                                <span class="headline pa-2">{{ event.name }}</span>
                                            </v-card-title>
                                            <v-card-text style="min-height:150px" class="pb-0 mb-0">
                                                <h3 class="pt-2 pb-0 mb-0"><strong v-html="event.date"/></h3>
                                                <v-divider v-if="event.description"></v-divider>
                                                <p class="subheading py-2" v-if="event.description" v-html="event.description"/>
                                            </v-card-text>
                                            <div class="grey darken-4 white--text text-xs-center"
                                                 style="min-height: 40px;">
                                                <h4 class="pa-3">Need more details? Call
                                                    <span style="white-space: pre;">
                                                    <a class="text--white" href="tel:01629 650 279">01629 650 279</a>
                                                </span>
                                                </h4>
                                            </div>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </template>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'news-and-events',
    data: () => {
      return {
        events: [
          {
            name: 'Elvis Presley Tribute by Lewis Hill',
            description: null,
            date: 'Saturday 2nd February 2019 - 8.30pm / 9pm',
            colour: 'light-blue darken-4 white--text'
          },
          {
            name: 'Karaoke Night',
            description: null,
            date: 'Saturday 16th March 2019 - 9pm until midnight',
            colour: 'purple darken-2 white--text'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
