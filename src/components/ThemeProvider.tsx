'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentTheme, getThemeConfig, type FestiveTheme } from '@/lib/festiveTheme';

interface ThemeContextType {
  theme: FestiveTheme;
  config: ReturnType<typeof getThemeConfig>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<FestiveTheme>(() => getCurrentTheme());
  const [config, setConfig] = useState(() => getThemeConfig(theme));

  // Re-check theme every minute to detect date/time changes
  useEffect(() => {
    const checkTheme = () => {
      const newTheme = getCurrentTheme();
      if (newTheme !== theme) {
        setTheme(newTheme);
        setConfig(getThemeConfig(newTheme));
      }
    };

    // Check immediately on mount
    checkTheme();

    // Check every 60 seconds
    const interval = setInterval(checkTheme, 60000);

    return () => clearInterval(interval);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    config
  };

  return (
    <ThemeContext.Provider value={value}>
      <div 
        data-theme={theme}
        style={{
          '--theme-primary': config.colors.primary,
          '--theme-secondary': config.colors.secondary,
          '--theme-accent': config.colors.accent,
          '--theme-background': config.colors.background,
          '--theme-text': config.colors.text,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
