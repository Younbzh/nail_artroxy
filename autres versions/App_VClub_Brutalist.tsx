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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden" style={{
      fontFamily: '"Arial Black", "Helvetica Neue", "Impact", sans-serif'
    }}>
      {/* Grain texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
      }}></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black border-b-8 border-yellow-400' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo brutalist */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-5xl font-black text-black" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '-0.05em' }}>V</span>
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tighter text-yellow-400" style={{ fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>
                  V CLUB
                </h1>
                <p className="text-xs font-black text-lime-400 uppercase tracking-widest">QUÉVEN</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-white hover:text-yellow-400 transition-colors font-black text-sm uppercase tracking-widest border-b-4 border-transparent hover:border-yellow-400 pb-1">
                Accueil
              </button>
              <button onClick={() => scrollToSection('ambiance')} className="text-white hover:text-yellow-400 transition-colors font-black text-sm uppercase tracking-widest border-b-4 border-transparent hover:border-yellow-400 pb-1">
                Ambiance
              </button>
              <button onClick={() => scrollToSection('musique')} className="text-white hover:text-yellow-400 transition-colors font-black text-sm uppercase tracking-widest border-b-4 border-transparent hover:border-yellow-400 pb-1">
                Musique
              </button>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="bg-yellow-400 text-black px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-lime-400 transition-all border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                RÉSERVER
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-yellow-400">
              {isMenuOpen ? <X className="w-8 h-8" strokeWidth={4} /> : <Menu className="w-8 h-8" strokeWidth={4} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t-8 border-yellow-400 bg-black">
              <div className="flex flex-col space-y-4">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-4 text-white hover:text-yellow-400 capitalize font-black uppercase tracking-widest text-lg border-l-8 border-transparent hover:border-yellow-400 pl-4"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-left py-4 bg-yellow-400 text-black px-6 font-black uppercase tracking-widest text-lg border-4 border-black"
                >
                  RÉSERVER
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-40 pb-32 overflow-hidden">
        {/* Yellow diagonal stripes background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(250, 204, 21, 0.03) 100px, rgba(250, 204, 21, 0.03) 200px)'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            {/* Badge ouverture */}
            <div className="inline-block bg-yellow-400 text-black px-12 py-6 mb-12 border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-2xl uppercase tracking-widest" style={{ fontFamily: 'Impact, sans-serif' }}>
                ⚡ OUVERTURE {siteConfig.opening.date.toUpperCase()}
              </p>
            </div>
            
            {/* Titre principal géant */}
            <h1 className="text-[12rem] md:text-[18rem] font-black leading-none mb-8 tracking-tighter" style={{ 
              fontFamily: 'Impact, sans-serif',
              WebkitTextStroke: '4px #FFFF00',
              color: 'transparent',
              textTransform: 'uppercase'
            }}>
              V CLUB
            </h1>
            
            <div className="border-l-8 border-yellow-400 pl-8 mb-12">
              <p className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                {siteConfig.hero.subtitle}
              </p>
              <p className="text-2xl font-black text-lime-400 uppercase tracking-wider">
                {siteConfig.hero.description}
              </p>
            </div>

            {/* Badges en grille */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {siteConfig.hero.badges.map((badge, index) => (
                <div key={index} className="bg-black border-8 border-yellow-400 p-8 hover:bg-yellow-400 hover:text-black transition-all group">
                  <p className="font-black text-3xl text-center uppercase tracking-tight group-hover:scale-110 transition-transform" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {badge}
                  </p>
                </div>
              ))}
            </div>

            {/* Date ouverture massive */}
            <div className="bg-yellow-400 border-8 border-black p-12 mb-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-8xl font-black text-black text-center mb-4 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                14 FÉV 2026
              </p>
              <p className="text-4xl font-black text-black text-center uppercase tracking-wide">
                🎤 AVEC KGS
              </p>
              <p className="text-2xl font-black text-black text-center uppercase tracking-wider mt-2">
                SAINT-VALENTIN • OPENING
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex-1 bg-yellow-400 text-black px-12 py-8 font-black text-3xl uppercase tracking-tight hover:bg-lime-400 transition-all border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] flex items-center justify-center gap-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Phone className="w-10 h-10" strokeWidth={4} />
                {siteConfig.contact.phone}
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="flex-1 bg-black text-yellow-400 px-12 py-8 font-black text-3xl uppercase tracking-tight hover:bg-lime-400 hover:text-black transition-all border-8 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] hover:shadow-[12px_12px_0px_0px_rgba(250,204,21,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] flex items-center justify-center gap-4"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                <Zap className="w-10 h-10" strokeWidth={4} />
                DÉCOUVRIR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Grille brutale */}
      <section className="py-24 bg-black border-y-8 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-8xl font-black text-yellow-400 mb-6 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
              LES CHIFFRES
            </h2>
            <div className="w-32 h-2 bg-lime-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.venue.features.map((feature, index) => (
              <div key={index} className="bg-black border-8 border-yellow-400 p-10 hover:bg-yellow-400 group transition-all shadow-[8px_8px_0px_0px_rgba(250,204,21,0.5)]">
                <div className="text-7xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-5xl font-black text-white group-hover:text-black mb-4 text-center uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-black font-black text-center text-xl uppercase">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section id="ambiance" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-8 border-yellow-400 p-12 mb-20 bg-black shadow-[16px_16px_0px_0px_rgba(250,204,21,0.3)]">
            <h2 className="text-9xl font-black text-yellow-400 mb-8 uppercase tracking-tighter text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
              AMBIANCE
            </h2>
            <p className="text-3xl font-black text-white text-center uppercase tracking-wide mb-4">
              {siteConfig.ambiance.subtitle}
            </p>
            <div className="w-48 h-2 bg-lime-400 mx-auto"></div>
          </div>

          {/* Rénovations en grille serrée */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div key={index} className="border-8 border-white hover:border-yellow-400 p-8 bg-black transition-all">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-3xl font-black text-yellow-400 mb-4 uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-white font-black text-lg uppercase leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Citation parquet */}
          <div className="bg-yellow-400 border-8 border-black p-16 mb-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-5xl font-black text-black mb-8 text-center uppercase leading-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              "{siteConfig.ambiance.parquet.quote}"
            </p>
            <p className="text-3xl font-black text-black text-center uppercase tracking-wide">
              — {siteConfig.ambiance.parquet.author}
            </p>
          </div>

          {/* VIP */}
          <div className="bg-lime-400 border-8 border-black p-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <Crown className="w-24 h-24 mx-auto mb-8 text-black" strokeWidth={4} />
            <h3 className="text-7xl font-black text-black mb-6 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
              {siteConfig.ambiance.vip.title}
            </h3>
            <p className="text-4xl font-black text-black uppercase">
              {siteConfig.ambiance.vip.capacity} PLACES • {siteConfig.ambiance.vip.location.toUpperCase()}
            </p>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-32 bg-black border-y-8 border-lime-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-9xl font-black text-lime-400 mb-8 uppercase tracking-tighter" style={{ 
              fontFamily: 'Impact, sans-serif',
              WebkitTextStroke: '2px #00FF00',
            }}>
              MUSIQUE
            </h2>
            <p className="text-4xl font-black text-yellow-400 uppercase tracking-wide">
              {siteConfig.music.subtitle}
            </p>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {siteConfig.music.styles.map((style, index) => (
              <div key={index} className="border-8 border-lime-400 bg-black p-20 text-center hover:bg-lime-400 group transition-all shadow-[12px_12px_0px_0px_rgba(0,255,0,0.3)]">
                <Music className="w-28 h-28 mx-auto mb-10 text-lime-400 group-hover:text-black" strokeWidth={4} />
                <h3 className="text-8xl font-black text-white group-hover:text-black uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {style}
                </h3>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="bg-yellow-400 border-8 border-black p-12 mb-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-6xl font-black text-black mb-12 text-center uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              {siteConfig.music.differentiation.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-4 border-black p-6 bg-black">
                <p className="text-yellow-400 font-black mb-3 uppercase tracking-wide text-sm">RÉGION LORIENT</p>
                <p className="text-2xl text-white font-black uppercase">{siteConfig.music.differentiation.regional}</p>
              </div>
              <div className="border-4 border-black p-6 bg-black">
                <p className="text-yellow-400 font-black mb-3 uppercase tracking-wide text-sm">LYON/GRENOBLE</p>
                <p className="text-2xl text-white font-black uppercase">{siteConfig.music.differentiation.lyonGrenoble}</p>
              </div>
              <div className="border-4 border-black p-6 bg-lime-400">
                <p className="text-black font-black mb-3 uppercase tracking-wide text-sm">V CLUB</p>
                <p className="text-3xl text-black font-black uppercase">{siteConfig.music.differentiation.vClub}</p>
              </div>
            </div>
          </div>

          {/* DJ Sixter */}
          <div className="bg-lime-400 border-8 border-black p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-8 mb-12">
              <div className="w-32 h-32 bg-black border-8 border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Radio className="w-20 h-20 text-lime-400" strokeWidth={4} />
              </div>
              <div>
                <h3 className="text-7xl font-black text-black uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-3xl text-black font-black uppercase">
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ANS
                </p>
              </div>
            </div>
            <div className="bg-black border-4 border-black p-10">
              <p className="text-4xl font-black text-lime-400 mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-yellow-400 font-black text-2xl uppercase">— VALENTIN PERRON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-9xl font-black text-yellow-400 mb-8 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
              2 SALLES<br/>2 AMBIANCES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="border-8 border-yellow-400 bg-black p-12 hover:bg-yellow-400 group transition-all shadow-[12px_12px_0px_0px_rgba(250,204,21,0.3)]">
              <h3 className="text-7xl font-black text-yellow-400 group-hover:text-black mb-6 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                V CLUB
              </h3>
              <p className="text-3xl font-black text-white group-hover:text-black mb-4 uppercase">{siteConfig.complex.vClub.style}</p>
              <p className="text-2xl font-black text-lime-400 group-hover:text-black uppercase">{siteConfig.complex.vClub.target}</p>
            </div>

            <div className="border-8 border-white bg-black p-12 hover:bg-white group transition-all shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
              <h3 className="text-7xl font-black text-white group-hover:text-black mb-6 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                VALENTINO
              </h3>
              <p className="text-3xl font-black text-white group-hover:text-black mb-4 uppercase">{siteConfig.complex.valentino.style}</p>
              <p className="text-2xl font-black text-gray-400 group-hover:text-black uppercase">{siteConfig.complex.valentino.target}</p>
            </div>
          </div>

          <div className="bg-lime-400 border-8 border-black p-12 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-5xl font-black text-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
              {siteConfig.complex.symbolism.description}
            </p>
          </div>
        </div>
      </section>

      {/* Transport + Infos */}
      <section className="py-24 bg-black border-t-8 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navette */}
          <div className="bg-yellow-400 border-8 border-black p-16 mb-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="text-center mb-10">
              <Bus className="w-24 h-24 mx-auto mb-6 text-black" strokeWidth={4} />
              <h2 className="text-7xl font-black text-black mb-4 uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
                NAVETTE GRATUITE
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div key={index} className="bg-black border-4 border-black px-10 py-6">
                  <span className="font-black text-yellow-400 text-3xl uppercase">{ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-8 border-white bg-black p-12 text-center">
              <Clock className="w-20 h-20 mx-auto mb-8 text-white" strokeWidth={4} />
              <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                HORAIRES
              </h3>
              <p className="text-3xl font-black text-yellow-400 mb-4">{siteConfig.schedule.days[0].toUpperCase()}</p>
              <p className="text-6xl font-black text-white">{siteConfig.schedule.hours}</p>
            </div>

            <div className="border-8 border-lime-400 bg-black p-12 text-center">
              <Star className="w-20 h-20 mx-auto mb-8 text-lime-400" strokeWidth={4} />
              <h3 className="text-5xl font-black text-white mb-6 uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                TARIFS
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl text-gray-400 font-black mb-2 uppercase">SOIRÉE</p>
                  <p className="text-7xl font-black text-yellow-400">{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-2xl text-gray-400 font-black mb-2 uppercase">SHOWCASE</p>
                  <p className="text-7xl font-black text-lime-400">{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-black border-t-8 border-lime-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-9xl font-black text-lime-400 mb-20 text-center uppercase tracking-tighter" style={{ fontFamily: 'Impact, sans-serif' }}>
            FAQ
          </h2>

          <div className="space-y-6">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="border-8 border-white hover:border-yellow-400 bg-black transition-all">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-10 py-8 text-left flex items-center justify-between"
                >
                  <span className="font-black text-white text-2xl pr-6 uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-10 h-10 text-yellow-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    strokeWidth={4}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-10 py-8 bg-yellow-400 border-t-8 border-black">
                    <p className="text-black font-black text-xl uppercase leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-yellow-400 border-y-8 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-9xl font-black mb-12 tracking-tighter text-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
            RÉSERVEZ<br/>MAINTENANT
          </h2>
          <p className="text-5xl mb-16 font-black text-black uppercase tracking-wide">
            OUVERTURE {siteConfig.opening.date.toUpperCase()}
          </p>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-6 bg-black text-yellow-400 px-20 py-10 hover:bg-lime-400 hover:text-black transition-all font-black text-5xl uppercase tracking-tight border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            <Phone className="w-14 h-14" strokeWidth={4} />
            {siteConfig.contact.phone}
          </a>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-black border-8 border-black p-10">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-yellow-400" strokeWidth={4} />
              <h3 className="text-3xl font-black mb-4 uppercase tracking-wide text-yellow-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                ADRESSE
              </h3>
              <p className="text-white font-black text-xl uppercase">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>

            <div className="bg-black border-8 border-black p-10">
              <Users className="w-16 h-16 mx-auto mb-6 text-lime-400" strokeWidth={4} />
              <h3 className="text-3xl font-black mb-4 uppercase tracking-wide text-lime-400" style={{ fontFamily: 'Impact, sans-serif' }}>
                PUBLIC
              </h3>
              <p className="text-white font-black text-xl uppercase">
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
              <h3 className="text-4xl font-black mb-6 tracking-tight text-yellow-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                {siteConfig.name}
              </h3>
              <p className="text-white mb-4 font-black uppercase text-lg">{siteConfig.tagline}</p>
              <div className="w-20 h-1 bg-lime-400"></div>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 tracking-tight text-white uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                CONTACT
              </h3>
              <p className="text-white font-black uppercase text-lg leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                TÉL : {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 tracking-tight text-white uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                OUVERTURE
              </h3>
              <p className="text-yellow-400 font-black text-2xl mb-3 uppercase">{siteConfig.opening.date}</p>
              <p className="text-white font-black uppercase text-lg">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t-8 border-yellow-400 pt-12 text-center">
            <p className="font-black text-xl uppercase tracking-wide">
              © {new Date().getFullYear()} {siteConfig.name} - TOUS DROITS RÉSERVÉS
            </p>
            <p className="text-lg mt-4 font-black uppercase text-lime-400">
              FAMILLE HURST • DEPUIS 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}