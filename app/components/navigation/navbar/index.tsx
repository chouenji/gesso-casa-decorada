import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from '../../button';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-24 bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <div className="w-1/3 hidden md:block">
            <Logo />
          </div>
          <button
            type="button"
            className="inline-flex items-center md:hidden order-3"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#0EA5E9"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className="w-1/3 hidden md:flex md:w-full justify-start gap-x-6 text-white flex-grow xl:justify-center items-center">
            <li>
              <Link className="hover:text-sky-500" href="#depoimentos">
                <p>Depoimentos</p>
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-500" href="#sobre">
                <p>Sobre Nós</p>
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-500" href="#contatos">
                <p>Contatos</p>
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center xl:justify-end w-full  xl:w-1/3 order-2">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-white  text-4xl mr-1"
            />
            <span className="text-white text-xl mr-2">
              <Button
                text="(51) 98023-4989"
                bg="bg-white"
                linkType="whatsapp"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
