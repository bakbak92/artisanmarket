const db = require('./db.js')

module.exports = {
    getArtisan({id_artisan}){
        return db.connectQuery(`SELECT * FROM artisans WHERE id = '${id_artisan}'`)
    },
    signUpArtisan({prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan}) {
        return db.connectQuery(`INSERT INTO
            artisans(
                prenom_artisan, 
                description_artisan, 
                email_artisan, 
                password_artisan, 
                photo_artisan
            ) VALUES(
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
    editArtisan({id, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan}){
        return db.connectQuery(`UPDATE artisans SET 
            prenom_artisan = '${prenom_artisan}',
            description_artisan = '${description_artisan}',
            email_artisan = '${email_artisan}',
            password_artisan = '${password_artisan}',
            photo_artisan = '${photo_artisan}'
            WHERE id = '${id}'    
        `)
    }
}