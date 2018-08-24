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
                    <h1 class="white--text mb-2 display-1 text-xs-center" style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">News & Events</h1>
                    <div class="subheading mb-3 text-xs-center" style="text-shadow: 2px 2px #111; font-size: 140% !important;">Fun for the entire family</div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-4">Upcoming Events</h2>
                        <hr>



                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'news-and-events'
  }
</script>

<style scoped>

</style>