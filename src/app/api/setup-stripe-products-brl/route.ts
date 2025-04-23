import { NextResponse } from 'next/server';
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-02-24.acacia',
});

export async function GET() {
  try {
    // Create or retrieve the product
    let product = await stripe.products.create({
      name: 'Protocolo Facial',
      description: 'Protocolo facial completo com suporte e garantia',
    });

    // Create prices for different subscription intervals
    const prices = {
      monthly: await stripe.prices.create({
        product: product.id,
        unit_amount: 19700, // R$197.00
        currency: 'brl',
        recurring: {
          interval: 'month',
        },
        metadata: {
          type: 'monthly'
        }
      }),
      semiannual: await stripe.prices.create({
        product: product.id,
        unit_amount: 58200, // R$582.00 (R$97 * 6)
        currency: 'brl',
        recurring: {
          interval: 'month',
          interval_count: 6
        },
        metadata: {
          type: 'semiannual'
        }
      }),
      annual: await stripe.prices.create({
        product: product.id,
        unit_amount: 68400, // R$684.00 (R$57 * 12)
        currency: 'brl',
        recurring: {
          interval: 'month',
          interval_count: 12
        },
        metadata: {
          type: 'annual'
        }
      })
    };

    // Update the product with the default price (monthly)
    await stripe.products.update(product.id, {
      default_price: prices.monthly.id
    });

    return NextResponse.json({ product, prices });
  } catch (error) {
    console.error('Error setting up Stripe products:', error);
    return NextResponse.json(
      { error: 'Failed to setup Stripe products' },
      { status: 500 }
    );
  }
} 