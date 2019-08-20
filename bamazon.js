var mysql= require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 8080,

    user: "root",

    password: "Foryen1!",
    database: "bamazon_db",
});