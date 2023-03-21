import { Router } from 'express';

const postOrderRouter = Router();

postOrderRouter.post('/order');

export default postOrderRouter;