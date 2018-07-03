const express = require('express')
const db = require('./models/db.js')
const users = require('./models/articleModel.js')
const artisanModel = require('./models/artisanModel.js')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signup', function(req, res) {
  const {nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan} = req.body
  artisanModel.signUp({nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan})
  .then(result => res.json(result))
  .then(err => res.json(err))
})

app.post('/article', function(req, res) {
  const {nom, description, image} = req.body;
  users.addArticle({nom, description, image})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/articles', (req, res) => {
    users.getArticles()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})