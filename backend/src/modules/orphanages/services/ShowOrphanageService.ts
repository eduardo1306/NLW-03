import { inject, injectable } from 'tsyringe';
import Orphanages from '../infra/typeorm/entities/Orphanages';
import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

@injectable()
export default class ListOrphanagesService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  public async execute(id: number): Promise<Orphanages> {
    const orphanage = await this.orphanagesRepository.findById(id);

    return orphanage;
  }
}
