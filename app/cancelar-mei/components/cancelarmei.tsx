"use client";

export default function CancelamentoCnpjBanner() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-mei");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full min-h-[50vh] flex items-center justify-center px-6 sm:px-12 md:px-16 bg-cover bg-top relative font-sans"
      style={{ backgroundImage: "url('/image7.jpg')" }} // Substitua pelo caminho da sua imagem
    >
      {/* Overlay escuro para melhorar a leitura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo do banner */}
      <div className="relative z-10 max-w-2xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-tight tracking-wide">
          Cancelamento da Inscrição CNPJ MEI
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Cancele o registro do seu CNPJ MEI com rapidez, facilidade e segurança.
        </p>

        <ul className="mt-6 space-y-2 text-lg font-medium">
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> 100% Online
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Levantamento e regularização da atual situação
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Cancelamento em até 24 horas úteis
          </li>
          <li className="flex items-center">
            <span className="text-yellow-400 mr-2">✔</span> Certidão de baixa da inscrição do CNPJ
          </li>
        </ul>

        <p className="mt-4 font-semibold text-gray-100">
          Tenha segurança no processo de <span className="text-yellow-400">encerramento do seu MEI</span>.
        </p>

        {/* Botão que faz o scroll suave */}
        <button
          onClick={scrollToForm}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg uppercase tracking-wide rounded-md shadow-lg hover:bg-yellow-500 transition"
        >
          Cancelar CNPJ MEI
        </button>
      </div>
    </section>
  );
}
