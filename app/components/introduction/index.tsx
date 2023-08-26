'use client';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Introduction() {
  return (
    <main
      id="intro"
      className="flex flex-col lg:justify-center items-center mt-2 pb-24 text-center"
    >
      <header>
        <h1 className="xl:text-4xl text-3xl font-bold">
          Gesso <span className="text-sky-500">Casa Decorada</span>
        </h1>
      </header>
      <h2 className="xl:text-2xl text-xl">
        Profissionais em gesso e decoração
      </h2>
      <br />
      <section>
        <Carousel
          ariaLabel="Gesso Displays"
          autoPlay
          emulateTouch
          infiniteLoop
          showStatus
          interval={2000}
          transitionTime={500}
          useKeyboardArrows
          className="w-[90dvw] lg:w-[50dvw] md:w-[60dvw] mx-auto border-sky-500 border-8 rounded-lg"
          showThumbs={false}
        >
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso1.jpg"
            alt="gesso"
            priority
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso2.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso3.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso4.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso5.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso6.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso7.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso8.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso9.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso10.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso11.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso12.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso13.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso14.jpg"
            alt="gesso"
          />
          <Image
            width={1000}
            height={1000}
            className="carousel-image"
            src="/images/gessos/gesso15.jpg"
            alt="gesso"
          />
        </Carousel>
      </section>
    </main>
  );
}
