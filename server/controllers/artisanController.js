const express = require('express')
const app = express.Router()
const db = require('../Models/db')
const model = require('../Models/artisanModel')

app.post('/signup', function(req, res) {
    const {nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan} = req.body
    model.signUp({nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan})
    .then(result => res.json(result))
    .then(err => res.json(err))
})

module.export = app