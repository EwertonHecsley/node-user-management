import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './router/user/router';

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

export default app;

