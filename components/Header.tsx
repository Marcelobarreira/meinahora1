"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo clicável que leva para a página principal */}
        <Link href="/" className="flex items-center cursor-pointer rounded-lg">
          <Image
            src="/logoc.png" // Certifique-se que a imagem está na pasta public/
            alt="Logo"
            width={75} 
            height={20} 
            className="h-auto"
          />
        </Link>

        {/* Navegação na direita */}
        <nav className="flex items-center space-x-6 font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">Início</a>

          {/* Dropdown de Serviços */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Serviços
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white border rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Abrir MEI
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Alterar MEI
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Cancelar MEI
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Declaração Anual
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Atraso das Guias
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Voltar a ser MEI
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Assessoria Mensal
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Regularização / Reativar MEI
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
