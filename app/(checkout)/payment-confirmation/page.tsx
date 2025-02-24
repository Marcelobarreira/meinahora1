import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default async function CheckoutReturnPage() {
  return (
    <Card className="max-w-lg mt-10 text-center">
      <CardContent>
        <CardHeader className="text-center">
          <ShoppingBag className="text-green-500 mx-auto mb-4 w-12 h-12"/>
          <CardTitle>
            Assinatura Confirmada
          </CardTitle>
          <CardDescription>
            Obrigado por confiar no trabalho.
          </CardDescription>
        </CardHeader>
        <div className="text-gray-700 text-sm">
          <p>Seu Pagamento foi processado com sucesso.</p>
        </div>
      </CardContent>
      <Link href="/dashboard" className={cn(buttonVariants(), 'mt-12')}>
        Ir para Dashboard
      </Link>
    </Card>
  )

}
