'use client';

import { useTheme } from './ThemeProvider';

export function ThemeInfo() {
  const { theme, config } = useTheme();

  if (theme === 'default') return null;

  return (
    <div className="fixed bottom-4 right-4 p-3 rounded-lg shadow-lg text-white text-sm z-50 opacity-75 hover:opacity-100 transition-opacity"
      style={{ backgroundColor: config.colors.primary }}
    >
      <p className="font-semibold">{config.emoji} {config.name}</p>
      <p className="text-xs mt-1">Theme Active</p>
    </div>
  );
}
