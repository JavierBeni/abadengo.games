import { create } from 'zustand';
import { persist } from "zustand/middleware";

const DEFAULT_EUR_RATE = 4.3;
let eurRateRequest: Promise<void> | null = null;

interface NbpRateResponse {
  rates?: Array<{ mid?: number }>;
}

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
  eurRate: number;
  fetchEurRate: () => Promise<void>;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: {
        items: [],
        total: 0,
      },
      language: "en",
      eurRate: DEFAULT_EUR_RATE,
      fetchEurRate: () => {
        if (!eurRateRequest) {
          eurRateRequest = (async () => {
            try {
              const response = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json');
              if (!response.ok) throw new Error(`Exchange rate request failed: ${response.status}`);

              const data: NbpRateResponse = await response.json();
              const rate = data.rates?.[0]?.mid;
              if (typeof rate !== 'number' || !Number.isFinite(rate) || rate <= 0) {
                throw new Error('Invalid EUR exchange rate response');
              }

              set({ eurRate: rate });
            } catch {
              set({ eurRate: DEFAULT_EUR_RATE });
            }
          })();
        }

        return eurRateRequest;
      },
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
      modifyLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "store-storage", // Nombre en localStorage
      partialize: (state) => ({ cart: state.cart, language: state.language }),
    }
  )
);
