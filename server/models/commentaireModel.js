const db = require('./db.js')

module.exports = {
    addCommentaire({title_commentaire, detail_commentaire, auteur_commentaire, article_id}){
        return db.connectQuery(`INSERT INTO 
        commentaires(
            title_commentaire,
            detail_commentaire,
            auteur_commentaire,
            article_id
        ) VALUES(
            '${title_commentaire}',
            '${detail_commentaire}',
            '${auteur_commentaire}',
            '${article_id}'
        )`)
    },
    getCom(){
        return db.connectQuery(`SELECT * FROM commentaires JOIN articles ON commentaires.article_id = articles.id`)
    },
    getCommentaire({id}){
        return db.connectQuery(`SELECT * FROM commentaires WHERE article_id = ${id}`)
    }

}