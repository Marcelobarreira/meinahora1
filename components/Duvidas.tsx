"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DuvidasMEI = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Dúvidas sobre MEI</h1>
        <p className="mt-2 text-lg text-gray-600">
          Respondemos as principais dúvidas sobre a criação e manutenção do MEI.
        </p>
      </div>

      {/* Acordeão de Dúvidas */}
      <Accordion
        type="single"
        collapsible
        className="max-w-4xl mx-auto mt-10 space-y-4"
      >
        {[
          {
            question: "O que é um MEI?",
            answer:
              "MEI (Microempreendedor Individual) é uma categoria de empresa simplificada para pequenos negócios, permitindo emissão de notas fiscais e acesso a benefícios do INSS.",
          },
          {
            question: "Quem pode se tornar MEI?",
            answer:
              "Qualquer pessoa que fature até R$ 81.000 por ano, não tenha participação em outra empresa e atue em uma das atividades permitidas pelo MEI.",
          },
          {
            question: "Quais documentos são necessários para abrir um MEI?",
            answer:
              "Você precisa de CPF, RG, endereço residencial, número de telefone e um e-mail válido. A abertura do MEI é feita online no Portal do Empreendedor.",
          },
          {
            question: "Quais são os custos para manter um MEI?",
            answer:
              "O MEI paga uma taxa mensal fixa (DAS MEI), que varia entre R$ 78,00 e R$ 85,00 dependendo da atividade exercida.",
          },
          {
            question: "Posso contratar funcionários sendo MEI?",
            answer:
              "Sim, o MEI pode contratar um funcionário, pagando todos os direitos trabalhistas, como FGTS e INSS.",
          },
          {
            question: "O MEI precisa declarar imposto de renda?",
            answer:
              "Sim, o MEI deve enviar a Declaração Anual de Faturamento (DASN-SIMEI), além de declarar o Imposto de Renda como pessoa física, caso atinja o limite de isenção.",
          },
        ].map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg text-blue-800">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-md">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Chamada para mais dúvidas */}
      <div className="text-center mt-10">
        <p className="text-lg">
          Ainda tem dúvidas? Fale com um de nossos consultores no{" "}
          <span
          onClick={() => window.open("https://api.whatsapp.com/send?phone=5585991463668&text=Ol%C3%A1%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20MEI!")}
          className="text-green-500 cursor-pointer hover:underline">
            WhatsApp
          </span>{" "}
          e teremos o prazer em lhe ajudar!
        </p>
      </div>
    </section>
  );
};

export default DuvidasMEI;
