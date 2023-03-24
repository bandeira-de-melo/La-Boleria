import { Router } from 'express';
import { getOrderByClientIdController } from '../controllers/getOrderByClientIdController.js';

const getOrdersByClientIdRouter = Router();

getOrdersByClientIdRouter.get('/clients/:id/orders', getOrderByClientIdController)

export default getOrdersByClientIdRouter;