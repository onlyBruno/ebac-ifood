export const formatPrice = (price: number | undefined) => {
  if (price !== undefined) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return price;
};
