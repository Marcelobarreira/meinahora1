import { NextResponse } from 'next/server';
import Stripe from 'stripe';


export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'sk_test_51Qw0zxFNSFKsmZrRApp7t3UEquK9cUFizZesf2LANql79rlq576sydDkGqxUHhcIQ0V3uyAoPTWe9YUCwwZFCIr700KbX3vKfU');

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          quantity: 1,
          price: process.env.STRIPE_PRICE_ID_PRODUTO_1
        }
      ],
      mode: 'payment',
      payment_method_types: ['card'],
      return_url: `${req.headers.get('origin')}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    })

    return NextResponse.json({
      sessionId: session.id,
      client_secret: session.client_secret,
    });
  } catch (e) {
    return Response.json(e, { status: 400 })
  }

}
