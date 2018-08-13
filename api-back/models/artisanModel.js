const db = require('./db.js')

module.exports = {
    getArtisan({id_artisan}){
        return db.connectQuery(`SELECT * FROM artisans WHERE id = '${id_artisan}'`)
    },
    signUpArtisan({nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan}) {
        return db.connectQuery(`INSERT INTO
            artisans(
                nom_artisan, 
                prenom_artisan, 
                description_artisan, 
                email_artisan, 
                password_artisan, 
                photo_artisan
            ) VALUES(
                '${nom_artisan}',
                '${prenom_artisan}',
                '${description_artisan}',
                '${email_artisan}',
                '${password_artisan}',
                '${photo_artisan}'
            )`)
    },
    signInArtisan({email_artisan, password_artisan}){
        return db.connectQuery(`SELECT * FROM artisans 
        WHERE email_artisan = '${email_artisan}' AND password_artisan = '${password_artisan}'`)
    },
    editArtisan({id, nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan}){
        return db.connectQuery(`UPDATE artisans SET 
            nom_artisan = '${nom_artisan}',
            prenom_artisan = '${prenom_artisan}',
            description_artisan = '${description_artisan}',
            email_artisan = '${email_artisan}',
            password_artisan = '${password_artisan}',
            photo_artisan = '${photo_artisan}'
            WHERE id = '${id}'    
        `)
    }
}