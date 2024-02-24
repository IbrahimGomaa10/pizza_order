import { useSelector } from "react-redux";
import DeleteItem from "../../ui/DeleteItem";
import UpdatedItems from "../../ui/UpdatedItems";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentItemQuantityInCart = useSelector(
    getCurrentItemQuantity(pizzaId)
  );

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdatedItems
          pizzaId={pizzaId}
          currentItemQuantity={currentItemQuantityInCart}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
