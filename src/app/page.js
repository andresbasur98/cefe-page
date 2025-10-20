import { Navbar, PageWrapper } from "./components/Navbar";
import { Hero } from "./components/Home";
import { Servicios } from "./components/ServicesExpandes";
import { Proceso } from "./components/HowWeWork";
import { SobreNosotros } from "./components/AboutUs";
import { Zonas } from "./components/ServiceAreas";
import { CasosExito } from "./components/SuccesCases";
import { Opiniones } from "./components/Opiniones";
import { FAQ } from "./components/FAQ";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { GarantiasStrip } from "./components/GarantiasStrip";
import { HorarioMapa } from "./components/HorarioMapa";
import { AntesDespues } from "./components/AntesDespues";
import { Equipo } from "./components/Equipo";




export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <GarantiasStrip />
        <Servicios />
        <Proceso />
        <SobreNosotros />
      <Equipo />
        <Zonas />
        <CasosExito />
        <AntesDespues />
        <Opiniones />
        <FAQ />
        <HorarioMapa />
        <Contacto />
      </PageWrapper>
      <Footer />
    </>
  );
}

