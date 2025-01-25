import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400","700"], subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export {poppins, inter}