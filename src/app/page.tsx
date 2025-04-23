"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowRight, Leaf, Droplet, Sun, Moon, Apple, Heart, Sparkles, Instagram, Facebook, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] font-light tracking-[-0.03em]">
      {/* Header */}
      <header className="fixed w-full top-0 bg-gradient-to-b from-[#D6D2D3] to-[#F8FFFF] backdrop-blur-md z-50 border-b border-gray-100">
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
            <Link href="/quiz-face">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-medium mb-8">
                <span className="text-[#35426A]">Specialized protocols for </span>
                <span className="text-[#35426A]">longevity</span>
              </h1>
              <p className="text-xl text-[#7286B2] mb-12 leading-relaxed font-light">
                Discover our tailored programs designed specifically for women over 40.
                Our approach combines proven methods with modern science for effective and lasting results.
              </p>
              <Link href="/quiz-face">
                <Button
                  size="lg"
                  className="bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full transition-all duration-300 px-8"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-medium mb-4 text-[#35426A]">
                Our Specialized Programs
              </h2>
              <p className="text-[#7286B2] font-light">
                Comprehensive solutions designed for women's evolving needs after 40
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Sparkles className="h-6 w-6" />,
                  title: 'Anti-Age Protocol',
                  desc: 'Natural treatments to reduce aging effects and promote vitality'
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: 'Weight Loss',
                  desc: 'Specialized program for healthy and lasting weight loss after 40'
                },
                {
                  icon: <Leaf className="h-6 w-6" />,
                  title: 'Pilates',
                  desc: 'Pilates method adapted to strengthen, tone and rejuvenate the mature body'
                },
                {
                  icon: <Moon className="h-6 w-6" />,
                  title: 'Mind',
                  desc: 'Techniques for emotional balance, mental clarity and stress management'
                }
              ].map((program) => (
                <div key={program.title} className="group relative overflow-hidden p-8 bg-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-[#35426A] transition-colors duration-300"></div>
                  <div className="text-[#7286B2] mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">{program.icon}</div>
                  <h3 className="text-lg font-medium text-[#35426A] mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm text-[#7286B2] leading-relaxed font-light">{program.desc}</p>
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
                <h2 className="text-4xl font-medium mb-6 text-[#35426A] max-w-2xl">
                  Start your transformation journey today
                </h2>
                <p className="text-[#7286B2] mb-8 font-light max-w-2xl">
                  Join our community of women who have discovered their best version after 40. 
                  Our specialized programs are waiting for you.
                </p>
                <Button size="lg" className="bg-[#35426A] hover:bg-[#7286B2] text-white font-medium rounded-full transition-all duration-300 px-8">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
            <div className="text-[#7286B2] text-sm font-light">
              © 2024 All rights reserved
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
