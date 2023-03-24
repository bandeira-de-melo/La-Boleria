import { Router } from 'express';
import { postClientController } from '../controllers/postClientController.js';
import validateClient from '../middlewares/validateClient.js';

const postClientsRouter = Router();

postClientsRouter.post('/clients', validateClient, postClientController);

export default postClientsRouter;