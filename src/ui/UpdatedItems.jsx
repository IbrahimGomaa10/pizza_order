import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cart/cartSlice";

function UpdatedItems({ pizzaId, currentItemQuantity }) {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-semibold">{currentItemQuantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdatedItems;
