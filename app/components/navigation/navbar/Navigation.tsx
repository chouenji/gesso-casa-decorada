'use client';
import { useState } from 'react';
import Navbar from '.';
import Sidebar from '../sidebar/index';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </nav>
  );
};

export default Navigation;
