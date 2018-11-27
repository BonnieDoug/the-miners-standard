<style>
    @media (max-width: 510px) {
        .hero-1 img {
            left: 118%;
        }
    }
</style>
<template>
    <div>
        <section>
            <v-parallax v-bind:src="require('@/assets/hero1.jpg')" height="650" class="hero-1">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <div class="transparent-box">
                        <h1 class="white--text mb-2 display-1 text-xs-center"
                            style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                            The Miners Standard</h1>
                        <div class="subheading mb-3 text-xs-center"
                             style="text-shadow: 2px 2px #111; font-size: 140% !important;">A real taste of Derbyshire
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-3">Welcome to The Miners Standard in Winster.</h2>
                        <hr>
                        <p class="headline" style="margin-top:10px;">
                            <strong>Lindsay and Wez would like to offer a warm and friendly welcome to their hostelry in the
                            heart of the Derbyshire Peak District. The pub is located on the outskirts of the once
                            industrial lead mining village of Winster. It is ideally situated to offer both walking and
                            driving trips to see some of the best scenery the Peak District has to offer. The Heights of
                            Abraham with its spectacular ride across the Derwent Valley & Hilltop Park, Crich Tramway
                            Village with its tram rides and Carsington Water are just a few places located near to this
                                fantastic warm and welcoming pub.</strong></p>
                        <p class="headline">Lead mining in Winster can be traced back into the 1600’s, although it is safe to say that
                            it took place long before then. A walk around the village will help you understand how the
                            village became such a prosperous place to live.</p>
                        <p class="headline">The Inn, believed to have been built circa 1653 was originally a farm house, but as the lead
                            mines started to progress down the valley following the seams of lead, Inn’s and ale houses
                            started to spring up to quench the thirst of the miners. It is said that at one time there
                            were thirty seven places you could buy beer in the village, with The Miners Standard
                            probably one of the first.</p>
                        <p class="headline">The name of the pub derived from a brass measuring dish presented to the miners in 1533 by
                            Henry the 8th. It was known as the miners standard and it was this dish the barmaster (or
                            senior official) of the mining field used to take measuring’s at the mines he visited.
                            The letters above the front porch EP EP FP are said to stand for Edith, Ella and Frank
                            Prince, former owners of the Inn. Most of the time they stood for ‘Every person entering
                            pays for a pint’. So come along and spend time at The Miners Standard and find out more
                            about what Winster and the surrounding area have to offer.</p>

                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">local_dining</v-icon>
                                        </v-card-text>
                                        <v-card-title class="layout justify-center">
                                            <h3 class="display-1 text-xs-center">Eat</h3>
                                        </v-card-title>
                                        <v-card-text class="justify-center subheading">
                                            We have a great choice of home made food and will cater for any of your
                                            dietary needs.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">local_drink</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <h3 class="display-1 text-xs-center">Drink</h3>
                                        </v-card-title>
                                        <v-card-text class="justify-center subheading">
                                            Our selection of drinks ranges from the usual premium largers to local craft
                                            ales and ciders.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card class="elevation-0 transparent">
                                        <v-card-text class="text-xs-center">
                                            <v-icon x-large class="blue--text text--lighten-2">nature_people</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center">
                                            <h3 class="display-1 text-xs-center">Sleep</h3>
                                        </v-card-title>
                                        <v-card-text class="justify-center subheading">
                                            Camp with us, or if you don't fancy the outdoors come and stay in one of our
                                            more comfortable Bed & Breakfast rooms.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>
</template>

<script></script>
