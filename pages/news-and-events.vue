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
                                        <v-card class="elevation-6" small>
                                            <v-card-media
                                                    class="white--text"
                                                    height="300px"
                                                    :src="event.image"
                                            >
                                                <v-container fill-height fluid>
                                                    <v-layout fill-height>
                                                        <v-flex xs12 align-end flexbox class="ma-2 pa-2">
                                                            <span class="headline pa-3" :style="'background-color:' + event.colour">{{ event.name }}</span>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>
                                            </v-card-media>
                                            <v-card-text style="min-height:150px" class="pb-0 mb-0">
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
            description: 'The Winster Guisers are in town!!  Join us at The Miners Standard to witness this entertaining and amusing performance.',
            date: 'Saturday 22nd December 2018',
            image: '/images/events/guisers-1.jpg',
            colour: '#000'
          },
          {
            name: 'Children\'s Christmas Party',
            description: 'The Miners Standard are hosting a Christmas party for kids of all ages!!  There will be music and dancing along with party games.  Party food will be provided as well as a selection of goodies to get you in the festive spirit.',
            date: 'Sunday 23rd December 2018',
            image: '/images/events/christmas-2.jpg',
            colour: '#a32c17'
          },
          {
            name: 'Carol Singing',
            description: 'The Miners Standard are continuing the tradition of the annual Carol Singing Service.  Bring your voices and join us for a mince pie at this festive event.',
            date: 'Sunday 30th December 2018',
            image: '/images/events/christmas-1.jpg',
            colour: '#dd1530'
          },
          {
            name: 'New Years Eve Party',
            description: 'New Years Eve Party - Wez and Lindsay invite you to The Miners Standard to celebrate the end of 2018 and the beginning of 2019.  Join us to let in the New Year with family and friends whilst enjoying music, party food and a wide selection of drinks.',
            date: 'Monday 31st December 2018',
            image: '/images/events/christmas-3.jpg',
            colour: '#cb9a6c'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
