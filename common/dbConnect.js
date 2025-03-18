var mysql = require('mysql2');
var dbcredentials;


const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "*Database630803240081",
    database: "ndma_dews",
    insecureAuth: true
});
setInterval(() => {
    con.query("SELECT 1", (err, rows) => {
        if (err) throw err;
    });
}, 1000);




module.exports=con;
