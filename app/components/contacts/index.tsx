import React from 'react';
import Button from '../button';

export default function Contacts() {
  return (
    <section id="contatos" className="flex flex-col items-center mt-2 pb-24">
      <h1 className="text-4xl font-bold mt-2 mb-10">Contatos</h1>
      <div className="flex flex-col">
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold mt-2 mb-2">(51) 98023-4989</h2>
            <Button text="Ligar agora" linkType="tel" bg={'bg-black'} />
          </div>
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-2xl font-bold mt-2 mb-2">Whatsapp</h2>
            <Button
              text="Mandar um WhatsApp"
              linkType="whatsapp"
              bg={'bg-black'}
            />
          </div>
          <h2 className="text-2xl font-bold mt-2 mb-2">E-mail</h2>
          <Button
            text="Mandar um e-mail agora"
            linkType="mailto"
            bg={'bg-black'}
          />
        </div>
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-bold mt-2 mb-2">Endereço </h2>
          <Button text="Ver no Google Maps" linkType="url" bg={'bg-black'} />
        </div>

        <div className="flex flex-col items-center mb-4">
          <h2 className="text-2xl font-bold mt-2 mb-2">Redes Sociais</h2>
          <div className="flex flex-row gap-x-4">
            <Button
              text="Facebook"
              linkType="facebook"
              bg={'bg-black'}
              width={'w-32'}
            />
            <Button
              text="Instagram"
              linkType="instagram"
              bg={'bg-black'}
              width={'w-32'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
