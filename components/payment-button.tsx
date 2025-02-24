'use client';

import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { loadStripe } from '@stripe/stripe-js';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

type PaymentButtonsProps = {
  children: React.ReactNode;
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? 'pk_test_51Qw0zxFNSFKsmZrR1JWl8OucZ2Bf3tWRw6dTzDklFb3eSe2vEJmxf2JRi0I0wYxJ3Yq4U8mCOCXzBotVbROaBKgD007C181Hzq');

export default function PaymentButton({ children }: PaymentButtonsProps) {
  const fetchClientSecret = useCallback(() => {
    return fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, [])

  const options = {fetchClientSecret};
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
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
