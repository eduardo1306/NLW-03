import Image from '@modules/orphanages/infra/typeorm/entities/Image';
import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import CreateOrphanagesService from './CreateOrphanagesService';

let image: Image;
let fakeOrphanagesRepository: FakeOrphanagesRepository;
let createOrphanages: CreateOrphanagesService;

describe('CreateOrphanagesService', () => {
  beforeEach(() => {
    image = new Image();
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    createOrphanages = new CreateOrphanagesService(fakeOrphanagesRepository);
  });
  it('should be able to create an orphanage', async () => {
    const orphanage = await createOrphanages.execute({
      about: 'about test...',
      images: [image],
      instructions: 'instructions test...',
      latitude: -20.3079517,
      longitude: -40.2978201,
      name: 'Jhon Doe Orphanage',
      open_on_weekends: true,
      opening_hours: '24 hours',
    });

    expect(orphanage).toHaveProperty('id');
  });
});
