import jt_etb from '../assets/pokemon-tcg/jt/elite-trainer-box.webp';
import jt_b3b from '../assets/pokemon-tcg/jt/3-pack-blister-box.webp';
// import jt_boo from '../assets/pokemon-tcg/jt/booster.webp';
import jt_b1c from '../assets/pokemon-tcg/jt/checklane-blister-box.webp';
import jt_mpb from '../assets/pokemon-tcg/jt/mini-portfolio-pus-booster.webp';
import jt_b3c from '../assets/pokemon-tcg/jt/premium-checklane-blister-klinklang.webp';
import jt_sbo from '../assets/pokemon-tcg/jt/sleeved-booster.webp';
import sc_upc from '../assets/pokemon-tcg/sc/upc.webp';

export interface ItemProps {
  _id: string;
  type: string;
  game: string;
  name: string,
  image: string[],
  price: number,
  status: boolean,
  description: string,
  set: string,
  comment: string,
}

export const mockProducts = [
  {
    id: 1,
    game: "pokemon",
    name: 'Elite Trainer Box',
    image: jt_etb,
    price: 289,
    status: false,
    description: "• 9 booster packs. Each booster pack contains 10 cards & 1 Basic Energy" +
      "\n• 1 full-art foil promo card featuring N's Zorua" +
      "\n• 65 card sleeves" +
      "\n• 45 Pokémon TCG Energy cards" +
      "\n• A player's guide" +
      "\n• 6 damage-counter dice" +
      "\n• 1 competition-legal coin-flip die" +
      "\n• 2 plastic condition markers" +
      "\n• A box to hold everything, with 4 dividers to keep it organized" +
      "\n• A code card for Pokémon Trading Card Game Live",
    set: 'Journey Together',
    comment: "Perfect product to start a set or even start to collect Pokemon TCG"
  },
  {
    id: 2,
    game: "pokemon",
    name: 'Blister 3 boosters',
    image: jt_b3b,
    price: 89,
    status: false,
    description: "• 3 booster pack" +
      "\n• 1 promo card",
    set: 'Journey Together',
    comment: ""
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
    game: "pokemon",
    name: 'Blister (booster + card + coin)',
    image: jt_b1c,
    price: 25,
    status: false,
    description: "• 1 booster pack" +
      "\n• 1 promo card" +
      "\n• 1 Pokémon coin",
    set: 'Journey Together',
    comment: ""
  },
  {
    id: 5,
    game: "pokemon",
    name: 'Mini portfolio + booster',
    image: jt_mpb,
    price: 26,
    status: false,
    description: "• 1 booster pack" +
      "\n• 1 portfolio of 60 spaces",
    set: 'Journey Together',
    comment: "Perfect product keep your cards sorted"
  },
  {
    id: 6,
    game: "pokemon",
    name: 'Blister (booster + 3 cards + coin)',
    image: jt_b3c,
    price: 29,
    status: false,
    description: "• 1 booster pack" +
      "\n• 3 promo cards" +
      "\n• 1 Pokémon coin",
    set: 'Journey Together',
    comment: ""
  },
  {
    id: 7,
    game: "pokemon",
    name: 'Ultra Premium Collection Terapagos EX',
    image: sc_upc,
    price: 519,
    status: true,
    description: "• Terapagos ex promo card" +
      "\n• Lapras ex promo card" +
      "\n• Cinderace ex promo card" +
      "\n• 8 Energy cards in Foil format" +
      "\n• 3-card magnetic stand" +
      "\n• Playmat" +
      "\n• Deck box" +
      "\n• 6 damage-counter dice" +
      "\n• 1 competition-legal coin-flip" +
      "\n• 2 plastic condition markers" +
      "\n• 18x Pokémon TCG: Booster Pack" +
      "\n• A code card for Pokémon Trading Card Game Live",
    set: 'Scarlet & Violet',
    comment: "This probably the best product in the market by a fair price. Open this give you more than in booster. And the product as all UPC, will rise the price."
  },
  {
    id: 8,
    game: "pokemon",
    name: 'Sleeved booster',
    image: jt_sbo,
    price: 23,
    status: false,
    description: "• 1 booster sleeved",
    set: 'Journey Together',
    comment: ""
  },
];

/*
{
  "id": {
      "$numberInt": "14"
  },
  "game": "pokemon",
  "name": "Blisters Twilight Masquarade",
  "image": [
      "https://files.rebel.pl/products/1065/5755/_2022449/pokemon-tcg-scarlet-and-violet-twilight-masquarade-premium-checklane-blister-kingdra.jpg",
      "https://files.rebel.pl/products/1065/5755/_2022449/pokemon-tcg-scarlet-and-violet-twilight-masquarade-premium-checklane-blister-porygon.jpg"
  ],
  "price": {
      "$numberInt": "25"
  },
  "status": true,
  "description": "• 3cards -> 29zl\n• Several blisters -> discount",
  "set": "Twilight Masquarade",
  "comment": "Don't open just one booster :/. Open more! :D Buy several blister where you will optein exclusive foil cards."
}
*/

