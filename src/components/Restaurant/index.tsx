import { Button, Description, RestaurantContainer, Title } from "./styles";

type Props = {
  img: string;
  title: string;
  description: string;
};

export const Restaurant = ({ img, title, description }: Props) => {
  return (
    <RestaurantContainer>
      <img src={img} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </RestaurantContainer>
  );
};
