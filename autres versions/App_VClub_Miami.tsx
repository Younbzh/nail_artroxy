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
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-orange-900 text-white" style={{
      fontFamily: '"Orbitron", "Audiowide", "Rajdhani", sans-serif'
    }}>
      {/* Grille perspective néon omniprésente */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .3) 25%, rgba(0, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .3) 75%, rgba(0, 255, 255, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(800px) rotateX(60deg) scale(2)',
        transformOrigin: 'center bottom',
        height: '300%'
      }}></div>

      {/* Horizon glow */}
      <div className="fixed bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-orange-500/30 via-pink-500/20 to-transparent pointer-events-none"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b-2 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.5)]' 
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo chromé */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-magenta-500 to-orange-500 rounded opacity-75 blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 via-magenta-500 to-orange-500 rounded flex items-center justify-center border-2 border-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.8)]">
                  <span className="text-4xl font-black text-white" style={{ 
                    textShadow: '0 0 10px rgba(0,255,255,1), 0 0 20px rgba(255,0,255,1)'
                  }}>V</span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-wider" style={{
                  background: 'linear-gradient(to right, #00FFFF, #FF00FF, #FF6B35)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(0,255,255,0.5)'
                }}>
                  V CLUB
                </h1>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em]" style={{
                  textShadow: '0 0 10px rgba(0,255,255,0.8)'
                }}>QUÉVEN</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['accueil', 'ambiance', 'musique'].map(section => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-cyan-300 hover:text-magenta-400 transition-all font-bold text-sm uppercase tracking-[0.2em] relative group"
                  style={{ textShadow: '0 0 10px rgba(0,255,255,0.5)' }}
                >
                  <span className="relative z-10">{section}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-orange-500 opacity-100"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative px-8 py-3 font-black uppercase text-sm tracking-[0.2em] text-white border-2 border-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] group-hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] transition-all">
                  RÉSERVER
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-cyan-400">
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t-2 border-cyan-400/30 bg-black/90 backdrop-blur-xl">
              <div className="flex flex-col space-y-4">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-4 text-cyan-300 hover:text-magenta-400 capitalize font-bold uppercase tracking-[0.2em] text-sm border-l-4 border-transparent hover:border-cyan-400 pl-6 transition-all"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-left py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white px-6 font-black uppercase tracking-[0.2em] text-sm border-2 border-cyan-300"
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
        {/* Sun glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/40 via-pink-500/30 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge ouverture avec glow */}
            <div className="inline-flex items-center gap-3 mb-12 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur-xl opacity-75 group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/80 backdrop-blur-sm border-2 border-cyan-400 px-10 py-5 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.6)]">
                <p className="font-black text-xl uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                  ✦ OUVERTURE {siteConfig.opening.date}
                </p>
              </div>
            </div>
            
            {/* Titre principal avec effet chromé */}
            <h1 className="text-9xl md:text-[14rem] font-black leading-none mb-12 tracking-wider relative" style={{
              background: 'linear-gradient(to bottom, #00FFFF 0%, #FF00FF 50%, #FF6B35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(0,255,255,0.8)) drop-shadow(0 0 60px rgba(255,0,255,0.6))'
            }}>
              V CLUB
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-magenta-500/20 to-orange-500/20 blur-2xl"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-400/50 p-8 rounded-lg">
                <p className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider" style={{
                  background: 'linear-gradient(to right, #FFFFFF, #00FFFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {siteConfig.hero.subtitle}
                </p>
                <p className="text-xl font-bold text-cyan-300 tracking-wide" style={{
                  textShadow: '0 0 10px rgba(0,255,255,0.5)'
                }}>
                  {siteConfig.hero.description}
                </p>
              </div>
            </div>

            {/* Badges néon */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {siteConfig.hero.badges.map((badge, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded blur-xl opacity-50 group-hover:opacity-100 transition-all"></div>
                  <div className="relative bg-black/80 backdrop-blur-sm px-8 py-4 rounded border-2 border-cyan-400 group-hover:border-magenta-400 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                    <span className="font-black text-white uppercase tracking-wider" style={{
                      textShadow: '0 0 10px rgba(0,255,255,0.8)'
                    }}>{badge}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Date massive avec effet sunset */}
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-purple-500/30 blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-orange-900/50 via-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-lg p-12 border-2 border-orange-400 shadow-[0_0_40px_rgba(255,107,53,0.5)]">
                <p className="text-7xl md:text-8xl font-black mb-4 uppercase tracking-wider" style={{
                  background: 'linear-gradient(to right, #FF6B35, #FF00FF, #00FFFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(255,107,53,0.8))'
                }}>
                  14 FÉVRIER 2026
                </p>
                <p className="text-3xl font-bold text-white mb-2" style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}>🎤 Avec KGS en tête d'affiche</p>
                <p className="text-xl font-bold uppercase tracking-[0.3em]" style={{
                  background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  SAINT-VALENTIN • SOIRÉE D'OUVERTURE
                </p>
              </div>
            </div>

            {/* CTAs chromés */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-orange-500 opacity-100 animate-pulse"></div>
                <div className="relative px-14 py-7 font-black text-2xl uppercase tracking-wider text-white border-2 border-cyan-300 shadow-[0_0_40px_rgba(0,255,255,0.8)] group-hover:shadow-[0_0_60px_rgba(255,0,255,1)] transition-all flex items-center gap-4">
                  <Phone className="w-8 h-8" />
                  {siteConfig.contact.phone}
                </div>
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-magenta-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative px-14 py-7 font-black text-2xl uppercase tracking-wider text-cyan-400 border-2 border-cyan-400 group-hover:border-magenta-400 group-hover:text-white transition-all flex items-center gap-4 shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                  <Zap className="w-8 h-8" />
                  DÉCOUVRIR
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs avec grilles néon */}
      <section className="py-32 relative overflow-hidden border-y-2 border-cyan-400/30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-7xl font-black mb-6 uppercase tracking-wider" style={{
              background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 30px rgba(0,255,255,0.6))'
            }}>
              LES CHIFFRES
            </h2>
            <p className="text-2xl font-bold text-orange-400 uppercase tracking-[0.2em]" style={{
              textShadow: '0 0 20px rgba(255,107,53,0.8)'
            }}>Plus grande boîte du secteur</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.venue.features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-lg blur-xl opacity-40 group-hover:opacity-70 transition-all"></div>
                <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-10 border-2 border-cyan-400 group-hover:border-magenta-400 transition-all text-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                  <div className="text-6xl mb-6 filter drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">{feature.icon}</div>
                  <h3 className="text-4xl font-black mb-3 uppercase tracking-tight" style={{
                    background: 'linear-gradient(to bottom, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{feature.title}</h3>
                  <p className="text-cyan-300 font-bold" style={{
                    textShadow: '0 0 10px rgba(0,255,255,0.5)'
                  }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section id="ambiance" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-8xl font-black mb-8 uppercase tracking-wider" style={{
              background: 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 50%, #FF6B35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(0,255,255,0.7))'
            }}>
              {siteConfig.ambiance.title}
            </h2>
            <p className="text-3xl font-bold text-white mb-6 uppercase tracking-wide" style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5)'
            }}>
              {siteConfig.ambiance.subtitle}
            </p>
          </div>

          {/* Rénovations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-magenta-500/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative bg-black/70 backdrop-blur-sm rounded-lg p-8 border-2 border-cyan-400/50 group-hover:border-magenta-400 transition-all">
                  <div className="text-5xl mb-6 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">{item.icon}</div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tight" style={{
                    background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{item.title}</h3>
                  <p className="text-gray-300 font-semibold leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Citation parquet */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-pink-500/30 rounded-lg blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-orange-900/60 to-pink-900/60 backdrop-blur-md rounded-lg p-12 border-2 border-orange-400 shadow-[0_0_40px_rgba(255,107,53,0.4)]">
              <p className="text-4xl italic font-bold text-white mb-8 leading-relaxed text-center" style={{
                textShadow: '0 0 20px rgba(255,255,255,0.3)'
              }}>
                "{siteConfig.ambiance.parquet.quote}"
              </p>
              <p className="text-2xl font-black text-center uppercase tracking-wide" style={{
                background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                — {siteConfig.ambiance.parquet.author}
              </p>
            </div>
          </div>

          {/* VIP */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/30 to-cyan-500/30 rounded-lg blur-2xl"></div>
            <div className="relative bg-black/70 backdrop-blur-md rounded-lg p-16 border-2 border-magenta-400 text-center shadow-[0_0_50px_rgba(255,0,255,0.5)]">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500 blur-2xl opacity-75"></div>
                <Crown className="relative w-20 h-20 mx-auto text-white" style={{
                  filter: 'drop-shadow(0 0 20px rgba(0,255,255,1))'
                }} />
              </div>
              <h3 className="text-6xl font-black mb-6 uppercase tracking-tight" style={{
                background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(255,0,255,0.6))'
              }}>
                {siteConfig.ambiance.vip.title}
              </h3>
              <p className="text-3xl font-bold text-cyan-400 mb-4" style={{
                textShadow: '0 0 15px rgba(0,255,255,0.8)'
              }}>
                {siteConfig.ambiance.vip.capacity} places • {siteConfig.ambiance.vip.location}
              </p>
              <p className="text-xl text-white font-semibold">{siteConfig.ambiance.vip.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-32 relative border-y-2 border-magenta-400/30 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,255,0.1) 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-8xl font-black mb-8 uppercase tracking-wider" style={{
              background: 'linear-gradient(to right, #FF00FF, #00FFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(255,0,255,0.7))'
            }}>
              {siteConfig.music.title}
            </h2>
            <p className="text-3xl font-bold uppercase tracking-wide" style={{
              background: 'linear-gradient(to right, #FF6B35, #00FFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {siteConfig.music.subtitle}
            </p>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {siteConfig.music.styles.map((style, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-80 transition-all animate-pulse"></div>
                <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-16 border-2 border-cyan-400 group-hover:border-magenta-400 transition-all text-center shadow-[0_0_50px_rgba(0,255,255,0.4)]">
                  <Music className="w-24 h-24 mx-auto mb-10 text-cyan-400 group-hover:text-magenta-400 transition-colors" style={{
                    filter: 'drop-shadow(0 0 20px currentColor)'
                  }} />
                  <h3 className="text-7xl font-black uppercase tracking-wider" style={{
                    background: 'linear-gradient(to bottom, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(0,255,255,0.8))'
                  }}>{style}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg blur-2xl"></div>
            <div className="relative bg-black/70 backdrop-blur-md rounded-lg p-12 border-2 border-cyan-400">
              <h3 className="text-5xl font-black mb-12 text-center uppercase tracking-tight" style={{
                background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{siteConfig.music.differentiation.title}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-black/50 rounded border-2 border-cyan-400/30">
                  <p className="text-cyan-400 font-bold mb-3 uppercase tracking-wide text-sm">Région Lorient</p>
                  <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.regional}</p>
                </div>
                <div className="text-center p-6 bg-black/50 rounded border-2 border-magenta-400/30">
                  <p className="text-magenta-400 font-bold mb-3 uppercase tracking-wide text-sm">Lyon/Grenoble</p>
                  <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.lyonGrenoble}</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded border-2 border-orange-400">
                  <p className="text-orange-400 font-black mb-3 uppercase tracking-wide text-sm">V Club</p>
                  <p className="text-2xl font-black uppercase" style={{
                    background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{siteConfig.music.differentiation.vClub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* DJ Sixter */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-500/30 via-cyan-500/30 to-orange-500/30 rounded-lg blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-900/70 to-pink-900/70 backdrop-blur-md rounded-lg p-12 border-2 border-magenta-400 shadow-[0_0_60px_rgba(255,0,255,0.5)]">
              <div className="flex items-center gap-8 mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full blur-2xl opacity-75"></div>
                  <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-400 to-magenta-500 rounded-full flex items-center justify-center border-4 border-white shadow-[0_0_30px_rgba(0,255,255,1)]">
                    <Radio className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-6xl font-black uppercase tracking-wider mb-2" style={{
                    background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.8))'
                  }}>
                    {siteConfig.music.djSixter.name}
                  </h3>
                  <p className="text-3xl text-cyan-400 font-bold" style={{
                    textShadow: '0 0 15px rgba(0,255,255,0.8)'
                  }}>
                    {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} ans
                  </p>
                </div>
              </div>
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-10 border-l-4 border-orange-400">
                <p className="text-3xl italic text-white font-semibold mb-4 leading-relaxed" style={{
                  textShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}>
                  "{siteConfig.music.djSixter.quote}"
                </p>
                <p className="text-xl font-bold uppercase tracking-wide" style={{
                  background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>— Valentin Perron, Programmateur musical</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-8xl font-black mb-8 uppercase tracking-wider" style={{
              background: 'linear-gradient(135deg, #00FFFF, #FF00FF, #FF6B35)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(0,255,255,0.6))'
            }}>
              2 SALLES<br/>2 AMBIANCES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-all"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-12 border-2 border-cyan-400 group-hover:border-magenta-400 transition-all shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                <h3 className="text-6xl font-black mb-6 uppercase tracking-tight" style={{
                  background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.8))'
                }}>{siteConfig.complex.vClub.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4" style={{
                  textShadow: '0 0 15px rgba(0,255,255,0.8)'
                }}>{siteConfig.complex.vClub.style}</p>
                <p className="text-xl text-white font-semibold">{siteConfig.complex.vClub.vibe}</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg blur-2xl opacity-40 group-hover:opacity-65 transition-all"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-12 border-2 border-orange-400 group-hover:border-pink-400 transition-all shadow-[0_0_40px_rgba(255,107,53,0.3)]">
                <h3 className="text-6xl font-black mb-6 uppercase tracking-tight" style={{
                  background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(255,107,53,0.8))'
                }}>{siteConfig.complex.valentino.name}</h3>
                <p className="text-3xl font-bold text-orange-400 mb-4" style={{
                  textShadow: '0 0 15px rgba(255,107,53,0.8)'
                }}>{siteConfig.complex.valentino.style}</p>
                <p className="text-xl text-white font-semibold">{siteConfig.complex.valentino.vibe}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 rounded-lg blur-2xl"></div>
            <div className="relative bg-black/70 backdrop-blur-sm rounded-lg p-10 border-2 border-cyan-400 text-center shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              <p className="text-4xl font-black uppercase tracking-wide" style={{
                background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{siteConfig.complex.symbolism.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport + Infos */}
      <section className="py-24 relative border-t-2 border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Navette */}
          <div className="relative mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-magenta-500/30 rounded-lg blur-2xl"></div>
            <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-16 border-2 border-cyan-400 shadow-[0_0_50px_rgba(0,255,255,0.4)]">
              <div className="text-center mb-12">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500 blur-2xl opacity-75"></div>
                  <Bus className="relative w-24 h-24 mx-auto text-cyan-400" style={{
                    filter: 'drop-shadow(0 0 20px rgba(0,255,255,1))'
                  }} />
                </div>
                <h2 className="text-6xl font-black mb-4 uppercase tracking-wider" style={{
                  background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(0,255,255,0.8))'
                }}>
                  NAVETTE GRATUITE
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {siteConfig.transport.circuit.map((ville, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded blur-lg opacity-50 group-hover:opacity-100 transition-all"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm px-8 py-4 rounded border-2 border-cyan-400 group-hover:border-magenta-400 transition-all">
                      <span className="font-black text-white text-2xl uppercase tracking-wide" style={{
                        textShadow: '0 0 10px rgba(0,255,255,0.8)'
                      }}>{ville}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-magenta-500/30 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-12 border-2 border-cyan-400 text-center shadow-[0_0_40px_rgba(0,255,255,0.3)]">
                <Clock className="w-20 h-20 mx-auto mb-8 text-cyan-400" style={{
                  filter: 'drop-shadow(0 0 20px rgba(0,255,255,1))'
                }} />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tight" style={{
                  background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>HORAIRES</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4">{siteConfig.schedule.days[0]}</p>
                <p className="text-5xl font-black text-white" style={{
                  textShadow: '0 0 20px rgba(255,255,255,0.5)'
                }}>{siteConfig.schedule.hours}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-pink-500/30 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-12 border-2 border-orange-400 text-center shadow-[0_0_40px_rgba(255,107,53,0.3)]">
                <Star className="w-20 h-20 mx-auto mb-8 text-orange-400" style={{
                  filter: 'drop-shadow(0 0 20px rgba(255,107,53,1))'
                }} />
                <h3 className="text-4xl font-black mb-6 uppercase tracking-tight" style={{
                  background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>TARIFS</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl text-gray-400 font-bold mb-2 uppercase">Soirée</p>
                    <p className="text-6xl font-black text-white">{siteConfig.schedule.prices.standard}</p>
                  </div>
                  <div>
                    <p className="text-xl text-gray-400 font-bold mb-2 uppercase">Showcase</p>
                    <p className="text-6xl font-black" style={{
                      background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>{siteConfig.schedule.prices.showcase}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-8xl font-black mb-20 text-center uppercase tracking-wider" style={{
            background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 40px rgba(0,255,255,0.7))'
          }}>
            FAQ
          </h2>

          <div className="space-y-6">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg blur opacity-0 group-hover:opacity-40 transition-all"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full px-10 py-8 text-left flex items-center justify-between"
                  >
                    <span className="font-black text-white text-2xl pr-6 uppercase tracking-tight">{item.question}</span>
                    <ChevronDown 
                      className={`w-8 h-8 text-cyan-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                      style={{ filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.8))' }}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-10 py-8 bg-gradient-to-r from-cyan-900/30 to-magenta-900/30 border-t-2 border-cyan-400/30">
                      <p className="text-gray-200 leading-relaxed font-medium text-lg">{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 relative overflow-hidden border-t-2 border-cyan-400/30">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-9xl font-black mb-12 tracking-wider uppercase" style={{
            background: 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 50%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 50px rgba(0,255,255,0.8))'
          }}>
            RÉSERVEZ<br/>MAINTENANT
          </h2>
          <p className="text-4xl mb-16 font-bold uppercase tracking-[0.3em]" style={{
            background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,107,53,0.5)'
          }}>
            OUVERTURE {siteConfig.opening.date}
          </p>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="relative inline-flex items-center justify-center gap-6 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-magenta-500 to-orange-500 opacity-100 animate-pulse"></div>
            <div className="relative px-20 py-10 font-black text-4xl uppercase tracking-wider text-white border-2 border-cyan-300 shadow-[0_0_60px_rgba(0,255,255,1)] hover:shadow-[0_0_80px_rgba(255,0,255,1)] transition-all">
              <Phone className="inline w-12 h-12 mr-4" />
              {siteConfig.contact.phone}
            </div>
          </a>

          <div className="mt-20 grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-10 border-2 border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-cyan-400" style={{
                  filter: 'drop-shadow(0 0 15px rgba(0,255,255,1))'
                }} />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wide text-cyan-400">ADRESSE</h3>
                <p className="text-white font-bold text-lg">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/20 to-orange-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 backdrop-blur-md rounded-lg p-10 border-2 border-magenta-400 shadow-[0_0_30px_rgba(255,0,255,0.3)]">
                <Users className="w-16 h-16 mx-auto mb-6 text-magenta-400" style={{
                  filter: 'drop-shadow(0 0 15px rgba(255,0,255,1))'
                }} />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-wide text-magenta-400">PUBLIC</h3>
                <p className="text-white font-bold text-lg">
                  {siteConfig.target.age}<br />
                  ÉLECTRO • POP
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t-2 border-cyan-400/50 relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase" style={{
                background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {siteConfig.name}
              </h3>
              <p className="text-gray-400 mb-4 font-semibold">{siteConfig.tagline}</p>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded"></div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-white uppercase">CONTACT</h3>
              <p className="text-gray-400 font-semibold leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                Tél : {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 tracking-tight text-white uppercase">OUVERTURE</h3>
              <p className="text-2xl font-bold mb-3 uppercase" style={{
                background: 'linear-gradient(to right, #FF6B35, #FF00FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{siteConfig.opening.date}</p>
              <p className="text-gray-400 font-semibold">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t-2 border-cyan-400/30 pt-12 text-center">
            <p className="font-semibold text-gray-500 tracking-wide">
              © {new Date().getFullYear()} {siteConfig.name} - Tous droits réservés
            </p>
            <p className="text-sm mt-4 font-bold uppercase tracking-[0.2em]" style={{
              background: 'linear-gradient(to right, #00FFFF, #FF00FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Famille Hurst • Depuis 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}