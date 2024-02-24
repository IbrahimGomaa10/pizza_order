import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="p-4">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
