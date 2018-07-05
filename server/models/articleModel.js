const db = require('./db.js')

module.exports = {
    getArticles() {
        return db.connectQuery('SELECT * from articles')
    },
    addArticle({nom_article, description_article, image_article, prix_article}) {
        return db.connectQuery(`INSERT INTO
          articles(
            nom_article,
            description_article,
            image_article,
            prix_article
        ) VALUES(
            '${nom_article}',
            '${description_article}',
            '${image_article}',
            '${prix_article}'
        )`)
    },
    updateArticle({id, nom_article, description_article, image_article, prix_article}) {
        return db.connectQuery(`UPDATE articles SET 
            nom_article = '${nom_article}', 
            description_article = '${description_article}', 
            image_article = '${image_article}', 
            prix_article = '${prix_article}'
            WHERE id = '${id}'
        `)
    },
    deleteArticle({id}){
        return db.connectQuery(`DELETE FROM articles WHERE id = ${id}`)
    }
    

}