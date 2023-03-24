import { Router } from 'express';
import { postCakeController } from '../controllers/postCakeController.js';
import validateCakeData from '../middlewares/validateCakeData.js';

const postCakeRouter = Router();

postCakeRouter.post('/cakes', validateCakeData, postCakeController);

export default postCakeRouter;