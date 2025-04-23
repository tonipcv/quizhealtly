"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowLeft, Check } from "lucide-react";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

const defaultPlans = [
  {
    name: "Anual",
    price: "57",
    pricePerDay: "1,90",
    period: "por mês",
    priceId: "",
    popular: true,
    features: [
      "Tudo do plano semestral",
      "Economia de R$1.680",
      "Acesso vitalício",
      "Mentoria individual"
    ]
  },
  {
    name: "Mensal",
    price: "197",
    pricePerDay: "6,57",
    period: "por mês",
    priceId: "",
    features: [
      "Acesso ao protocolo completo",
      "Suporte via WhatsApp",
      "Atualizações mensais",
      "Garantia de 7 dias"
    ]
  },
  {
    name: "Semestral",
    price: "97",
    pricePerDay: "3,23",
    period: "por mês",
    priceId: "",
    features: [
      "Tudo do plano mensal",
      "Economia de R$600",
      "Bônus exclusivos",
      "Garantia estendida"
    ]
  }
];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [loadingPrices, setLoadingPrices] = useState(true);
  const [plans, setPlans] = useState(defaultPlans);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  useEffect(() => {
    setLoadingPrices(true);
    fetch('/api/setup-stripe-products-brl')
      .then(response => response.json())
      .then(data => {
        if (data.prices) {
          setPlans(plans.map((plan, index) => ({
            ...plan,
            priceId: index === 0 ? data.prices.annual.id :
                     index === 1 ? data.prices.monthly.id :
                     data.prices.semiannual.id
          })));
        }
      })
      .catch(error => console.error('Error fetching prices:', error))
      .finally(() => setLoadingPrices(false));
  }, []);

  const handleSubscribe = async (priceId: string) => {
    try {
      setLoading(true);
      
      // Get the current domain
      const domain = window.location.origin;
      
      const response = await fetch('/api/create-checkout-session-brl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${domain}/checkout/success`,
          cancelUrl: `${domain}/checkout/protocol-face`,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (!data.sessionId) {
        throw new Error('No session ID returned');
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe not initialized');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId
      });

      if (error) {
        console.error('Stripe redirect error:', error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/face-protocol" className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>

            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={30}
                className="h-8 w-auto object-contain brightness-0"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-100 px-3 py-1.5 rounded text-sm font-medium">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Protocolo FaceKorea
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Escolha seu plano
            </h2>
            <p className="text-lg text-gray-600">
              Comece sua transformação hoje mesmo
            </p>
          </div>

          {/* Discount Timer */}
          <div className="bg-black text-white p-4 rounded-xl text-center mb-8">
            <span className="font-medium">60% de desconto expira em: </span>
            <span className="font-bold">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
          </div>

          {/* Pricing Plans */}
          <div id="select-membership" className="space-y-4">
            {loadingPrices ? (
              // Loading skeleton
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
                  <div className="space-y-3">
                    {Array(4).fill(0).map((_, j) => (
                      <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              plans.map((plan) => (
                <div
                  key={plan.name}
                  onClick={() => !loading && setSelectedPlan(plan.name)}
                  className={`relative bg-white rounded-xl p-6 cursor-pointer transition-all duration-200
                    ${loading ? 'opacity-50 cursor-not-allowed' : ''}
                    ${selectedPlan === plan.name 
                      ? 'ring-2 ring-[#35426A] shadow-lg scale-[1.02]' 
                      : 'hover:shadow-md border border-gray-200'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-[#35426A] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Mais Vantajoso
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="flex items-center justify-between sm:block">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">{plan.name}</div>
                        <div className="flex items-baseline gap-2">
                          <span className="line-through text-gray-400 text-sm">R${parseInt(plan.price) * 2}</span>
                          <span className="text-lg sm:text-xl font-bold text-[#35426A]">R${plan.price}</span>
                          <span className="text-sm text-gray-500">/mês</span>
                        </div>
                      </div>
                      
                      <div className="sm:hidden">
                        <div className="text-sm font-medium text-gray-500 mb-1">Apenas</div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-[#35426A]">R${plan.pricePerDay}</span>
                          <span className="text-sm text-gray-500">/dia</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block sm:text-right">
                      <div className="text-sm font-medium text-gray-500 mb-1">Apenas</div>
                      <div className="flex items-baseline gap-1 sm:justify-end">
                        <span className="text-3xl sm:text-4xl font-bold text-[#35426A]">R${plan.pricePerDay}</span>
                        <span className="text-sm text-gray-500">/dia</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#35426A]/5 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#35426A]" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!loading && plan.priceId) {
                        handleSubscribe(plan.priceId);
                      }
                    }}
                    disabled={loading || !plan.priceId}
                    className={`w-full mt-6 py-3 px-4 rounded-lg text-white font-medium transition-all
                      ${selectedPlan === plan.name ? 'bg-[#35426A] hover:bg-[#35426A]/90' : 'bg-[#35426A]/90 hover:bg-[#35426A]'}
                      ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Processando...' : 'Selecionar este plano'}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-8 bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">Garantia de 7 dias</h3>
            <p className="text-gray-600">
              Receba 100% do seu dinheiro de volta se não ver resultados visíveis seguindo nosso programa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 