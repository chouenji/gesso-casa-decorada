import Link from 'next/link';
import React from 'react';

type ButtonProps = {
  text: string;
  bg: string;
  linkType: 'tel' | 'mailto' | 'maps' | 'whatsapp' | 'facebook' | 'instagram';
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
  } else if (linkType === 'maps') {
    link = (
      <Link target="_blank" href="https://goo.gl/maps/6w1Q5y6xWn8ZJt8z5">
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
  }

  return (
    <>
      <button
        className={`${width} h-12 rounded-lg font-bold px-5 ${bg} ${
          bg === 'black' ? 'text-white bg-black' : 'text-black bg-white'
        }`}
      >
        {link}
      </button>
    </>
  );
};

export default Button;
