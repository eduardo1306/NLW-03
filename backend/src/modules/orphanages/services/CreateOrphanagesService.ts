import { inject, injectable } from 'tsyringe';
import ICreateOrphanagesDTO from '../dtos/ICreateOrphanagesDTO';
import Orphanages from '../infra/typeorm/entities/Orphanages';
import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

@injectable()
export default class CreateOrphanageService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  public async execute(orphanage: ICreateOrphanagesDTO): Promise<Orphanages> {
    const newOrphanage = await this.orphanagesRepository.create(orphanage);

    return newOrphanage;
  }
}
