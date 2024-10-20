//app\Components\Navbar.js

import React from 'react';
import { useRouter } from 'next/navigation'; // Nueva API de navegación
import { LogoutIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Limpia la autenticación y redirige al login
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <nav className="flex justify-between items-center bg-purple-700 p-4">
      <div className="flex-grow-0 flex-shrink-0">
        {/* Ícono circular (Placeholder para el logo) */}
        <div className="w-10 h-10 rounded-full bg-white"></div>
      </div>
      
      <div className="flex-grow flex justify-center">
        {/* Input para el buscador */}
        <input
          type="text"
          placeholder="🔍 Buscar..."
          className="w-full max-w-md rounded-md p-2 border-none outline-none text-black"
        />
      </div>

      <div className="flex-grow-0 flex-shrink-0 flex items-center space-x-4">
        {/* Ícono de logout */}
        <button onClick={handleLogout} className="flex items-center space-x-2 text-white cursor-pointer">
          <LogoutIcon className="h-6 w-6" />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
