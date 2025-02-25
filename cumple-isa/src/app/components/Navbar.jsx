const Navbar = () => {
  return (
    <nav className="bg-pink-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-pink-600">
          Isabel Geoconda Mera Villegas
        </a>
        
        <div className="space-x-6">
          <a href="/modelaje" className="text-gray-700 hover:text-pink-600 transition">Modelaje</a>
          <a href="/dibujo" className="text-gray-700 hover:text-pink-600 transition">Dibujo</a>
          <a href="/nosotros" className="text-gray-700 hover:text-pink-600 transition">Tú y Yo</a>
          <a href="/tienda" className="text-gray-700 hover:text-pink-600 transition">Tienda</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
