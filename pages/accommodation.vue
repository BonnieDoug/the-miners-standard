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
                    <div class="transparent-box">
                        <h1 class="white--text mb-2 display-1 text-xs-center"
                            style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                            Stay with us</h1>
                        <div class="subheading mb-3 text-xs-center"
                             style="text-shadow: 2px 2px #111; font-size: 140% !important;">Tent, Caravan or Room? You
                            decide.
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-3">Stay with us.</h2>
                        <hr>
                        <p class="headline" style="margin-top:10px;">Camping - tents and caravans are all welcome.
                            Limited
                            availability for caravans and electric hook
                            ups so please book in advance.
                        </p>
                        <h4 class="display-1">Prices
                            <small>(Per person, per night)</small>
                            :
                        </h4>

                        <ul class="headline">
                            <li>£5 for each 5 years and upwards</li>
                            <li>Under 5's are free</li>
                        </ul>
                        <p class="headline">Toilets and showers are available with a £1 charge for the showers.</p>

                        <p class="headline">Well behaved dogs are welcome on the campsite and in the pub, but must be
                            kept on a lead at all times.
                        <p class="headline">Fires are permitted on the camping field, however, they must be raised off
                            the grass in a fire pit. The removal of stone from the perimeter wall is strictly
                            forbidden.</p>
                        <p class="headline"><strong>Note:</strong> The campsite will be closed from 1st November until
                            1st March.
                        </p>
                        <h4 class="display-1">We have 3 bed and breakfast rooms:</h4>
                        <ul class="headline">
                            <li>Family room</li>
                            <li>Twin room</li>
                            <li>Single room</li>
                        </ul>
                        <p class="headline">Please ring for prices and availability. You can also find us on uk
                            campsites. Please contact
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
