import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import getOrdersByClientIdRouter from './routes/getOdersByClientId.router.js';
import getOrdersRouter from './routes/getOrders.route.js';
import getOrdersByIdRouter from './routes/getOrdersById.route.js';
import postCakeRouter from './routes/postCake.route.js';
import postClientsRouter from './routes/postClients.route.js';
import postOrderRouter from './routes/postOrder.route.js';
dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());

app.use([
    getOrdersByClientIdRouter, 
    getOrdersRouter, 
    getOrdersByIdRouter,
    postCakeRouter,
    postClientsRouter,
    postOrderRouter
]);

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server running')
});

