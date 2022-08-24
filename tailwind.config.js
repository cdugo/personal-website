/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
        fontFamily: {
          roboto: ["Roboto", "sans-serif"]
        }
      }
  }
};
