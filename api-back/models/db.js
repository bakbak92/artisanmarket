const mysql = require('mysql');
// en local
/*const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "artisanmarket"
});*/


const db = mysql.createConnection({
    host: "db4free.net",
    user: "bakbak",
    password: "bakbak92",
    database: "artisanmarket"
  });
db.connect((err) => {
    if (err) {
        return console.log(err)
    } else {
        console.log('db connected');
    }
})
  
  
  // we transform the callbacks into promises
db.connectQuery = (query) => new Promise( (resolve, reject) => {
    db.query(query, (err, result) => {
        err ? reject(err) : resolve(result)
    })
})

module.exports = db;
