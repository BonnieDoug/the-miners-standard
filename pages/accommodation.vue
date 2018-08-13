<template>
    <div>
        <section>
            <v-parallax v-bind:src="require('@/assets/hero4.jpg')" height="650" class="hero-1">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <h1 class="white--text mb-2 display-1 text-xs-center"
                        style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                        Stay with us</h1>
                    <div class="subheading mb-3 text-xs-center"
                         style="text-shadow: 2px 2px #111; font-size: 140% !important;">Tent, Caravan or Room? You
                        decide.
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2>Stay with us.</h2>
                        <p>Camping, tents and caravans all welcome. Limited availability for caravans and electric hook
                            ups please book in advance.
                        </p>
                        <h4>Prices
                            <small>(Per person, per night)</small>
                            :
                        </h4>

                        <ul>
                            <li>£5 for each 12+</li>
                            <li>£3 for 5 to 12 year olds</li>
                            <li>Under 5's are free</li>
                        </ul>
                        <p>Toilets and showers are available there’s a £1 charge for the showers.</p>

                        <p>The miners standard pub is also on site for amazing food and refreshments if wanted. Well
                            behaved Dogs are all welcome at the campsite however dogs must be kept on a lead.
                        </p>
                        <p>The Miners Standard is a free house with a great variety of lagers, cask ales, spirits, gin
                            and whiskeys available.
                        </p>
                        <h4>We have 3 bed and breakfast rooms:</h4>
                        <ul>
                            <li>Family room</li>
                            <li>Twin room</li>
                            <li>Single room</li>
                        </ul>
                        <p>Please ring for prices and availability. You can also find us on uk campsites. Please contact
                            us on <a href="tel:01629 650279.">01629 650279</a>.
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>

</template>

<script>
  export default {
    name: 'camping'
  }
</script>

<style scoped>

</style>
