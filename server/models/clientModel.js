const db = require('./db.js')

module.exports = {
    getArticles() {
        return db.connectQuery('SELECT * from articles')
    },
    addArticle({nom, description, image}) {
        return db.connectQuery(`INSERT INTO
          articles(
            nom_article,
            description_article,
            prix_article,
            image_article
        ) VALUES(
            '${nom_article}',
            '${description_article}',
            '${prix_article}',
            '${image_article}'
        )`)
      },
    signInclient(){
        return db.connectQuery(`INSERT INTO
            client(
                nom_client,
                prenom_client,
                email_client,
                password_client,
                photo_client
            ) VALUES (
                '${nom_client}',
                '${prenom_client}',
                '${email_client}',
                '${password_client}',
                '${photo_client}'
            )
        `)
    }
}
