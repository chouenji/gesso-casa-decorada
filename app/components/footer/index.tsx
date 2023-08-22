import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import React from 'react';

export default function footer() {
  return (
    <footer className="bg-black text-white w-full h-24 border-t">
      <br />
      <div className="flex items-center justify-center gap-x-4 mb-2">
        <Link target="_blank" href="https://www.facebook.com/gessocasadecorada">
          <FontAwesomeIcon
            className="text-sky-500"
            icon={faFacebook}
            size="2x"
          />
        </Link>
        <Link
          className="text-pink-500"
          target="_blank"
          href="https://www.instagram.com/gessocasadecorada"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </div>
      <div className="text-center w-full">
        <span className="text-sm">Desenvolvido por </span>
        <Link href="https://chouenji.netlify.app/pt">
          <span className="text-sm text-sky-500">chouenji</span>
        </Link>
      </div>
    </footer>
  );
}
