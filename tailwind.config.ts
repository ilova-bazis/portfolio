import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            blockquote: {
              borderLeftColor: '#000',
              backgroundColor: '#d5d5d5',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            code: {
              backgroundColor: '#f5f5f5',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: '#1e1e1e',
              borderRadius: '0.5rem',
              padding: '1rem',
              overflowX: 'auto',
            },
          },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    typography,
  ],
} satisfies Config;
