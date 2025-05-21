CREATE DATABASE restaurant_management;

USE restaurant_management;

CREATE TABLE Customer (
    cust_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE `Table` (
    table_id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT NOT NULL UNIQUE,
    capacity INT NOT NULL
);

CREATE TABLE MenuItem (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Order (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    cust_id INT,
    order_date DATETIME NOT NULL,
    table_id INT,
    FOREIGN KEY (cust_id) REFERENCES Customer(cust_id),
    FOREIGN KEY (table_id) REFERENCES Table(table_id)
);

CREATE TABLE OrderItem (
    order_id INT,
    item_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (order_id, item_id),
    FOREIGN KEY (order_id) REFERENCES Order(order_id),
    FOREIGN KEY (item_id) REFERENCES MenuItem(item_id)
);

CREATE TABLE Payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    payment_method VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Order(order_id)
);
