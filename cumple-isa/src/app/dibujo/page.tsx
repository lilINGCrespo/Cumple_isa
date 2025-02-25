import ImageModal from '../components/ImageModal';

export default function DibujoPage() {
  const dibujos = [
    '/d.jpeg',
    '/Dibujo.jpeg',
    '/Dibujo1.jpeg',
    '/Dibujo2.jpeg',
    '/Dibujo3.jpeg',
    '/Dibujo4.jpeg',
    '/Dibujo5.jpeg',
    '/Dibujo6.jpeg',
    '/Dibujo7.jpeg',
    '/Dibujo8.jpeg',
    '/Dibujo9.jpeg',
    '/Dibujo10.jpeg',
    // Añade aquí todas las rutas de las fotos
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Galería de Dibujos de Isabel
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dibujos.map((dibujo, index) => (
          <ImageModal
            key={index}
            src={dibujo}
            alt={`Dibujo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
