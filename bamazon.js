var mysql= require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 8080,

    user: "root",

    password: "Foryen1!",
    database: "bamazon_db",
});

connnection.conect(function(err){
    if(err) throw err;

    start();
});



function start(){
    connection.query("SELECT * FROM products", function(err,res){
        for(var i = 0; i < res.length; i++) {
            console.log('\nItem ID: ' + res[i].item_id + " | " + 'Product Name: ');
        }
        console.log("-------------------------");
       
        productInfo();
    })
}