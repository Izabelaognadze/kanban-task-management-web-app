/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        // Light theme colors
        "clrBg":"#F4F7FD",
        "clrSidePar": "#FFFFFF",
        
        // Dark theme colors
        "dark-clrBg":"#3E3F4E",
        "dark-clrSidePar": "#2B2C37",




        "clrDarkPurple":"#635FC7",
        "clrLightPurple":"#A8A4FF",
        "clrDarkPink":"#EA5555",
        "clrLightPink":"#FF9898",
        "clrBlack":"#000112",
        "clr20212C":"#20212C",
        "clr828FA3":"#828FA3",
        "clrE4EBFA":"#E4EBFA",
        "clrBg":"#F4F7FD",
      }, 
      fontFamily:{
        "WebFont" : "'Plus Jakarta Sans'"
      }
    },
  },
  plugins: [],
}

