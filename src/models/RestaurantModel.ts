class RestaurantModel {
  id: number;
  img: string;
  title: string;
  descrition: string;

  constructor(id: number, img: string, title: string, description: string) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.descrition = description;
  }
}

export default RestaurantModel;
