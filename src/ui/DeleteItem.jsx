import { useDispatch } from "react-redux";
import Button from "./Button";
import { removeFromCart } from "../features/cart/cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeFromCart(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
