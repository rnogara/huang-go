import { MedievalSharp } from 'next/font/google';
import { Poiret_One } from 'next/font/google';
import { Jost } from 'next/font/google';

const sharp = MedievalSharp({ weight: "400", style: 'normal', subsets: ['latin'] });
const poiret = Poiret_One({ weight: "400", style: 'normal', subsets: ['latin'] });
const jost = Jost({ weight: "400", style: 'normal', subsets: ['latin'] });

export { sharp, poiret, jost };