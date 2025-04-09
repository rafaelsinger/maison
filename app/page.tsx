'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScrollAnimation } from './components/ScrollAnimation';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight - 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollAnimation();

  return (
    <div className="relative">
      {/* Navigation - Dynamic background */}
      <nav className={`fixed w-full z-30 flex justify-between items-center px-8 py-6 border-b transition-all duration-300 ${
        scrolled ? 'bg-[#E5E1D6] border-[#2C3B2D]/20' : 'border-[#2C3B2D]/20'
      }`}>
        <button className="text-[#2C3B2D] hover:opacity-70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-[2.5rem] font-['Cormorant_Infant'] text-[#2C3B2D] tracking-[0.2em] uppercase">Guards</h1>
          <span className="text-[1rem] font-['Cormorant_Infant'] text-[#2C3B2D]/80 -mt-1">Autohaus</span>
        </div>
        <button className="px-8 py-2 border border-[#2C3B2D] rounded-[2rem] text-[#2C3B2D] font-['Cormorant_Infant'] hover:bg-[#2C3B2D] hover:text-white transition-colors">
          CONTACT
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mclaren-p1.jpg"
            alt="McLaren P1 in Volcanic Orange"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 h-full">
          <div className="pt-32 flex flex-col items-center text-center px-4">
            <h2 className="text-[3rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-[1.1] max-w-[90%] tracking-[0.1em] uppercase">
              We Give You The Data,
              <br />
              You Win The Deal.
            </h2>
            <button className="mt-6 px-12 py-3 border border-[#2C3B2D] rounded-[2rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider uppercase hover:bg-[#2C3B2D] hover:text-white transition-colors">
              Discover Now
            </button>
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section className="min-h-screen bg-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 flex items-center gap-16">
          <div className="w-1/2 space-y-8" data-animate-on-scroll>
            <h2 className="text-[4rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-tight tracking-wide">
              INCENTIVES
            </h2>
            <p className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D]/90">
              Your broker wins when you overpay and buy inventory.
            </p>
            <p className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D]/90">
              We work alongside your broker to help you buy better.
            </p>
            <button className="mt-8 px-12 py-3 border border-[#2C3B2D] rounded-[2rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors">
              Compare our results
            </button>
          </div>
          <div className="w-1/2 relative h-[600px]" data-animate-on-scroll>
            <Image
              src="/wheel1.jpg"
              alt="Ferrari brake caliper and wheel detail"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section className="min-h-screen bg-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 flex items-center gap-16">
          <div className="w-1/2 relative h-[600px]" data-animate-on-scroll>
            <Image
              src="/porsche1.jpg"
              alt="Porsche steering wheel detail"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-1/2 space-y-8" data-animate-on-scroll>
            <h2 className="text-[4rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-tight tracking-wide">
              ANALYSIS
            </h2>
            <p className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D]/90">
              Every car is fun to buy,
              <br />
              but few are profitable.
            </p>
            <p className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D]/90">
              Our data systems give you the
              <br />
              numbers to win deals.
            </p>
            <button className="mt-8 px-12 py-3 border border-[#2C3B2D] rounded-[2rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors">
              Get a personal report
            </button>
          </div>
        </div>
      </section>

      {/* Dream Cars Section */}
      <section className="min-h-screen bg-[#E5E1D6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-16 space-y-6" data-animate-on-scroll>
            <h2 className="text-[4rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-tight">
              We turn dream cars into investments
            </h2>
            <p className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D]/90">
              Personalized Reports. Off-market cars. White-glove service.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-3 gap-12 w-full mb-16">
            {/* Data Insight Column */}
            <div className="space-y-6" data-animate-on-scroll>
              <div className="relative h-[400px] mb-6">
                <Image
                  src="/finance1.jpg"
                  alt="Data analytics dashboard"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Data-backed insight
              </h3>
              <p className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                Car buying focused on profit.
              </p>
            </div>

            {/* Market Scan Column */}
            <div className="space-y-6" data-animate-on-scroll>
              <div className="relative h-[400px] mb-6">
                <Image
                  src="/store1.jpg"
                  alt="Luxury car showroom"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Scan the entire market
              </h3>
              <p className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                Your brokerage + our network.
              </p>
            </div>

            {/* Process Column */}
            <div className="space-y-6" data-animate-on-scroll>
              <div className="relative h-[400px] mb-6">
                <Image
                  src="/transport1.jpg"
                  alt="Car delivery process"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Effortless process
              </h3>
              <p className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                From research to delivery, you win.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-16 py-4 border border-[#2C3B2D] rounded-[2rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-xl tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors" data-animate-on-scroll>
            DISCOVER NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E5E1D6] border-t border-[#2C3B2D]/20 py-8">
        <div className="max-w-7xl mx-auto px-8">
          {/* Logo and Links Container */}
          <div className="flex justify-between items-center mb-8">
            {/* Left Links */}
            <div className="flex gap-8">
              <Link href="/" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                Home
              </Link>
              <Link href="/contact" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                Contact
              </Link>
              <Link href="/about" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                About
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-['Cormorant_Infant'] text-[#2C3B2D] tracking-[0.2em] uppercase">
                Guards
              </h2>
              <span className="text-sm font-['Cormorant_Infant'] text-[#2C3B2D]/80">
                Autohaus
              </span>
            </div>

            {/* Right Links */}
            <div className="flex gap-8">
              <Link href="/results" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                Results
              </Link>
              <Link href="/careers" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                Careers
              </Link>
              <Link href="/legal" className="text-[#2C3B2D] font-['Cormorant_Infant'] text-lg hover:opacity-70">
                Legal
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#2C3B2D]/80 font-['Cormorant_Infant'] text-sm">
              © GUARDS Autohaus {new Date().getFullYear()} | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
