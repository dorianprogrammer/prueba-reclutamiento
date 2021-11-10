const express = require('express');
const app = express();
app.use(express.json());

const { getListOfProducts, createNewProduct, updateProduct, deleteProduct } = require('./handlers/product');
const { createOrder, getListOfOrders, updateOrderStatus } = require('./handlers/order');

// Product
app.get('/service/products/getProducts', getListOfProducts);
app.put('/service/products/createProduct', createNewProduct);
app.post('/service/products/updateProduct', updateProduct);
app.delete('/service/products/deleteProduct', deleteProduct);

// Order
app.put('/service/orders/createOrder', createOrder);
app.get('/service/orders/getOrders', getListOfOrders);
app.post('/service/orders/updateOrder', updateOrderStatus);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));