var mysql = require('mysql2');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  port: 6603,
  password: "r00tr00t"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  