"use client";

export default function RegularizacaoCnpjBanner() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-mei");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full min-h-[50vh] flex items-center justify-center px-6 sm:px-12 md:px-16 bg-cover bg-top relative font-sans"
      style={{ backgroundImage: "url('/image6.jpg')" }} // Substitua pelo caminho da sua imagem
    >
      {/* Overlay escuro para melhorar a leitura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo do banner */}
      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-tight tracking-wide">
          Regularização do CNPJ MEI
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Regularize seu CNPJ MEI com segurança e rapidez, evitando pendências e problemas futuros.
        </p>

        <ul className="mt-6 space-y-2 text-lg font-medium">
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Parcelamento de Débitos
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Declaração Anual em atraso
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Reativação do CNPJ suspenso
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Regularização de pendências na Receita Federal
          </li>
        </ul>

        <p className="mt-4 font-semibold text-gray-100">
          Resolva todas as pendências do seu <span className="text-yellow-400">CNPJ MEI</span> de forma simples e rápida.
        </p>

        {/* Botão que faz o scroll suave */}
        <button
          onClick={scrollToForm}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg uppercase tracking-wide rounded-md shadow-lg hover:bg-yellow-500 transition"
        >
          Regularizar MEI
        </button>
      </div>
    </section>
  );
}
