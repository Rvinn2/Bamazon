DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(50)NOT NULL,
price INT default 0,
stock_quantity INT default 0,
PRIMARY KEY (item_id)
);




Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12345, "Echo Plus 2nd Generation", "Electronics", "109.99", 10);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12346, "Philips Hue Single Smart Bulb", "Electronics", "46.95", 15);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12347, "Philips Hue Decorative Candle", "Electronics", "49.97", 20);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12348, "Honeywell WiFi Thermostat", "Electronics", "135.97", 12);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12349, "Leoit Air Purifier", "Electronics", "81.04", 21);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12328, "Lays Variety Pack 24", "Grocery", "13.41", 11);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12327, "Perrier Peach Flavor", "Grocery", "17.97", 14);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12326, "To Do List Notepad", "Office", "17.97", 30);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12323, "7 Pack Dry Erase Markers", "Office", "7.99", 24);

Insert INTO products (item_id, product_name, deparment_name, price, stock_quantity)
VALUES (12321, "Organic Protein", "Health", "28.23", 10);