/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "clrDarkPurple":"#635FC7",
        "clrLightPurple":"#A8A4FF",
        "clrDarkPink":"#EA5555",
        "clrLightPink":"#FF9898",
        "clrWhite":"#FFFFFF",
        "clrBlack":"#000112",
        "clr20212C":"#20212C",
        "clr2B2C37":"#2B2C37",
        "clr3E3F4E":"#3E3F4E",
        "clr828FA3":"#828FA3",
        "clrE4EBFA":"#E4EBFA",
        "clrF4F7FD":"#F4F7FD",
      }, 
      fontFamily:{
        "WebFont" : "'Plus Jakarta Sans'"
      }
    },
  },
  plugins: [],
}

