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
                    <h1 class="white--text mb-2 display-1 text-xs-center"
                        style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                        The Miners Standard</h1>
                    <div class="subheading mb-3 text-xs-center"
                         style="text-shadow: 2px 2px #111; font-size: 140% !important;">A real taste of Derbshire
                    </div>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout
                    column
                    container
                    wrap
                    align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">A little about us.</h2>
                        <p>The Miners Standard is a very busy little pub in the quaint little village of Winster settled
                            in heart of the Peak District not far from the busy towns of Matlock Bakewell Buxton and
                            Chesterfield. This pub is a family owned borough restaurant, campsite and bed and breakfast.
                            Catering for everybody's needs, with stunning views overlooking Robin Hood stride and only a
                            few miles away from the nine ladies in Birchover. If you're up for walking, rock climbing
                            and/or canoeing or just want to have a relax or fancy a little bit of the outdoors, the
                            Miners Standard it's right place for you.</p>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">local_dining</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Eat</div>
                                    </v-card-title>
                                    <v-card-text>
                                        We have a great choice of home made food and will cater for any of your dietary needs.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">local_drink</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Drink</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Our selection of drinks ranges from the usual premium largers to local craft ales and ciders.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">nature_people</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Sleep</div>
                                    </v-card-title>
                                    <v-card-text class="justify-center">
                                        Camp with us, or if you don't fancy the outdoors come and stay in one of our more comfortable Bed & Breakfast rooms.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>
    </div>
</template>
