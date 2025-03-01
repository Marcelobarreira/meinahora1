"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function CheckoutReturnPage() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    // Recupera os dados salvos no localStorage e extrai o nomeCompleto
    const formDataString = localStorage.getItem("formData");
    if (formDataString) {
      try {
        const formData = JSON.parse(formDataString);
        setNome(formData.nomeCompleto ? formData.nomeCompleto.trim() : "");
      } catch (error) {
        console.error("Erro ao parsear formData do localStorage", error);
      }
    }
  }, []);

  // Criando a URL do WhatsApp com a mensagem personalizada
  const whatsappNumber = "558581720037";
  const mensagem = `Olá, finalizei meu pagamento, quando podemos começar?`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(mensagem)}`;

  return (
    <Card className="max-w-lg mt-10 text-center">
      <CardContent>
        <CardHeader className="text-center">
          <ShoppingBag className="text-green-500 mx-auto mb-4 w-12 h-12" />
          <CardTitle>Pagamento Confirmado</CardTitle>
          <CardDescription>Obrigado por confiar no nosso trabalho!</CardDescription>
        </CardHeader>
        <div className="text-gray-700 text-sm space-y-2">
          <p>Seu pagamento foi processado com sucesso.</p>
          <p>Em algumas horas, um membro da nossa equipe entrará em contato para dar continuidade.</p>
        </div>
        <div className="mt-6">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            Suporte Personalizado
          </Link>
        </div>
      </CardContent>
      <Link href="/dashboard" className={cn(buttonVariants(), "mt-12 block")}>
        Ir para Dashboard
      </Link>
    </Card>
  );
}
