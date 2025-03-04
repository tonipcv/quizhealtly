"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowRight, Leaf, Droplet, Sun, Moon, Apple, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f2ee]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-[#f8f2ee]/90 backdrop-blur-md z-50 border-b border-[#e6d9d0]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="p-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0"
              />
            </div>
            
            {/* Mobile Menu */}
            <Link href="/quiz">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link href="/quiz">
                <Button
                  variant="ghost"
                  className="text-[#9b7e6b] hover:text-[#7d5f4d] tracking-[-0.03em] font-medium"
                >
                  Start Your Journey
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#f8f2ee] to-[#f0e6e0]">
          <div className="max-w-6xl mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] mb-8">
                <span className="text-[#7d5f4d]">Natural wellness for </span>
                <span className="text-[#c2967d]">women over 40</span>
              </h1>
              <p className="text-xl text-[#9b7e6b] mb-12 leading-relaxed tracking-[-0.03em]">
                Experience the power of natural treatments designed specifically for women over 40.
                Our holistic approach combines ancient wisdom with modern science for optimal health and longevity.
              </p>
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-[#c2967d] hover:bg-[#a17a62] text-white tracking-[-0.03em] font-medium"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-[#f0e6e0]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-[#7d5f4d] tracking-[-0.03em]">
                Natural Treatments for Better Living
              </h2>
              <p className="text-[#9b7e6b] tracking-[-0.03em]">
                Discover nature's most effective solutions for women's wellness after 40
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: <Leaf className="h-6 w-6" />,
                  title: 'Herbal Remedies',
                  desc: 'Natural solutions for hormone balance and energy enhancement'
                },
                {
                  icon: <Sun className="h-6 w-6" />,
                  title: 'Light Therapy',
                  desc: 'Boost mood and regulate sleep patterns naturally'
                },
                {
                  icon: <Apple className="h-6 w-6" />,
                  title: 'Nutritional Support',
                  desc: 'Age-appropriate nutrition for vitality and longevity'
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: 'Heart Health',
                  desc: 'Natural approaches to cardiovascular wellness'
                },
                {
                  icon: <Moon className="h-6 w-6" />,
                  title: 'Sleep Enhancement',
                  desc: 'Improve sleep quality with natural protocols'
                },
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: 'Anti-Aging',
                  desc: 'Natural ways to maintain youthful energy and appearance'
                }
              ].map((benefit) => (
                <div key={benefit.title} className="group relative overflow-hidden p-8 bg-[#f0e6e0] rounded-lg transition-all duration-300 hover:bg-[#e6d9d0]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#d4bfb3] group-hover:bg-[#c2967d] transition-colors duration-300"></div>
                  <div className="text-[#a17a62] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{benefit.icon}</div>
                  <h3 className="text-lg font-medium text-[#7d5f4d] mb-3 tracking-[-0.03em]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#9b7e6b] tracking-[-0.03em] leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="p-12 bg-gradient-to-r from-[#c2967d] to-[#a17a62] text-white text-center">
              <h2 className="text-3xl font-bold mb-4 tracking-[-0.03em]">
                Start Your Natural Wellness Journey Today
                </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto tracking-[-0.03em]">
                Discover your personalized natural treatment plan designed specifically for your needs as a woman over 40. Experience the power of nature's most effective solutions.
              </p>
              <Link href="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#027bbd] hover:bg-white/90 border-none tracking-[-0.03em] font-medium"
                >
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#f0e6e0] border-t border-[#e6d9d0]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="p-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={36}
                className="h-8 w-auto brightness-0"
              />
            </div>
            <p className="text-sm text-[#505050] tracking-[-0.03em]">
              © 2025 NaturalBloom. All rights reserved. Empowering women over 40 with natural wellness solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
