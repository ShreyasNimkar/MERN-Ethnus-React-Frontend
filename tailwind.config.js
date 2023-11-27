/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('/public/home-bg.jpg')",
        "new-ticket": "url('/public/new-ticket.jpg')",
      },
    },
  },
  plugins: [],
};
