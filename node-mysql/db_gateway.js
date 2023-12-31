class db_gateway { 

    constructor() {

    }

    getDb() { 

        const mysql = require('mysql2');  

        const db_con = mysql.createConnection({
            host: "localhost",
            port:6603,
            user: "root",
            password: "r00tr00t",
            database: "my_shop"
         }); 

        db_con.connect(function(err) {
            if (err) {               
                console.log(err.message);             
            }                    
        });

        return db_con;
    } 

    execute(sql, params, callBack) {

       var db_con = this.getDb();        

       db_con.query(sql, params, function (err, result) {
           if (err) {
               callBack(err, null);                   
           } else {
               callBack(null, "Success");          
           }         
      }); 

    }      

    query(sql, params, callBack) {

       var db_con = this.getDb();        

       db_con.query(sql, params, function (err, result) {
           if (err) {
               callBack(err, null);                   
           } else {
               callBack(null, result);          
           }         
      }); 

    }      
}

module.exports = db_gateway;