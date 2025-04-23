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
    // First, try to find existing product
    const existingProducts = await stripe.products.list({
      limit: 1,
      active: true,
    });

    let product;
    let prices;

    if (existingProducts.data.length > 0) {
      // Use existing product
      product = existingProducts.data[0];
      
      // Get existing prices
      const existingPrices = await stripe.prices.list({
        product: product.id,
        active: true,
      });

      prices = {
        monthly: existingPrices.data.find(p => p.recurring?.interval === 'month' && p.recurring.interval_count === 1),
        semiannual: existingPrices.data.find(p => p.recurring?.interval === 'month' && p.recurring.interval_count === 6),
        annual: existingPrices.data.find(p => p.recurring?.interval === 'month' && p.recurring.interval_count === 12),
      };

      // Only create missing prices
      if (!prices.monthly) {
        prices.monthly = await stripe.prices.create({
          product: product.id,
          unit_amount: 19700,
          currency: 'brl',
          recurring: { interval: 'month' },
          metadata: { type: 'monthly' }
        });
      }

      if (!prices.semiannual) {
        prices.semiannual = await stripe.prices.create({
          product: product.id,
          unit_amount: 58200,
          currency: 'brl',
          recurring: { interval: 'month', interval_count: 6 },
          metadata: { type: 'semiannual' }
        });
      }

      if (!prices.annual) {
        prices.annual = await stripe.prices.create({
          product: product.id,
          unit_amount: 68400,
          currency: 'brl',
          recurring: { interval: 'month', interval_count: 12 },
          metadata: { type: 'annual' }
        });
      }
    } else {
      // Create new product and prices if none exist
      product = await stripe.products.create({
        name: 'Protocolo Facial',
        description: 'Protocolo facial completo com suporte e garantia',
      });

      prices = {
        monthly: await stripe.prices.create({
          product: product.id,
          unit_amount: 19700,
          currency: 'brl',
          recurring: { interval: 'month' },
          metadata: { type: 'monthly' }
        }),
        semiannual: await stripe.prices.create({
          product: product.id,
          unit_amount: 58200,
          currency: 'brl',
          recurring: { interval: 'month', interval_count: 6 },
          metadata: { type: 'semiannual' }
        }),
        annual: await stripe.prices.create({
          product: product.id,
          unit_amount: 68400,
          currency: 'brl',
          recurring: { interval: 'month', interval_count: 12 },
          metadata: { type: 'annual' }
        })
      };

      // Set default price
      await stripe.products.update(product.id, {
        default_price: prices.monthly.id
      });
    }

    return NextResponse.json({ product, prices });
  } catch (error) {
    console.error('Error setting up Stripe products:', error);
    return NextResponse.json(
      { error: 'Failed to setup Stripe products' },
      { status: 500 }
    );
  }
} 