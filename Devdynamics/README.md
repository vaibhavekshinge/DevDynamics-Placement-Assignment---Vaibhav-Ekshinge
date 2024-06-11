# Inventory Management System

This is an inventory management system for an e-commerce store implemented using Node.js and Express. The system allows administrators to add and remove products from the inventory and provides customers with functionalities to add items to their shopping cart and apply discount coupons.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Data Structures](#data-structures)
- [Example Requests](#example-requests)

## Features

- Add products to the inventory
- Remove products from the inventory
- Add items to the shopping cart
- Apply discount coupons to the shopping cart

## Installation

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd inventory-management-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Usage

Make sure the server is running. Use an API client like Postman or `curl` to interact with the endpoints.

## API Endpoints

### Product Endpoints

- **Add Item to Inventory**
  - **URL:** `/api/v1/products/addItem`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "productId": "1",
      "name": "Product 1",
      "price": 10,
      "quantity": 100
    }
    ```

- **Remove Item from Inventory**
  - **URL:** `/api/v1/products/removeItem`
  - **Method:** `DELETE`
  - **Body:**
    ```json
    {
      "productId": "1",
      "quantity": 10
    }
    ```

### Cart Endpoints

- **Add Item to Cart**
  - **URL:** `/api/v1/cart/addToCart`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "customerId": "123",
      "productId": "1",
      "quantity": 2
    }
    ```

### Coupon Endpoints

- **Apply Discount Coupon**
  - **URL:** `/api/v1/coupon/applyDiscount`
  - **Method:** `POST`
  - **Body:**
    ```json
    {
      "cartValue": 500,
      "discountId": "3"
    }
    ```

## Data Structures

### Products

Stored in an array:
```js
let products = [
  { _id: '1', name: 'Product 1', price: 10, quantity: 100 },
  { _id: '2', name: 'Product 2', price: 20, quantity: 50 },
  { _id: '3', name: 'Product 3', price: 30, quantity: 75 },
  { _id: '4', name: 'Product 4', price: 40, quantity: 120 },
  { _id: '5', name: 'Product 5', price: 50, quantity: 200 }
];
```

###Coupons

Stored in an array:
```js
let coupons = [
  { _id: '1', discountPercentage: 10, maxDiscountCap: 50 },
  { _id: '2', discountPercentage: 15, maxDiscountCap: 75 },
  { _id: '3', discountPercentage: 20, maxDiscountCap: 100 },
  { _id: '4', discountPercentage: 25, maxDiscountCap: 125 },
  { _id: '5', discountPercentage: 30, maxDiscountCap: 150 }
];
```


###Cart
Stored as an object where each key is a customer ID and the value is an array of items:
```js
Copy code
let cart = {
  "123": [
    { productId: '1', quantity: 2 },
    { productId: '3', quantity: 1 }
  ]
};
```

Add Item to Inventory
curl -X POST http://localhost:5000/api/v1/products/addItem -H "Content-Type: application/json" -d '{
  "productId": "6",
  "name": "Product 6",
  "price": 60,
  "quantity": 150
}'


Remove Item from Inventory
curl -X DELETE http://localhost:5000/api/v1/products/removeItem -H "Content-Type: application/json" -d '{
  "productId": "1",
  "quantity": 10
}'


Add Item to Cart
curl -X POST http://localhost:5000/api/v1/cart/addToCart -H "Content-Type: application/json" -d '{
  "customerId": "123",
  "productId": "1",
  "quantity": 2
}'


Apply Discount Coupon
curl -X POST http://localhost:5000/api/v1/coupon/applyDiscount -H "Content-Type: application/json" -d '{
  "cartValue": 500,
  "discountId": "3"
}'


