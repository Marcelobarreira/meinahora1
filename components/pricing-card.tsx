import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import PaymentButton from './payment-button';

const plans = [
  { id: "price_12345", name: "Plano Básico", price: "R$ 29,90/mês" },
  { id: "price_67890", name: "Plano Premium", price: "R$ 49,90/mês" }
];

export default function PricingCard() {
  return (
    <Card className="w-[350px] text-left md:mt-20 mt-10">
      <CardHeader>
        <CardTitle>Plano Pro Premium VIP</CardTitle>
        <CardDescription>
          Tudo que você precisa para seus estudos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-8 mt-4">
          R$29
          <span className="font-normal text-muted-foreground text-lg">
            /mês
          </span>{' '}
        </p>
        <ul>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Acesso a 1 ebook por mês
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Curadoria especial
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Acesso ilimitado
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Cancele quando quiser
          </li>
        </ul>
      </CardContent>
      <CardFooter>
      <CardFooter>
  <PaymentButton priceId={plans[0].id}>Assinar</PaymentButton>
</CardFooter>

      </CardFooter>
    </Card>
  );
}
