import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

// Base URL for different environments
const baseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_DOMAIN || 'https://your-production-domain.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { planId, email, amount, duration } = body;

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Wall Pilates ${duration}`,
              description: 'Custom Wall Pilates Program for Women Over 40',
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/quiz`,
      customer_email: email,
      metadata: {
        planId,
        duration,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 