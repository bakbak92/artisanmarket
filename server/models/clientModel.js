const express = require('express')
const db = require('./models/db.js')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const articleController = require('./controllers/articleController')
const clientController = require('./controllers/clientController')
const artisanController = require('./controllers/artisanController')
app.use(cors())
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*

app.use('', clientController);*/
app.use('', articleController);
app.use('', artisanController);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// article model

const db = require('./db.js')

module.exports = {
    getArticles() {
        return db.connectQuery('SELECT * from articles')
    },
    addArticle({nom, description, image}) {
        return db.connectQuery(`INSERT INTO
          articles(
            nom,
            description,
            image
        ) VALUES(
            '${nom}',
            '${description}',
            '${image}'
        )`)
      },
}

// articlecontroller

const express = require('express')
const app = express.Router()
const db = require('../Models/db')
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