import ICreateOrphanagesDTO from '../dtos/ICreateOrphanagesDTO';
import Orphanages from '../infra/typeorm/entities/Orphanages';

export default interface IOrphanagesRepository {
  findOrphanages(): Promise<Orphanages[]>;
  create(orphanage: ICreateOrphanagesDTO): Promise<Orphanages>;
  findById(id: number): Promise<Orphanages>;
}
