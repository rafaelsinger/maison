import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
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

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-[#2C3B2D]/20">
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

        {/* Hero Content */}
        <div className="mt-[10vh] flex flex-col items-center text-center px-4">
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
    </div>
  );
}
