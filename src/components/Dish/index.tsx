import star from "../../assets/star.png";
import { Tag } from "../Tag";
import {
  Button,
  DishContainer,
  InfosContainer,
  Rating,
  TagsContainer,
  TitleRatingContainer,
} from "./styles";

type Props = {
  id: number;
  img: string;
  title: string;
  rating: string;
  description: string;
  tags: string[];
};

export const Dish = ({ id, img, title, rating, description, tags }: Props) => {
  const max_description_lines = 4;

  const style = {
    maxHeight: max_description_lines * 1.2 + "em",
    overflow: "hidden",
  };

  return (
    <DishContainer>
      <img src={img} alt={title} />
      <InfosContainer>
        <TitleRatingContainer>
          <h2>{title}</h2>
          <Rating>
            <span>{rating}</span>
            <img src={star} alt="Estrela" />
          </Rating>
        </TitleRatingContainer>
        <p style={style}>{description}</p>

        <Button>
          <a href={`/restaurant/${id}`}>Saiba mais</a>
        </Button>

        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </InfosContainer>
    </DishContainer>
  );
};
