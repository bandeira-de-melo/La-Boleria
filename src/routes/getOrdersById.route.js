import { Router } from 'express';
import { getOrderByIdController } from '../controllers/getOrderByIdController.js';

const getOrdersByIdRouter = Router();

getOrdersByIdRouter.get('/orders/:id', getOrderByIdController)

export default getOrdersByIdRouter;