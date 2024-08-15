import { Inter, Kumar_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const kumar = Kumar_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "CBS Electrica - empresa de servicios de electricidad",
  description:
    "En CBS Electrica, somos expertos en instalaciones eléctricas, sistemas fotovoltaicos y aerogeneradores en España. Ofrecemos soluciones energéticas integrales para hogares, empresas y comunidades, garantizando eficiencia y sostenibilidad. Nuestro equipo cualificado se dedica a proporcionar servicios de alta calidad, desde instalaciones eléctricas y de energía solar hasta el mantenimiento preventivo y correctivo. Nos comprometemos con la innovación tecnológica y el cuidado del medio ambiente, operando en toda España. Contacta con nosotros para mejorar tu eficiencia energética y reducir costos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ico.png" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} p-5 md:p-[20px] lg:p-[25px]`}>
        {children}
      </body>
    </html>
  );
}
