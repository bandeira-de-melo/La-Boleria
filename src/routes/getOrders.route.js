import { Router } from 'express';
import { getOrdersController } from '../controllers/getOrdersControler.js';

const getOrdersRouter = Router();

getOrdersRouter.get('/orders', getOrdersController);

export default getOrdersRouter;