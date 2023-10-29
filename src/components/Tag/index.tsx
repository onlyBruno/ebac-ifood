import { TagContainer } from "./styles";

type Props = {
  children: string;
};

export const Tag = ({ children }: Props) => {
  return <TagContainer>{children}</TagContainer>;
};
