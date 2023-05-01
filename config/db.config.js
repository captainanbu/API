const mysql2 = require('mysql2');
const dbConn = mysql2.createConnection({
    host :'localhost',
    port:'3306',
    user :'root',
    password:'dev@PASSWORD2023',
    database:'plenome_HMS'
});
dbConn.connect(function(error){
    if (error) throw error;
    console.log('DataBase connected Successfully!!!!');
});
module.exports=dbConn;