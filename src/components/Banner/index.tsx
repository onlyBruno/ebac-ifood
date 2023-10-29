import DishModel from "../../models/DishModel";
import { Container } from "../../styles";
import { Background, BannerContainer, Cooking, Img, Title } from "./styles";

type Props = {
  infos: DishModel;
};

export const Banner = ({ infos }: Props) => {
  return (
    <Container>
      <BannerContainer>
        <Background />
        <Img src={infos.img} alt={infos.title} />
        <Cooking>{infos.tags[0]}</Cooking>
        <Title>{infos.title}</Title>
      </BannerContainer>
    </Container>
  );
};
