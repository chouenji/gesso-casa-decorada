'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Button from '../button';

export default function Introduction() {
  return (
    <main
      id="intro"
      className="flex flex-col lg:justify-center items-center mt-2 pb-24 text-center"
    >
      <header>
        <h1 className="text-4xl font-bold">
          Gesso <span className="text-sky-500">Casa Decorada</span>
        </h1>
      </header>
      <h2 className="text-2xl">Profissionais em gesso e decoração</h2>
      <br />

      <section>
        <Carousel
          ariaLabel="Gesso Displays"
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus
          swipeable
          dynamicHeight
          interval={2000}
          transitionTime={500}
          useKeyboardArrows
          className="w-[90dvw] lg:w-[50dvw] md:w-[60dvw] mx-auto"
        >
          <>
            <img width={500} src="/images/gessos/gesso1.png" alt="Gesso 1" />
            <p className="legend">Alguma de nossas obras!</p>
          </>
          <>
            <img src="/images/gessos/gesso1.png" alt="Gesso 1" />
            <p className="legend">Alguma de nossas obras!</p>
          </>
          <>
            <img src="/images/gessos/gesso1.png" alt="Gesso 1" />
            <p className="legend">Alguma de nossas obras!</p>
          </>
        </Carousel>
        <Button text="Ver mais na Galeria" bg="bg-black" linkType="galeria" />
      </section>
    </main>
  );
}
