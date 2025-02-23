"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, ArrowRight, Heart, Brain, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="bg-[#027bbd] p-2 rounded-lg">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={36}
                className="h-8 w-auto"
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
                  className="text-[#263853] hover:text-[#027bbd] tracking-[-0.03em] font-medium"
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
        <section className="relative pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] mb-8">
                <span className="text-[#263853]">Transform your life with </span>
                <span className="text-[#027bbd]">mindful movement</span>
              </h1>
              <p className="text-xl text-[#505050] mb-12 leading-relaxed tracking-[-0.03em]">
                Discover a personalized approach to wellness that combines Pilates, 
                nutrition, and mindfulness for lasting health and vitality.
              </p>
              <Link href="/quiz">
                <Button
                  size="lg"
                  className="bg-[#027bbd] hover:bg-[#0269a3] text-white tracking-[-0.03em] font-medium"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-[#f5fafc]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-[#263853] tracking-[-0.03em]">
                Your Path to Longevity
              </h2>
              <p className="text-[#505050] tracking-[-0.03em]">
                Holistic wellness for mind and body
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: 'Physical Wellness',
                  desc: 'Strengthen your body through targeted Pilates exercises'
                },
                {
                  icon: <Brain className="h-8 w-8" />,
                  title: 'Mental Clarity',
                  desc: 'Enhance focus and reduce stress through mindful movement'
                },
                {
                  icon: <Activity className="h-8 w-8" />,
                  title: 'Lasting Vitality',
                  desc: 'Build sustainable habits for long-term health'
                }
              ].map((benefit) => (
                <Card key={benefit.title} className="p-6 bg-white border-none shadow-sm">
                  <div className="text-[#027bbd] mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-[#263853] mb-2 tracking-[-0.03em]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#505050] tracking-[-0.03em]">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="p-12 bg-[#027bbd] text-white text-center">
              <h2 className="text-3xl font-bold mb-4 tracking-[-0.03em]">
                Ready to Transform Your Life?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto tracking-[-0.03em]">
                Take the first step towards a healthier, more vibrant you. 
                Our personalized programs are designed to meet you where you are.
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

      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="bg-[#027bbd] p-1.5 rounded-lg">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={30}
                className="h-6 w-auto"
              />
            </div>
            <p className="text-sm text-[#505050] tracking-[-0.03em]">
              © 2024 RH Pilates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
