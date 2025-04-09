'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useScrollAnimation } from './components/ScrollAnimation';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight * 0.5;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollAnimation();

  return (
    <div className="relative h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Navigation - Dynamic background */}
      <nav className={`fixed w-full z-50 flex justify-between items-center px-8 py-6 border-b transition-all duration-300 ${
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
        <button className="px-8 py-2 border border-[#2C3B2D] rounded-[0.75rem] text-[#2C3B2D] font-['Cormorant_Infant'] hover:bg-[#2C3B2D] hover:text-white transition-colors">
          CONTACT
        </button>
      </nav>

      {/* Hero Section */}
      <section className="h-screen snap-start snap-always">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/mclaren-p1.jpg`}
            alt="McLaren P1 in Volcanic Orange"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 h-full">
          <div className="pt-40 flex flex-col items-center text-center px-4">
            <h2 className="text-[3rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-[1.1] max-w-[90%] tracking-[0.1em] uppercase">
              We Give You The Data,
              <br />
              You Win The Deal.
            </h2>
            <button className="mt-6 px-12 py-3 border border-[#2C3B2D] rounded-[0.75rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider uppercase hover:bg-[#2C3B2D] hover:text-white transition-colors">
              Discover Now
            </button>
          </div>
        </div>
      </section>

      {/* Incentives Section */}
      <section className="h-screen snap-start snap-always bg-[#E5E1D6] relative overflow-hidden">
        <div className="h-full overflow-y-auto">
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
              <button className="mt-8 px-12 py-3 border border-[#2C3B2D] rounded-[0.75rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors">
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
        </div>
      </section>

      {/* Analysis Section */}
      <section className="h-screen snap-start snap-always bg-[#E5E1D6] relative overflow-hidden">
        <div className="h-full overflow-y-auto">
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
              <button className="mt-8 px-12 py-3 border border-[#2C3B2D] rounded-[0.75rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-lg tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors">
                Get a personal report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Cars Section */}
      <section className="h-screen snap-start snap-always bg-[#E5E1D6] relative">
        <div className="h-full flex flex-col px-8 pt-[calc(3.5rem+88px)] pb-4">
          {/* Header */}
          <div className="text-center mb-8" data-animate-on-scroll>
            <h2 className="text-[3rem] font-['Cormorant_Infant'] text-[#2C3B2D] leading-tight">
              We turn dream cars into investments
            </h2>
            <p className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D]/90 mt-2">
              Personalized Reports. Off-market cars. White-glove service.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-3 gap-6 mb-8 flex-1">
            {/* Data Insight Column */}
            <div className="space-y-3" data-animate-on-scroll>
              <div className="relative h-[250px]">
                <Image
                  src="/finance1.jpg"
                  alt="Data analytics dashboard"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Data-backed insight
              </h3>
              <p className="text-base font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                Car buying focused on profit.
              </p>
            </div>

            {/* Market Scan Column */}
            <div className="space-y-3" data-animate-on-scroll>
              <div className="relative h-[250px]">
                <Image
                  src="/store1.jpg"
                  alt="Luxury car showroom"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Scan the entire market
              </h3>
              <p className="text-base font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                Your brokerage + our network.
              </p>
            </div>

            {/* Process Column */}
            <div className="space-y-3" data-animate-on-scroll>
              <div className="relative h-[250px]">
                <Image
                  src="/transport1.jpg"
                  alt="Car delivery process"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-['Cormorant_Infant'] text-[#2C3B2D] font-medium">
                Effortless process
              </h3>
              <p className="text-base font-['Cormorant_Infant'] text-[#2C3B2D]/90">
                From research to delivery, you win.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <button className="px-12 py-2.5 border border-[#2C3B2D] rounded-[0.75rem] text-[#2C3B2D] font-['Cormorant_Infant'] text-base tracking-wider hover:bg-[#2C3B2D] hover:text-white transition-colors" data-animate-on-scroll>
              DISCOVER NOW
            </button>
          </div>

          {/* Footer */}
          <footer className="border-t border-[#2C3B2D]/20 py-4">
            {/* Logo and Links Container */}
            <div className="flex justify-between items-center mb-4">
              {/* Left Links */}
              <div className="flex gap-6">
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
                <h2 className="text-xl font-['Cormorant_Infant'] text-[#2C3B2D] tracking-[0.2em] uppercase">
                  Guards
                </h2>
                <span className="text-sm font-['Cormorant_Infant'] text-[#2C3B2D]/80 -mt-1">
                  Autohaus
                </span>
              </div>

              {/* Right Links */}
              <div className="flex gap-6">
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
              <p className="text-[#2C3B2D]/80 font-['Cormorant_Infant'] text-xs">
                © GUARDS Autohaus {new Date().getFullYear()} | All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
