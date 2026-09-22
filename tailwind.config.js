/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aeroespacial dark palette
        night: {
          950: "#04070f",
          900: "#070c18",
          800: "#0b1222",
          700: "#111a30",
          600: "#18233f",
        },
        cyan: {
          400: "#38e0ff",
          500: "#00c2ff",
          600: "#0098e0",
        },
        amber: {
          400: "#ffc94d",
          500: "#ffb020",
          600: "#f59a00",
        },
        drone: {
          blue: "#00c2ff",
          dark: "#04070f",
          gray: "#0b1222",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-tech":
          "linear-gradient(to right, rgba(56,224,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,224,255,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(0,194,255,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0,194,255,0.45)",
        "glow-amber": "0 0 40px -8px rgba(255,176,32,0.45)",
        card: "0 20px 60px -20px rgba(0,0,0,0.7)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        scan: "scan 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scan: {
          "0%, 100%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "60%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
