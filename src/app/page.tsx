"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import QuizModal from './components/QuizModal';
import { Menu, X, Code, Server, Cloud, ArrowRight, ExternalLink } from 'lucide-react';
import { Lekton } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const lekton = Lekton({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState('dream');
  const words = ['dream', 'billion', 'coach'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(current => {
        const currentIndex = words.indexOf(current);
        return words[(currentIndex + 1) % words.length];
      });
    }, 2000); // Muda a cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-white to-white/50 flex items-center justify-center">
              <Code className="w-5 h-5 text-black" />
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-white/80"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-zinc-900 border-white/10">
                  {['Expertise', 'Work', 'Contact'].map((item) => (
                    <DropdownMenuItem
                      key={item}
                      className="text-white/80 hover:text-white focus:text-white cursor-pointer"
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm text-white hover:text-white/80">
                    Expertise
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[450px] bg-zinc-900/90 backdrop-blur-md border-white/10 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Development</h4>
                      <div className="space-y-2">
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          <Code className="mr-2 h-4 w-4" />
                          Web Development
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          <Server className="mr-2 h-4 w-4" />
                          Mobile Apps
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          <Cloud className="mr-2 h-4 w-4" />
                          Cloud Solutions
                        </DropdownMenuItem>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Services</h4>
                      <div className="space-y-2">
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          MVP Development
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          UI/UX Design
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          Consulting
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm text-white hover:text-white/80">
                    Work
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[450px] bg-zinc-900/90 backdrop-blur-md border-white/10 p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Recent Projects</h4>
                      <div className="space-y-2">
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          <div>
                            <p className="font-medium">Trading Platform</p>
                            <p className="text-sm text-white/60">Real-time market data and automated trading</p>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                          <div>
                            <p className="font-medium">Healthcare App</p>
                            <p className="text-sm text-white/60">HIPAA-compliant telehealth solution</p>
                          </div>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    <Separator className="bg-white/10" />
                    <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                      View All Projects →
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm text-white hover:text-white/80">
                    Contact
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[350px] bg-zinc-900/90 backdrop-blur-md border-white/10 p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Get in Touch</h4>
                      <p className="text-sm text-white/60 mb-4">
                        Ready to start your project? Let's talk about your ideas.
                      </p>
                      <Button 
                        className="w-full bg-white text-black hover:bg-white/90"
                        onClick={() => setIsQuizOpen(true)}
                      >
                        Start Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <Separator className="bg-white/10" />
                    <div className="space-y-2">
                      <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                        contact@booplabs.dev
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white">
                        +1 (555) 123-4567
                      </DropdownMenuItem>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"/>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl"/>
          <div className="relative max-w-6xl mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 ${lekton.className}`}>
                Build your dream app in
                <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent"> 48 hours</span>
              </h1>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                Fast-track your vision with our rapid development process. From concept to launch in just two days.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsQuizOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-gray-100 to-gray-300 text-black hover:from-gray-200 hover:to-gray-400"
                >
                  START
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Our Technical Expertise
              </h2>
              <p className="text-white/60">Building the future with cutting-edge technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="h-8 w-8" />,
                  title: 'Frontend Development',
                  tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
                  desc: 'Building responsive and performant user interfaces'
                },
                {
                  icon: <Server className="h-8 w-8" />,
                  title: 'Backend Development',
                  tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
                  desc: 'Scalable and secure server-side solutions'
                },
                {
                  icon: <Cloud className="h-8 w-8" />,
                  title: 'DevOps & Cloud',
                  tech: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
                  desc: 'Automated deployment and infrastructure'
                }
              ].map((expertise) => (
                <Card key={expertise.title} className="group hover:shadow-lg transition-all bg-zinc-900/50 border-white/10">
                  <CardHeader>
                    <div className="mb-4 text-white/80">{expertise.icon}</div>
                    <CardTitle className="text-white">{expertise.title}</CardTitle>
                    <CardDescription className="text-white/60">{expertise.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {expertise.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <Card className="bg-gradient-to-r from-white to-white/80 text-black">
              <CardHeader>
                <CardTitle className="text-3xl">Start Your Project</CardTitle>
                <CardDescription className="text-black/60">
                  Let's discuss how we can help bring your vision to life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsQuizOpen(true)}
                  className="border-black/20 hover:bg-black/10"
                >
                  Start
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Boop Labs</span>
            </div>
            <p className="text-sm text-white/60">
              © 2024 Boop Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
}
