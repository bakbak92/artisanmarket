const db = require('./db.js')

module.exports = {
    signUpclient({prenom_client, nom_client, email_client, password_client, photo_client}){
        return db.connectQuery(`INSERT INTO
            client(
                prenom_client,
                nom_client,
                email_client,
                password_client,
                photo_client
            ) VALUES (
                '${prenom_client}',
                '${nom_client}',
                '${email_client}',
                '${password_client}',
                '${photo_client}'
            )
        `)
    }
}
