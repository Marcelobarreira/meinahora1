"use client";

import { useEffect, useState } from "react";

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
    name: "Abertura + consultoria simples",
    price: "R$ 130,00",
    description: "Plano básico para iniciar seu MEI.",
    features: ["Abertura do CNPJ", "Suporte via WhatsApp", "Consultoria gratuita"],
  },
  {
    id: "plano-2",
    name: "Abertura + consultoria completa",
    price: "R$ 200,00",
    description: "Plano completo para seu MEI com suporte premium.",
    features: ["Abertura do CNPJ", "Suporte VIP", "Assessoria contábil", "Consultoria detalhada"],
  },
  {
    id: "plano-3",
    name: "Serviço de Regularização completa",
    price: "R$ 200,00",
    description: "Serviço completo para regularização do seu MEI com assessoria especializada.",
    features: [
      "Regularização fiscal",
      "Assessoria jurídica",
      "Consultoria especializada",
      "Suporte contínuo",
    ],
  },
  {
    id: "plano-4",
    name: "Cancelamento de MEI",
    price: "R$ 79,00",
    description: "Encerramos seu CNPJ MEI de forma rápida e segura.",
    features: [
      "Processo 100% online",
      "Encerramento do MEI com segurança",
      "Certidão de baixa do CNPJ",
      "Regularização e levantamento da situação",
    ],
  },
];

export default function PlanosLista() {
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    // Recupera os dados do formulário do sessionStorage
    const storedData = sessionStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Função para formatar CPF como XXX.XXX.XXX-XX
  const formatarCPF = (cpf: string) => {
    return cpf
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  // Função para formatar data de nascimento como DD/MM/AAAA
  const formatarDataNascimento = (data: string) => {
    if (!data) return "Não informado";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  // Função para formatar telefone como (XX) XXXXX-XXXX
  const formatarTelefone = (telefone: string) => {
    return telefone
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata para (XX) XXXXX-XXXX
  };

  const enviarParaWhatsApp = (plano: Plano) => {
    if (!formData) {
      alert("Erro ao recuperar os dados do formulário.");
      return;
    }

    const mensagem = `
      Olá, gostaria de contratar o serviço *${plano.name}*.
      Aqui estão meus dados:

      📌 Nome: ${formData.nomeCompleto}
      📧 Email: ${formData.email}
      📞 Telefone: ${formatarTelefone(formData.telefone)}
      🆔 CPF: ${formatarCPF(formData.cpf)}
      🎂 Nascimento: ${formatarDataNascimento(formData.dataNascimento)}
      📢 Como conheceu: ${formData.comoConheceu ?? "Não informado"}

      💰 Valor do serviço: *${plano.price}*
    `;

    const telefoneWhatsApp = "5585991463668"; // Número do WhatsApp para atendimento
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefoneWhatsApp}&text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, "_blank");
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

            {/* Botão para redirecionar ao WhatsApp */}
            <button
              onClick={() => enviarParaWhatsApp(plano)}
              className="mt-6 w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Escolher este serviço
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
