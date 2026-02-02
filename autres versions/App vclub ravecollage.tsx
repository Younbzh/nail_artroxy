import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, Music, Sparkles,
  Star, Check, ChevronDown, Users, Zap, Radio, Bus, Crown
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const randomRotation = () => (Math.random() - 0.5) * 8; // -4 to +4 degrees

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{
      fontFamily: '"Arial Black", "Courier New", "Impact", sans-serif'
    }}>
      {/* Texture papier collage */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
      }}></div>

      {/* Tags graffiti background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-8xl font-black text-yellow-400 rotate-12">V</div>
        <div className="absolute top-1/3 right-20 text-6xl font-black text-red-600 -rotate-6">CLUB</div>
        <div className="absolute bottom-1/4 left-1/4 text-7xl font-black text-white rotate-3">ÉLECTRO</div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black border-b-4 border-yellow-400' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24" style={{ transform: `rotate(${randomRotation() * 0.3}deg)` }}>
            {/* Logo collage */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black relative" style={{ transform: 'rotate(-5deg)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-black">V</span>
                  </div>
                  {/* Scotch tape effect */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-200/30 border border-gray-400/20"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  transform: 'rotate(2deg)'
                }}>
                  V CLUB
                </h1>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ fontFamily: 'Courier New, monospace' }}>
                  QUÉVEN • 2026
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['accueil', 'ambiance', 'musique'].map((section, i) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="px-4 py-2 font-black text-sm uppercase border-2 border-white hover:bg-white hover:text-black transition-all"
                  style={{ 
                    fontFamily: 'Arial Black, sans-serif',
                    transform: `rotate(${(i - 1) * 2}deg)`
                  }}
                >
                  {section}
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-6 py-3 bg-yellow-400 text-black font-black uppercase text-sm border-4 border-black hover:bg-red-600 hover:text-white transition-all"
                style={{ 
                  fontFamily: 'Impact, sans-serif',
                  transform: 'rotate(-3deg)',
                  boxShadow: '4px 4px 0px rgba(0,0,0,1)'
                }}
              >
                CALL NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-8 h-8" strokeWidth={4} /> : <Menu className="w-8 h-8" strokeWidth={4} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 bg-black border-t-4 border-yellow-400">
              <div className="flex flex-col gap-4">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 px-6 border-2 border-white hover:bg-white hover:text-black capitalize font-black uppercase"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="py-3 px-6 bg-yellow-400 text-black text-center font-black uppercase border-4 border-black"
                >
                  CALL
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Collage style */}
      <section id="accueil" className="relative pt-40 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Stamp "OPENING" */}
            <div className="absolute -top-20 right-10 w-48 h-48 border-8 border-red-600 rotate-12 rounded-full flex items-center justify-center opacity-20">
              <span className="text-2xl font-black text-red-600 text-center rotate-12">OPENING<br/>14 FÉV</span>
            </div>

            {/* Titre principal déconstruit */}
            <div className="mb-16 relative">
              <div className="inline-block bg-white px-8 py-4 border-4 border-black mb-6" style={{ transform: 'rotate(-2deg)', boxShadow: '8px 8px 0px rgba(255,255,0,1)' }}>
                <p className="text-sm font-black uppercase tracking-widest text-black" style={{ fontFamily: 'Courier New, monospace' }}>
                  ★★★ OUVERTURE {siteConfig.opening.date.toUpperCase()} ★★★
                </p>
              </div>

              <h1 className="relative mb-8">
                <span className="block text-[8rem] sm:text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-white mb-4" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  WebkitTextStroke: '3px #FFFF00',
                  transform: 'rotate(-1deg)'
                }}>
                  V
                </span>
                <span className="block text-[8rem] sm:text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-yellow-400 -mt-20" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  transform: 'rotate(3deg)',
                  textShadow: '8px 8px 0px rgba(0,0,0,1)'
                }}>
                  CLUB
                </span>
              </h1>
            </div>
            
            {/* Infos découpées façon collage */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-yellow-400 p-6 border-4 border-black" style={{ transform: `rotate(${randomRotation()}deg)`, boxShadow: '6px 6px 0px rgba(0,0,0,1)' }}>
                <p className="text-5xl font-black text-black mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>700</p>
                <p className="text-sm font-black uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>PLACES</p>
              </div>
              
              <div className="bg-black p-6 border-4 border-white" style={{ transform: `rotate(${randomRotation()}deg)` }}>
                <p className="text-5xl font-black text-yellow-400 mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>14</p>
                <p className="text-sm font-black uppercase text-white" style={{ fontFamily: 'Arial Black, sans-serif' }}>FÉV 26</p>
              </div>
              
              <div className="bg-red-600 p-6 border-4 border-black" style={{ transform: `rotate(${randomRotation()}deg)`, boxShadow: '6px 6px 0px rgba(0,0,0,1)' }}>
                <p className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>ÉLECTRO</p>
                <p className="text-sm font-black uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>MUSIC</p>
              </div>
              
              <div className="bg-white p-6 border-4 border-black" style={{ transform: `rotate(${randomRotation()}deg)` }}>
                <p className="text-3xl font-black text-black mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>POP</p>
                <p className="text-sm font-black uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>SOUNDS</p>
              </div>
            </div>

            {/* Badge KGS */}
            <div className="inline-block bg-black border-4 border-yellow-400 px-10 py-6 mb-12" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px rgba(255,255,0,1)' }}>
              <p className="text-4xl font-black text-yellow-400 mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>🎤 KGS</p>
              <p className="text-lg font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>HEADLINER • SAINT-VALENTIN</p>
            </div>

            {/* CTAs anarchiques */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="bg-yellow-400 text-black px-12 py-6 font-black text-2xl uppercase border-4 border-black hover:bg-red-600 hover:text-white transition-all inline-block"
                style={{ 
                  fontFamily: 'Impact, sans-serif',
                  transform: 'rotate(-2deg)',
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)'
                }}
              >
                ☎ {siteConfig.contact.phone}
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="bg-black text-white px-12 py-6 font-black text-2xl uppercase border-4 border-white hover:bg-white hover:text-black transition-all"
                style={{ 
                  fontFamily: 'Impact, sans-serif',
                  transform: 'rotate(1deg)'
                }}
              >
                ↓ SCROLL DOWN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Découpes papier */}
      <section className="py-32 bg-white text-black relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-black" style={{
          clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-black px-8 py-4 border-4 border-black mb-6" style={{ transform: 'rotate(1deg)', boxShadow: '6px 6px 0px rgba(255,255,0,1)' }}>
              <h2 className="text-6xl font-black text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                LES CHIFFRES
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.venue.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-black border-4 border-black p-8 relative"
                style={{ 
                  transform: `rotate(${randomRotation()}deg)`,
                  boxShadow: '8px 8px 0px rgba(0,0,0,0.3)'
                }}
              >
                {/* Scotch tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-200/40 border border-gray-400/30" style={{ transform: 'rotate(-2deg)' }}></div>
                
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-4xl font-black text-yellow-400 mb-3 text-center uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-white font-black text-center uppercase text-sm" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance - Style fanzine */}
      <section id="ambiance" className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <div className="inline-block bg-red-600 px-10 py-6 border-4 border-black mb-8" style={{ transform: 'rotate(-2deg)', boxShadow: '8px 8px 0px rgba(255,255,0,1)' }}>
              <h2 className="text-7xl font-black text-white uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                AMBIANCE
              </h2>
            </div>
            <p className="text-3xl font-black text-yellow-400 uppercase mb-4" style={{ fontFamily: 'Arial Black, sans-serif', transform: 'rotate(1deg)' }}>
              {siteConfig.ambiance.subtitle}
            </p>
          </div>

          {/* Rénovations en grille anarchique */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div 
                key={index} 
                className="bg-white text-black p-8 border-4 border-black relative"
                style={{ 
                  transform: `rotate(${randomRotation()}deg)`,
                  boxShadow: '6px 6px 0px rgba(255,255,0,0.5)'
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-3" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="font-black uppercase text-sm leading-tight" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Citation avec découpe */}
          <div className="bg-yellow-400 border-8 border-black p-12 mb-16 relative" style={{ transform: 'rotate(-1deg)', boxShadow: '12px 12px 0px rgba(0,0,0,1)' }}>
            <div className="absolute -top-4 right-10 w-20 h-8 bg-gray-200/40 border border-gray-400/30" style={{ transform: 'rotate(5deg)' }}></div>
            <p className="text-4xl font-black text-black mb-6 uppercase leading-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              "{siteConfig.ambiance.parquet.quote}"
            </p>
            <p className="text-2xl font-black text-black uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              — {siteConfig.ambiance.parquet.author.toUpperCase()}
            </p>
          </div>

          {/* VIP stamp */}
          <div className="text-center">
            <div className="inline-block bg-black border-4 border-yellow-400 px-16 py-12 relative" style={{ transform: 'rotate(2deg)', boxShadow: '10px 10px 0px rgba(255,255,0,1)' }}>
              <div className="absolute top-4 left-4 w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
              <Crown className="w-20 h-20 mx-auto mb-6 text-yellow-400" strokeWidth={3} />
              <h3 className="text-5xl font-black text-yellow-400 mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                {siteConfig.ambiance.vip.title}
              </h3>
              <p className="text-2xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                {siteConfig.ambiance.vip.capacity} PLACES • {siteConfig.ambiance.vip.location.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique - Affiches superposées */}
      <section id="musique" className="py-32 bg-yellow-400 text-black relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-black" style={{
          clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-black px-10 py-6 border-4 border-black" style={{ transform: 'rotate(-1deg)', boxShadow: '8px 8px 0px rgba(0,0,0,1)' }}>
              <h2 className="text-7xl font-black text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                MUSIQUE
              </h2>
            </div>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div 
                key={index} 
                className="bg-black border-8 border-black p-20 text-center relative"
                style={{ 
                  transform: `rotate(${index === 0 ? -3 : 3}deg)`,
                  boxShadow: '12px 12px 0px rgba(0,0,0,0.5)'
                }}
              >
                <Music className="w-24 h-24 mx-auto mb-10 text-yellow-400" strokeWidth={4} />
                <h3 className="text-8xl font-black text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {style}
                </h3>
              </div>
            ))}
          </div>

          {/* DJ Sixter - Carte découpe */}
          <div className="bg-white border-8 border-black p-12 relative" style={{ transform: 'rotate(1deg)', boxShadow: '12px 12px 0px rgba(0,0,0,1)' }}>
            <div className="absolute -top-5 left-10 w-24 h-10 bg-gray-200/40 border border-gray-400/30" style={{ transform: 'rotate(-3deg)' }}></div>
            <div className="flex items-center gap-8 mb-10">
              <div className="w-28 h-28 bg-black border-4 border-black flex items-center justify-center">
                <Radio className="w-16 h-16 text-yellow-400" strokeWidth={4} />
              </div>
              <div>
                <h3 className="text-6xl font-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-2xl font-black uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ANS
                </p>
              </div>
            </div>
            <div className="bg-black border-4 border-black p-10">
              <p className="text-3xl font-black text-yellow-400 mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                — VALENTIN PERRON
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infos - Style bulletin */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Navette */}
          <div className="bg-red-600 border-8 border-black p-14 mb-12 relative" style={{ transform: 'rotate(-1deg)', boxShadow: '12px 12px 0px rgba(255,255,0,1)' }}>
            <div className="text-center mb-10">
              <Bus className="w-20 h-20 mx-auto mb-6 text-white" strokeWidth={4} />
              <h2 className="text-6xl font-black text-white mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                NAVETTE GRATUITE
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div key={index} className="bg-black border-4 border-black px-8 py-4">
                  <span className="font-black text-yellow-400 text-2xl uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>{ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-black border-8 border-black p-10 text-center" style={{ transform: 'rotate(-2deg)', boxShadow: '8px 8px 0px rgba(255,255,0,0.5)' }}>
              <Clock className="w-16 h-16 mx-auto mb-6" strokeWidth={4} />
              <h3 className="text-4xl font-black mb-6 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                HORAIRES
              </h3>
              <p className="text-2xl font-black mb-4 uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>{siteConfig.schedule.days[0]}</p>
              <p className="text-6xl font-black" style={{ fontFamily: 'Impact, sans-serif' }}>{siteConfig.schedule.hours}</p>
            </div>

            <div className="bg-yellow-400 border-8 border-black p-10 text-center" style={{ transform: 'rotate(2deg)', boxShadow: '8px 8px 0px rgba(0,0,0,1)' }}>
              <Star className="w-16 h-16 mx-auto mb-6" strokeWidth={4} />
              <h3 className="text-4xl font-black mb-6 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                TARIFS
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xl font-black mb-2 uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>SOIRÉE</p>
                  <p className="text-7xl font-black" style={{ fontFamily: 'Impact, sans-serif' }}>{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-xl font-black mb-2 uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>SHOWCASE</p>
                  <p className="text-7xl font-black" style={{ fontFamily: 'Impact, sans-serif' }}>{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white text-black relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-black px-10 py-6 border-4 border-black" style={{ transform: 'rotate(1deg)', boxShadow: '8px 8px 0px rgba(255,255,0,1)' }}>
              <h2 className="text-7xl font-black text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                FAQ
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-4 border-black bg-white" style={{ transform: `rotate(${randomRotation() * 0.5}deg)` }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-black text-xl pr-6 uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-8 h-8 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    strokeWidth={4}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-yellow-400 border-t-4 border-black">
                    <p className="font-black text-lg uppercase leading-relaxed" style={{ fontFamily: 'Arial Black, sans-serif' }}>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-yellow-400 text-black relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-black border-8 border-black px-16 py-12 mb-16" style={{ transform: 'rotate(-2deg)', boxShadow: '16px 16px 0px rgba(0,0,0,1)' }}>
            <h2 className="text-8xl font-black text-yellow-400 mb-8 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
              RÉSERVEZ
            </h2>
            <p className="text-4xl font-black text-white uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              OUVERTURE {siteConfig.opening.date.toUpperCase()}
            </p>
          </div>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-6 bg-red-600 text-white px-20 py-10 hover:bg-black transition-all font-black text-4xl uppercase border-8 border-black mb-16"
            style={{ 
              fontFamily: 'Impact, sans-serif',
              transform: 'rotate(1deg)',
              boxShadow: '12px 12px 0px rgba(0,0,0,1)'
            }}
          >
            <Phone className="w-12 h-12" strokeWidth={4} />
            {siteConfig.contact.phone}
          </a>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border-8 border-black p-10" style={{ transform: 'rotate(-1deg)' }}>
              <MapPin className="w-14 h-14 mx-auto mb-6 text-yellow-400" strokeWidth={4} />
              <h3 className="text-2xl font-black mb-4 uppercase text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                ADRESSE
              </h3>
              <p className="text-white font-black text-lg uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>

            <div className="bg-white border-8 border-black p-10" style={{ transform: 'rotate(1deg)' }}>
              <Users className="w-14 h-14 mx-auto mb-6" strokeWidth={4} />
              <h3 className="text-2xl font-black mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                PUBLIC
              </h3>
              <p className="font-black text-lg uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                {siteConfig.target.age}<br />
                ÉLECTRO • POP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t-8 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-4xl font-black mb-6 text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                {siteConfig.name}
              </h3>
              <p className="text-white mb-4 font-black uppercase text-lg" style={{ fontFamily: 'Arial Black, sans-serif' }}>{siteConfig.tagline}</p>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 text-white uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                CONTACT
              </h3>
              <p className="text-white font-black uppercase text-lg leading-relaxed" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                TÉL : {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 text-white uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                OUVERTURE
              </h3>
              <p className="text-yellow-400 font-black text-2xl mb-3 uppercase" style={{ fontFamily: 'Arial Black, sans-serif' }}>{siteConfig.opening.date}</p>
              <p className="text-white font-black uppercase text-lg" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t-4 border-yellow-400 pt-12 text-center">
            <p className="font-black text-xl uppercase tracking-wide" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              © {new Date().getFullYear()} {siteConfig.name} - TOUS DROITS RÉSERVÉS
            </p>
            <p className="text-lg mt-4 font-black uppercase text-yellow-400" style={{ fontFamily: 'Arial Black, sans-serif' }}>
              FAMILLE HURST • DEPUIS 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}