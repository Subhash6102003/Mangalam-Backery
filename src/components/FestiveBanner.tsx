'use client';

import { useTheme } from './ThemeProvider';

export function FestiveBanner() {
  const { config, theme } = useTheme();

  // Don't show banner for default theme
  if (theme === 'default') return null;

  return (
    <div
      className="w-full py-3 px-4 text-center text-white font-semibold text-lg animate-pulse"
      style={{
        background: `linear-gradient(90deg, ${config.colors.primary}, ${config.colors.secondary})`
      }}
    >
      <span className="text-2xl mr-2">{config.emoji}</span>
      {config.message}
      <span className="text-2xl ml-2">{config.emoji}</span>
    </div>
  );
}
