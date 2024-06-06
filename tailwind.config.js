/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./public/**/*.{html,js,php}",
  './node_modules/preline/dist/*.js',
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
   // require('@tailwindcss/forms'),
    require('daisyui'),
    // require('flowbite/plugin'),
    // require('./node_modules/preline/plugin'),

  ],
}