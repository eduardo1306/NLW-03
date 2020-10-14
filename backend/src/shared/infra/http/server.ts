import '../typeorm/connection';
import '@shared/container';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(
  '/uploads',
  express.static(path.join(__dirname, '..', '..', '..', '..', 'uploads')),
);

app.listen(3333, () => {
  console.log('\x1b[40m\x1b[32m NLW#03 - Backend has been started 👽');
});
