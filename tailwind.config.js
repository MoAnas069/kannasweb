export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#F2F4F5",
        mineral: "#E6EAED",
        graphite: "#222629",
        steel: "#5E7C82",
        "brand-green": "#16A34A", // Green from logo (approximate, adjusted for vibrancy)
        champagne: "#C6CCD1",
        // New "Executive White" Theme
        executive: "#FAFAF8", // Primary background
        concrete: "#F2F2F0",  // Secondary surfaces
        "border-subtle": "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Manrope", "sans-serif"], // Using Manrope as the display font proxy
      },
      letterSpacing: {
        tight: "-0.01em",
      },
    },
  },
  plugins: [],
}
