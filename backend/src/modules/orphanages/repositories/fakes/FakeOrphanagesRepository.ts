import Orphanages from '@modules/orphanages/infra/typeorm/entities/Orphanages';
import IOrphanagesRepository from '../IOrphanagesRepository';

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    id: number;
    path: string;
    orphanage: Orphanages;
  }[];
}

export default class FakeOrphanagesRepository implements IOrphanagesRepository {
  private orphanages: Orphanages[] = [];

  public async findOrphanages(): Promise<Orphanages[]> {
    return this.orphanages;
  }

  public async create({
    id,
    about,
    images,
    instructions,
    latitude,
    longitude,
    name,
    open_on_weekends,
    opening_hours,
  }: IOrphanage): Promise<Orphanages> {
    const orphanage = {
      id,
      about,
      images,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
    };

    this.orphanages.push(orphanage);

    return orphanage;
  }

  public async findById(id: number): Promise<Orphanages> {
    const orphanage = this.orphanages.find(
      findOrphanage => findOrphanage.id === id,
    );

    if (!orphanage) {
      throw new Error('Esse orfanato não existe!');
    }

    return orphanage;
  }
}
