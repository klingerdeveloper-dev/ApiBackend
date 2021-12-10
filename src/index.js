const express = require('express');
const server = express();
server.use(express.json());

const ClientRoutes = require('./routes/ClientRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const CategoryRoutes = require('./routes/CategoryRoutes');
const ManufacturerRoutes = require('./routes/ManufacturerRoutes');
const PurchaseRoutes = require('./routes/PurchaseRoutes');
const PurchaseProductRoutes = require('./routes/PurchaseProductRoutes');
const MaisVendidosRoutes = require('./routes/MaisVendidosRoutes');

/* 
 Rotas 
*/

/* Clientes */
server.use('/client', ClientRoutes);
/* Categorias */
server.use('/category', CategoryRoutes);
/* Fabricante */
server.use('/manufacturer', ManufacturerRoutes);
/* Produtos */
server.use('/product', ProductRoutes);
server.use('/maisVendidos', MaisVendidosRoutes);
/* Pedidos - Produtos */
server.use('/purchase', PurchaseRoutes);
server.use('/purchaseProduct', PurchaseProductRoutes);


server.listen(3000, () => {
    console.log('Klinger Developer - API ONLINE');
})
