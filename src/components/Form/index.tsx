import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import * as Yup from "yup";

import { Button } from "../Button";

import { usePurchaseMutation } from "../../services/api";

import { RootReducer } from "../../store";
import { clear, close } from "../../store/reducers/cart";

import { formatPrice, getTotalPrice } from "../../utils";

import * as S from "./styles";

type Props = {
  handleDelivery: () => void;
};

export const Form = ({ handleDelivery }: Props) => {
  const [isPayment, setIsPayment] = useState(false);
  const [purchase, { isSuccess, data }] = usePurchaseMutation();

  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const form = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "O nome precisa ter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      address: Yup.string()
        .min(5, "O endereço precisa ter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      city: Yup.string()
        .min(5, "A cidade precisa ter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      zipCode: Yup.string()
        .min(9, "CEP inválido")
        .max(9, "CEP inválido")
        .required("O campo é obrigatório"),
      number: Yup.string()
        .min(1, "O número da residência precisa ter no 1 caractere")
        .required("O campo é obrigatório"),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, "O nome no cartão precisa ter no mínimo 5 caracteres")
        .required("O campo é obrigatório"),
      cardNumber: Yup.string().required("O campo é obrigatório"),
      expiresMonth: Yup.string().required("O campo é obrigatório"),
      expiresYear: Yup.string().required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      if (form.isValid) {
        purchase({
          delivery: {
            receiver: values.name,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement,
            },
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
          products: items.map((item) => ({
            id: item.id as number,
            price: item.preco as number,
          })),
        });
      }
    },
  });

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;
    return hasError;
  };

  const completeOrder = () => {
    dispatch(clear());
    dispatch(close());
    handleDelivery();
    form.resetForm();
  };

  return (
    <>
      {isSuccess ? (
        <>
          <S.ConfirmPayment>
            <S.Title>Pedido realizado - {data?.orderId}</S.Title>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{" "}
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={completeOrder}>Concluir</Button>
          </S.ConfirmPayment>
        </>
      ) : (
        <>
          {isPayment ? (
            <form onSubmit={form.handleSubmit}>
              <S.Title>
                Pagamento - valor a pagar {formatPrice(getTotalPrice())}
              </S.Title>
              <S.InputGroup>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError("cardName") ? "error" : ""}
                />
                <S.SmallErrors>
                  <small>{form.errors.cardName}</small>
                </S.SmallErrors>
              </S.InputGroup>
              <S.Row>
                <S.InputGroup width="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError("cardNumber") ? "error" : ""}
                    mask="9999 9999 9999 9999"
                  />
                  <S.SmallErrors>
                    <small>{form.errors.cardNumber}</small>
                  </S.SmallErrors>
                </S.InputGroup>
                <S.InputGroup width="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError("cardCode") ? "error" : ""}
                    mask="999"
                  />
                  <S.SmallErrors>
                    <small>{form.errors.cardCode}</small>
                  </S.SmallErrors>
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup width="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError("expiresMonth") ? "error" : ""}
                    mask="99"
                  />
                  <S.SmallErrors>
                    <small>{form.errors.expiresMonth}</small>
                  </S.SmallErrors>
                </S.InputGroup>
                <S.InputGroup width="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError("expiresYear") ? "error" : ""}
                    mask="99"
                  />
                  <S.SmallErrors>
                    <small>{form.errors.expiresYear}</small>
                  </S.SmallErrors>
                </S.InputGroup>
              </S.Row>
              <S.FormBtn>
                <Button type="submit">Finalizar pagamento</Button>
                <Button type="button" onClick={() => setIsPayment(false)}>
                  Voltar para a edição de endereço
                </Button>
              </S.FormBtn>
            </form>
          ) : (
            <>
              {
                <form onSubmit={form.handleSubmit}>
                  <S.Title>Entrega</S.Title>
                  <S.InputGroup>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError("name") ? "error" : ""}
                    />
                    <S.SmallErrors>
                      <small>{form.errors.name}</small>
                    </S.SmallErrors>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError("address") ? "error" : ""}
                    />
                    <S.SmallErrors>
                      <small>{form.errors.address}</small>
                    </S.SmallErrors>
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError("city") ? "error" : ""}
                    />
                    <S.SmallErrors>
                      <small>{form.errors.city}</small>
                    </S.SmallErrors>
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup width="155px">
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError("zipCode") ? "error" : ""}
                        mask="99999-999"
                      />
                      <S.SmallErrors>
                        <small>{form.errors.zipCode}</small>
                      </S.SmallErrors>
                    </S.InputGroup>
                    <S.InputGroup width="155px">
                      <label htmlFor="number">Número</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputError("number") ? "error" : ""}
                      />
                      <S.SmallErrors>
                        <small>{form.errors.number}</small>
                      </S.SmallErrors>
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputError("complement") ? "error" : ""}
                    />
                  </S.InputGroup>
                  <S.FormBtn>
                    <Button type="submit" onClick={() => setIsPayment(true)}>
                      Continuar com o pagamento
                    </Button>
                    <Button type="button" onClick={handleDelivery}>
                      Voltar para o carrinho
                    </Button>
                  </S.FormBtn>
                </form>
              }
            </>
          )}
        </>
      )}
    </>
  );
};
