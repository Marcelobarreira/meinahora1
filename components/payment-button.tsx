// PaymentButton.tsx
"use client";

import { useCallback } from "react";
import { Button } from "./ui/button";
import { loadStripe } from '@stripe/stripe-js';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

type PaymentButtonProps = {
  children: React.ReactNode;
  priceId: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
  'pk_test_51Qw0zxFNSFKsmZrR1JWl8OucZ2Bf3tWRw6dTzDklFb3eSe2vEJmxf2JRi0I0wYxJ3Yq4U8mCOCXzBotVbROaBKgD007C181Hzq'
);

export default function PaymentButton({ children, priceId }: PaymentButtonProps) {
  const fetchClientSecret = useCallback(() => {
    return fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, [priceId]);

  const options = { fetchClientSecret };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full bg-indigo-600  text-white font-bold py-2 px-4 hover:bg-indigo-700 transition duration-200 mt-2">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <VisuallyHidden.Root>
          <DialogTitle>Comprar</DialogTitle>
        </VisuallyHidden.Root>
        <div id="checkout">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
