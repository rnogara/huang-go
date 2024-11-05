import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { poiret } from "~/app/assets/font";

export const metadata: Metadata = {
  title: "Huang Go",
  description: "Go é famoso jogo de tabuleiro conhecido também por Weiqi ou Baduk. Agende já sua aula, fique de olho em eventos ou participe de torneios e exames de ranking com o melhor Professor de Go do Brasil!",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  openGraph: {
    title: "Huang Go",
    description: "Go é famoso jogo de tabuleiro conhecido também por Weiqi ou Baduk. Agende já sua aula, fique de olho em eventos ou participe de torneios e exames de ranking com o melhor Professor de Go do Brasil!",
    images: [{ url: "/og.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poiret.className}`}>
      <body>
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
