class DishModel {
  id: number;
  img: string;
  title: string;
  rating: string;
  descrition: string;
  tags: string[];

  constructor(
    id: number,
    img: string,
    title: string,
    rating: string,
    description: string,
    tags: string[]
  ) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.rating = rating;
    this.descrition = description;
    this.tags = tags;
  }
}

export default DishModel;
