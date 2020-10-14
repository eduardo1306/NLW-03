import Image from '@modules/orphanages/infra/typeorm/entities/Image';
import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import CreateOrphanagesService from './CreateOrphanagesService';
import ShowOrphanageService from './ShowOrphanageService';

let image: Image;
let fakeOrphanagesRepository: FakeOrphanagesRepository;
let createOrphanages: CreateOrphanagesService;
let showOrphanage: ShowOrphanageService;

describe('ListOrphanagesService', () => {
  beforeEach(() => {
    image = new Image();
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    createOrphanages = new CreateOrphanagesService(fakeOrphanagesRepository);
    showOrphanage = new ShowOrphanageService(fakeOrphanagesRepository);
  });
  it('should be able to show a specific orphanage', async () => {
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

    const findedOrphanage = await showOrphanage.execute(orphanage.id);

    expect(findedOrphanage.name).toBe('Jhon Doe Orphanage');
    expect(findedOrphanage.about).toBe('about test...');
  });
});
