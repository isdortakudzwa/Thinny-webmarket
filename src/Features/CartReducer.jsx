const initialState = [];

export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0)
}

export const totalPrice   = (cart) => {
    return cart.reduce((total, product) => total + product.price, 0)
}
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add":
      const existingProduct = state.find(p => p.id === action.product.id);
      if (existingProduct) {
        // Use map to imm utably update the state for the existing product
        return state.map(product =>
          product.id === action.product.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // Add the product with an initial quantity of 1
        return [...state, { ...action.product, quantity: 1 }];
      }

    case "Remove":
      return state.filter(p => p.id !== action.id);

    case "Increase":
      return state.map(product =>
        product.id === action.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "Decrease":
      return state.map(product =>
        product.id === action.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    default:
      return state;
  }
};

export default CartReducer;
