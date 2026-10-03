import { Router } from 'express';
import { authRouter } from './auth.routes.js';

export const apiV1Router = Router();

apiV1Router.use('/auth', authRouter);
