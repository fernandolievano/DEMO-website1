import { Inter, Poppins } from 'next/font/google';

const interFont = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  preload: true
});
const poppinsFont = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  preload: true,
});

export const inter = interFont.variable;
export const poppins = poppinsFont;