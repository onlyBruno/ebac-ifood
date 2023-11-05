export const getDescription = (
  description: string | undefined,
  caracteres: number
) => {
  if (description && description.length > caracteres) {
    return description.slice(0, caracteres) + "...";
  }
  return description;
};
