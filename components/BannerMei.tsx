export default function BannerMEI() {
    return (
      <section className="w-full min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Assessoria Digital Especializada em <span className="text-yellow-300">MEI</span>
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
  
          <button className="mt-4 px-3 py-3 bg-yellow-400 text-blue-900 font-bold text-lg rounded-md shadow-lg hover:bg-yellow-500 transition w-full sm:w-auto">
            Abrir meu MEI agora
          </button>
        </div>
      </section>
    );
  }
  