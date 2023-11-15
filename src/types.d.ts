declare interface IRestaurants {
  id?: number;
  titulo: string;
  destacado?: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio?: IDish[];
}

declare interface IDish {
  foto?: string;
  preco?: number;
  id?: number;
  nome?: string;
  descricao?: string;
  porcao?: string;
}
