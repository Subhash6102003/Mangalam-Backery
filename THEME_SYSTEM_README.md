# 🎨 Festive Theme System Documentation

## Overview
The Mangalam Bakeries website features an **automatic festive theme system** that changes based on the current date. The theme automatically detects when major festivals are approaching and applies appropriate colors, decorations, and messaging.

## 🎉 Supported Festivals & Dates

| Festival | Dates | Theme Colors | Emoji |
|----------|-------|--------------|-------|
| **Valentine Week** | Feb 1-15 | Red, Pink, Gold | ❤️ |
| **Holi** | Mar 15 - Apr 5 | Rainbow (Red, Blue, Green) | 🎨 |
| **Raksha Bandhan** | Aug 1-20 | Orange, Gold, Maroon | 🎀 |
| **Bhai Dooj** | Oct 25 - Nov 5 | Brown, Orange, Gold | 👫 |
| **Diwali** | Oct 15 - Nov 15 | Orange, Gold, Purple | 🪔 |
| **Christmas** | Dec 1-31 | Red, Gold, Green | 🎄 |
| **New Year** | Jan 1-15 | Gold, Silver, Black | 🎆 |

## 🛠️ How It Works

### 1. **Automatic Detection**
The system uses `getCurrentTheme()` function to detect the current date and return the active theme:

```typescript
import { getCurrentTheme } from '@/lib/festiveTheme';

const activeTheme = getCurrentTheme(); // Returns: 'valentine' | 'holi' | etc.
```

### 2. **Theme Provider**
The `ThemeProvider` component wraps the entire app and provides theme context:

```tsx
<ThemeProvider>
  {children}
</ThemeProvider>
```

### 3. **Using Theme in Components**
Access theme information in any component:

```tsx
import { useTheme } from '@/components/ThemeProvider';

export function MyComponent() {
  const { theme, config } = useTheme();
  
  return (
    <div style={{ color: config.colors.primary }}>
      {config.message}
    </div>
  );
}
```

## 📦 Files Structure

```
src/
├── lib/
│   └── festiveTheme.ts          # Theme logic & configurations
├── components/
│   ├── ThemeProvider.tsx        # Theme context provider
│   ├── FestiveBanner.tsx        # Festive announcement banner
│   ├── FestiveDecorations.tsx   # Floating decorative emojis
│   └── ThemeInfo.tsx            # Theme indicator badge
└── app/
    ├── layout.tsx               # Updated with ThemeProvider
    └── globals.css              # CSS variables for themes
```

## 🎨 Theme Configuration

Each theme includes:
- **Primary Color**: Main theme color
- **Secondary Color**: Accent color
- **Accent Color**: Highlight color
- **Background Color**: Light background tint
- **Text Color**: Primary text color
- **Emoji**: Theme emoji
- **Name**: Festival name
- **Message**: Festival greeting message
- **Decorations**: Theme-specific decorations (for future use)

Example:
```typescript
valentine: {
  colors: {
    primary: '#be123c',      // Red
    secondary: '#ec4899',    // Pink
    accent: '#fbbf24',       // Gold
    background: '#fce7f3',   // Light Pink
    text: '#1f2937'          // Dark Gray
  },
  emoji: '❤️',
  name: 'Valentine Week',
  message: 'Spread Love This Valentine\'s Day! 💕',
  decorations: ['hearts', 'roses', 'cupids', 'romance']
}
```

## 🧪 Testing the Theme System

### Method 1: Change Device Date (Recommended)
1. **Windows:**
   - Go to Settings → Time & language → Date & time
   - Turn off "Set time automatically"
   - Change to any festival date
   - Refresh the website

2. **Mac:**
   - System Preferences → Date & Time
   - Unlock and change the date
   - Refresh the website

### Method 2: Browser DevTools (Advanced)
1. Open Browser Console (F12)
2. Override current date for testing

## 🎯 Features

### 1. **Festive Banner**
- Appears at the top of the page during festival periods
- Shows festival emoji and greeting message
- Animated pulsing effect
- Auto-hides during non-festive periods

### 2. **Theme Colors**
- All UI elements automatically adapt to festival colors
- CSS variables ensure consistency
- Gradients and accents update automatically

### 3. **Floating Decorations**
- Animated emoji decorations float around the page
- Theme-specific emojis based on festival
- Subtle opacity for non-intrusive design

### 4. **Theme Info Badge**
- Shows in bottom-right corner during festivals
- Displays current active theme name
- Hover to see full opacity

## 📱 CSS Variables Used

```css
--theme-primary: Main color
--theme-secondary: Secondary color
--theme-accent: Accent/highlight color
--theme-background: Background tint color
--theme-text: Text color
```

Use in any component:
```tsx
<div style={{ color: 'var(--theme-primary)' }}>
  This text will change color based on active theme
</div>
```

## 🔧 Customization

### Adding a New Festival

1. **Update festiveTheme.ts:**
```typescript
// Add to FESTIVE_DATES
'myfestival': { start: [5, 1], end: [5, 10] },

// Add to THEME_CONFIG
myfestival: {
  colors: { ... },
  emoji: '🎊',
  name: 'My Festival',
  message: 'Celebrate!',
  decorations: [...]
}

// Add to FestiveTheme type
export type FestiveTheme = '...' | 'myfestival' | '...';
```

2. **Update theme decorations:**
- Add emojis to `FestiveDecorations.tsx`
- Update animation styles in `globals.css`

### Changing Festival Dates

Edit `FESTIVE_DATES` in `src/lib/festiveTheme.ts`:

```typescript
export const FESTIVE_DATES: Record<FestiveTheme, DateRange> = {
  valentine: { start: [2, 1], end: [2, 15] },  // [month, day]
  // ... other festivals
};
```

### Modifying Theme Colors

Update `THEME_CONFIG` in `src/lib/festiveTheme.ts`:

```typescript
valentine: {
  colors: {
    primary: '#NEW_COLOR',  // Change primary color
    // ... other colors
  },
  // ... rest of config
}
```

## 🎬 Current Implementation

### Active Components:
1. ✅ ThemeProvider - Wraps entire app
2. ✅ FestiveBanner - Top announcement banner
3. ✅ FestiveDecorations - Floating emojis
4. ✅ ThemeInfo - Bottom-right theme indicator
5. ✅ Layout.tsx - Integrated with theme system
6. ✅ globals.css - CSS variables for all themes

### Theme-Specific Pages:
- Valentine themes active on `/valentine-cakes-bhopal`
- Diwali, Holi, Christmas themes auto-apply to all pages

## 📊 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🚀 Future Enhancements

Possible additions:
- Special product sections per festival
- Festival-specific discount banners
- Social media integration for festival posts
- Analytics tracking per theme
- Festival-specific landing pages
- Email marketing per theme
- SMS campaigns during festivals

## 💡 Tips & Best Practices

1. **Testing**: Always test theme changes by adjusting device date
2. **Colors**: Ensure sufficient contrast for accessibility
3. **Performance**: Themes use CSS variables (efficient)
4. **Mobile**: All themes are fully responsive
5. **Branding**: Festival themes maintain brand consistency

## 🐛 Troubleshooting

### Theme not changing:
- Clear browser cache and cookies
- Check if current date falls within festival range
- Verify system date is correct

### Colors not applying:
- Check browser DevTools → CSS variables
- Ensure ThemeProvider wraps all components
- Verify globals.css is imported

### Decorations not visible:
- Check z-index conflicts
- Verify animation CSS is loaded
- Test in different browsers

## 📞 Support & Questions

For more information or to add new festivals, update the theme configurations in:
- `src/lib/festiveTheme.ts` - Core logic
- `src/components/FestiveDecorations.tsx` - Decorations
- `src/app/globals.css` - Styles

---

**Last Updated:** January 15, 2026
**Festivals Supported:** 7
**Theme Variables:** 5
