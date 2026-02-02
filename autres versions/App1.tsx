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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-fuchsia-900/50' 
          : 'bg-gradient-to-b from-black via-black/90 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo avec effet néon */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur-lg opacity-75 animate-pulse"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-fuchsia-800 rounded-lg flex items-center justify-center shadow-2xl border-2 border-fuchsia-400">
                  <span className="text-3xl font-black text-white">V</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-fuchsia-600">
                  V CLUB
                </h1>
                <p className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest">Quéven • Lorient</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-fuchsia-400 transition-colors font-bold text-sm uppercase tracking-wider">
                Accueil
              </button>
              <button onClick={() => scrollToSection('ambiance')} className="text-gray-300 hover:text-fuchsia-400 transition-colors font-bold text-sm uppercase tracking-wider">
                Ambiance
              </button>
              <button onClick={() => scrollToSection('musique')} className="text-gray-300 hover:text-fuchsia-400 transition-colors font-bold text-sm uppercase tracking-wider">
                Musique
              </button>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded blur opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-3 rounded font-black uppercase text-sm tracking-wider hover:from-fuchsia-700 hover:to-purple-700 transition-all shadow-lg flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Réserver
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-fuchsia-900/30">
              <div className="flex flex-col space-y-3">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 text-gray-300 hover:text-fuchsia-400 capitalize font-bold uppercase tracking-wide text-sm"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-left py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-4 rounded font-black uppercase tracking-wide text-sm"
                >
                  Réserver
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section avec effets néon */}
      <section id="accueil" className="relative pt-32 pb-24 overflow-hidden">
        {/* Fond noir avec grilles néon animées */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Grille néon */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center bottom'
        }}></div>

        {/* Éclats de lumière */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-fuchsia-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge ouverture */}
            <div className="inline-flex items-center bg-fuchsia-600/20 text-fuchsia-400 px-8 py-4 rounded-full text-sm font-black mb-10 border-2 border-fuchsia-600 backdrop-blur-sm animate-pulse uppercase tracking-widest">
              <Sparkles className="w-6 h-6 mr-3" />
              Ouverture {siteConfig.opening.date}
            </div>
            
            {/* Titre principal avec effet néon */}
            <h1 className="text-8xl md:text-9xl font-black mb-6 leading-none tracking-tighter relative">
              <span className="relative inline-block">
                <span className="absolute inset-0 text-fuchsia-600 blur-2xl opacity-50">V CLUB</span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-fuchsia-600">V CLUB</span>
              </span>
            </h1>
            
            <p className="text-3xl md:text-4xl font-black text-yellow-400 mb-4 uppercase tracking-wider">
              {siteConfig.hero.subtitle}
            </p>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
              {siteConfig.hero.description}
            </p>

            {/* Badges avec effet glow */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {siteConfig.hero.badges.map((badge, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-fuchsia-600 hover:border-yellow-400 transition-colors">
                    <span className="font-black text-white uppercase tracking-wide">{badge}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Date ouverture massive */}
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 rounded-lg blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-8 border-2 border-fuchsia-500">
                <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400 mb-3">
                  14 FÉVRIER 2026
                </p>
                <p className="text-2xl font-bold text-white mb-2">🎤 Avec KGS en tête d'affiche</p>
                <p className="text-fuchsia-400 font-bold uppercase tracking-wider">Saint-Valentin • Soirée d'ouverture</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-12 py-6 rounded-lg hover:from-fuchsia-700 hover:to-purple-700 transition-all font-black text-xl uppercase tracking-wider shadow-2xl flex items-center gap-3">
                  <Phone className="w-7 h-7" />
                  {siteConfig.contact.phone}
                </div>
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="bg-black text-white px-12 py-6 rounded-lg hover:bg-gray-900 transition-all font-black text-xl uppercase tracking-wider shadow-xl border-2 border-yellow-400 hover:border-fuchsia-400 flex items-center gap-3"
              >
                <Zap className="w-7 h-7 text-yellow-400" />
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs technique */}
      <section className="py-20 bg-gradient-to-b from-black via-fuchsia-950/20 to-black relative overflow-hidden">
        {/* Lignes néon horizontales */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-4 tracking-tighter">
              Les Chiffres
            </h2>
            <p className="text-2xl font-bold text-yellow-400 uppercase tracking-wider">Plus grande boîte du secteur</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.venue.features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-8 border-2 border-fuchsia-600 hover:border-yellow-400 transition-all text-center">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-400 font-semibold">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section id="ambiance" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, rgba(236, 72, 153, 0.5) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-fuchsia-600 mb-6 tracking-tighter">
              {siteConfig.ambiance.title}
            </h2>
            <p className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wide">
              {siteConfig.ambiance.subtitle}
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              {siteConfig.ambiance.description}
            </p>
          </div>

          {/* Rénovations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/50 to-purple-600/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-br from-fuchsia-950/30 to-purple-950/30 backdrop-blur-sm rounded-lg p-6 border-2 border-fuchsia-900 hover:border-fuchsia-500 transition-all">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 font-semibold leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Citation parquet */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-yellow-950/50 to-orange-950/50 backdrop-blur-sm rounded-lg p-10 border-2 border-yellow-500">
              <p className="text-3xl italic text-white mb-6 leading-relaxed font-medium text-center">
                "{siteConfig.ambiance.parquet.quote}"
              </p>
              <p className="text-yellow-400 font-black text-xl text-center uppercase tracking-wide">
                — {siteConfig.ambiance.parquet.author}
              </p>
            </div>
          </div>

          {/* VIP */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-lg blur-xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-purple-950/50 to-fuchsia-950/50 backdrop-blur-sm rounded-lg p-10 border-2 border-purple-500 text-center">
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">{siteConfig.ambiance.vip.title}</h3>
              <p className="text-2xl font-bold text-fuchsia-400 mb-3">{siteConfig.ambiance.vip.capacity} places • {siteConfig.ambiance.vip.location}</p>
              <p className="text-xl text-gray-300 font-semibold">{siteConfig.ambiance.vip.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 mb-6 tracking-tighter">
              {siteConfig.music.title}
            </h2>
            <p className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wide">
              {siteConfig.music.subtitle}
            </p>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition animate-pulse"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-12 border-4 border-fuchsia-600 text-center">
                  <Music className="w-20 h-20 mx-auto mb-6 text-fuchsia-400" />
                  <h3 className="text-6xl font-black text-white uppercase tracking-tighter">{style}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-fuchsia-950/30 to-purple-950/30 backdrop-blur-sm rounded-lg p-10 border-2 border-fuchsia-600">
              <h3 className="text-4xl font-black text-white mb-8 text-center uppercase tracking-tight">{siteConfig.music.differentiation.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-gray-400 font-semibold mb-2">Région Lorient</p>
                  <p className="text-lg text-white font-bold">{siteConfig.music.differentiation.regional}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 font-semibold mb-2">Lyon/Grenoble</p>
                  <p className="text-lg text-white font-bold">{siteConfig.music.differentiation.lyonGrenoble}</p>
                </div>
                <div className="text-center">
                  <p className="text-fuchsia-400 font-black mb-2 uppercase tracking-wide">V Club</p>
                  <p className="text-xl text-yellow-400 font-black">{siteConfig.music.differentiation.vClub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* DJ Sixter */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-lg blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 backdrop-blur-sm rounded-lg p-10 border-2 border-purple-500">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-fuchsia-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-yellow-400">
                    <Radio className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter">{siteConfig.music.djSixter.name}</h3>
                  <p className="text-2xl text-fuchsia-400 font-bold">{siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ans</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-400 font-semibold mb-2 uppercase tracking-wide">Fréquence</p>
                  <p className="text-white font-black text-xl">{siteConfig.music.djSixter.frequency}</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold mb-2 uppercase tracking-wide">Style</p>
                  <p className="text-white font-black text-xl">{siteConfig.music.djSixter.style}</p>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 border-l-4 border-yellow-400">
                <p className="text-2xl italic text-white font-medium mb-3">"{siteConfig.music.djSixter.quote}"</p>
                <p className="text-fuchsia-400 font-bold">— Valentin Perron, Programmateur musical</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400 mb-6 tracking-tighter">
              {siteConfig.complex.title}
            </h2>
            <p className="text-2xl font-bold text-white mb-6 uppercase tracking-wide">
              {siteConfig.complex.subtitle}
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
              {siteConfig.complex.concept}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* V Club */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition"></div>
              <div className="relative bg-gradient-to-br from-fuchsia-950/50 to-purple-950/50 backdrop-blur-sm rounded-lg p-10 border-4 border-fuchsia-500">
                <h3 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">{siteConfig.complex.vClub.name}</h3>
                <p className="text-2xl font-bold text-fuchsia-400 mb-3">{siteConfig.complex.vClub.style}</p>
                <p className="text-xl text-yellow-400 font-bold mb-4">Public : {siteConfig.complex.vClub.target}</p>
                <p className="text-gray-300 font-semibold text-lg">{siteConfig.complex.vClub.vibe}</p>
              </div>
            </div>

            {/* Valentino */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition"></div>
              <div className="relative bg-gradient-to-br from-yellow-950/30 to-orange-950/30 backdrop-blur-sm rounded-lg p-10 border-4 border-yellow-600">
                <h3 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">{siteConfig.complex.valentino.name}</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-3">{siteConfig.complex.valentino.style}</p>
                <p className="text-xl text-orange-400 font-bold mb-4">Public : {siteConfig.complex.valentino.target}</p>
                <p className="text-gray-300 font-semibold text-lg mb-4">{siteConfig.complex.valentino.vibe}</p>
                <p className="text-sm text-gray-400 font-semibold">{siteConfig.complex.valentino.activities}</p>
              </div>
            </div>
          </div>

          {/* Symbolique */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-yellow-600 rounded-lg blur-xl opacity-30"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-8 border-2 border-fuchsia-600 text-center">
              <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">{siteConfig.complex.symbolism.title}</h4>
              <p className="text-xl text-gray-300 font-semibold">{siteConfig.complex.symbolism.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-20 bg-gradient-to-b from-black via-fuchsia-950/10 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-600 to-transparent"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg blur-2xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-fuchsia-950/50 to-purple-950/50 backdrop-blur-sm rounded-lg p-10 border-2 border-fuchsia-600">
              <div className="text-center mb-8">
                <Bus className="w-20 h-20 mx-auto mb-6 text-fuchsia-400" />
                <h2 className="text-5xl font-black text-white mb-4 uppercase tracking-tighter">{siteConfig.transport.title}</h2>
                <p className="text-2xl font-bold text-yellow-400 uppercase tracking-wide">{siteConfig.transport.subtitle}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {siteConfig.transport.circuit.map((ville, index) => (
                  <div key={index} className="bg-black/50 px-6 py-3 rounded-full border-2 border-fuchsia-600">
                    <span className="font-black text-white text-lg">{ville}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-300 font-semibold text-lg">{siteConfig.transport.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires & Tarifs */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-16 text-center tracking-tighter">
            Infos Pratiques
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Horaires */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-lg blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-fuchsia-950/30 to-purple-950/30 backdrop-blur-sm rounded-lg p-8 border-2 border-fuchsia-600 text-center">
                <Clock className="w-16 h-16 mx-auto mb-6 text-fuchsia-400" />
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Horaires</h3>
                <p className="text-2xl font-bold text-fuchsia-400 mb-3">{siteConfig.schedule.days[0]}</p>
                <p className="text-4xl font-black text-white mb-4">{siteConfig.schedule.hours}</p>
                <p className="text-sm text-gray-400 font-semibold">{siteConfig.schedule.note}</p>
              </div>
            </div>

            {/* Tarifs */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg blur-xl opacity-40"></div>
              <div className="relative bg-gradient-to-br from-yellow-950/30 to-orange-950/30 backdrop-blur-sm rounded-lg p-8 border-2 border-yellow-600 text-center">
                <Star className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Tarifs</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 font-semibold mb-1 uppercase tracking-wide">Soirée</p>
                    <p className="text-5xl font-black text-white">{siteConfig.schedule.prices.standard}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-semibold mb-1 uppercase tracking-wide">Showcase</p>
                    <p className="text-5xl font-black text-yellow-400">{siteConfig.schedule.prices.showcase}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-16 text-center tracking-tighter">
            {siteConfig.faq.title}
          </h2>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition"></div>
                <div className="relative bg-gradient-to-br from-fuchsia-950/20 to-purple-950/20 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-fuchsia-900 hover:border-fuchsia-500 transition-all">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between"
                  >
                    <span className="font-black text-white text-xl pr-4 tracking-tight">{item.question}</span>
                    <ChevronDown 
                      className={`w-7 h-7 text-fuchsia-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-8 py-6 bg-black/50 border-t-2 border-fuchsia-900">
                      <p className="text-gray-300 leading-relaxed font-medium text-lg">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Fond dégradé animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-7xl font-black mb-8 tracking-tighter text-white">
            Réservez Maintenant
          </h2>
          <p className="text-3xl mb-14 font-bold text-yellow-300 uppercase tracking-wider">
            Ouverture le {siteConfig.opening.date}
          </p>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-4 bg-black text-white px-16 py-8 rounded-lg hover:bg-gray-900 transition-all font-black text-3xl uppercase tracking-wider shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <Phone className="w-10 h-10" />
            {siteConfig.contact.phone}
          </a>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-white/20">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-3 uppercase tracking-wide text-white">Adresse</h3>
              <p className="text-white/95 font-semibold">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-white/20">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-3 uppercase tracking-wide text-white">Public</h3>
              <p className="text-white/95 font-semibold">
                {siteConfig.target.age}<br />
                Électro • Pop
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t-2 border-fuchsia-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-5 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">{siteConfig.name}</h3>
              <p className="text-gray-400 mb-3 font-semibold">{siteConfig.tagline}</p>
              <p className="text-gray-600 text-sm font-bold uppercase tracking-wide">{siteConfig.slogan}</p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-5 tracking-tight text-white">Contact</h3>
              <p className="text-gray-400 font-semibold">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                Tél : {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-5 tracking-tight text-white">Ouverture</h3>
              <p className="text-fuchsia-400 font-black text-xl mb-2">{siteConfig.opening.date}</p>
              <p className="text-gray-400 font-semibold">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t border-fuchsia-900 pt-10 text-center text-gray-500">
            <p className="font-semibold">© {new Date().getFullYear()} {siteConfig.name} - Tous droits réservés</p>
            <p className="text-sm mt-3 font-bold">Famille Hurst • Depuis 1988</p>
          </div>
        </div>
      </footer>
    </div>
  );
}