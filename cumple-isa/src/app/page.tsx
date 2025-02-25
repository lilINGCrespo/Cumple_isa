'use client';
import { useState } from 'react';
import Image from "next/image";

import Carousel from './components/Carousel';
import HeartEffect from './components/corazones';

interface ClickPosition {
  x: number;
  y: number;
  id: number;
}

export default function Home() {
  const [clicks, setClicks] = useState<ClickPosition[]>([]);

  const handleButtonClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setClicks([...clicks, { x, y, id: Date.now() }]);
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
              ¡Feliz Cumpleaños, Isabel! 🎂✨
            </h1>
            <p className="text-lg text-gray-700">
              Querida Isabel, hoy celebramos tu día especial con todo el amor que te mereces. 
              Tu sonrisa ilumina cada momento y hace que todo sea más hermoso.
            </p>
          </div>
          
          <div className="carousel-container rounded-lg overflow-hidden shadow-xl">
            <Carousel />
          </div>
        </div>

        <button 
          onClick={handleButtonClick}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
        >
          ¡Click para amor! 💕
        </button>
      </div>
      
      {clicks.map((position) => (
        <HeartEffect key={position.id} position={position} />
      ))}
    </main>
  );
}
