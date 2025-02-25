'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)} 
        className="cursor-pointer"
      >
        <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-full max-w-4xl h-auto">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
