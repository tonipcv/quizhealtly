"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowRight, Leaf, Droplet, Sun, Moon, Apple, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
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
                  className="text-gray-600 hover:text-black tracking-wide font-light"
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
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-extralight tracking-wide mb-8">
                <span className="text-black">Natural wellness for </span>
                <span className="text-gray-600">women over 40</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed tracking-wide font-light">
                Experience the power of natural treatments designed specifically for women over 40.
                Our holistic approach combines ancient wisdom with modern science for optimal health and longevity.
              </p>
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white tracking-wide font-light"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extralight mb-4 text-black tracking-wide">
                Natural Treatments for Better Living
              </h2>
              <p className="text-gray-600 tracking-wide font-light">
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
                <div key={benefit.title} className="group relative overflow-hidden p-8 bg-white rounded-lg transition-all duration-300 hover:bg-gray-50 border border-gray-100">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-black transition-colors duration-300"></div>
                  <div className="text-gray-400 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{benefit.icon}</div>
                  <h3 className="text-lg font-light text-black mb-3 tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 tracking-wide leading-relaxed font-light">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="p-12 bg-black text-white text-center">
              <h2 className="text-3xl font-extralight mb-4 tracking-wide">
                Start Your Natural Wellness Journey Today
              </h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto tracking-wide font-light">
                Discover your personalized natural treatment plan designed specifically for your needs as a woman over 40. Experience the power of nature's most effective solutions.
              </p>
              <Link href="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-50 border-none tracking-wide font-light"
                >
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-50 border-t border-gray-100">
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
            <p className="text-sm text-gray-600 tracking-wide font-light">
              © 2025 NaturalBloom. All rights reserved. Empowering women over 40 with natural wellness solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
