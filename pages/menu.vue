<template>
    <div>
        <section>
            <v-parallax v-bind:src="require('@/assets/images/menu.jpg')" height="650" class="hero-1">
                <v-layout
                        column
                        align-center
                        justify-center
                        class="white--text"
                >
                    <h1 class="white--text mb-2 display-1 text-xs-center"
                        style="line-height: 3.5rem !important; max-width: 400px; font-size: 400% !important; text-shadow: 2px 2px #111;">
                        Eat & Drink</h1>
                    <div class="subheading mb-3 text-xs-center"
                         style="text-shadow: 2px 2px #111; font-size: 140% !important;">A great choice for everybody.
                    </div>
                </v-layout>
            </v-parallax>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-4">Eat</h2>
                        <hr>
                        <p class="headline" style="margin-top:10px;">The Miners Standard has an large array of food to suit every taste whether you are vegan,
                            vegetarian or a meat eater. Every dietary requirement whether you're dairy-free gluten free,
                            fat free our Chef will endeavour to cook you your very own special meal.</p>
                        <p class="headline">Please ensure you
                            let us know before you arrive so we can ensure we have the right ingredients. Please phone
                            in advance and we will do our utmost to make sure that you are catered for.</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
        <section>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                    <v-card-text>
                        <h2 class="display-4">Drink</h2>
                        <hr>
                        <p class="headline" style="margin-top:10px;">The Miners Standard is a free house with a great variety of lagers, cask ales, spirits, gin
                            and whiskeys available.</p>
                        <p class="headline">Some of our Ales are locally sourced and loved by all.</p>
                    </v-card-text>
                </v-card>
            </v-flex>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'find-us'
  }
</script>

<style scoped>

</style>
