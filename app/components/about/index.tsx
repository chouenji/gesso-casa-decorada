import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsersGear,
  faUserGroup,
  faUserShield,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <section
      id="sobre"
      className="flex flex-col lg:justify-center items-center pb-24 border-t-4 border-sky-500"
    >
      <h1 className="text-4xl font-bold mt-2 mb-2">Sobre nós</h1>
      <div className="flex justify-center items-center lg:flex-row flex-col p-10 w-full">
        <div className="flex flex-col items-center justify-center p-5 xl:w-1/3 w-full">
          <FontAwesomeIcon size="2xl" icon={faUsersGear} />
          <h2 className="text-2xl font-bold">Missão</h2>
          <p className="text-xl text-center p-5">
            Nossa missão é transformar espaços com criatividade e inovação,
            usando decorações que refletem a personalidade única de cada
            cliente.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 xl:w-1/3 w-full">
          <FontAwesomeIcon size="2xl" icon={faUserAlt} />
          <h2 className="text-2xl font-bold">Objetivos</h2>
          <p className="text-xl text-center p-5">
            Nossos objetivos são oferecer serviços de qualidade, com
            profissionalismo e dedicação, para que nossos clientes fiquem
            satisfeitos.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center p-5 xl:w-1/3 w-full">
          <FontAwesomeIcon size="2xl" icon={faUserShield} />
          <h2 className="text-2xl font-bold">Valores</h2>
          <p className="text-xl text-center p-5">
            Nossos valores são profundamente fundamentados na integridade,
            refletindo nossa firme adesão aos mais altos padrões éticos e
            morais.
          </p>
        </div>
      </div>
    </section>
  );
}
