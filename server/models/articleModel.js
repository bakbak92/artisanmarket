const db = require('./db.js')

module.exports = {
    getArticles() {
        return db.connectQuery(`SELECT * from articles`)
    },
    getArticlesByArtisan({id}) {
        return db.connectQuery(`SELECT * from articles WHERE id_artisan = ${id}`)
    },
    addArticle({nom_article, description_article, image_article, prix_article, id_artisan}) {
        return db.connectQuery(`INSERT INTO
          articles(
            nom_article,
            description_article,
            image_article,
            prix_article,
            id_artisan
        ) VALUES(
            '${nom_article}',
            '${description_article}',
            '${image_article}',
            '${prix_article}',
            '${id_artisan}'
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
    jointure(){
        return db.connectQuery(`SELECT *
        FROM articles
        INNER JOIN artisans ON articles.id_artisan = artisans.id`)
    },
    deleteArticle({id}){
        return db.connectQuery(`DELETE FROM articles WHERE id = ${id}`)
    },
    getArticle({id}){
        return db.connectQuery(`SELECT * FROM articles WHERE id = ${id}`)
    },
    getArticleForHome(){
        return db.connectQuery('SELECT * FROM articles LIMIT 3')
    }

}