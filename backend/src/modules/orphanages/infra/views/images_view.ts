import Image from '../typeorm/entities/Image';

export default {
  render({ path, id }: Image) {
    return {
      id,
      path: `http://localhost:3333/uploads/${path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
