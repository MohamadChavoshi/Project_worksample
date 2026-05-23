import { CartButton } from '../ui/CartButton'

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <CartButton 
        CartLength={cart.length} 
        cartItems={cart}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default Cart;
