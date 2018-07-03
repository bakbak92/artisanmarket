const db = require('./db.js')

module.exports = {
    getArticles() {
        return db.connectQuery('SELECT * from articles')
    },
    addArticle({nom, description, img}) {
        return db.connectQuery(`INSERT INTO
          articles(
            nom,
            description,
            img
        ) VALUES(
            '${nom}',
            '${description}',
            '${img}'
        )`)
      },
}