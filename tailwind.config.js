module.exports = {
  content: [
    // Include CSS Modules and other files using Tailwind classes
    './app/**/*.{js,ts,jsx,tsx,css}',
    './components/**/*.{js,ts,jsx,tsx,css}', // Add if you have a separate components dir
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
