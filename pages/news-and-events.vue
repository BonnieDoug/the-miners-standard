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
            <v-flex xs12 sm8 offset-sm2>
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
                                                    height="300px"
                                                    :src="event.image"
                                            >
                                                <v-container fill-height fluid>
                                                    <v-layout fill-height>
                                                        <v-flex xs12 align-end flexbox>
                                                            <span class="headline">{{ event.name }}</span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-media>
                                            <v-card-text>
                                                <h3 class="pt-2 pb-0 mb-0"><strong>{{ event.date }}</strong></h3>
                                                <v-divider></v-divider>
                                                <p class="subheading py-2">{{ event.description }}</p>
                                            </v-card-text>
                                            <div class="grey darken-4 white--text text-xs-center" style="min-height: 40px;">
                                                <h4 class="pa-3">Don't miss out! Book now by calling 01629 650 279</h4>
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
            name: 'Visit from the Guisers',
            description: 'Bacon ipsum dolor amet meatball buffalo pork loin meatloaf, t-bone ribeye ham sausage salami pastrami kevin venison short loin spare ribs. Pork chop bresaola pork belly short ribs. Drumstick turducken beef, ball tip filet mignon pork belly shankle bacon.',
            date: 'Saturday 22nd December 2018',
            image: 'https://picsum.photos/800/300/?random'
          },
          {
            name: 'Children\'s Christmas Party',
            description: 'Running from 4pm till 6pm. Party food and entertainment will be provided',
            date: 'Sunday 23rd December 2018',
            image: 'https://picsum.photos/800/300/?random'
          },
          {
            name: 'Carol Singing',
            description: 'Bacon ipsum dolor amet meatball buffalo pork loin meatloaf, t-bone ribeye ham sausage salami pastrami kevin venison short loin spare ribs. Pork chop bresaola pork belly short ribs. Drumstick turducken beef, ball tip filet mignon pork belly shankle bacon.',
            date: 'Sunday 30th December 2018',
            image: 'https://picsum.photos/800/300/?random'
          },
          {
            name: 'New Years Eve Party',
            description: 'Bacon ipsum dolor amet meatball buffalo pork loin meatloaf, t-bone ribeye ham sausage salami pastrami kevin venison short loin spare ribs. Pork chop bresaola pork belly short ribs. Drumstick turducken beef, ball tip filet mignon pork belly shankle bacon.',
            date: 'Monday 31st December 2018',
            image: 'https://picsum.photos/800/300/?random'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
