import React from "react";
import { useAppState } from "store/index";
import { getSelectedItems, getTotalPrice } from "store/selectors/cart";

export function Description() {
  const { cart } = useAppState("order", "cart");
  const selectedItems = getSelectedItems(cart);
  const totalPrice = getTotalPrice(cart);

  if (selectedItems.length === 0) {
    return <>Ваша корзина пуста</>;
  }

  return (
    <>
      {selectedItems.map(({ id, title }) => (
        <div key={id}>
          {cart.countById[id]} x {title}
        </div>
      ))}
      <br />
      <div>Итого: {totalPrice}&nbsp;₽</div>
    </>
  );
}
