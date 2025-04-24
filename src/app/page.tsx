"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowRight, Sparkles, Heart, Star, Zap, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] font-normal tracking-[-0.03em]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-[#D6D2D3]/80 backdrop-blur-lg z-50 border-b border-gray-100/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="p-2">
              <Image
                src="/logo.png"
                alt="VUOM"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="https://app.vuom.life/login">
                <Button
                  variant="ghost"
                  className="text-[#35426A] hover:text-[#7286B2] font-medium"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="https://app.vuom.life/register">
                <Button
                  className="bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full px-6"
                >
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="https://app.vuom.life/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#35426A]"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/onboarding">
                <Button
                  variant="ghost"
                  size="icon"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="max-w-2xl">
                <h1 className="text-5xl sm:text-6xl font-bold mb-8">
                  <span className="text-[#35426A]">Elevate Your Beauty </span>
                  <span className="text-[#35426A]">Through Advanced Science</span>
                </h1>
                <p className="text-xl text-[#7286B2] mb-12 leading-relaxed font-normal">
                  Experience the fusion of Korean beauty protocols and regenerative medicine in our premium cellular rejuvenation journey. Exclusively crafted for discerning women who embrace ageless beauty with confidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/onboarding">
                    <Button
                      size="lg"
                      className="bg-[#35426A] hover:bg-[#7286B2] text-white font-semibold rounded-full transition-all duration-300 px-8"
                    >
                      Discover Your Protocol
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="https://app.vuom.life/register">
                    <Button
                      size="lg"
                      className="bg-transparent border-2 border-[#35426A] text-[#35426A] hover:bg-[#35426A] hover:text-white font-semibold rounded-full transition-all duration-300 px-8"
                    >
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:flex-1 relative">
                <Image
                  src="/ad-vuom.png"
                  alt="VUOM Beauty"
                  width={600}
                  height={800}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-[#35426A]">
                Complete Luxury Self-Care Ecosystem
              </h2>
              <p className="text-[#7286B2] font-normal">
                Where advanced technology meets visible transformation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: 'Premium Skincare',
                  desc: 'Exclusive pharmaceutical-grade formulations with high-performance active ingredients'
                },
                {
                  icon: <Star className="h-6 w-6" />,
                  title: 'Korean Protocols',
                  desc: 'Sophisticated beauty rituals enhanced by cutting-edge technology'
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: 'Regenerative Medicine',
                  desc: 'Advanced clinical procedures and supplements for cellular rejuvenation'
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'AI Personalization',
                  desc: 'Bespoke protocols crafted by artificial intelligence for exceptional results'
                }
              ].map((program) => (
                <div key={program.title} className="group relative overflow-hidden p-8 bg-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-[#35426A] transition-colors duration-300"></div>
                  <div className="text-[#7286B2] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{program.icon}</div>
                  <h3 className="text-lg font-semibold text-[#35426A] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#7286B2] leading-relaxed font-normal">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-12 md:p-20 relative overflow-hidden border border-gray-100">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-[#35426A] max-w-2xl">
                  Experience Your Personalized Transformation
                </h2>
                <p className="text-[#7286B2] mb-8 font-normal max-w-2xl">
                  Discover the perfect harmony of high-performance beauty technology and sophisticated design. 
                  Begin your journey to timeless beauty today.
                </p>
                <Link href="/onboarding">
                  <Button size="lg" className="bg-[#35426A] hover:bg-[#7286B2] text-white font-semibold rounded-full transition-all duration-300 px-8">
                    Begin Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10">
                <Image
                  src="/decoration.png"
                  alt="Decorative pattern"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#7286B2] text-sm font-normal">
              © 2024 VUOM™ - All rights reserved
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#7286B2] hover:text-[#35426A] transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#7286B2] hover:text-[#35426A] transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#7286B2] hover:text-[#35426A] transition-all duration-300 hover:scale-110">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
