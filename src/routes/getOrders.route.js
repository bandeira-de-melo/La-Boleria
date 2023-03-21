import { Route } from 'express';

const getOrdersRouter = Route();

getOrdersRouter.get('/orders');

export default getOrdersRouter;