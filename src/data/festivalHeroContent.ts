import { FestiveTheme } from '@/lib/festiveTheme';

export interface HeroContent {
  title: string;
  subtitle: string;
  highlightText: string;
  description: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
  countdownLabel?: string;
  features: string[];
}

export const FESTIVAL_HERO_CONTENT: Record<FestiveTheme, HeroContent> = {
  valentine: {
    title: 'Bake Love',
    subtitle: 'This Valentine',
    highlightText: '❤️',
    description: 'Fresh romantic cakes, chocolates & custom designer cakes delivered across Bhopal. Make this Valentine\'s Day unforgettable for your loved ones.',
    cta1Text: 'Shop Valentine Cakes',
    cta1Link: '/valentine-cakes-bhopal',
    cta2Text: 'Design Custom Cake',
    cta2Link: '/custom-cakes-bhopal',
    countdownLabel: 'Valentine\'s Day Countdown',
    features: ['Heart-Shaped Cakes', 'Photo Cakes', 'Romantic Combos', 'Midnight Delivery']
  },

  holi: {
    title: 'Celebrate Colors',
    subtitle: 'Happy Holi',
    highlightText: '🎨',
    description: 'Rainbow colored cakes, Thandai flavors & special Holi combos delivered across Bhopal. Add sweetness to your colorful celebrations!',
    cta1Text: 'Shop Holi Cakes',
    cta1Link: '/cakes',
    cta2Text: 'Browse All Products',
    cta2Link: '/chocolates',
    countdownLabel: 'Holi Celebration Countdown',
    features: ['Rainbow Cakes', 'Thandai Flavor', 'Colorful Designs', 'Same-Day Delivery']
  },

  'raksha-bandhan': {
    title: 'Celebrate Bond',
    subtitle: 'Happy Raksha Bandhan',
    highlightText: '🎀',
    description: 'Special Rakhi cakes, brother-sister combos & sweet gifts delivered across Bhopal. Strengthen your sibling bond with sweetness!',
    cta1Text: 'Shop Rakhi Cakes',
    cta1Link: '/cakes',
    cta2Text: 'View Rakhi Combos',
    cta2Link: '/chocolates',
    countdownLabel: 'Raksha Bandhan Countdown',
    features: ['Rakhi Design Cakes', 'Brother-Sister Combos', 'Traditional Sweets', 'Gift Hampers']
  },

  'bhai-dooj': {
    title: 'Sibling Love',
    subtitle: 'Happy Bhai Dooj',
    highlightText: '👫',
    description: 'Special Bhai Dooj cakes, sweets combos & traditional gifts delivered across Bhopal. Celebrate the eternal sibling bond!',
    cta1Text: 'Shop Bhai Dooj Cakes',
    cta1Link: '/cakes',
    cta2Text: 'Browse Gift Packs',
    cta2Link: '/chocolates',
    countdownLabel: 'Bhai Dooj Countdown',
    features: ['Tilak Design Cakes', 'Traditional Sweets', 'Gift Combos', 'Fast Delivery']
  },

  diwali: {
    title: 'Light Up Joy',
    subtitle: 'Happy Diwali',
    highlightText: '🪔',
    description: 'Diya decorated cakes, traditional sweets & festival hampers delivered across Bhopal. Brighten your Diwali celebrations with sweetness!',
    cta1Text: 'Shop Diwali Cakes',
    cta1Link: '/cakes',
    cta2Text: 'View Gift Hampers',
    cta2Link: '/chocolates',
    countdownLabel: 'Diwali Celebration Countdown',
    features: ['Diya Design Cakes', 'Rangoli Patterns', 'Traditional Sweets', 'Premium Hampers']
  },

  christmas: {
    title: 'Merry & Sweet',
    subtitle: 'Christmas',
    highlightText: '🎄',
    description: 'Christmas tree cakes, Santa specials & festive combos delivered across Bhopal. Make this Christmas extra special and sweet!',
    cta1Text: 'Shop Christmas Cakes',
    cta1Link: '/cakes',
    cta2Text: 'View Christmas Gifts',
    cta2Link: '/chocolates',
    countdownLabel: 'Christmas Countdown',
    features: ['Christmas Tree Cakes', 'Santa Designs', 'Plum Cakes', 'Gift Hampers']
  },

  newyear: {
    title: 'Start Sweet',
    subtitle: 'Happy New Year 2026',
    highlightText: '🎆',
    description: 'Countdown cakes, champagne designs & party combos delivered across Bhopal. Welcome 2026 with sweetness and celebrations!',
    cta1Text: 'Shop New Year Cakes',
    cta1Link: '/cakes',
    cta2Text: 'View Party Packs',
    cta2Link: '/chocolates',
    countdownLabel: 'New Year Countdown',
    features: ['2026 Special Cakes', 'Party Designs', 'Celebration Combos', 'Midnight Delivery']
  },

  default: {
    title: 'Fresh Baked',
    subtitle: 'Happiness',
    highlightText: '🎂',
    description: 'Fresh cakes, romantic chocolates & custom designer cakes delivered across Bhopal. Make every celebration special with Mangalam Bakeries.',
    cta1Text: 'Shop Cakes',
    cta1Link: '/cakes',
    cta2Text: 'Design Custom Cake',
    cta2Link: '/custom-cakes-bhopal',
    features: ['Fresh Daily', 'Custom Designs', 'All Flavors', 'Same-Day Delivery']
  },
};

export function getHeroContentByTheme(theme: FestiveTheme): HeroContent {
  return FESTIVAL_HERO_CONTENT[theme] || FESTIVAL_HERO_CONTENT.default;
}
