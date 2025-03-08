"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FormCancelMEI: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    comoConheceu: "",
    aceitarTermos: false,
  });

  const formatInput = (name: string, value: string) => {
    if (name === "telefone") {
      return value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2").slice(0, 15);
    }
    if (name === "cpf") {
      return value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2").slice(0, 14);
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : formatInput(name, value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceitarTermos) {
      alert("Você precisa aceitar os termos para continuar.");
      return;
    }
    sessionStorage.setItem("formData", JSON.stringify(formData));
    router.push("/planos");
  };

  return (
    <div id="form-mei" className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl border border-gray-200 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        ❌ <span className="text-red-600">Cancelar MEI</span> agora!
      </h2>
      <p className="text-gray-500 text-center mt-2">
        Preencha seus dados para iniciar o processo de cancelamento do seu CNPJ MEI.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Nome Completo *</label>
          <input type="text" name="nomeCompleto" placeholder="Ex: Fernando Alves da Silva" value={formData.nomeCompleto} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">E-mail *</label>
            <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Telefone *</label>
            <input type="tel" name="telefone" placeholder="(85) 99999-9999" value={formData.telefone} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">CPF *</label>
            <input type="text" name="cpf" placeholder="000.000.000-00" value={formData.cpf} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Data de Nascimento *</label>
            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Como nos conheceu?</label>
          <select name="comoConheceu" value={formData.comoConheceu} onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option value="">Selecionar</option>
            <option value="internet">Internet</option>
            <option value="indicacao">Indicação</option>
            <option value="redes_sociais">Redes Sociais</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="aceitarTermos" checked={formData.aceitarTermos} onChange={handleChange} className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500" required />
          <label className="ml-3 text-gray-700">
            Li e aceito os <a href="/termos" target="_blank" className="text-blue-600 font-semibold cursor-pointer">termos e condições</a>
          </label>
        </div>

        <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300">
          Solicitar Cancelamento do MEI
        </button>
      </form>
    </div>
  );
};

export default FormCancelMEI;
