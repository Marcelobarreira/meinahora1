"use client";

import React from "react";
import Header from "@/components/Header"; // Importando o Header padrão

const TermosCondicoes = () => {
  return (
    <>
      <Header /> {/* Adicionando o Header padrão */}

      <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Termos e Condições
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Última atualização: <strong>24 de Fevereiro de 2025</strong>
        </p>

        <div className="mt-6 space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">1. Introdução</h2>
            <p>
              Bem-vindo ao nosso site de assessoria e regularização MEI. Ao acessar e utilizar nossos serviços, você concorda com os seguintes Termos e Condições. Leia atentamente antes de continuar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">2. Serviços Prestados</h2>
            <p>Oferecemos serviços de assessoria e regularização para Microempreendedores Individuais (MEI), incluindo:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Abertura de MEI;</li>
              <li>Alteração de dados cadastrais;</li>
              <li>Regularização de débitos e guias atrasadas;</li>
              <li>Encerramento de CNPJ MEI;</li>
              <li>Consultoria e suporte contábil;</li>
              <li>Declaração anual do MEI.</li>
            </ul>
            <p className="mt-2">Os serviços são realizados conforme as normas vigentes e podem sofrer alterações sem aviso prévio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">3. Responsabilidades do Usuário</h2>
            <p>Ao contratar nossos serviços, o usuário concorda que:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Fornecerá informações corretas e atualizadas;</li>
              <li>É responsável por acompanhar prazos de pagamentos e declarações;</li>
              <li>Compreende que a responsabilidade final pela gestão do MEI é do próprio empreendedor.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">4. Pagamentos e Reembolsos</h2>
            <p>Nossos serviços podem ser contratados mediante pagamento prévio. As regras de reembolso são:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>O valor pago pelo serviço não será reembolsado após a execução do mesmo;</li>
              <li>Reembolsos poderão ser analisados caso o serviço não tenha sido iniciado;</li>
              <li>Cancelamentos devem ser solicitados pelo suporte antes da finalização do processo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">5. Privacidade e Proteção de Dados</h2>
            <p>
              Os dados fornecidos são utilizados exclusivamente para prestação dos serviços contratados, seguindo as diretrizes da <strong>Lei Geral de Proteção de Dados (LGPD)</strong>. Garantimos sigilo e proteção das informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">6. Limitação de Responsabilidade</h2>
            <p>
              Não nos responsabilizamos por atrasos causados por órgãos públicos, problemas técnicos fora do nosso controle ou falta de cumprimento das obrigações por parte do cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">7. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">8. Contato</h2>
            <p>
              Caso tenha dúvidas sobre os Termos e Condições, entre em contato pelo e-mail{" "}
              <span className="font-semibold text-blue-600">suporte@seudominio.com</span>.
            </p>
          </section>
        </div>

      </div>
    </>
  );
};

export default TermosCondicoes;
