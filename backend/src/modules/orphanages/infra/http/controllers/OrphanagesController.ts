import { container } from 'tsyringe';
import { Request, Response, Express } from 'express';

import CreateOrphanagesService from '@modules/orphanages/services/CreateOrphanagesService';
import ListOrphanagesService from '@modules/orphanages/services/ListOrphanagesService';
import ShowOrphanageService from '@modules/orphanages/services/ShowOrphanageService';
import orphanagesView from '@modules/orphanages/infra/views/orphanages_view';

export default class OrphanagesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrphanage = container.resolve(ShowOrphanageService);

    const orphanage = await showOrphanage.execute(Number(id));

    return response.status(201).json(orphanagesView.render(orphanage));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listOrphanages = container.resolve(ListOrphanagesService);

    const orphanages = await listOrphanages.execute();

    return response.status(201).json(orphanagesView.renderMany(orphanages));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createOrphanages = container.resolve(CreateOrphanagesService);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;
    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const orphanage = await createOrphanages.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    return response.status(201).json(orphanagesView.render(orphanage));
  }
}
