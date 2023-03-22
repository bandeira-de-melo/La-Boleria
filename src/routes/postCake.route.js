import { Router } from 'express';
import validateCakeData from '../middlewares/validateCakeData.js';

const postCakeRouter = Router();

postCakeRouter.post('/cakes', validateCakeData);

export default postCakeRouter;