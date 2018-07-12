const express = require('express')
const db = require('./models/db.js')
const articleModel = require('./models/articleModel.js')
const artisanModel = require('./models/artisanModel.js')
const commentaireModel = require('./models/commentaireModel.js')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signupartisan', function(req, res) {
  const {nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan} = req.body
  artisanModel.signUpArtisan({nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan})
  .then(result => res.json(result))
  .then(err => res.json(err))
})

app.post('/article', function(req, res) {
  const {nom_article, description_article, image_article, prix_article} = req.body;
  articleModel.addArticle({nom_article, description_article, image_article, prix_article})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/signinartisan/:email_artisan/:password_artisan', function(req, res) {
  const {email_artisan, password_artisan} = req.params
  artisanModel.signInArtisan({email_artisan, password_artisan})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/articles', (req, res) => {
    articleModel.getArticles()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

app.put('/updatearticle', (req, res) => {
  const {id, nom_article, description_article, image_article, prix_article} = req.body
  articleModel.updateArticle({id, nom_article, description_article, image_article, prix_article})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/deletearticle/:id', (req, res) => {
  const {id} = req.params
  articleModel.deleteArticle({id})
  .then(result => res.json(result))
  .catch(err => res.json(err)) 
})

app.post('/addcommentaire', (req, res) => {
  const {title_commentaire, detail_commentaire, auteur_commentaire, article_id} = req.body
  commentaireModel.addCommentaire({title_commentaire, detail_commentaire, auteur_commentaire, article_id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.get('/commentaire/:id', (req, res) => {
  const {id} = req.params
  commentaireModel.getCommentaire({id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/article/:id', (req, res) => {
  const {id} = req.params
  articleModel.getArticle({id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/home', (req, res) => {
  articleModel.getArticleForHome()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})