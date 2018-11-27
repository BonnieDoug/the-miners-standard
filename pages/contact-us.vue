<style>
    .map {
        background-image: url('/assets/images/map.png');
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 400px;
    }
</style>
<template>
    <div>
        <section style="height:650px;">
            <v-parallax v-bind:src="require('@/assets/hero2.jpg')" height="700" class="hero-1">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <div class="transparent-box">
                        <h1 class="white--text mb-2 display-4 text-xs-center"
                            style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                            Contact Us</h1>
                        <div class="subheading mb-3 text-xs-center"
                             style="text-shadow: 2px 2px #111; font-size: 140% !important;">
                            <a class="headline" style="color:white; text-decoration: none" href="tel:01629 650279.">01629
                                650279</a>
                        </div>
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-3">Find Us
                            <v-icon style="font-size:50px !important;padding-bottom:5px;">location_on</v-icon>
                        </h2>
                        <div style="position: relative">
                            <a href="https://www.google.co.uk/maps/dir//The+Miners+Standard,+Bank+Top,+Winster,+Matlock+DE4+2DR"
                               target="_blank">
                                <div class="map"></div>
                            </a>
                            <div style="color:white;position:absolute;top:10px;left:10px; background-color: rgba(0,0,0,0.5); padding: 10px;">
                                <p class="headline">The Miners Standard<br>
                                    Bank Top<br>
                                    Winster<br>
                                    Matlock <br>
                                    DE4 2DR</p>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-2">Call Us
                            <v-icon style="font-size:50px !important;padding-bottom:3px;">phone</v-icon>
                        </h2>
                        <p class="headline"><a href="tel:01629 650279.">01629 650279</a></p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-2">Email Us
                            <v-icon style="font-size:50px !important;padding-bottom:3px;">mail</v-icon>
                        </h2>
                        <p class="headline"><a href="mailto: info@theminerstandardwinster.co.uk">info@theminerstandardwinster.co.uk</a>
                        </p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'contact-us'
  }
</script>

<style scoped>

</style>
