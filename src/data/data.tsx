import jt_etb from '../assets/pokemon-tcg/jt/elite-trainer-box.webp';
import jt_b3b from '../assets/pokemon-tcg/jt/3-pack-blister-box.webp';
// import jt_boo from '../assets/pokemon-tcg/jt/booster.webp';
import jt_b1c from '../assets/pokemon-tcg/jt/checklane-blister-box.webp';
import jt_mpb from '../assets/pokemon-tcg/jt/mini-portfolio-pus-booster.webp';
import jt_b3c from '../assets/pokemon-tcg/jt/premium-checklane-blister-klinklang.webp';
import jt_sbo from '../assets/pokemon-tcg/jt/sleeved-booster.webp';

export interface item {
  id: string,
  name: string,
  image: string,
  price: number,
  description: string,
}

export const mockProducts = [
  {
    id: 1,
    name: 'Elite Trainer Box',
    image: jt_etb,
    price: 299,
    description: "• 9 Pokémon TCG: Scarlet & Violet—Journey Together booster packs" +
      "\n• Each booster pack contains 10 cards and 1 Basic Energy. Cards vary by pack." +
      "\n• 1 full-art foil promo card featuring N's Zorua" +
      "\n• 65 card sleeves" +
      "\n• 45 Pokémon TCG Energy cards" +
      "\n• A player's guide to the Scarlet & Violet—Journey Together expansion" +
      "\n• 6 damage-counter dice" +
      "\n• 1 competition-legal coin-flip die" +
      "\n• 2 plastic condition markers" +
      "\n• A box to hold everything, with 4 dividers to keep it organized" +
      "\n• A code card for Pokémon Trading Card Game Live",
    collection: 'Journey Together'
  },
  {
    id: 2,
    name: 'Blister 3 boosters',
    image: jt_b3b,
    price: 89,
    description: 'This is the product 2.',
    collection: 'Journey Together'
  },
  // {
  //   id: 3,
  //   name: 'Booster',
  //   image: jt_boo,
  //   price: 20.95,
  //   description: 'This is the product 3.',
  //   collection: 'Journey Together'
  // },
  {
    id: 4,
    name: 'Blister (booster + card + coin)',
    image: jt_b1c,
    price: 25,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    collection: 'Journey Together'
  },
  {
    id: 5,
    name: 'Mini portfolio + booster',
    image: jt_mpb,
    price: 26,
    description: 'This es el producto 5.',
    collection: 'Journey Together'
  },
  {
    id: 6,
    name: 'Blister (booster + 3 cards + coin)',
    image: jt_b3c,
    price: 29,
    description: 'This is the product 6.',
    collection: 'Journey Together'
  },
  {
    id: 7,
    name: 'Sleeved booster',
    image: jt_sbo,
    price: 23,
    description: 'This is the product 7.',
    collection: 'Journey Together'
  },
];