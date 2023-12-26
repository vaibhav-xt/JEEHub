import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-purple': '#3E0552',
      'light-purple': '#D0BCD7',
      'white': '#FFF',
      'black': "rgba(0, 0, 0, 0.5)",
      'light-white': '#707070',
      'orange': '#f07252',
      'dark-green': '#008000',
      'light-green': '#60cc8e',
      'red': '#ff0000',
    }
  },
  plugins: [],
}
export default config
