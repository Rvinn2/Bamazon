var mysql= require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 8080,

    user: "root",

    password: "Foryen1!",
    database: "bamazon_db",
});

connection.connect(function(err){
    if(err) throw err;

    showProducts();
});

function productInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the item ID of the product you want to buy?",
            name: "product",
            filter: Number
        },

        {
            type: "input",
            name: "quantity",
            message: "How many units of this product would you like to buy?",
            filter: Number
        }
    ])
    .then(function(res){
        var item2 = res.product;
        var quantity2 = res.quantity;

        connection.query("SELECT * FROM products WHERE ?", {item_id: item2},
        function(err,response){
            if(err) throw err;
                
            
            // MAKE SURE USER IS SELECTING A VALID ID FOR PRODCUTS


            if(response.length === 0){
                console.log("You must select a valid product ID from the Product list.");
                showAllProducts();
            }else{
                // IF THE PRODUCTS ARE IN STOCK________
                var productRes = response[0];
                if(quantity2 <= productRes.stock_quantity){
                    console.log("Your product is in stock!!");

                    var updateInventory = "UPDATE products SET stock_quantity = " + (productRes.stock_quantity - quantity2) + "WHERE item_id = " + item2;

                    connection.query(updateInventory, function(err,data) {
                        if (err) throw err;
                        console.log('Your order was placed, the total balance is $' + productRes.price * quantity2);
                        console.log("Thanks for your purchase");
                        console.log("\n-------------------------------\n");
                        
                        
                        keepShopping();
                    })
                }
            }
        }
        )
    })
}



function showProducts(){
    connection.query("SELECT * FROM products", function(err,res){
        for(var i = 0; i < res.length; i++) {
            console.log('\nItem ID: ' + res[i].item_id + " | " + 'Product Name: ' + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "price: " + res[i].price.toString() + " | " + "Stock Quantity" + res[i].stock_quantity.toString());
        }
        console.log("-------------------------");
       
        productInfo();
    });
}

function keepShopping(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "would you like to keep shopping?",
            name: "confirm"
        }
    ]).then(function(res){
        if(res.confirm){
            console.log("----------------");
            showProducts();
        } else{
            console.log("Thanks for shopping with us!");
            connection.end();
        }
    })
}