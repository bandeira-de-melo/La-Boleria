import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import cakesRouter from './routes/cakes.routes.js';
import ordersRouter from './routes/orders.routes.js';
import clientsRouter from './routes/clients.routes.js';
dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());

app.use([cakesRouter, ordersRouter, clientsRouter])

app.listen(process.env.DATABASE_URL || 5000, ()=>{
    console.log('Server running')
})

