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
                    <h1 class="white--text mb-2 display-1 text-xs-center" style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">Contact Us</h1>
                    <div class="subheading mb-3 text-xs-center" style="text-shadow: 2px 2px #111; font-size: 140% !important;">
                        <a style="color:white; text-decoration: none" href="tel:01629 650279.">01629 650279</a>
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2>Find Us <v-icon>location_on</v-icon></h2>
                        <a href="https://www.google.co.uk/maps/dir//The+Miners+Standard,+Bank+Top,+Winster,+Matlock+DE4+2DR" target="_blank">
                        <div class="map"></div>
                        </a>
                        <p>The Miners Standard,<br>
                            Bank Top,<br>
                            Winster,<br>
                            Matlock <br>
                            DE4 2DR.</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2>Call Us <v-icon>phone</v-icon></h2>
                        <p><a href="tel:01629 650279.">01629 650279</a></p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2>Email Us <v-icon>mail</v-icon></h2>
                        <p><a href="mailto: info@theminerstandardwinster.co.uk">info@theminerstandardwinster.co.uk</a></p>
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
