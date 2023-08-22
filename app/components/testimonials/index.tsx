import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="bg-black text-white flex flex-col lg:justify-center items-center mt-2 p-10 pb-24 text-center"
    >
      <h1 className="text-4xl font-bold mt-2 mb-2">Depoimentos</h1>
      <br />
      <div className="flex flex-col xl:flex-row items-center mb-4">
        <div className="flex flex-col items-center mb-4 xl:w-1/3 w-full">
          <h2 className="text-2xl font-bold mt-2 mb-2">Marjorie G.</h2>
          <div className="flex">
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
          </div>
          <p className="text-xl text-center p-5">
            &quot;Desde o primeiro contato, percebi o profissionalismo e a
            dedicação da equipe. O resultado final ficou incrível!&quot;
          </p>
        </div>

        <div className="flex flex-col items-center mb-4 xl:w-1/3 w-full">
          <h2 className="text-2xl font-bold mt-2 mb-2">Simoni C.</h2>
          <div className="flex">
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
          </div>
          <p className="text-xl text-center p-5">
            &quot;A transformação que a Gesso Casa Decorada fez na minha casa
            foi incrível! Cada detalhe reflete a atenção e dedicação da
            equipe.&quot;
          </p>
        </div>

        <div className="flex flex-col items-center mb-4 xl:w-1/3 w-full">
          <h2 className="text-2xl font-bold mt-2 mb-2">Vera R.</h2>
          <div className="flex">
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
            <FontAwesomeIcon
              className="text-sky-500 p-2"
              icon={faStar}
              size="2x"
            />
          </div>
          <p className="text-xl text-center p-5">
            &quot;A Gesso Casa Decorada é uma empresa que preza pela qualidade e
            pelo bom atendimento. Recomendo!&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
