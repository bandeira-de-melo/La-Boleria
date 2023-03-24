import { Router } from 'express';
import { postOrderController } from '../controllers/postOrderController.js';
import validateOrder from '../middlewares/validateOrder.js';

const postOrderRouter = Router();

postOrderRouter.post('/order', validateOrder, postOrderController);

export default postOrderRouter;