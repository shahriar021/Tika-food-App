// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  // content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        satoshiBold: ["Satoshi-Bold"],
        robotoBold:['Roboto-Bold']
      },
      colors:{
        darkYellow:'#FFC107',
        paleYellow:'#FEF9C3'
      }
    },
  },
  plugins: [],
};