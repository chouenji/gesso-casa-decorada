import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  text: string;
  bg: string;
  linkType:
    | 'tel'
    | 'mailto'
    | 'url'
    | 'whatsapp'
    | 'facebook'
    | 'instagram'
    | 'galeria';
  width?: string;
};

const Button = ({ width, text, bg, linkType }: ButtonProps) => {
  let link: JSX.Element | null = null;

  if (width === undefined) width = 'w-64';

  if (linkType === 'tel') {
    link = <Link href="tel:+5551980234989">{text}</Link>;
  } else if (linkType === 'mailto') {
    link = (
      <Link target="_blank" href="mailto:gessocasadecoradars@gmail.com">
        {text}
      </Link>
    );
  } else if (linkType === 'url') {
    link = (
      <Link
        target="_blank"
        href="https://www.google.com/maps/place/Gesso+Casa+Decorada/@-29.7197474,-50.0001601,17z/data=!4m20!1m13!4m12!1m4!2m2!1d-49.9976287!2d-29.7198764!4e1!1m6!1m2!1s0x952281d29dc33f8d:0x4d546d330f8b6af4!2sgesso+casa+decorada!2m2!1d-49.9975277!2d-29.7196401!3m5!1s0x952281d29dc33f8d:0x4d546d330f8b6af4!8m2!3d-29.7196788!4d-49.9974513!16s%2Fg%2F11rb42zxcn?entry=ttu"
      >
        {text}
      </Link>
    );
  } else if (linkType === 'whatsapp') {
    link = (
      <Link target="_blank" href="https://wa.me/5551980234989">
        {text}
      </Link>
    );
  } else if (linkType === 'facebook') {
    link = (
      <Link target="_blank" href="https://www.facebook.com/gessocasadecorada">
        {text}
      </Link>
    );
  } else if (linkType === 'instagram') {
    link = (
      <Link target="_blank" href="https://www.instagram.com/gessocasadecorada/">
        {text}
      </Link>
    );
  } else if (linkType === 'galeria') {
    link = <Link href="#galeria">{text}</Link>;
  }

  return (
    <>
      <button
        className={`${width} h-12 rounded-lg ${bg} ${
          bg === 'bg-black' ? 'text-white' : 'text-black'
        } font-bold px-5`}
      >
        {link}
      </button>
    </>
  );
};

export default Button;
