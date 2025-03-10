import typography from "@tailwindcss/typography";

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-geist-sans)"],
          },
          keyframes: {
            fadeIn: {
              from: { opacity: 0 },
              to: {
                opacity: 1,
              },
            },
            blink: {
              "0%": { opacity: 0.2 },
              "20%": { opacity: 1 },
              "100%": { opacity: 0.2 },
            },
          },
          animation: {
            fadeIn: "fadeIn 0.3s ease-in-out",
            blink: "blink 1.4s both infinite",
          },
        },
      },
      future: {
        hoverOnlyWhenSupported: true,
      },
      plugins: [
        typography,
        ({ matchUtilities, theme }) => {
          matchUtilities(
            {
              "animation-delay": (value) => {
                return {
                  "animation-delay": value,
                };
              },
            },
            {
              values: theme("transitionDelay"),
            }
          );
        },
      ],
    },
  },
};

export default config;
