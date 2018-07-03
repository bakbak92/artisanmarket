const db = require('./db.js')

module.exports = {
    signUp({nom_artisan, prenom_artisan, description_artisan, email_artisan, password_artisan, photo_artisan}) {
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
    }
}