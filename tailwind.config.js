/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          primary: "#059669",
          dark: "#047857",
          900: "#064E3B",
        },
        slate: {
          850: "#1e293b",
        },
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        soft: "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
        "soft-hover": "0 30px 60px -15px rgba(16, 185, 129, 0.15)",
      },
    },
  },
  plugins: [],
};
