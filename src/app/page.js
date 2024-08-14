import Image from "next/image";
import { kumar } from "./layout";
import { Acordeon } from "./components/Acordeon";

export default function Home() {
  return (
    <>
      <h1
        className={`${kumar.className} text-[56px] sm:text-[100px] lg:text-[160px] text-transparent  text-stroke text-shadow-lg shadow-slate-100`}
      >
        CBS
      </h1>
      <div className="mt-[-25px] sm:mt-[-40px]">
        <div className="w-full h-1 sm:h-2 rounded mt-2 bg-blue-700"></div>
        <div className="w-full h-1 sm:h-2 rounded mt-2 bg-yellow-300"></div>
        <div className="w-full h-1 sm:h-2 rounded mt-2 bg-green-700"></div>
        <div className="w-full h-1 sm:h-2 rounded mt-2 bg-red-700"></div>
      </div>
      <h1
        className={`${kumar.className} text-[56px] sm:text-[100px] lg:text-[160px] text-transparent  text-stroke text-shadow-lg`}
      >
        ELECTRICA
      </h1>

      <h2 className="text-[25px] sm:text-[35px] lg:text-[45px]">Empresa de servicios de electricidad</h2>
      <div className="bg-white w-full h-0.5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
        <div className="flex items-center justify-start sm:justify-center mt-2  text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width={50}
          >
            <g id="Layer_38" data-name="Layer 38">
              <path
                fill="white"
                d="M53.09,30.82A1.5,1.5,0,0,0,53,28.73l-4.3-3.85h0L33,10.88a1.5,1.5,0,0,0-2,0l-15.66,14h0L11,28.73a1.59,1.59,0,0,0-.49,1,1.52,1.52,0,0,0,1.19,1.59c0,.05,3,0,3.1,0V52a1.5,1.5,0,0,0,1.5,1.5H26.45A1.5,1.5,0,0,0,28,52V39.56h8.1V52a1.5,1.5,0,0,0,1.5,1.5H47.66a1.5,1.5,0,0,0,1.5-1.5V31.35H52A1.48,1.48,0,0,0,53.09,30.82Zm-14,19.68V38.06a1.5,1.5,0,0,0-1.5-1.5H26.45a1.5,1.5,0,0,0-1.5,1.5V50.5H17.84V29.85A1.57,1.57,0,0,0,16,28.35l1.38-1.23h0L32,14,46.66,27.12h0L48,28.35a1.58,1.58,0,0,0-1.88,1.51V50.5Z"
              />
            </g>
          </svg>
          <span>C.Arroyo de San Juan, 30,28210, Madrid</span>
        </div>
        <div className="flex items-center  justify-start sm:justify-center mt-2 text-lg">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            width={40}
          >
            <title />
            <g id="Email">
              <path
                fill="white"
                d="M25,4H7A5,5,0,0,0,2,9V23a5,5,0,0,0,5,5H25a5,5,0,0,0,5-5V9A5,5,0,0,0,25,4ZM7,6H25a3,3,0,0,1,2.4,1.22s0,0-.08,0L18,15.79a3,3,0,0,1-4.06,0L4.68,7.26l-.08,0A3,3,0,0,1,7,6ZM25,26H7a3,3,0,0,1-3-3V9.36l8.62,7.9a5,5,0,0,0,6.76,0L28,9.36V23A3,3,0,0,1,25,26Z"
              />
            </g>
          </svg>
          <span>cbselectrica@gmail.com</span>
        </div>

        <div className="flex items-center  justify-start sm:justify-center mt-2 text-lg">
          <svg
            width={40}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.2 44C32.955 44 32.71 43.99 32.464 43.972C28.4193 43.6634 24.5468 42.2063 21.302 39.772C16.3478 36.0561 11.9471 31.6548 8.232 26.7C5.7974 23.4553 4.34024 19.5828 4.032 15.538C3.9254 14.1646 4.11763 12.7845 4.59547 11.4925C5.07331 10.2006 5.82541 9.02748 6.8 8.05401L9.306 5.54501C10.2957 4.55703 11.637 4.00214 13.0355 4.00214C14.434 4.00214 15.7753 4.55703 16.765 5.54501L19.031 7.81201C19.5208 8.30175 19.9093 8.88318 20.1744 9.52309C20.4395 10.163 20.5759 10.8489 20.5759 11.5415C20.5759 12.2341 20.4395 12.92 20.1744 13.5599C19.9093 14.1998 19.5208 14.7813 19.031 15.271L17.731 16.571C17.1971 17.1071 16.8648 17.8112 16.7903 18.5641C16.7158 19.3171 16.9036 20.0726 17.322 20.703C19.9532 24.6571 23.3451 28.048 27.3 30.678C27.9306 31.0957 28.686 31.2831 29.4388 31.2085C30.1915 31.134 30.8955 30.8022 31.432 30.269L32.732 28.969C33.2217 28.4792 33.8032 28.0907 34.4431 27.8256C35.083 27.5605 35.7689 27.4241 36.4615 27.4241C37.1541 27.4241 37.84 27.5605 38.4799 27.8256C39.1198 28.0907 39.7013 28.4792 40.191 28.969L42.458 31.235C42.9478 31.7248 43.3363 32.3062 43.6014 32.9461C43.8665 33.586 44.0029 34.2719 44.0029 34.9645C44.0029 35.6571 43.8665 36.343 43.6014 36.9829C43.3363 37.6228 42.9478 38.2043 42.458 38.694L39.946 41.2C39.0607 42.0871 38.0092 42.791 36.8517 43.2715C35.6942 43.7519 34.4533 43.9995 33.2 44ZM13.035 6.00001C12.6051 5.99946 12.1792 6.0838 11.782 6.2482C11.3847 6.41259 11.0238 6.65381 10.72 6.95801L8.211 9.46801C7.44055 10.2377 6.84595 11.1652 6.46808 12.1866C6.0902 13.208 5.93802 14.2992 6.022 15.385C6.30282 19.0505 7.62427 22.5597 9.831 25.5C13.4327 30.3017 17.6983 34.5673 22.5 38.169C25.4401 40.3761 28.9494 41.6976 32.615 41.978C33.7007 42.0606 34.7914 41.9077 35.8127 41.5299C36.8339 41.1522 37.7614 40.5583 38.532 39.789L41.041 37.28C41.655 36.6658 41.9999 35.833 41.9999 34.9645C41.9999 34.0961 41.655 33.2632 41.041 32.649L38.774 30.383C38.1506 29.787 37.3214 29.4544 36.459 29.4544C35.5966 29.4544 34.7674 29.787 34.144 30.383L32.844 31.683C31.9804 32.5427 30.8465 33.0777 29.6339 33.1978C28.4213 33.3179 27.2044 33.0156 26.189 32.342C22.015 29.5655 18.4355 25.986 15.659 21.812C14.9852 20.7966 14.6828 19.5797 14.8029 18.3671C14.923 17.1545 15.4582 16.0205 16.318 15.157L17.618 13.857C18.232 13.243 18.5769 12.4103 18.5769 11.542C18.5769 10.6737 18.232 9.84099 17.618 9.22701L15.351 6.95901C15.0471 6.6546 14.686 6.41319 14.2886 6.24862C13.8912 6.08405 13.4652 5.99956 13.035 6.00001V6.00001Z"
              fill="white"
            />
          </svg>
          <span> +34 652881789</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 mb-5">
        <Image
          className="rounded"
          width={350}
          height={275}
          alt="Bombillas"
          src="/bombillas.jpg"
        />
        <Image
          className="rounded"
          width={350}
          height={275}
          alt="Placa"
          src="/placa.jpg"
        />
        <Image
          className="rounded"
          width={350}
          height={275}
          alt="Placas solares"
          src="/placas-solares.jpg"
        />
        <Image
          className="rounded"
          width={350}
          height={275}
          alt="Central electrica"
          src="/central-electrica.jpg"
        />
      </div>

      <h2 className="text-[25px] sm:text-[35px] lg:text-[45px]">Clientes que han confiado en nosotros</h2>
      <div className="bg-white w-full h-0.5"></div>
      <div className="w-full">
        <Image
          className="mx-auto"
          width={895}
          height={279}
          alt="Empresas"
          src="/empresas.png"
        />
      </div>

      <Acordeon />

      <h2 className="text-[25px] sm:text-[30px] lg:text-[45px] mt-5">¿Por qué elegirnos?</h2>
      <ul className="list-disc p-5 text-lg">
        <li className="mt-2">
          <u className="font-bold">Experiencia y Profesionalismo:</u> Contamos
          con un equipo de técnicos cualificados y con amplia experiencia en el
          sector de las telecomunicaciones.
        </li>
        <li className="mt-2">
          <u className="font-bold">Tecnología de Vanguardia:</u> Utilizamos los
          mejores equipos y tecnologías del mercado para asegurar que tu
          infraestructura de comunicaciones esté a la altura de las últimas
          tendencias.
        </li>
        <li className="mt-2">
          <u className="font-bold">Compromiso con la Calidad:</u> Nos esforzamos
          por ofrecer un servicio de alta calidad, cumpliendo con los estándares
          más exigentes y garantizando la satisfacción de nuestros clientes.
        </li>
        <li className="mt-2">
          <u className="font-bold">Soluciones Personalizadas:</u> Analizamos tus
          necesidades específicas y diseñamos soluciones a medida que se adapten
          perfectamente a tus requerimientos.
        </li>
        <li className="mt-2">
          <u className="font-bold">Soporte Integral:</u> Desde la planificación
          inicial hasta el soporte post-instalación, te acompañamos en cada
          etapa del proyecto para asegurar su éxito.
        </li>
      </ul>

     <div className="w-full mt-5 text-center">
      <span>@CBSELECTRICA</span>
      </div>
    </>
  );
}
