"use client";

import { ATFiLogo, ATFiLogoWithText } from "@/components/Logo";
import Link from "next/link";

// Icon components
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// Features data
const features = [
  {
    icon: ShieldIcon,
    title: "Stake to Commit",
    description: "Put skin in the game. Stake tokens when you register for an event to prove you're serious about showing up.",
  },
  {
    icon: ChartIcon,
    title: "Earn Yield While You Wait",
    description: "Your staked USDC earns yield via Morpho Protocol. Events generate returns even before they start.",
  },
  {
    icon: UsersIcon,
    title: "No-Shows Lose, Attendees Win",
    description: "Show up and get your stake back plus share of forfeited stakes and yield. Miss it and lose your commitment.",
  },
  {
    icon: CheckCircleIcon,
    title: "On-Chain Verification",
    description: "Attendance is verified on-chain by event organizers. Transparent, trustless, and immutable.",
  },
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Create Event",
    description: "Set stake amount, max participants, and enable yield generation.",
  },
  {
    number: "02",
    title: "Participants Stake",
    description: "Users lock tokens to register their commitment to attend.",
  },
  {
    number: "03",
    title: "Event Starts",
    description: "Stakes are deposited to Morpho to earn yield during the event.",
  },
  {
    number: "04",
    title: "Verify & Settle",
    description: "Organizer verifies attendees. Rewards are distributed to those who showed up.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24 py-4 flex items-center justify-between">
          <ATFiLogoWithText />
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="https://github.com/ATFi-Event" target="_blank" className="text-zinc-400 hover:text-white transition-colors">GitHub</Link>
            <Link href="https://www.npmjs.com/package/atfi" target="_blank" className="text-zinc-400 hover:text-white transition-colors">SDK</Link>
          </div>
          <Link
            href="https://demo-dapp.useatfi.xyz"
            target="_blank"
            className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-full font-medium transition-colors"
          >
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Built on Base
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Stake to Commit,<br />
                <span className="gradient-text">Show Up to Earn</span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-8">
                Turn intentions into actions with commitment-backed events. 
                Stake tokens to register, earn yield while you wait, and get rewarded for showing up.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="https://demo-dapp.useatfi.xyz"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 glow-blue"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.npmjs.com/package/atfi"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-full font-semibold text-lg transition-colors"
                >
                  View SDK
                </Link>
              </div>
              
              {/* NPM Install Command */}
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl font-mono text-sm">
                  <span className="text-zinc-500">$</span>
                  <code className="text-zinc-300">npm install atfi</code>
                  <button 
                    className="ml-2 p-1.5 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-500 hover:text-zinc-300"
                    onClick={() => navigator.clipboard.writeText('npm install atfi')}
                    title="Copy to clipboard"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-zinc-800">
                <div>
                  <p className="text-3xl md:text-4xl font-bold gradient-text">$0</p>
                  <p className="text-zinc-500 text-sm mt-1">Total Staked</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">0</p>
                  <p className="text-zinc-500 text-sm mt-1">Events Created</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">0%</p>
                  <p className="text-zinc-500 text-sm mt-1">Show-up Rate</p>
                </div>
              </div>
            </div>
            
            {/* Right visual */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                <ATFiLogo size={300} className="relative animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">ATFi</span>?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A new paradigm for event commitment. Powered by DeFi, built on Base.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-8 lg:px-16 xl:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Simple, transparent, and trustless event commitment system.
            </p>
          </div>
          
          {/* 3D Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/80 via-blue-500/40 to-transparent z-0"></div>
                )}
                
                {/* 3D Card */}
                <div 
                  className="relative z-10 glass-card rounded-2xl p-8 h-full transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)',
                  }}
                >
                  {/* Step number with 3D effect */}
                  <div 
                    className="relative mb-6"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500/30 to-purple-500/30">
                      {step.number}
                    </span>
                    <div className="absolute inset-0 blur-xl bg-blue-500/20 -z-10"></div>
                  </div>
                  
                  {/* Content */}
                  <div style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10"></div>
                  
                  {/* Bottom edge glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Commit?
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
                Join the future of accountability. Create your first commitment-backed event today.
              </p>
              <Link
                href="https://demo-dapp.useatfi.xyz"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold text-lg transition-all hover:scale-105 glow-blue"
              >
                Launch App
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <ATFiLogoWithText />
          <div className="flex items-center gap-6 text-zinc-400">
            <Link href="https://github.com/ATFi-Event" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="https://www.npmjs.com/package/atfi" target="_blank" className="hover:text-white transition-colors">NPM</Link>
            <Link href="https://demo-dapp.useatfi.xyz" target="_blank" className="hover:text-white transition-colors">Demo</Link>
          </div>
          <p className="text-zinc-500 text-sm">
            © 2026 ATFi Protocol. Built on Base.
          </p>
        </div>
      </footer>
    </div>
  );
}
