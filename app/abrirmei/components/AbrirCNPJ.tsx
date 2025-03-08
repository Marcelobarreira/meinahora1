"use client";

export default function CnpjBanner() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-mei");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
  className="w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[50vh] flex items-center justify-center px-6 sm:px-12 md:px-16 bg-cover bg-center relative font-sans"
  style={{ backgroundImage: "url('/image7.jpg')" }} // Substitua pelo caminho correto da imagem
>
  {/* Overlay escuro para melhorar a leitura */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Conteúdo do banner */}
  <div className="relative z-10 max-w-2xl text-white">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-tight tracking-wide">
      Abra agora seu CNPJ MEI
    </h1>
    <p className="mt-4 text-lg text-gray-200">
      Faça agora mesmo o registro do seu CNPJ MEI, cadastre-se em nosso site e receba dentro de 24h o seu certificado MEI.
    </p>

    <ul className="mt-6 space-y-2 text-lg font-medium">
      <li className="flex items-center">
        <span className="text-yellow-400 mr-2">✔</span> Negócio Legal
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 mr-2">✔</span> Gere Notas Eletrônicas
      </li>
      <li className="flex items-center">
        <span className="text-yellow-400 mr-2">✔</span> Fature até R$ 81.000,00 ao ano
      </li>
    </ul>

    <p className="mt-4 font-semibold text-gray-100">
      Aproveite as vantagens de ser um <span className="text-yellow-400">Microempreendedor Individual.</span>
    </p>

    {/* Botão que faz o scroll suave */}
    <button
      onClick={scrollToForm}
      className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold text-lg uppercase tracking-wide rounded-md shadow-lg hover:bg-yellow-500 transition w-full max-w-xs sm:w-auto"
    >
      Abrir CNPJ MEI
    </button>
  </div>
</section>

  );
}
