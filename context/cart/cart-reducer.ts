import { CartState, CartAction } from "./types";

const calculateTotals = (items: any[]) => {
  const totalQuantity = items.length;
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { totalQuantity, totalAmount };
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.slug === product.slug
      );

      let newItems;
      if (existingItemIndex >= 0) {
        // Actualizar cantidad del item existente
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Agregar nuevo item
        const newItem = {
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
          image: product.images.mobile,
        };
        newItems = [...state.items, newItem];
      }

      const { totalQuantity, totalAmount } = calculateTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "REMOVE_FROM_CART": {
      const newItems = state.items.filter(
        (item) => item.slug !== action.payload
      );
      const { totalQuantity, totalAmount } = calculateTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "UPDATE_QUANTITY": {
      const { slug, quantity } = action.payload;

      let newItems;
      if (quantity <= 0) {
        newItems = state.items.filter((item) => item.slug !== slug);
      } else {
        newItems = state.items.map((item) =>
          item.slug === slug ? { ...item, quantity } : item
        );
      }

      const { totalQuantity, totalAmount } = calculateTotals(newItems);

      return {
        ...state,
        items: newItems,
        totalQuantity,
        totalAmount,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      };

    default:
      return state;
  }
};
