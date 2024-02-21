const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        darkgray:'#343a40',
        gray:'#dfdfdf',
        org: '#f18c29',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        alternative: "#505050",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "dark-gunmetal": "#292521",
        "chinese-silver": "#cccccc",
        "dark-charcoal": "#2f2f2f",
        "light-grey": "#f9f9f9",
        "raisin-black": "#252525",
        "dim-gray": "#686868",
        "deep-saffron": "#f8992f",
        "princeton-orange": "#f78020",
        "old-lace": "#fff1e6",
        "dark-lava": "#443e3a",
        "charleston-green": "#272727",
        "davy-grey": "#555555",
        "dark-liver": "#505050",
        "pine-tree": "#2d2c2c",
        jet: "#353535",
        arsenic: "#414141",
        nickel: "#727272",
        beer: "#ff8813",
        elixir: "#e1e1e1",
        "tiger-eye": "#dd943a",
        "cadmium-orange": "#f48434",
        "orange-red": "#f56718",
        charcoal: "#33475b",
        "yankees-blue": "#121c45",
        "dark-jungle-green": "#0f172a",
        "btn-gradient":
          "linear-gradient(to right, #f8992f 0, #f4d03f 51%, #f8992f 100%)",
        "dim-grey": "#6b6b6b",
        "dark-dim-grey": "#68676A",
        azure: "#007bff",
        crayola: "#0056b3",
        "anti-flash-white": "#F3F3F4",
        "transparent-saffron": "#f780204d",
        "dark-transparent-saffron": "#f7802070",
        "dark-sliver": "#4f4f4f",
        "granite-gray": "#646464",
      },
      
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textColor: {
        "custom-orange": "#f8992f",
        "custom-grey": "#606060",
      },
      borderColor: {
        'tiger-eye' : '#dd943a', 
      },
      boxShadow: {
        "custom-faq-shadow": "0 3px 9px 0 #cac0c0",
        "custom-faq-shadow-2": "0 5px 30px 0 rgba(0, 0, 0, 0.04)",
        "deep-black": "0 3px 10px rgba(0, 0, 0, 0.58)",
        "accordion-item": "0 0 20px #dedede",
        "search-bar": "0 6px 16px 1px #d4d4d4",
        "top-performer": "0 1px 1px rgba(0,0,0,.05)",
        "btn-shadow": "0 5px 15px 0 #bdbcbc",
        "btn-hover": "0 5px 15px 0 #7d7d7d",
        "header-menu-items": "0 5px 12px 0 #3e3e3e",
        "schedule-btn": "0 5px 15px 0 #bdbcbc",
        "fixed-card": "0 1px 1px #f8992f"
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        100: "100",
        1000: "1000",
        top: "10000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
