import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, Music, Sparkles,
  Star, Check, ChevronDown, Users, Zap, Radio, Bus, Crown, Terminal
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-lime-400 relative" style={{
      fontFamily: '"Courier New", "Courier", monospace'
    }}>
      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
        animation: 'scan 8s linear infinite'
      }}></div>

      {/* VHS noise */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        animation: 'noise 0.2s infinite'
      }}></div>

      {/* CRT Curvature effect */}
      <div className="fixed inset-0 pointer-events-none z-30" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
      }}></div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        @keyframes noise {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.04; }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .glitch-active {
          animation: glitch 0.3s infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 border-b-2 border-lime-400' 
          : 'bg-black/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo terminal */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-black border-2 border-lime-400 flex items-center justify-center font-black text-3xl text-lime-400 shadow-[0_0_20px_rgba(0,255,65,0.5)]">
                <Terminal className="w-8 h-8" strokeWidth={3} />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-wider text-lime-400" style={{
                  textShadow: '0 0 10px rgba(0,255,65,1), 2px 2px 0px rgba(255,0,0,0.5)'
                }}>
                  &gt; V_CLUB.EXE
                </h1>
                <p className="text-xs font-bold text-lime-400/70 uppercase tracking-widest">
                  /QUEVEN/SYSTEM/
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['accueil', 'ambiance', 'musique'].map(section => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-lime-400 hover:text-red-500 transition-colors font-bold text-sm uppercase tracking-widest border-b-2 border-transparent hover:border-lime-400"
                >
                  &gt; {section}
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="bg-lime-400 text-black px-6 py-3 font-black uppercase text-sm tracking-widest hover:bg-red-500 hover:text-white transition-all border-2 border-lime-400 hover:border-red-500 shadow-[0_0_20px_rgba(0,255,65,0.5)]"
              >
                [RÉSERVER]
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-lime-400">
              {isMenuOpen ? <X className="w-7 h-7" strokeWidth={3} /> : <Menu className="w-7 h-7" strokeWidth={3} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t-2 border-lime-400/30 bg-black">
              <div className="flex flex-col space-y-3">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 text-lime-400 hover:text-red-500 capitalize font-bold uppercase tracking-widest text-sm border-l-4 border-transparent hover:border-lime-400 pl-4"
                  >
                    &gt; {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-left py-3 bg-lime-400 text-black px-4 font-black uppercase tracking-widest text-sm border-2 border-lime-400"
                >
                  [RÉSERVER]
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-36 pb-28 overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            {/* Terminal prompt */}
            <div className="mb-12 font-bold">
              <p className="text-lime-400/70 mb-2">&gt; INITIALIZING SYSTEM...</p>
              <p className="text-lime-400/70 mb-2">&gt; LOADING V_CLUB.EXE...</p>
              <p className="text-lime-400 mb-8">&gt; STATUS: ONLINE █</p>
            </div>

            {/* Badge ouverture */}
            <div className="inline-block bg-black border-4 border-lime-400 px-10 py-5 mb-12 shadow-[0_0_30px_rgba(0,255,65,0.6)] relative">
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 animate-pulse shadow-[0_0_10px_rgba(255,0,0,1)]"></div>
              <p className="font-black text-2xl uppercase tracking-widest text-lime-400">
                [!] OUVERTURE: {siteConfig.opening.date.toUpperCase()}
              </p>
            </div>
            
            {/* Titre principal avec glitch */}
            <h1 className={`text-[10rem] md:text-[16rem] font-black leading-none mb-8 tracking-tighter ${glitchActive ? 'glitch-active' : ''}`} style={{ 
              color: '#00FF41',
              textShadow: `
                2px 2px 0px rgba(255, 0, 0, 0.8),
                -2px -2px 0px rgba(0, 255, 255, 0.8),
                0 0 40px rgba(0, 255, 65, 0.5)
              `
            }}>
              V_CLUB
            </h1>
            
            <div className="border-l-4 border-red-500 pl-8 mb-12 bg-black/50">
              <p className="text-4xl md:text-6xl font-black text-lime-400 mb-4 uppercase tracking-tight">
                {siteConfig.hero.subtitle}
              </p>
              <p className="text-xl font-bold text-lime-400/80 uppercase tracking-wide">
                &gt;&gt; {siteConfig.hero.description}
              </p>
            </div>

            {/* Badges ASCII style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {siteConfig.hero.badges.map((badge, index) => (
                <div key={index} className="bg-black border-2 border-lime-400 p-6 hover:bg-lime-400 hover:text-black hover:border-red-500 transition-all group">
                  <p className="font-black text-xl text-center uppercase tracking-tight">
                    [{badge}]
                  </p>
                </div>
              ))}
            </div>

            {/* Date ouverture terminal */}
            <div className="bg-black border-4 border-red-500 p-10 mb-12 shadow-[0_0_40px_rgba(255,0,0,0.4)] relative">
              <div className="absolute top-2 left-2 flex gap-2">
                <div className="w-3 h-3 bg-lime-400 animate-pulse"></div>
                <div className="w-3 h-3 bg-lime-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-lime-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <p className="text-7xl font-black text-red-500 text-center mb-6 uppercase tracking-tighter" style={{
                textShadow: '0 0 20px rgba(255,0,0,1)'
              }}>
                14_FÉV_2026
              </p>
              <p className="text-3xl font-black text-lime-400 text-center uppercase tracking-wide mb-2">
                &gt;&gt; HEADLINER: KGS
              </p>
              <p className="text-xl font-black text-lime-400/70 text-center uppercase tracking-wider">
                [SAINT-VALENTIN] [OPENING_NIGHT]
              </p>
            </div>

            {/* CTAs terminal */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex-1 bg-lime-400 text-black px-10 py-6 font-black text-2xl uppercase tracking-tight hover:bg-red-500 hover:text-white transition-all border-4 border-lime-400 hover:border-red-500 shadow-[0_0_30px_rgba(0,255,65,0.6)] hover:shadow-[0_0_40px_rgba(255,0,0,0.8)] flex items-center justify-center gap-3"
              >
                <Phone className="w-8 h-8" strokeWidth={3} />
                [{siteConfig.contact.phone}]
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="flex-1 bg-black text-lime-400 px-10 py-6 font-black text-2xl uppercase tracking-tight hover:bg-lime-400 hover:text-black transition-all border-4 border-lime-400 shadow-[0_0_30px_rgba(0,255,65,0.3)] flex items-center justify-center gap-3"
              >
                <Zap className="w-8 h-8" strokeWidth={3} />
                [EXPLORER]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Terminal output */}
      <section className="py-20 bg-black border-y-4 border-lime-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lime-400/70 mb-2 font-bold">&gt; cat /system/stats.txt</p>
            <h2 className="text-7xl font-black text-lime-400 mb-4 uppercase tracking-tighter" style={{
              textShadow: '0 0 20px rgba(0,255,65,0.8), 2px 2px 0px rgba(255,0,0,0.5)'
            }}>
              &gt;&gt; SPÉCIFICATIONS
            </h2>
            <div className="h-1 w-64 bg-red-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.venue.features.map((feature, index) => (
              <div key={index} className="bg-black border-2 border-lime-400 p-8 hover:border-red-500 hover:bg-lime-400/5 transition-all">
                <div className="text-6xl mb-4 text-center filter drop-shadow-[0_0_10px_rgba(0,255,65,0.8)]">{feature.icon}</div>
                <h3 className="text-4xl font-black text-lime-400 mb-3 text-center uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lime-400/70 font-bold text-center text-lg uppercase">
                  &gt; {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section id="ambiance" className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lime-400/70 mb-2 font-bold">&gt; ls -la /ambiance/</p>
            <div className="border-4 border-lime-400 p-10 bg-black shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <h2 className="text-8xl font-black text-lime-400 mb-6 uppercase tracking-tighter text-center" style={{
                textShadow: '0 0 30px rgba(0,255,65,1)'
              }}>
                [AMBIANCE]
              </h2>
              <p className="text-2xl font-black text-red-500 text-center uppercase tracking-wide mb-4">
                {siteConfig.ambiance.subtitle}
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
            </div>
          </div>

          {/* Rénovations en liste terminal */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div key={index} className="border-2 border-lime-400/50 hover:border-red-500 p-6 bg-black/80 transition-all">
                <p className="text-lime-400/70 font-bold mb-2 text-sm">&gt; FILE_{index + 1}.txt</p>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black text-lime-400 mb-3 uppercase tracking-tight">
                  [{item.title}]
                </h3>
                <p className="text-lime-400/80 font-bold leading-tight uppercase text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Citation */}
          <div className="bg-black border-4 border-red-500 p-12 mb-16 shadow-[0_0_40px_rgba(255,0,0,0.3)]">
            <p className="text-lime-400/70 font-bold mb-4">&gt; echo "parquet_quote.txt"</p>
            <p className="text-4xl font-black text-lime-400 mb-6 leading-tight uppercase" style={{
              textShadow: '0 0 15px rgba(0,255,65,0.5)'
            }}>
              "{siteConfig.ambiance.parquet.quote}"
            </p>
            <p className="text-2xl font-black text-red-500 uppercase tracking-wide">
              — {siteConfig.ambiance.parquet.author.toUpperCase()}
            </p>
          </div>

          {/* VIP */}
          <div className="bg-lime-400 border-4 border-black p-12 text-center shadow-[0_0_50px_rgba(0,255,65,0.6)]">
            <Crown className="w-20 h-20 mx-auto mb-6 text-black" strokeWidth={3} />
            <h3 className="text-6xl font-black text-black mb-4 uppercase tracking-tighter">
              [VIP_ZONE]
            </h3>
            <p className="text-3xl font-black text-black uppercase">
              {siteConfig.ambiance.vip.capacity} SLOTS • {siteConfig.ambiance.vip.location.toUpperCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-28 bg-black border-y-4 border-red-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lime-400/70 mb-2 font-bold">&gt; cat /music/config.sys</p>
            <h2 className="text-8xl font-black text-red-500 mb-6 uppercase tracking-tighter" style={{
              textShadow: '0 0 30px rgba(255,0,0,1), -2px -2px 0px rgba(0,255,65,0.5)'
            }}>
              [PROGRAMMATION]
            </h2>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div key={index} className="border-4 border-lime-400 bg-black p-16 text-center hover:bg-lime-400 hover:border-red-500 group transition-all shadow-[0_0_40px_rgba(0,255,65,0.3)]">
                <Music className="w-24 h-24 mx-auto mb-8 text-lime-400 group-hover:text-black" strokeWidth={3} />
                <h3 className="text-7xl font-black text-lime-400 group-hover:text-black uppercase tracking-tighter">
                  [{style}]
                </h3>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="bg-black border-4 border-lime-400 p-10 mb-16 shadow-[0_0_40px_rgba(0,255,65,0.3)]">
            <h3 className="text-5xl font-black text-lime-400 mb-10 uppercase tracking-tight">
              &gt;&gt; {siteConfig.music.differentiation.title.toUpperCase()}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-lime-400/30 p-6 bg-black/50">
                <p className="text-lime-400/70 font-bold mb-2 uppercase tracking-wide text-xs">[RÉGION_LORIENT]</p>
                <p className="text-xl text-lime-400 font-black uppercase">{siteConfig.music.differentiation.regional}</p>
              </div>
              <div className="border-2 border-lime-400/30 p-6 bg-black/50">
                <p className="text-lime-400/70 font-bold mb-2 uppercase tracking-wide text-xs">[LYON/GRENOBLE]</p>
                <p className="text-xl text-lime-400 font-black uppercase">{siteConfig.music.differentiation.lyonGrenoble}</p>
              </div>
              <div className="border-2 border-red-500 p-6 bg-red-500/10">
                <p className="text-red-500 font-black mb-2 uppercase tracking-wide text-xs">[V_CLUB]</p>
                <p className="text-2xl text-red-500 font-black uppercase">{siteConfig.music.differentiation.vClub}</p>
              </div>
            </div>
          </div>

          {/* DJ Sixter */}
          <div className="bg-lime-400 border-4 border-black p-12 shadow-[0_0_50px_rgba(0,255,65,0.6)]">
            <div className="flex items-center gap-8 mb-10">
              <div className="w-28 h-28 bg-black border-4 border-black flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,1)]">
                <Radio className="w-16 h-16 text-lime-400" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-6xl font-black text-black uppercase tracking-tighter">
                  &gt; {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-2xl text-black/70 font-black uppercase">
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ANS
                </p>
              </div>
            </div>
            <div className="bg-black border-4 border-black p-8">
              <p className="text-lime-400/70 font-bold mb-2 text-sm">&gt; cat quote.txt</p>
              <p className="text-3xl font-black text-lime-400 mb-4 uppercase" style={{
                textShadow: '0 0 10px rgba(0,255,65,0.5)'
              }}>
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-red-500 font-black text-xl uppercase">— VALENTIN PERRON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lime-400/70 mb-2 font-bold">&gt; tree /complex/</p>
            <h2 className="text-8xl font-black text-lime-400 mb-6 uppercase tracking-tighter text-center" style={{
              textShadow: '0 0 30px rgba(0,255,65,1)'
            }}>
              [2_ZONES]
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="border-4 border-lime-400 bg-black p-10 hover:bg-lime-400/5 transition-all shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <p className="text-lime-400/70 font-bold mb-4 text-sm">&gt; /zone_1/</p>
              <h3 className="text-6xl font-black text-lime-400 mb-4 uppercase tracking-tighter">
                [V_CLUB]
              </h3>
              <p className="text-2xl font-bold text-lime-400 mb-3 uppercase">{siteConfig.complex.vClub.style}</p>
              <p className="text-xl text-lime-400/70 font-bold uppercase">&gt;&gt; {siteConfig.complex.vClub.target}</p>
            </div>

            <div className="border-4 border-lime-400/50 bg-black p-10 hover:bg-lime-400/5 transition-all">
              <p className="text-lime-400/70 font-bold mb-4 text-sm">&gt; /zone_2/</p>
              <h3 className="text-6xl font-black text-lime-400/80 mb-4 uppercase tracking-tighter">
                [VALENTINO]
              </h3>
              <p className="text-2xl font-bold text-lime-400/70 mb-3 uppercase">{siteConfig.complex.valentino.style}</p>
              <p className="text-xl text-lime-400/60 font-bold uppercase">&gt;&gt; {siteConfig.complex.valentino.target}</p>
            </div>
          </div>

          <div className="bg-black border-4 border-red-500 p-10 text-center shadow-[0_0_40px_rgba(255,0,0,0.3)]">
            <p className="text-4xl font-black text-red-500 uppercase" style={{
              textShadow: '0 0 15px rgba(255,0,0,0.8)'
            }}>
              [!] {siteConfig.complex.symbolism.description.toUpperCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Transport + Infos */}
      <section className="py-20 bg-black border-t-4 border-lime-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navette */}
          <div className="bg-lime-400 border-4 border-black p-14 mb-12 shadow-[0_0_50px_rgba(0,255,65,0.6)]">
            <div className="text-center mb-8">
              <Bus className="w-20 h-20 mx-auto mb-6 text-black" strokeWidth={3} />
              <h2 className="text-6xl font-black text-black mb-4 uppercase tracking-tighter">
                [NAVETTE_GRATUITE]
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div key={index} className="bg-black border-4 border-black px-8 py-4">
                  <span className="font-black text-lime-400 text-2xl uppercase">&gt; {ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-lime-400 bg-black p-10 text-center">
              <Clock className="w-16 h-16 mx-auto mb-6 text-lime-400" strokeWidth={3} />
              <h3 className="text-4xl font-black text-lime-400 mb-6 uppercase tracking-tight">
                [HORAIRES]
              </h3>
              <p className="text-2xl font-black text-lime-400/70 mb-4">{siteConfig.schedule.days[0].toUpperCase()}</p>
              <p className="text-5xl font-black text-lime-400" style={{
                textShadow: '0 0 15px rgba(0,255,65,0.8)'
              }}>{siteConfig.schedule.hours}</p>
            </div>

            <div className="border-4 border-red-500 bg-black p-10 text-center">
              <Star className="w-16 h-16 mx-auto mb-6 text-red-500" strokeWidth={3} />
              <h3 className="text-4xl font-black text-red-500 mb-6 uppercase tracking-tight">
                [TARIFS]
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xl text-lime-400/70 font-black mb-2 uppercase">&gt; SOIRÉE</p>
                  <p className="text-6xl font-black text-lime-400">{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-xl text-lime-400/70 font-black mb-2 uppercase">&gt; SHOWCASE</p>
                  <p className="text-6xl font-black text-red-500">{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lime-400/70 mb-2 font-bold">&gt; cat /help/faq.txt</p>
            <h2 className="text-8xl font-black text-lime-400 mb-6 uppercase tracking-tighter" style={{
              textShadow: '0 0 30px rgba(0,255,65,1)'
            }}>
              [FAQ]
            </h2>
          </div>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-2 border-lime-400/50 hover:border-lime-400 bg-black transition-all">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-black text-lime-400 text-xl pr-6 uppercase tracking-tight">
                    &gt; {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-8 h-8 text-red-500 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    strokeWidth={3}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-lime-400/5 border-t-2 border-lime-400/30">
                    <p className="text-lime-400/90 font-bold text-lg uppercase leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 bg-lime-400 border-y-4 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-9xl font-black mb-12 tracking-tighter text-black uppercase">
            [RÉSERVER]
          </h2>
          <p className="text-4xl mb-16 font-black text-black uppercase tracking-wide">
            &gt;&gt; OUVERTURE {siteConfig.opening.date.toUpperCase()}
          </p>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-6 bg-black text-lime-400 px-20 py-10 hover:bg-red-500 hover:text-white transition-all font-black text-4xl uppercase tracking-tight border-4 border-black shadow-[0_0_50px_rgba(0,0,0,1)]"
          >
            <Phone className="w-12 h-12" strokeWidth={3} />
            [{siteConfig.contact.phone}]
          </a>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-black border-4 border-black p-8">
              <MapPin className="w-14 h-14 mx-auto mb-6 text-lime-400" strokeWidth={3} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wide text-lime-400">
                [ADRESSE]
              </h3>
              <p className="text-lime-400/80 font-black text-lg uppercase">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>

            <div className="bg-black border-4 border-black p-8">
              <Users className="w-14 h-14 mx-auto mb-6 text-red-500" strokeWidth={3} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-wide text-red-500">
                [TARGET]
              </h3>
              <p className="text-lime-400/80 font-black text-lg uppercase">
                {siteConfig.target.age}<br />
                ÉLECTRO • POP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-lime-400 py-16 border-t-4 border-lime-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-lime-400 uppercase">
                &gt; {siteConfig.name}
              </h3>
              <p className="text-lime-400/70 mb-4 font-bold uppercase text-sm">{siteConfig.tagline}</p>
              <div className="w-24 h-1 bg-red-500"></div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-lime-400 uppercase">
                [CONTACT]
              </h3>
              <p className="text-lime-400/80 font-bold uppercase text-sm leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                TEL: {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-lime-400 uppercase">
                [STATUS]
              </h3>
              <p className="text-red-500 font-black text-xl mb-3 uppercase">{siteConfig.opening.date}</p>
              <p className="text-lime-400/80 font-bold uppercase text-sm">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t-4 border-lime-400/30 pt-10 text-center">
            <p className="font-bold text-sm uppercase tracking-wide text-lime-400/70">
              © {new Date().getFullYear()} {siteConfig.name} - ALL RIGHTS RESERVED
            </p>
            <p className="text-xs mt-4 font-black uppercase tracking-widest text-red-500">
              [FAMILLE_HURST] [SINCE_1988]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}