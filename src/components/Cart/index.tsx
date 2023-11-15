import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button";

import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

import { formatPrice } from "../../utils";

import trash from "../../assets/trash.png";

import * as S from "./styles";
import { Sidebar } from "../Sidebar";

export const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());

  const removeDish = (id: number) => dispatch(remove(id));

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco!);
    }, 0);
  };

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.Items key={item.id}>
                  <S.Image src={item.foto} alt={item.nome} />
                  <S.Infos>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                    <button onClick={() => removeDish(item.id!)}>
                      <img
                        src={trash}
                        alt="Clique para excluir item do carrinho"
                      />
                    </button>
                  </S.Infos>
                </S.Items>
              ))}
            </ul>
            <S.TotalPrice>
              <span>Valor total</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </S.TotalPrice>
            <Button>Continuar com a entrega</Button>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </S.CartContainer>
  );
};
