import type { Config } from 'tailwindcss';
import remToPx from 'tailwindcss-rem-to-px';

export default {
  content: ['./*/*.{liquid,json,js}'],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
  },
  plugins: [
    remToPx({
      baseFontSize: 16,
    }),
  ],
} satisfies Config;
