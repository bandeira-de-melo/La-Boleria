import { Router } from 'express';

const getOrdersByClientIdRouter = Router();

getOrdersByClientIdRouter.get('/clients/:id/orders')

export default getOrdersByClientIdRouter;