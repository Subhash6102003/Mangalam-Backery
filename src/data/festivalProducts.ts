import { FestiveTheme } from '@/lib/festiveTheme';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  eggless: boolean;
  description: string;
}

export const FESTIVAL_PRODUCTS: Record<FestiveTheme, Product[]> = {
  valentine: [
    {
      id: 1,
      name: 'Red Velvet Heart Cake',
      category: 'valentine',
      price: 299,
      originalPrice: 499,
      rating: 4.9,
      reviews: 234,
      image: '❤️🎂',
      badge: 'Valentine Special',
      eggless: true,
      description: 'Perfect Valentine gift for your girlfriend'
    },
    {
      id: 2,
      name: 'Rose Chocolate Cake',
      category: 'valentine',
      price: 349,
      originalPrice: 549,
      rating: 4.8,
      reviews: 189,
      image: '🌹🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Romantic rose-topped chocolate cake'
    },
    {
      id: 3,
      name: 'Love Letter Photo Cake',
      category: 'valentine',
      price: 399,
      originalPrice: 599,
      rating: 5.0,
      reviews: 156,
      image: '💌🎂',
      badge: 'Trending',
      eggless: true,
      description: 'Custom photo cake with love message'
    },
    {
      id: 4,
      name: 'Cupid Special Combo',
      category: 'valentine',
      price: 499,
      originalPrice: 799,
      rating: 4.9,
      reviews: 145,
      image: '💝🎂',
      badge: 'Hot Deal',
      eggless: true,
      description: 'Cake + Chocolates + Teddy combo'
    },
    {
      id: 5,
      name: 'Strawberry Romance Cake',
      category: 'valentine',
      price: 279,
      originalPrice: 449,
      rating: 4.8,
      reviews: 172,
      image: '🍓❤️',
      badge: 'Fresh',
      eggless: true,
      description: 'Fresh strawberry with heart design'
    },
    {
      id: 6,
      name: 'Ferrero Rocher Heart Cake',
      category: 'valentine',
      price: 599,
      originalPrice: 899,
      rating: 5.0,
      reviews: 203,
      image: '🍫💝',
      badge: 'Premium',
      eggless: true,
      description: 'Luxury chocolate with Ferrero Rocher'
    },
  ],
  
  holi: [
    {
      id: 1,
      name: 'Rainbow Colors Cake',
      category: 'holi',
      price: 349,
      originalPrice: 549,
      rating: 4.9,
      reviews: 167,
      image: '🌈🎂',
      badge: 'Holi Special',
      eggless: true,
      description: 'Multi-layered rainbow colored cake'
    },
    {
      id: 2,
      name: 'Gulal Splash Cake',
      category: 'holi',
      price: 299,
      originalPrice: 499,
      rating: 4.8,
      reviews: 143,
      image: '🎨🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Colorful splash design cake'
    },
    {
      id: 3,
      name: 'Thandai Flavor Cake',
      category: 'holi',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 128,
      image: '🥛🎂',
      badge: 'Trending',
      eggless: true,
      description: 'Traditional Thandai flavored cake'
    },
    {
      id: 4,
      name: 'Holi Color Burst Cake',
      category: 'holi',
      price: 449,
      originalPrice: 699,
      rating: 5.0,
      reviews: 156,
      image: '🎊🎂',
      badge: 'Premium',
      eggless: true,
      description: 'Explosive colors design cake'
    },
    {
      id: 5,
      name: 'Pichkari Special Cake',
      category: 'holi',
      price: 329,
      originalPrice: 529,
      rating: 4.7,
      reviews: 134,
      image: '💦🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Fun pichkari design cake'
    },
    {
      id: 6,
      name: 'Holi Celebration Combo',
      category: 'holi',
      price: 599,
      originalPrice: 899,
      rating: 4.9,
      reviews: 189,
      image: '🎉🍰',
      badge: 'Combo',
      eggless: true,
      description: 'Cake + Gujiya + Colors combo'
    },
  ],

  'raksha-bandhan': [
    {
      id: 1,
      name: 'Rakhi Special Cake',
      category: 'rakhi',
      price: 299,
      originalPrice: 499,
      rating: 4.9,
      reviews: 145,
      image: '🎀🎂',
      badge: 'Rakhi Special',
      eggless: true,
      description: 'Beautiful rakhi design cake'
    },
    {
      id: 2,
      name: 'Brother-Sister Love Cake',
      category: 'rakhi',
      price: 349,
      originalPrice: 549,
      rating: 4.8,
      reviews: 167,
      image: '👫🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Celebrate sibling bond'
    },
    {
      id: 3,
      name: 'Chocolate Rakhi Cake',
      category: 'rakhi',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 123,
      image: '🍫🎀',
      badge: 'Premium',
      eggless: true,
      description: 'Rich chocolate with rakhi topping'
    },
    {
      id: 4,
      name: 'Rakhi Combo Pack',
      category: 'rakhi',
      price: 549,
      originalPrice: 799,
      rating: 5.0,
      reviews: 198,
      image: '🎁🎂',
      badge: 'Combo Deal',
      eggless: true,
      description: 'Cake + Rakhi + Chocolates'
    },
    {
      id: 5,
      name: 'Traditional Rakhi Cake',
      category: 'rakhi',
      price: 279,
      originalPrice: 449,
      rating: 4.7,
      reviews: 134,
      image: '🪔🎂',
      badge: 'Traditional',
      eggless: true,
      description: 'Classic traditional design'
    },
    {
      id: 6,
      name: 'Bhai Ka Pyar Cake',
      category: 'rakhi',
      price: 329,
      originalPrice: 529,
      rating: 4.8,
      reviews: 156,
      image: '💖🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Express your love for brother'
    },
  ],

  'bhai-dooj': [
    {
      id: 1,
      name: 'Bhai Dooj Special Cake',
      category: 'bhai-dooj',
      price: 299,
      originalPrice: 499,
      rating: 4.9,
      reviews: 134,
      image: '👨‍👩‍👦🎂',
      badge: 'Festival Special',
      eggless: true,
      description: 'Celebrate sibling bond'
    },
    {
      id: 2,
      name: 'Tilak Design Cake',
      category: 'bhai-dooj',
      price: 349,
      originalPrice: 549,
      rating: 4.8,
      reviews: 145,
      image: '🎨🎂',
      badge: 'Traditional',
      eggless: true,
      description: 'Beautiful tilak design cake'
    },
    {
      id: 3,
      name: 'Sweet Blessings Cake',
      category: 'bhai-dooj',
      price: 329,
      originalPrice: 529,
      rating: 4.7,
      reviews: 123,
      image: '🙏🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Traditional sweets flavored cake'
    },
    {
      id: 4,
      name: 'Bhai Dooj Combo',
      category: 'bhai-dooj',
      price: 549,
      originalPrice: 799,
      rating: 4.9,
      reviews: 167,
      image: '🎁🍰',
      badge: 'Combo Pack',
      eggless: true,
      description: 'Cake + Sweets + Dry Fruits'
    },
    {
      id: 5,
      name: 'Brother Special Cake',
      category: 'bhai-dooj',
      price: 399,
      originalPrice: 599,
      rating: 4.8,
      reviews: 189,
      image: '👔🎂',
      badge: 'Premium',
      eggless: true,
      description: 'Specially designed for brothers'
    },
    {
      id: 6,
      name: 'Sister Love Cake',
      category: 'bhai-dooj',
      price: 379,
      originalPrice: 579,
      rating: 4.9,
      reviews: 156,
      image: '👗🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Beautiful design for sisters'
    },
  ],

  diwali: [
    {
      id: 1,
      name: 'Diya Design Cake',
      category: 'diwali',
      price: 349,
      originalPrice: 549,
      rating: 4.9,
      reviews: 234,
      image: '🪔🎂',
      badge: 'Diwali Special',
      eggless: true,
      description: 'Beautiful diya decorated cake'
    },
    {
      id: 2,
      name: 'Rangoli Pattern Cake',
      category: 'diwali',
      price: 399,
      originalPrice: 599,
      rating: 5.0,
      reviews: 198,
      image: '🎨🎂',
      badge: 'Premium',
      eggless: true,
      description: 'Colorful rangoli design cake'
    },
    {
      id: 3,
      name: 'Lakshmi Special Cake',
      category: 'diwali',
      price: 449,
      originalPrice: 699,
      rating: 4.9,
      reviews: 167,
      image: '🪷🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Auspicious Lakshmi design'
    },
    {
      id: 4,
      name: 'Fireworks Cake',
      category: 'diwali',
      price: 379,
      originalPrice: 579,
      rating: 4.8,
      reviews: 189,
      image: '🎆🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Colorful fireworks design'
    },
    {
      id: 5,
      name: 'Diwali Sweets Cake',
      category: 'diwali',
      price: 329,
      originalPrice: 529,
      rating: 4.7,
      reviews: 145,
      image: '🍬🎂',
      badge: 'Traditional',
      eggless: true,
      description: 'Traditional sweets flavor'
    },
    {
      id: 6,
      name: 'Diwali Celebration Combo',
      category: 'diwali',
      price: 699,
      originalPrice: 999,
      rating: 5.0,
      reviews: 234,
      image: '🎁✨',
      badge: 'Premium Combo',
      eggless: true,
      description: 'Cake + Sweets + Dry Fruits + Diya'
    },
  ],

  christmas: [
    {
      id: 1,
      name: 'Christmas Tree Cake',
      category: 'christmas',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 198,
      image: '🎄🎂',
      badge: 'Christmas Special',
      eggless: true,
      description: 'Beautiful Christmas tree design'
    },
    {
      id: 2,
      name: 'Santa Special Cake',
      category: 'christmas',
      price: 449,
      originalPrice: 699,
      rating: 5.0,
      reviews: 234,
      image: '🎅🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Adorable Santa Claus cake'
    },
    {
      id: 3,
      name: 'Snowman Delight Cake',
      category: 'christmas',
      price: 379,
      originalPrice: 579,
      rating: 4.8,
      reviews: 167,
      image: '⛄🎂',
      badge: 'Kids Favorite',
      eggless: true,
      description: 'Cute snowman design cake'
    },
    {
      id: 4,
      name: 'Christmas Bells Cake',
      category: 'christmas',
      price: 349,
      originalPrice: 549,
      rating: 4.7,
      reviews: 145,
      image: '🔔🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Golden bells design cake'
    },
    {
      id: 5,
      name: 'Plum Cake Special',
      category: 'christmas',
      price: 499,
      originalPrice: 799,
      rating: 4.9,
      reviews: 189,
      image: '🍰🎄',
      badge: 'Traditional',
      eggless: false,
      description: 'Classic Christmas plum cake'
    },
    {
      id: 6,
      name: 'Christmas Celebration Pack',
      category: 'christmas',
      price: 799,
      originalPrice: 1199,
      rating: 5.0,
      reviews: 256,
      image: '🎁🎄',
      badge: 'Premium Combo',
      eggless: true,
      description: 'Cake + Cookies + Chocolates + Decorations'
    },
  ],

  newyear: [
    {
      id: 1,
      name: 'New Year 2026 Cake',
      category: 'newyear',
      price: 399,
      originalPrice: 599,
      rating: 4.9,
      reviews: 189,
      image: '🎆🎂',
      badge: 'New Year Special',
      eggless: true,
      description: '2026 celebration cake'
    },
    {
      id: 2,
      name: 'Champagne Bottle Cake',
      category: 'newyear',
      price: 549,
      originalPrice: 799,
      rating: 5.0,
      reviews: 234,
      image: '🍾🎂',
      badge: 'Premium',
      eggless: true,
      description: 'Champagne bottle shaped cake'
    },
    {
      id: 3,
      name: 'Fireworks Celebration Cake',
      category: 'newyear',
      price: 449,
      originalPrice: 699,
      rating: 4.8,
      reviews: 167,
      image: '🎇🎂',
      badge: 'Bestseller',
      eggless: true,
      description: 'Colorful fireworks design'
    },
    {
      id: 4,
      name: 'Midnight Countdown Cake',
      category: 'newyear',
      price: 379,
      originalPrice: 579,
      rating: 4.7,
      reviews: 145,
      image: '🕛🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Clock design countdown cake'
    },
    {
      id: 5,
      name: 'Party Popper Cake',
      category: 'newyear',
      price: 349,
      originalPrice: 549,
      rating: 4.8,
      reviews: 178,
      image: '🎉🎂',
      badge: 'Fun',
      eggless: true,
      description: 'Colorful party theme cake'
    },
    {
      id: 6,
      name: 'New Year Party Pack',
      category: 'newyear',
      price: 899,
      originalPrice: 1299,
      rating: 5.0,
      reviews: 267,
      image: '🥳🎁',
      badge: 'Ultimate Combo',
      eggless: true,
      description: 'Cake + Cupcakes + Party Supplies'
    },
  ],

  default: [
    {
      id: 1,
      name: 'Chocolate Truffle Cake',
      category: 'cake',
      price: 249,
      originalPrice: 399,
      rating: 4.8,
      reviews: 189,
      image: '🍫🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Rich chocolate cake with truffle coating'
    },
    {
      id: 2,
      name: 'Strawberry Fresh Cake',
      category: 'cake',
      price: 229,
      originalPrice: 349,
      rating: 4.8,
      reviews: 172,
      image: '🍓🎂',
      badge: 'Fresh',
      eggless: true,
      description: 'Fresh strawberry with whipped cream'
    },
    {
      id: 3,
      name: 'Photo Cake Special',
      category: 'custom',
      price: 399,
      originalPrice: 599,
      rating: 5.0,
      reviews: 156,
      image: '📸🎂',
      badge: 'Trending',
      eggless: true,
      description: 'Custom photo cake for special occasions'
    },
    {
      id: 4,
      name: 'Black Forest Cake',
      category: 'cake',
      price: 279,
      originalPrice: 449,
      rating: 4.9,
      reviews: 234,
      image: '🌲🎂',
      badge: 'Classic',
      eggless: true,
      description: 'Classic Black Forest with cherry'
    },
    {
      id: 5,
      name: 'Butterscotch Cake',
      category: 'cake',
      price: 239,
      originalPrice: 379,
      rating: 4.7,
      reviews: 198,
      image: '🍯🎂',
      badge: 'Popular',
      eggless: true,
      description: 'Creamy butterscotch delight'
    },
    {
      id: 6,
      name: 'Pineapple Cake',
      category: 'cake',
      price: 219,
      originalPrice: 349,
      rating: 4.6,
      reviews: 167,
      image: '🍍🎂',
      badge: 'Fresh',
      eggless: true,
      description: 'Fresh pineapple cake'
    },
  ],
};

export function getProductsByTheme(theme: FestiveTheme): Product[] {
  return FESTIVAL_PRODUCTS[theme] || FESTIVAL_PRODUCTS.default;
}
