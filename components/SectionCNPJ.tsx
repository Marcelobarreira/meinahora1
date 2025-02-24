"use client";

import React from "react";

const SectionCNPJ: React.FC = () => {
  return (
    <section className="w-full bg-blue-600 py-16 flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Texto à esquerda */}
        <div className="text-white max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold">
            Facilitamos seu CNPJ MEI online
          </h2>
          <p className="mt-4 text-lg">
            Estamos aqui para impulsionar seu potencial, ajudando você a
            transformar ideias em resultados e alcançar o sucesso.
          </p>
        </div>

        {/* Caixa verde à direita */}
        <div className="bg-green-500 text-white p-6 rounded-lg mt-6 md:mt-0 w-full max-w-md text-center shadow-lg">
          <h3 className="text-2xl font-bold">Abrir seu MEI</h3>

          {/* Botão amarelo */}
          <button className="mt-4 bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition">
            ABRIR MEI
          </button>

          {/* Mensagem de segurança */}
          <p className="mt-4 text-sm flex items-center justify-center">
            🔒 Aqui seus dados estão seguros e serão utilizados para fins de uso
            interno em nossa plataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCNPJ;
