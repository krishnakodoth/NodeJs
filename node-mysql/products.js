class products {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into products (product_name, retail_price) values (?, ?)"; 

        var params = [];

        params.push(jsonData["product_name"]);  
        params.push(jsonData["retail_price"]); 

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {

         var sql = "select product_id, product_name, retail_price from products";

         var params = []; 

         if (resourceId != "") {
             sql = sql + " where product_id = ?";               
             params.push(resourceId);    
         }

         this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        var sql = "update products set product_name = ?, retail_price = ? where product_id = ?";

        var params = [];

        params.push(jsonData["product_name"]);  
        params.push(jsonData["retail_price"]); 
        params.push(resourceId); 

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from products where product_id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = products;