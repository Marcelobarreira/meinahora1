"use client";

export default function MeiSupportSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-mei");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-900">
          Suporte completo para <span className="text-blue-600">MEIs</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Tudo o que você precisa para manter sua empresa regularizada conforme as exigências legais.
        </p>
      </div>

      {/* Serviços Oferecidos - Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Abertura MEI", description: "Facilitamos a abertura do seu CNPJ MEI de forma rápida e segura." },
          { title: "Regularização MEI", description: "Corrija pendências e mantenha seu CNPJ sempre ativo." },
          { title: "Declaração MEI", description: "Preencha sua Declaração Anual de Faturamento sem complicações." },
          { title: "Assessoria MEI", description: "Tire todas as suas dúvidas e evite problemas fiscais." },
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Explicação sobre o suporte */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 mt-12">
        <p className="text-lg">
          Nossa equipe está pronta para ajudá-lo desde o início da sua jornada como Microempreendedor Individual.
          Resolvemos suas principais dúvidas, guiamos você nos primeiros meses e garantimos que sua empresa
          esteja sempre em dia com as obrigações.
        </p>
        <p className="mt-4 text-lg">
          Após a contratação, oferecemos suporte completo sobre emissão de notas fiscais, declaração anual de faturamento,
          guias mensais no SIMEI, benefícios do MEI, fluxo de caixa e muito mais!
        </p>

        {/* Botão de Chamada para Ação */}
        <button
        onClick={scrollToForm}
        className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition">
          Quero abrir meu MEI
        </button>
      </div>
    </section>
  );
}
