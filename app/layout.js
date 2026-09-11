import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://mobihaus.com.br"),
  title: "MobiHaus | Oficina de Mobilidade Elétrica em Dois Irmãos - RS",
  description:
    "Oficina especializada em scooters elétricas, bicicletas elétricas, patinetes e triciclos elétricos em Dois Irmãos, Rio Grande do Sul. Manutenção, reparo e upgrades com garantia.",
  keywords: [
    "mobilidade elétrica",
    "scooter elétrica",
    "bicicleta elétrica",
    "patinete elétrico",
    "triciclo elétrico",
    "oficina Dois Irmãos",
    "Rio Grande do Sul",
  ],
  openGraph: {
    title: "MobiHaus | Oficina de Mobilidade Elétrica",
    description:
      "Especialistas em scooters, bicicletas, patinetes e triciclos elétricos em Dois Irmãos - RS.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  themeColor: "#0a0e0d",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

