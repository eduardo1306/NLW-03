import Image from '@modules/orphanages/infra/typeorm/entities/Image';
import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import CreateOrphanagesService from './CreateOrphanagesService';
import ListOrphanagesService from './ListOrphanagesService';

let image: Image;
let fakeOrphanagesRepository: FakeOrphanagesRepository;
let createOrphanages: CreateOrphanagesService;
let listOrphanages: ListOrphanagesService;

describe('ListOrphanagesService', () => {
  beforeEach(() => {
    image = new Image();
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    createOrphanages = new CreateOrphanagesService(fakeOrphanagesRepository);
    listOrphanages = new ListOrphanagesService(fakeOrphanagesRepository);
  });
  it('should be able to list all those orphanages', async () => {
    const orphanageOne = await createOrphanages.execute({
      about: 'about test...',
      images: [image],
      instructions: 'instructions test...',
      latitude: -20.3079517,
      longitude: -40.2978201,
      name: 'Jhon Doe Orphanage',
      open_on_weekends: true,
      opening_hours: '24 hours',
    });

    const orphanageTwo = await createOrphanages.execute({
      about: 'about test...',
      images: [image],
      instructions: 'instructions test...',
      latitude: -20.3079517,
      longitude: -40.2978201,
      name: 'Jhon Doe Orphanage',
      open_on_weekends: true,
      opening_hours: '24 hours',
    });

    const orphanageThree = await createOrphanages.execute({
      about: 'about test...',
      images: [image],
      instructions: 'instructions test...',
      latitude: -20.3079517,
      longitude: -40.2978201,
      name: 'Jhon Doe Orphanage',
      open_on_weekends: true,
      opening_hours: '24 hours',
    });

    const orphanages = await listOrphanages.execute();

    expect(orphanages).toEqual(
      expect.arrayContaining([orphanageOne, orphanageTwo, orphanageThree]),
    );
  });
});
