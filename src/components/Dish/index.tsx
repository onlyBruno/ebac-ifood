import star from "../../assets/star.png";
import { IDish } from "../../interfaces/dishes";
import { Tag } from "../Tag";
import * as S from "./styles";

export const Dish = ({ id, img, title, rating, description, tags }: IDish) => {
  const max_description_lines = 4;

  const style = {
    maxHeight: max_description_lines * 1.2 + "em",
    overflow: "hidden",
  };

  return (
    <S.Container>
      <img src={img} alt={title} />
      <S.InfosContainer>
        <S.TitleRatingContainer>
          <h2>{title}</h2>
          <S.Rating>
            <span>{rating}</span>
            <img src={star} alt="Estrela" />
          </S.Rating>
        </S.TitleRatingContainer>
        <p style={style}>{description}</p>

        <S.Button>
          <a href={`/restaurant/${id}`}>Saiba mais</a>
        </S.Button>

        <S.TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.TagsContainer>
      </S.InfosContainer>
    </S.Container>
  );
};
