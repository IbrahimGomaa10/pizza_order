import { formatCurrency } from "../../utils/helpers";

// eslint-disable-next-line no-unused-vars
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-3 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize text-stone-500 italic">
        {isLoadingIngredients ? "Loading ..." : ingredients}
      </p>
    </li>
  );
}

export default OrderItem;
