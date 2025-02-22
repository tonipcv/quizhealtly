import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(request: Request) {
  try {
    const { planId, email } = await request.json();

    // Get plan details
    const planPrices = {
      '1-week': { price: 728, // in pence
        successUrl: '/success?plan=1-week',
        cancelUrl: '/quiz?step=36&plan=1-week' },
      '4-week': { price: 1595,
        successUrl: '/success?plan=4-week',
        cancelUrl: '/quiz?step=36&plan=4-week' },
      '12-week': { price: 2729,
        successUrl: '/success?plan=12-week',
        cancelUrl: '/quiz?step=36&plan=12-week' }
    };

    const plan = planPrices[planId as keyof typeof planPrices];

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Wall Pilates ${planId} Plan`,
            },
            unit_amount: plan.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}${plan.successUrl}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}${plan.cancelUrl}`,
      customer_email: email,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 