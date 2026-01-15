export type FestiveTheme = 'valentine' | 'holi' | 'raksha-bandhan' | 'bhai-dooj' | 'diwali' | 'christmas' | 'newyear' | 'default';

interface DateRange {
  start: [number, number]; // [month, day]
  end: [number, number];   // [month, day]
}

interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  emoji: string;
  name: string;
  message: string;
  decorations: string[];
}

export const FESTIVE_DATES: Record<FestiveTheme, DateRange> = {
  valentine: { start: [2, 1], end: [2, 15] },           // Feb 1-15
  holi: { start: [3, 15], end: [3, 31] },               // Mar 15-31
  'raksha-bandhan': { start: [8, 10], end: [8, 20] },   // Aug 10-20
  'bhai-dooj': { start: [10, 28], end: [11, 5] },       // Oct 28 - Nov 5
  diwali: { start: [10, 20], end: [11, 10] },           // Oct 20 - Nov 10
  christmas: { start: [12, 15], end: [12, 26] },        // Dec 15-26
  newyear: { start: [12, 27], end: [1, 10] },           // Dec 27 - Jan 10
  default: { start: [1, 11], end: [1, 31] }             // Fallback
};

export const THEME_CONFIG: Record<FestiveTheme, ThemeConfig> = {
  valentine: {
    colors: {
      primary: '#be123c',
      secondary: '#ec4899',
      accent: '#fbbf24',
      background: '#fce7f3',
      text: '#1f2937'
    },
    emoji: '❤️',
    name: 'Valentine Week',
    message: 'Spread Love This Valentine\'s Day! 💕',
    decorations: ['hearts', 'roses', 'cupids', 'romance']
  },
  holi: {
    colors: {
      primary: '#dc2626',
      secondary: '#3b82f6',
      accent: '#10b981',
      background: '#fef3c7',
      text: '#1f2937'
    },
    emoji: '🎨',
    name: 'Happy Holi',
    message: 'Celebrate Colors with Our Special Holi Cakes! 🌈',
    decorations: ['colors', 'balloons', 'rangoli', 'flowers']
  },
  'raksha-bandhan': {
    colors: {
      primary: '#d97706',
      secondary: '#f59e0b',
      accent: '#9f1239',
      background: '#fed7aa',
      text: '#1f2937'
    },
    emoji: '🎀',
    name: 'Happy Raksha Bandhan',
    message: 'Celebrate the Bond of Love with Special Rakhi Gifts! 👫',
    decorations: ['rakhi', 'threads', 'gifts', 'celebration']
  },
  'bhai-dooj': {
    colors: {
      primary: '#7c2d12',
      secondary: '#f97316',
      accent: '#fbbf24',
      background: '#ffedd5',
      text: '#1f2937'
    },
    emoji: '👨‍👩‍👦',
    name: 'Happy Bhai Dooj',
    message: 'Celebrate the Special Bond Between Siblings! 👫',
    decorations: ['siblings', 'tilak', 'sweets', 'blessings']
  },
  diwali: {
    colors: {
      primary: '#ea580c',
      secondary: '#f59e0b',
      accent: '#8b5cf6',
      background: '#fed7aa',
      text: '#1f2937'
    },
    emoji: '🪔',
    name: 'Happy Diwali',
    message: 'Brighten Your Celebrations with Our Diwali Special! ✨',
    decorations: ['diyas', 'lights', 'rangoli', 'fireworks']
  },
  christmas: {
    colors: {
      primary: '#dc2626',
      secondary: '#fbbf24',
      accent: '#10b981',
      background: '#dcfce7',
      text: '#1f2937'
    },
    emoji: '🎄',
    name: 'Merry Christmas',
    message: 'Make This Christmas Sweet with Our Special Cakes! 🎅',
    decorations: ['santa', 'trees', 'bells', 'snow']
  },
  newyear: {
    colors: {
      primary: '#1f2937',
      secondary: '#fbbf24',
      accent: '#e5e7eb',
      background: '#f3f4f6',
      text: '#1f2937'
    },
    emoji: '🎆',
    name: 'Happy New Year',
    message: 'Start the Year Sweet! Celebrate with Our New Year Specials! 🥳',
    decorations: ['fireworks', 'balloons', 'champagne', 'countdown']
  },
  default: {
    colors: {
      primary: '#be123c',
      secondary: '#ec4899',
      accent: '#fbbf24',
      background: '#fce7f3',
      text: '#1f2937'
    },
    emoji: '🎂',
    name: 'Mangalam Bakeries',
    message: 'Fresh Baked Happiness Every Day! 🍰',
    decorations: ['cakes', 'pastries', 'chocolates', 'joy']
  }
};

export function getCurrentTheme(): FestiveTheme {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const themesToCheck: FestiveTheme[] = [
    'valentine',
    'holi',
    'raksha-bandhan',
    'bhai-dooj',
    'diwali',
    'christmas',
    'newyear'
  ];

  for (const theme of themesToCheck) {
    const { start, end } = FESTIVE_DATES[theme];
    
    // Special handling for themes that span across year end (like New Year: Dec 27 - Jan 10)
    if (start[0] > end[0]) {
      // Theme crosses year boundary (Dec to Jan)
      const isInRange = 
        (month === start[0] && day >= start[1]) ||  // In December after start
        (month === end[0] && day <= end[1]);        // In January before end
      
      if (isInRange) {
        return theme;
      }
    } else {
      // Normal date range within same year
      const isInRange = 
        (month > start[0] || (month === start[0] && day >= start[1])) &&
        (month < end[0] || (month === end[0] && day <= end[1]));
      
      if (isInRange) {
        return theme;
      }
    }
  }
  
  return 'default';
}

export function getThemeConfig(theme: FestiveTheme): ThemeConfig {
  return THEME_CONFIG[theme];
}

export function getThemeCSSVariables(theme: FestiveTheme) {
  const config = getThemeConfig(theme);
  return {
    '--theme-primary': config.colors.primary,
    '--theme-secondary': config.colors.secondary,
    '--theme-accent': config.colors.accent,
    '--theme-background': config.colors.background,
    '--theme-text': config.colors.text,
  } as React.CSSProperties;
}
