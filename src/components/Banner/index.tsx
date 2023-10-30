import { IDish } from "../../interfaces/dishes";
import { Container } from "../../styles";
import * as S from "./styles";

type Props = {
  infos: IDish;
};

export const Banner = ({ infos }: Props) => {
  return (
    <Container>
      <S.Container style={{ backgroundImage: `url(${infos.img})` }}>
        <S.Background />
        <S.Content>
          <S.Cooking>{infos.tags[0]}</S.Cooking>
          <S.Title>{infos.title}</S.Title>
        </S.Content>
      </S.Container>
    </Container>
  );
};
