import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/multer';
import OrphanagesController from '../controllers/OrphanagesController';

const upload = multer(uploadConfig);
const orphanagesRouter = Router();
const orphanagesController = new OrphanagesController();

orphanagesRouter.post(
  '/',
  upload.array('images'),
  celebrate(
    {
      [Segments.BODY]: {
        name: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        about: Joi.string().required().max(300),
        instructions: Joi.string().required(),
        opening_hours: Joi.string().required(),
        open_on_weekends: Joi.boolean().required(),
        images: Joi.array().items(
          Joi.object({
            path: Joi.string().required(),
          }),
        ),
      },
    },
    {
      abortEarly: false,
    },
  ),
  orphanagesController.create,
);
orphanagesRouter.get('/:id', orphanagesController.show);
orphanagesRouter.get('/', orphanagesController.index);

export default orphanagesRouter;
