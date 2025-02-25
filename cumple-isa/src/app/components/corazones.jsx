'use client';
import { useState, useEffect } from 'react';

export default function HeartEffect({ position }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heart = {
      id: Date.now() + Math.random(),
      x: position.x,
      y: position.y,
      size: Math.random() * 1000 + 50,
      opacity: 1
    };

    setHearts(prev => [...prev, heart]);

    const timer = setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== heart.id));
    }, 1000);

    return () => clearTimeout(timer);
  }, [position]);

  return (
    <>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="fixed pointer-events-none"
          style={{
            left: heart.x,
            top: heart.y,
            transform: `translate(-50%, -50%)`,
            animation: 'float-heart 1s ease-out forwards',
            fontSize: '2rem'
          }}
        >
          <span style={{ fontSize: `${heart.size}px` }}>❤️</span>
        </div>
      ))}
    </>
  );
}
