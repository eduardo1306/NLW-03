import Orphanages from '../typeorm/entities/Orphanages';
import imagesView from './images_view';

export default {
  render({
    about,
    id,
    instructions,
    images,
    latitude,
    longitude,
    name,
    open_on_weekends,
    opening_hours,
  }: Orphanages) {
    return {
      id,
      about,
      instructions,
      latitude,
      longitude,
      name,
      open_on_weekends,
      opening_hours,
      images: imagesView.renderMany(images),
    };
  },

  renderMany(orphanages: Orphanages[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  },
};
