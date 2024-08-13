"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export const Acordeon = () => {
  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="INSTALACIONES ELECTRICAS"
        className="text-[25px] sm:text-[30px] lg:text-[45px] outline-none"
      >
        <p className="text-sm sm:text-xl">
          En CBS Electrica, nos especializamos en ofrecer soluciones completas
          de instalaciones eléctricas para hogares, empresas y edificios
          industriales. Con un equipo de electricistas certificados y altamente
          cualificados, garantizamos un servicio seguro, eficiente y adaptado a
          las necesidades específicas de cada cliente.
        </p>
          <ul className="list-disc p-5 text-sm sm:text-lg">
            <li className="mt-2">
              <u className="font-bold">
                Instalaciones Eléctricas Residenciales:
              </u>{" "}
              Desde la instalación de sistemas eléctricos en nuevas
              construcciones hasta la modernización de redes eléctricas
              existentes, aseguramos un entorno doméstico seguro y funcional.
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Instalaciones Eléctricas Comerciales:
              </u>{" "}
              Ofrecemos servicios para oficinas, locales comerciales y edificios
              públicos, asegurando un suministro eléctrico fiable y eficiente
              que cumpla con todas las normativas vigentes.
            </li>
            <li className="mt-2">
              <u className="font-bold">Mantenimiento y Reparaciones:</u>{" "}
              Proporcionamos servicios de mantenimiento preventivo y correctivo
              para mantener sus sistemas eléctricos en perfecto estado,
              minimizando el riesgo de averías y mejorando la eficiencia
              energética.
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Iluminación Interior y Exterior:
              </u>{" "}
              Instalamos sistemas de iluminación personalizados que mejoran la
              estética y funcionalidad de cualquier espacio, tanto en interiores
              como en exteriores.
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Sistemas de Seguridad Eléctrica::
              </u>{" "}
              Implementamos soluciones de seguridad, incluyendo la instalación
              de dispositivos de protección contra sobretensiones, sistemas de
              alarma y detección de incendios.
            </li>
          </ul>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="INSTALACIONES FOTOVOLTAICAS"
        className="text-[25px] sm:text-[30px] lg:text-[45px] outline-none"
      >
        <p className="text-sm sm:text-xl">
          En CBS Electrica, estamos comprometidos con la sostenibilidad y la
          energía limpia. Ofrecemos soluciones completas de instalaciones
          fotovoltaicas para hogares, empresas y propiedades industriales,
          ayudándote a reducir tu huella de carbono y a ahorrar en tus facturas
          de energía.
        </p>
          <ul className="list-disc p-5 text-sm sm:text-lg">
            <li className="mt-2">
              <u className="font-bold">
                Estudios de Viabilidad y Asesoramiento Personalizado
              </u>
              Analizamos tus necesidades energéticas y las características de tu
              propiedad para diseñar la solución fotovoltaica más eficiente y
              rentable.
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Diseño e Instalación de Sistemas Fotovoltaicos:
              </u>{" "}
              Instalamos paneles solares de alta calidad y sistemas completos,
              garantizando una integración óptima y el máximo rendimiento
              energético.
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Mantenimiento y Monitorización:{" "}
              </u>{" "}
              Ofrecemos servicios de mantenimiento preventivo y correctivo, así
              como sistemas de monitorización para asegurar que tu instalación
              fotovoltaica funcione de manera óptima en todo momento.
            </li>
          </ul>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="INSTALACIONES DE TELECOMUNICACIONES"
        className="text-[25px] sm:text-[30px] lg:text-[45px] outline-none"
      >
        <p className="text-sm sm:text-xl">
          En CBS Electrica, ofrecemos soluciones completas y de alta calidad en
          instalaciones de telecomunicaciones para hogares, empresas y
          organizaciones. Con un equipo de expertos en telecomunicaciones,
          garantizamos que tu infraestructura de comunicaciones sea robusta,
          eficiente y preparada para el futuro
        </p>
          <ul className="list-disc p-5 text-sm sm:text-lg">
            <li className="mt-2">
              <u className="font-bold">Instalación de Redes de Datos: </u>{" "}
              Diseñamos e instalamos redes de datos estructuradas para oficinas,
              edificios comerciales y hogares, asegurando una conectividad
              rápida y fiable.
            </li>
            <li className="mt-2">
              <u className="font-bold">Sistemas de Voz y Telefonía:</u>{" "}
              Implementamos sistemas de telefonía IP y tradicionales que
              optimizan la comunicación dentro de tu organización.{" "}
            </li>
            <li className="mt-2">
              <u className="font-bold">
                Configuración de Wi-Fi y Redes Inalámbricas:
              </u>{" "}
              Instalamos y configuramos redes inalámbricas de alta cobertura y
              rendimiento, adaptadas a las necesidades específicas de tu
              espacio.
            </li>
          </ul>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Estructuras y Soportes para pantallas"
        className="text-[25px] sm:text-[30px] lg:text-[45px] outline-none"
      >
        <p className="text-sm sm:text-xl">
          En CBS Electrica, nos especializamos en la creación de estructuras y
          soportes personalizados para pantallas, diseñados para cumplir con los
          más altos estándares de calidad y funcionalidad. Nuestro equipo de
          expertos combina tecnología de punta y materiales de alta calidad para
          ofrecer soluciones que se adaptan a cualquier tipo de pantalla y
          entorno.
        </p>
          <ul className="list-disc p-5 text-sm sm:text-lg">
            <li className="mt-2">
              <u className="font-bold">Diseño Personalizado: </u> Creamos
              soportes a medida que se integran perfectamente en el espacio,
              asegurando una estética impecable y un rendimiento óptimo.
            </li>
            <li className="mt-2">
              <u className="font-bold">Instalación Profesional:</u> Nos
              encargamos de todo el proceso de instalación, garantizando que
              cada soporte esté correctamente montado y seguro.{" "}
            </li>
            <li className="mt-2">
              <u className="font-bold">Materiales de Calidad</u>{" "}
              Utilizamos materiales duraderos y resistentes, ideales para
              soportar pantallas de cualquier tamaño y peso.
            </li>
            <li className="mt-2">
              <u className="font-bold">Mantenimiento y Soporte: </u>{" "}
              Ofrecemos servicios de mantenimiento para asegurar que las
              estructuras y soportes se mantengan en perfectas condiciones a lo
              largo del tiempo.
            </li>
          </ul>
      </AccordionItem>
    </Accordion>
  );
};
