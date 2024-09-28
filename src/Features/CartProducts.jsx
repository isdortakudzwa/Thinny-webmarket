import { useContext } from "react";
import { CartContext } from "./ContextProvider";
import products from "../components/Database/Database";

function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    dispatch({ type: "Increase", id });
  };

  const Decrease = (id) => {
    dispatch({ type: "Decrease", id });
  };

  const removeProduct = (id) => {
    dispatch({ type: "Remove", id });
  };

  return (
    <><div className="sim">
      <div className="services--products1">
        <img src={product.img} alt="" className="services-img1" />
        <p className="product-name1">{product.name}</p>
        <p className="serve-text1">{product.text}</p>

        <div className="services-text-add1">

          <div className="services-stars">
            <img src={product.rate} alt="" className="serve-stars1" />
            <img src={product.rate} alt="" className="serve-stars1" />
            <img src={product.rate} alt="" className="serve-stars1" />
          </div>

          <p className="price">${product.price}</p>
        </div>

        <div className="services-btns">
          <button className="cart-adds" onClick={() => Decrease(product.id)}>
            <b>-</b>
          </button>
          <button className="cart-adds1">{product.quantity}</button>
          <button className="cart-adds" onClick={() => Increase(product.id)}>
            <b>+</b>
          </button>
        </div>

        <button className="super-btn" onClick={() => removeProduct(product.id)}>
          Remove
        </button>
      </div>
    </div>
    
    
    </>

    
  );
}

export default CartProduct;
