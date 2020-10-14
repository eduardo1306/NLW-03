import { getRepository, Repository } from 'typeorm';

import ICreateOrphanagesDTO from '@modules/orphanages/dtos/ICreateOrphanagesDTO';
import IOrphanagesRepository from '@modules/orphanages/repositories/IOrphanagesRepository';
import Orphanages from '../entities/Orphanages';

export default class OrphanagesRepository implements IOrphanagesRepository {
  private ormRepository: Repository<Orphanages>;

  constructor() {
    this.ormRepository = getRepository(Orphanages);
  }

  public async findOrphanages(): Promise<Orphanages[]> {
    const orphanages = await this.ormRepository.find({
      relations: ['images'],
    });

    return orphanages;
  }

  public async create(orphanage: ICreateOrphanagesDTO): Promise<Orphanages> {
    const newOrphanage = await this.ormRepository.create(orphanage);

    this.ormRepository.save(newOrphanage);

    return newOrphanage;
  }

  public async findById(id: number): Promise<Orphanages> {
    const orphanage = await this.ormRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    if (!orphanage) {
      throw new Error('Esse orfanato não existe!');
    }

    return orphanage;
  }
}
