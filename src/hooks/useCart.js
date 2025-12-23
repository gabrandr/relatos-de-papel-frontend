import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      discount: 0, // Porcentaje de descuento (0-100)

      addToCart: (book) => {
        const { cart } = get();
        const bookInCart = cart.findIndex((item) => item.id === book.id);

        if (bookInCart >= 0) {
          const newCart = structuredClone(cart);
          newCart[bookInCart].quantity += 1;
          set({ cart: newCart });
        } else {
          set({
            cart: [...cart, { ...book, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },

      decreaseQuantity: (id) => {
        const { cart } = get();
        const bookInCart = cart.findIndex((item) => item.id === id);

        if (bookInCart >= 0) {
          const newCart = structuredClone(cart);
          // Solo disminuir si es mayor a 1
          if (newCart[bookInCart].quantity > 1) {
            newCart[bookInCart].quantity -= 1;
            set({ cart: newCart });
          }
        }
      },

      applyCoupon: (code) => {
        // Lógica Mock de cupones
        if (code && code.toUpperCase() === "DESC10") {
          set({ discount: 10 }); // 10%
          return true;
        }
        if (code && code.toUpperCase() === "RELATOS20") {
          set({ discount: 20 }); // 20%
          return true;
        }
        set({ discount: 0 });
        return false;
      },

      clearCart: () => {
        set({ cart: [], discount: 0 });
      },

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      getCartTotal: () => {
        const { cart, discount } = get();
        const subtotal = cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        const discountAmount = (subtotal * discount) / 100;
        const total = subtotal - discountAmount;

        return {
          subtotal,
          discountAmount,
          total,
        };
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
