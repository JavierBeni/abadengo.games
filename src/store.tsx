import { create } from 'zustand';


export interface CartItem {
    id: number;
    name: string;
    price: number;
  }
  
export interface StoreState {
  cart: {
    items: CartItem[];
    total: number;
  };
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  language: string;
  modifyLanguage: (lang: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: {
    items: [],
    total: 0,
  },
  language: "en",
  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.cart.items, item];
      const updatedTotal = updatedItems.reduce((sum, currentItem) => sum + currentItem.price, 0);
      return { cart: { items: updatedItems, total: updatedTotal } };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const updatedItems = state.cart.items.filter((item) => item.id !== itemId);
      const updatedTotal = updatedItems.reduce((sum, currentItem) => sum + currentItem.price, 0);
      return { cart: { items: updatedItems, total: updatedTotal } };
    }),
  clearCart: () =>
    set(() => ({
      cart: {
        items: [],
        total: 0,
      },
    })),
  modifyLanguage: (lang) =>
    set(() => ({
      language: lang,
    })),
}));
