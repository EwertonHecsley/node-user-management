import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './router/user/router';
import { HttpErrorMiddleware } from './middleware/http.error.middleware';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.use(HttpErrorMiddleware)

export default app;

