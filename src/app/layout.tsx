import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { poiret } from "~/app/assets/font";

export const metadata: Metadata = {
  title: "Huang Go",
  description: "Sempre quis aprender Go? Aula online ou presencial, ministradas pelo professor Tony Huang. Lições de forma personalizada e única para o seu estilo!",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  openGraph: {
    title: "Huang Go",
    description: "Sempre quis aprender Go? Aula online ou presencial, ministradas pelo professor Tony Huang. Lições de forma personalizada e única para o seu estilo!",
    images: [{ url: "/images/og.jpg" }],
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
