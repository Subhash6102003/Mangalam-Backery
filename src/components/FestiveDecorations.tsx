'use client';

import { useTheme } from './ThemeProvider';

export function FestiveDecorations() {
  const { config, theme } = useTheme();

  if (theme === 'default') return null;

  const decorationEmojis: Record<string, string[]> = {
    valentine: ['❤️', '💕', '💐', '💝'],
    holi: ['🎨', '🎉', '🌈', '🎊'],
    'raksha-bandhan': ['🎀', '👫', '🎁', '🌟'],
    'bhai-dooj': ['👨‍👩‍👦', '🎉', '🍰', '🌸'],
    diwali: ['🪔', '✨', '🎆', '🌟'],
    christmas: ['🎄', '🎅', '🔔', '⛄'],
    newyear: ['🎆', '🎉', '🥳', '🎊'],
  };

  const emojis = decorationEmojis[theme] || [];

  return (
    <>
      {/* Floating decorations */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="fixed text-4xl opacity-20 animate-float pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            zIndex: -1,
          }}
        >
          {emojis[i % emojis.length]}
        </div>
      ))}
    </>
  );
}
