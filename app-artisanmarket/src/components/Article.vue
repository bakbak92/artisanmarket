<template>
    <v-container>
        <h2>Articles</h2>
        <v-layout>
            <v-flex xs12 sm4>
                <v-card>
                    <v-card-media
                    src="https://s3.amazonaws.com/vuetify-docs/images/cards/desert.jpg"
                    height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Coussin</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat>Ajouter aux panier</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style lang="scss" scoped>
.v-btn{
    background-color: #FFB6B9!important;
    color: white;
    width: 100%;
}
</style>
