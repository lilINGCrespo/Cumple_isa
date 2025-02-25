'use client';
import ImageModal from '../components/ImageModal';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const images = [
    "/Dibujo9.jpeg",
    "/carrusel.jpeg",
    "/carrusel1.jpeg",
    "/carrusel2.jpeg",
    "/carrusel3.jpeg",
    "/carrusel4.jpeg",
    "/carrusel5.jpeg",
    "/carrusel6.jpeg",
    // Añade más rutas de imágenes según necesites
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[16/9]">
            <Image
              src={image}
              alt={`Foto ${index + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ 
                objectFit: 'contain',
                margin: 'auto'
              }}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
