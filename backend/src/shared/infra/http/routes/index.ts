import { Router } from 'express';

import orphanagesRoutes from '@modules/orphanages/infra/http/routes/orphanages.routes';

const routes = Router();

routes.use('/orphanages', orphanagesRoutes);

export default routes;
