const express = require('express')
const app = express
const model = require('../Models/articleModel')

app.get('/articles', function(req, res) {
    model.getArticles()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.post('/article', function(req, res) {
    model.addArticle()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = app;