import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "./CartProducts";
import { totalItem, totalPrice } from "./CartReducer";
import { Link } from "react-router-dom";

function Cart() {
  const {cart} = useContext(CartContext)
  return (
    <>
    <div className="same-div">
  <Link to='/Services' className="back1">Back</Link>
  <div className="cart-items">
       <h5>Total items: {totalItem(cart)}</h5>
       <h5>Total Payment: ${totalPrice(cart)}</h5>
       <button className="super-btn">Checkout</button>
       <h5></h5>
    </div>
    </div>
    
    <div className="jesu">
      {cart.map(p => (
        <div className="many" key={p.id}>
          <CartProduct product={p}></CartProduct>
        </div>
      ))}
    </div>
    
    
      </>

  )
}

export default Cart;