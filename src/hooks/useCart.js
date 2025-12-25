import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      discount: 0, // Porcentaje de descuento (0-100)

      addToCart: (book, format = "Físico") => {
        const { cart } = get();
        // Generar un ID único para el item en el carrito basado en el libro y el formato
        const cartId = `${book.id}-${format}`;
        const itemInCartIndex = cart.findIndex(
          (item) => item.cartId === cartId
        );

        if (itemInCartIndex >= 0) {
          const newCart = structuredClone(cart);
          newCart[itemInCartIndex].quantity += 1;
          set({ cart: newCart });
        } else {
          set({
            cart: [
              ...cart,
              {
                ...book,
                cartId, // ID único para gestión interna del carrito
                format, // Guardamos el formato seleccionado
                quantity: 1,
              },
            ],
          });
        }
      },

      removeFromCart: (cartId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.cartId !== cartId),
        }));
      },

      decreaseQuantity: (cartId) => {
        const { cart } = get();
        const itemIndex = cart.findIndex((item) => item.cartId === cartId);

        if (itemIndex >= 0) {
          const newCart = structuredClone(cart);
          // Solo disminuir si es mayor a 1
          if (newCart[itemIndex].quantity > 1) {
            newCart[itemIndex].quantity -= 1;
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
