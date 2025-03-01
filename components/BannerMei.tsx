"use client";

export default function BannerMEI() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-mei");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="w-full min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-8 bg-cover bg-fixed relative"
      style={{ backgroundImage: "url('/image6.jpg')" }} // Substitua pelo caminho correto da imagem
    >
      {/* Overlay escuro para melhorar a leitura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo centralizado */}
      <div className="max-w-4xl text-center text-white relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Assessoria Digital Especializada em <span className="text-blue-600">MEI</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl">
          Realize agora mesmo a abertura do seu <span className="font-bold">CNPJ MEI</span> de forma rápida e 100% online.
        </p>

        <ul className="mt-6 text-left space-y-3 text-base sm:text-lg md:text-xl">
          {[
            "Registro da abertura do CNPJ MEI",
            "Assessoria completa na abertura do CNPJ",
            "Materiais didáticos para introdução ao universo MEI",
            "Planilha de controle de faturamento",
            "Abertura dentro de 24 horas",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-yellow-300">➔</span> {item}
            </li>
          ))}
        </ul>

        <button
        onClick={scrollToForm}
        className="mt-4 px-3 py-3 bg-blue-600 text-white font-bold text-lg rounded-2xl shadow-md hover:bg-blue-700 transition w-full sm:w-auto">
          Abrir meu MEI agora
        </button>
      </div>
    </section>
  );
}
