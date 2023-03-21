import { Router } from 'express';

const getOrdersByIdRouter = Router();

getOrdersByIdRouter.get('/orders/:id')

export default getOrdersByIdRouter;