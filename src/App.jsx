import { motion } from "motion/react";
import { 
  Brain, 
  Cpu, 
  Sparkles, 
  Globe, 
  ArrowRight, 
  Twitter, 
  Instagram, 
  Github,
  Zap,
  Layers,
  Rocket,
  Menu,
  X
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 py-6 max-w-7xl mx-auto w-full bg-white/80 backdrop-blur-md"
      >
        <div className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
          Vantix<span className="text-purple-400 font-medium">Labs</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold tracking-wide uppercase text-slate-500">
          <a href="#games" className="hover:text-purple-500 transition-colors">Upcoming Games</a>
          <a href="#marketing" className="hover:text-purple-500 transition-colors">Global Marketing</a>
          <a href="#ai" className="hover:text-purple-500 transition-colors">AI Future</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-900 shadow-sm hover:shadow-md transition-all">
            Get in Touch
          </button>
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-b border-slate-100"
      >
        <div className="flex flex-col gap-4 p-6 text-sm font-bold uppercase tracking-wider text-slate-500">
          <a href="#games" onClick={() => setIsOpen(false)} className="hover:text-purple-500">Upcoming Games</a>
          <a href="#marketing" onClick={() => setIsOpen(false)} className="hover:text-purple-500">Global Marketing</a>
          <a href="#ai" onClick={() => setIsOpen(false)} className="hover:text-purple-500">AI Future</a>
          <button className="w-full py-4 bg-purple-400 text-white rounded-2xl">Get in Touch</button>
        </div>
      </motion.div>
    </>
  );
};

interface GameCardProps {
  title: string;
  desc: string;
  tag: string[];
  image: string;
  delay: number;
}

const GameCard = ({ title, desc, tag, image, delay }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white p-4 md:p-5 rounded-[32px] shadow-sm hover:shadow-xl transition-all border border-slate-100 flex items-center gap-4 md:gap-6"
    >
      <div className="w-20 h-20 md:w-28 md:h-28 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          {tag.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[9px] md:text-[10px] font-bold rounded-full uppercase tracking-tighter">
              {t}
            </span>
          ))}
        </div>
        <h4 className="font-bold text-base md:text-lg text-slate-800 leading-tight">{title}</h4>
        <p className="hidden md:block text-xs text-slate-400 mt-1 leading-snug">{desc}</p>
      </div>
    </motion.div>
  );
};

const ImageShowcase = () => {
  const visuals = [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Visual Universe</h2>
          <p className="text-slate-400 max-w-xl">Deep immersion starts with vision. Our internal engines render infinite possibilities in real-time.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visuals.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-3xl overflow-hidden group relative"
            >
              <img 
                src={img} 
                alt="Showcase" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold tracking-widest uppercase">Asset v1.02</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AISection = () => { ... } // Original AI component logic remains the same

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="accent-blob top-[-100px] left-[-100px] w-96 h-96 bg-purple-100" />
      <div className="accent-blob bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-blue-100 opacity-30" />
      <div className="accent-blob top-[20%] right-[10%] w-64 h-64 bg-orange-50" />

      <Navbar />
      
      <main className="relative z-10 grid grid-cols-12 gap-6 lg:gap-12 px-6 lg:px-12 pt-4 pb-12 max-w-7xl mx-auto w-full flex-grow">
        <div className="col-span-12 lg:col-span-7 flex flex-col">
          <div className="flex flex-col justify-center pb-8 lg:pb-12">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 inline-flex items-center space-x-2 px-3 py-1 bg-white/60 backdrop-blur-sm border border-white rounded-full self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">The Next Frontier</span>
            </motion.div>
            
            <motion.h1 className="text-4xl md:text-[64px] font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-slate-900 mb-6">
              Stepping into the <br/><span className="hero-gradient">AI Future.</span>
            </motion.h1>
            
            <motion.p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-lg mb-8 md:mb-10">
              VantixLabs is redefining the boundaries of interactive entertainment, bridging next-gen gaming with worldwide marketing.
            </motion.p>

            <div className="flex items-center space-x-3 md:space-x-4 mb-16 md:mb-20">
              <button className="flex-1 sm:flex-none px-6 md:px-8 py-3 md:py-4 bg-purple-400 text-white rounded-2xl font-bold shadow-lg shadow-purple-200/50 hover:bg-purple-500 transition-colors text-sm md:text-base">Explore Games</button>
              <button className="flex-1 sm:flex-none px-6 md:px-8 py-3 md:py-4 border-2 border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition-colors text-sm md:text-base">Our Vision</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Globe, title: "Global Reach", bg: "bg-blue-100", text: "text-blue-500" },
                { icon: Brain, title: "AI Driven", bg: "bg-purple-100", text: "text-purple-500" },
                { icon: Rocket, title: "Next Gen", bg: "bg-orange-100", text: "text-orange-500" }
              ].map((item, i) => (
                <div key={i} className="p-4 glass-editorial">
                  <div className={`w-10 h-10 ${item.bg} ${item.text} rounded-xl mb-3 flex items-center justify-center`}><item.icon className="w-5 h-5" /></div>
                  <h3 className="font-bold text-[10px] md:text-xs uppercase opacity-80">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 pt-0 lg:pt-4">
            {/* Game Cards Mapping ... */}
        </div>
      </main>

      <ImageShowcase />
      <AISection />
      {/* Footer ... */}
    </div>
  );
}
