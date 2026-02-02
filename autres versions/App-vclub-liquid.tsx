import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, Music, Sparkles,
  Star, Check, ChevronDown, Users, Zap, Radio, Bus, Crown, Waves
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-pink-950 to-blue-950 text-white relative overflow-hidden" style={{
      fontFamily: '"Sora", "Inter", system-ui, sans-serif'
    }}>
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-60" style={{
        background: 'linear-gradient(45deg, #1E1B4B, #831843, #1E3A8A, #9333EA)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}></div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 blur-xl"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Blob cursor follower */}
      <div 
        className="fixed w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/30 to-pink-500/30 blur-2xl pointer-events-none transition-all duration-300 ease-out z-50"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          mixBlendMode: 'screen'
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(30px) rotate(240deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(244, 114, 182, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(244, 114, 182, 0.5); }
        }
        @keyframes blob-bounce {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-10px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-indigo-950/80 backdrop-blur-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo blob */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div 
                  className="w-14 h-14 bg-gradient-to-br from-violet-500 via-pink-500 to-blue-500 flex items-center justify-center relative"
                  style={{
                    animation: 'morph 8s ease-in-out infinite, pulse-glow 3s ease-in-out infinite',
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                  }}
                >
                  <Waves className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  V CLUB
                </h1>
                <p className="text-xs font-semibold text-violet-300 tracking-widest">QUÉVEN</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['accueil', 'ambiance', 'musique'].map(section => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="relative px-5 py-2 rounded-full font-semibold text-sm capitalize text-violet-200 hover:text-white transition-all group"
                >
                  <span className="relative z-10">{section}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all blur-sm"></span>
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative px-6 py-3 rounded-full font-bold text-sm text-white overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #9333EA, #F472B6, #3B82F6)',
                  animation: 'pulse-glow 3s ease-in-out infinite'
                }}
              >
                <span className="relative z-10">RÉSERVER</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-violet-300">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 backdrop-blur-xl bg-indigo-950/90 rounded-3xl mt-4 mb-4">
              <div className="flex flex-col gap-3">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 px-6 text-violet-200 hover:text-white capitalize font-semibold rounded-2xl hover:bg-violet-500/20 transition-all"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-center py-3 px-6 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-2xl font-bold"
                >
                  RÉSERVER
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge ouverture blob */}
            <div className="inline-flex items-center gap-3 mb-10 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/30 to-pink-500/30 backdrop-blur-xl border border-violet-400/30">
              <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
              <p className="font-bold text-violet-200 tracking-wide">
                Ouverture {siteConfig.opening.date}
              </p>
            </div>
            
            {/* Titre principal avec effet liquide */}
            <div className="relative mb-12">
              <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black mb-4 leading-none tracking-tight">
                <span className="relative inline-block" style={{
                  background: 'linear-gradient(135deg, #A78BFA, #F472B6, #60A5FA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 40px rgba(167, 139, 250, 0.5))'
                }}>
                  V CLUB
                </span>
              </h1>
              {/* Floating blobs around title */}
              <div className="absolute -top-10 left-1/4 w-20 h-20 bg-violet-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">
                {siteConfig.hero.subtitle}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                {siteConfig.hero.description}
              </p>
            </div>

            {/* Blob badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {siteConfig.hero.badges.map((badge, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 bg-gradient-to-br from-violet-500/20 to-pink-500/20 backdrop-blur-xl border border-violet-400/30 font-bold text-white rounded-full hover:scale-105 transition-transform"
                  style={{
                    animation: `blob-bounce ${2 + index * 0.3}s ease-in-out infinite`
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>

            {/* Date card blob */}
            <div className="max-w-2xl mx-auto mb-16 relative">
              <div 
                className="bg-gradient-to-br from-violet-900/50 to-pink-900/50 backdrop-blur-xl p-10 border border-violet-400/30 relative overflow-hidden"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'morph 10s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 blur-2xl"></div>
                <div className="relative z-10">
                  <p className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    14 FÉVRIER
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-3">🎤 Avec KGS</p>
                  <p className="text-lg text-violet-300 font-semibold">Saint-Valentin • Opening Night</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group relative px-10 py-5 rounded-full font-black text-xl text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #9333EA, #F472B6, #3B82F6)',
                  animation: 'pulse-glow 3s ease-in-out infinite'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all"></div>
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="px-10 py-5 rounded-full font-black text-xl text-violet-300 border-2 border-violet-400/50 hover:border-violet-400 hover:bg-violet-500/20 transition-all flex items-center gap-3 backdrop-blur-xl"
              >
                <Sparkles className="w-6 h-6" />
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Blob cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Les Chiffres
            </h2>
            <p className="text-xl text-violet-300 font-semibold">La plus grande boîte du secteur</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.venue.features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="bg-gradient-to-br from-violet-900/40 to-pink-900/40 backdrop-blur-xl p-8 border border-violet-400/30 hover:border-violet-400/60 transition-all text-center relative overflow-hidden group-hover:scale-105 transform duration-300"
                  style={{
                    borderRadius: '50% 50% 30% 70% / 60% 60% 40% 40%',
                    animation: `morph ${8 + index}s ease-in-out infinite`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all blur-xl"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 filter drop-shadow-lg">{feature.icon}</div>
                    <h3 className="text-4xl font-black mb-3 text-white">{feature.title}</h3>
                    <p className="text-violet-300 font-semibold">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section id="ambiance" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              {siteConfig.ambiance.title}
            </h2>
            <p className="text-2xl font-bold text-white mb-4">
              {siteConfig.ambiance.subtitle}
            </p>
          </div>

          {/* Renovations grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-violet-900/30 to-pink-900/30 backdrop-blur-xl p-8 rounded-3xl border border-violet-400/30 hover:border-pink-400/50 transition-all group hover:scale-105 transform duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Quote blob */}
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className="bg-gradient-to-br from-pink-900/50 to-violet-900/50 backdrop-blur-xl p-12 border border-pink-400/30 relative overflow-hidden"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'morph 12s ease-in-out infinite'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-violet-500/10 blur-2xl"></div>
              <div className="relative z-10">
                <p className="text-3xl italic font-bold text-white mb-6 leading-relaxed">
                  "{siteConfig.ambiance.parquet.quote}"
                </p>
                <p className="text-xl font-black text-pink-400">
                  — {siteConfig.ambiance.parquet.author}
                </p>
              </div>
            </div>
          </div>

          {/* VIP blob */}
          <div className="text-center">
            <div 
              className="inline-block bg-gradient-to-br from-violet-500/30 to-pink-500/30 backdrop-blur-xl px-12 py-10 border border-violet-400/50 relative"
              style={{
                borderRadius: '60% 40% 70% 30% / 40% 60% 40% 60%',
                animation: 'morph 10s ease-in-out infinite, pulse-glow 4s ease-in-out infinite'
              }}
            >
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-4xl font-black text-white mb-4">{siteConfig.ambiance.vip.title}</h3>
              <p className="text-2xl text-violet-300 font-bold">{siteConfig.ambiance.vip.capacity} places • {siteConfig.ambiance.vip.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              {siteConfig.music.title}
            </h2>
            <p className="text-2xl font-bold text-violet-300">{siteConfig.music.subtitle}</p>
          </div>

          {/* Styles musicaux blobs */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{
                  animation: `float ${4 + index}s ease-in-out infinite`
                }}
              >
                <div 
                  className="bg-gradient-to-br from-violet-900/50 to-blue-900/50 backdrop-blur-xl p-16 border border-violet-400/40 hover:border-violet-400/80 transition-all text-center relative overflow-hidden group-hover:scale-105 transform duration-300"
                  style={{
                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    animation: `morph ${10 + index * 2}s ease-in-out infinite`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all blur-2xl"></div>
                  <div className="relative z-10">
                    <Music className="w-20 h-20 mx-auto mb-8 text-violet-400" />
                    <h3 className="text-6xl font-black text-white">{style}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="bg-gradient-to-br from-violet-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-10 border border-violet-400/30 mb-16">
            <h3 className="text-3xl font-black text-white mb-8 text-center">{siteConfig.music.differentiation.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-2xl bg-violet-500/10">
                <p className="text-violet-400 font-bold mb-2 text-sm uppercase">Région Lorient</p>
                <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.regional}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-pink-500/10">
                <p className="text-pink-400 font-bold mb-2 text-sm uppercase">Lyon/Grenoble</p>
                <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.lyonGrenoble}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-blue-500/20 border-2 border-blue-400/50">
                <p className="text-blue-400 font-black mb-2 text-sm uppercase">V Club</p>
                <p className="text-2xl text-white font-black">{siteConfig.music.differentiation.vClub}</p>
              </div>
            </div>
          </div>

          {/* DJ Sixter blob */}
          <div 
            className="bg-gradient-to-br from-pink-900/50 to-violet-900/50 backdrop-blur-xl p-12 rounded-3xl border border-pink-400/40 relative overflow-hidden"
            style={{
              animation: 'pulse-glow 5s ease-in-out infinite'
            }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div 
                className="w-24 h-24 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center"
                style={{
                  animation: 'morph 8s ease-in-out infinite'
                }}
              >
                <Radio className="w-12 h-12 text-white" />
              </div>
              <div>
                <h3 className="text-5xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-2xl text-violet-300 font-bold">
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ans
                </p>
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-pink-400">
              <p className="text-2xl italic text-white font-semibold mb-4 leading-relaxed">
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-lg font-bold text-pink-400">— Valentin Perron, Programmateur musical</p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              2 Salles, 2 Ambiances
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div 
              className="bg-gradient-to-br from-violet-900/50 to-blue-900/50 backdrop-blur-xl p-10 rounded-3xl border border-violet-400/40 hover:border-violet-400/80 transition-all group hover:scale-105 transform duration-300"
              style={{
                animation: 'float 5s ease-in-out infinite'
              }}
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-4">
                V CLUB
              </h3>
              <p className="text-2xl font-bold text-violet-300 mb-3">{siteConfig.complex.vClub.style}</p>
              <p className="text-lg text-gray-300">{siteConfig.complex.vClub.target}</p>
            </div>

            <div 
              className="bg-gradient-to-br from-pink-900/50 to-orange-900/50 backdrop-blur-xl p-10 rounded-3xl border border-pink-400/40 hover:border-pink-400/80 transition-all group hover:scale-105 transform duration-300"
              style={{
                animation: 'float 5s ease-in-out infinite',
                animationDelay: '0.5s'
              }}
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
                VALENTINO
              </h3>
              <p className="text-2xl font-bold text-pink-300 mb-3">{siteConfig.complex.valentino.style}</p>
              <p className="text-lg text-gray-300">{siteConfig.complex.valentino.target}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-xl px-10 py-6 rounded-full border border-violet-400/30">
              <p className="text-2xl font-black text-white">{siteConfig.complex.symbolism.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport + Infos */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Navette blob */}
          <div 
            className="bg-gradient-to-br from-violet-900/50 to-pink-900/50 backdrop-blur-xl p-12 rounded-3xl border border-violet-400/40 mb-12"
            style={{
              animation: 'pulse-glow 4s ease-in-out infinite'
            }}
          >
            <div className="text-center mb-10">
              <div 
                className="inline-block w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full flex items-center justify-center mb-6"
                style={{
                  animation: 'morph 8s ease-in-out infinite'
                }}
              >
                <Bus className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-white mb-4">Navette Gratuite</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 bg-violet-500/20 backdrop-blur-xl rounded-full border border-violet-400/30"
                >
                  <span className="font-bold text-white text-lg">{ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-violet-900/40 to-blue-900/40 backdrop-blur-xl p-10 rounded-3xl border border-violet-400/30 text-center">
              <Clock className="w-16 h-16 mx-auto mb-6 text-violet-400" />
              <h3 className="text-3xl font-black text-white mb-6">Horaires</h3>
              <p className="text-2xl font-bold text-violet-300 mb-4">{siteConfig.schedule.days[0]}</p>
              <p className="text-5xl font-black text-white">{siteConfig.schedule.hours}</p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/40 to-violet-900/40 backdrop-blur-xl p-10 rounded-3xl border border-pink-400/30 text-center">
              <Star className="w-16 h-16 mx-auto mb-6 text-pink-400" />
              <h3 className="text-3xl font-black text-white mb-6">Tarifs</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-gray-400 mb-2">Soirée</p>
                  <p className="text-5xl font-black text-white">{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-lg text-gray-400 mb-2">Showcase</p>
                  <p className="text-5xl font-black text-pink-400">{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black mb-16 text-center bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            FAQ
          </h2>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-violet-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-violet-400/30 hover:border-violet-400/50 transition-all"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-bold text-white text-xl pr-6">{item.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-violet-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-violet-500/10 border-t border-violet-400/20">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div 
            className="bg-gradient-to-br from-violet-900/60 to-pink-900/60 backdrop-blur-xl p-16 rounded-3xl border border-violet-400/50 relative overflow-hidden"
            style={{
              animation: 'pulse-glow 5s ease-in-out infinite'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-pink-500/10 blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-6xl sm:text-7xl font-black mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Réservez Maintenant
              </h2>
              <p className="text-3xl mb-12 font-bold text-violet-300">
                Ouverture {siteConfig.opening.date}
              </p>

              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full font-black text-3xl text-white mb-16"
                style={{
                  background: 'linear-gradient(135deg, #9333EA, #F472B6, #3B82F6)',
                  animation: 'pulse-glow 3s ease-in-out infinite'
                }}
              >
                <Phone className="w-10 h-10" />
                {siteConfig.contact.phone}
              </a>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-violet-500/10 backdrop-blur-xl p-8 rounded-2xl border border-violet-400/30">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-violet-400" />
                  <h3 className="text-xl font-black mb-4 text-violet-300">Adresse</h3>
                  <p className="text-white font-semibold">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </p>
                </div>

                <div className="bg-pink-500/10 backdrop-blur-xl p-8 rounded-2xl border border-pink-400/30">
                  <Users className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                  <h3 className="text-xl font-black mb-4 text-pink-300">Public</h3>
                  <p className="text-white font-semibold">
                    {siteConfig.target.age}<br />
                    Électro • Pop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950/50 backdrop-blur-xl text-white py-16 border-t border-violet-400/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </h3>
              <p className="text-gray-400 mb-4 font-medium">{siteConfig.tagline}</p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4 text-white">Contact</h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                Tél : {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4 text-white">Ouverture</h3>
              <p className="text-pink-400 font-bold text-xl mb-2">{siteConfig.opening.date}</p>
              <p className="text-gray-400 font-medium">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t border-violet-400/20 pt-8 text-center">
            <p className="text-gray-500 font-medium">
              © {new Date().getFullYear()} {siteConfig.name} - Tous droits réservés
            </p>
            <p className="text-sm mt-2 font-bold text-violet-400">
              Famille Hurst • Depuis 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}