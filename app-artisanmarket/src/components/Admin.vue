<template>
    <v-container>
        <div class="articles">
            <v-card>
                <v-card-media
                class="white--text"
                height="200px"
                src="https://s3.amazonaws.com/vuetify-docs/images/cards/docks.jpg"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">Top 10 Australian beaches</span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title>
                    <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>Whitehaven Beach</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn
                    color="primary"
                    dark
                    @click.stop="dialog = true"
                    >
                    Open Dialog
                    </v-btn>
                        <v-dialog
                        v-model="dialog"
                        max-width="400"
                        >
                        <v-card>
                            <v-card-title class="headline">Use Google's location service?</v-card-title>

                            <v-card-text>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialog = false"
                            >
                                Disagree
                            </v-btn>

                            <v-btn
                                color="green darken-1"
                                flat="flat"
                                @click="dialog = false"
                            >
                                Agree
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                    <v-btn flat color="orange">Explore</v-btn>
                    
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
