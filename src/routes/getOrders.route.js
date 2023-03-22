import { Router } from 'express';

const getOrdersRouter = Router();

getOrdersRouter.get('/orders');

export default getOrdersRouter;