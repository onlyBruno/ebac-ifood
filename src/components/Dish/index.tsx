import { useState } from "react";

import { Button } from "../Button";
import { Modal } from "../Modal";

import { getDescription } from "../../utils";

import * as S from "./styles";

type Props = {
  item: IDish;
};

export const Dish = ({ item }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [details, setDetails] = useState<IDish | undefined>(undefined);

  const OpenModal = (dish: IDish) => {
    setDetails(dish);
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
    setDetails(undefined);
  };

  return (
    <S.Container>
      <S.Image src={item.foto} alt={item.nome} />
      <S.Title>{item.nome}</S.Title>
      <S.Description>{getDescription(item.descricao, 160)}</S.Description>
      <Button onClick={() => OpenModal(item)}>Adicionar ao carrinho</Button>
      {isVisible && (
        <Modal
          isVisible={isVisible}
          handleModal={closeModal}
          details={details}
        />
      )}
    </S.Container>
  );
};
