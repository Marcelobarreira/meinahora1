"use client";

import { useRouter } from "next/navigation";


interface Plano {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

const planos: Plano[] = [
  {
    id: "plano-1",
    name: "Serviço 1",
    price: "R$ 0,01",
    description: "Plano básico para iniciar seu MEI.",
    features: ["Abertura do CNPJ", "Suporte via WhatsApp", "Consultoria gratuita"],
  },
  {
    id: "plano-2",
    name: "Serviço 2",
    price: "R$ 0,02",
    description: "Plano completo para seu MEI com suporte premium.",
    features: ["Abertura do CNPJ", "Suporte VIP", "Assessoria contábil", "Consultoria detalhada"],
  },
];

export default function PlanosLista() {
  const router = useRouter();

  const selecionarPlano = (plano: Plano) => {
    sessionStorage.setItem("planoSelecionado", JSON.stringify(plano));
    router.push("/checkout");
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-indigo-600">Escolha seu plano</h2>
        <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Selecione a melhor opção para você
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mx-auto max-w-4xl">
        {planos.map((plano) => (
          <div
            key={plano.id}
            className="relative bg-white shadow-lg ring-1 ring-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-600">{plano.name}</h3>
              <p className="mt-2 text-3xl font-bold text-gray-900">{plano.price}</p>
              <p className="mt-3 text-gray-600">{plano.description}</p>

              <ul className="mt-6 space-y-2 text-gray-700">
                {plano.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => selecionarPlano(plano)}
              className="mt-6 w-full py-3 px-6 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition"
            >
              Selecionar plano
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
