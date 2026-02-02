import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, Music, Sparkles,
  Star, Check, ChevronDown, Users, Zap, Radio, Bus, Crown, Orbit
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
      setMousePosition({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden" style={{
      fontFamily: '"Orbitron", "Exo 2", "Rajdhani", sans-serif'
    }}>
      {/* Deep space background */}
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black"></div>

      {/* Starfield */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Nebula clouds */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-pink-600 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Parallax planets */}
      <div 
        className="fixed top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-40 blur-sm transition-transform duration-1000"
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          boxShadow: '0 0 80px rgba(168, 85, 247, 0.6)'
        }}
      ></div>
      <div 
        className="fixed bottom-32 left-32 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-30 blur-sm transition-transform duration-1000"
        style={{ 
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          boxShadow: '0 0 60px rgba(59, 130, 246, 0.5)'
        }}
      ></div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes hologram {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.8), 
                         2px 2px 0px rgba(255, 0, 255, 0.4),
                         -2px -2px 0px rgba(0, 255, 255, 0.4);
          }
          50% { 
            text-shadow: 0 0 20px rgba(168, 85, 247, 1), 
                         3px 3px 0px rgba(255, 0, 255, 0.6),
                         -3px -3px 0px rgba(0, 255, 255, 0.6);
          }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes float-rotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)',
          animation: 'scanline 8s linear infinite'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo hologram */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-cyan-400 flex items-center justify-center relative" style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.3)',
                  animation: 'float-rotate 4s ease-in-out infinite'
                }}>
                  <Orbit className="w-7 h-7 text-cyan-400" />
                  <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-widest" style={{
                  animation: 'hologram 3s ease-in-out infinite',
                  color: '#06B6D4'
                }}>
                  V CLUB
                </h1>
                <p className="text-xs font-bold text-purple-400 tracking-[0.3em] uppercase">QUÉVEN • SECTOR 56</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {['accueil', 'ambiance', 'musique'].map(section => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="relative px-4 py-2 font-bold text-sm uppercase tracking-widest text-cyan-300 hover:text-cyan-100 transition-all group"
                >
                  <span className="relative z-10">{section}</span>
                  <span className="absolute inset-0 border border-cyan-500/30 group-hover:border-cyan-400 transition-all" style={{
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.3)'
                  }}></span>
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="relative px-6 py-3 font-black text-sm uppercase tracking-widest text-black bg-cyan-400 overflow-hidden group"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
                }}
              >
                <span className="relative z-10">CONTACT</span>
                <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-cyan-400">
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 bg-black/90 backdrop-blur-xl border border-cyan-500/30">
              <div className="flex flex-col gap-3">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 px-6 text-cyan-300 hover:text-cyan-100 capitalize font-bold uppercase tracking-wider border-l-2 border-transparent hover:border-cyan-400 transition-all"
                  >
                    {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-center py-3 px-6 bg-cyan-400 text-black font-black uppercase tracking-wider"
                >
                  CONTACT
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
            {/* Launch badge */}
            <div className="inline-flex items-center gap-3 mb-12 px-8 py-4 border border-cyan-500/50 bg-black/50 backdrop-blur-xl" style={{
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{
                boxShadow: '0 0 10px rgba(6, 182, 212, 1)'
              }}></div>
              <p className="font-bold text-cyan-300 tracking-widest uppercase text-sm">
                LAUNCH DATE: {siteConfig.opening.date}
              </p>
            </div>
            
            {/* Titre principal hologramme */}
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black mb-8 leading-none tracking-wider" style={{
              animation: 'hologram 4s ease-in-out infinite',
              color: '#06B6D4',
              textTransform: 'uppercase'
            }}>
              V CLUB
            </h1>
            
            <div className="max-w-3xl mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-2xl"></div>
              <div className="relative border border-cyan-500/30 p-8 bg-black/40 backdrop-blur-sm" style={{
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)'
              }}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-cyan-300">
                  {siteConfig.hero.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {siteConfig.hero.description}
                </p>
              </div>
            </div>

            {/* Floating data pods */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {siteConfig.hero.badges.map((badge, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 border border-cyan-500/50 bg-black/50 backdrop-blur-xl font-bold text-cyan-300 uppercase tracking-wider relative group overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                    animation: `float-rotate ${3 + index * 0.5}s ease-in-out infinite`
                  }}
                >
                  <span className="relative z-10">{badge}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              ))}
            </div>

            {/* Launch countdown */}
            <div className="max-w-2xl mx-auto mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-blue-600/20 blur-3xl"></div>
              <div className="relative border-2 border-cyan-400 p-12 bg-black/60 backdrop-blur-md" style={{
                boxShadow: '0 0 60px rgba(6, 182, 212, 0.4), inset 0 0 40px rgba(6, 182, 212, 0.1)'
              }}>
                <p className="text-6xl sm:text-7xl md:text-8xl font-black mb-6 tracking-wider" style={{
                  animation: 'hologram 3s ease-in-out infinite',
                  color: '#06B6D4'
                }}>
                  14.02.2026
                </p>
                <p className="text-3xl font-bold text-white mb-3">🎤 FEATURING: KGS</p>
                <p className="text-lg text-purple-400 font-bold uppercase tracking-[0.3em]">
                  VALENTINE'S NIGHT • OPENING CEREMONY
                </p>
              </div>
            </div>

            {/* Hyperdrive CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group relative px-12 py-6 font-black text-xl uppercase tracking-wider text-black bg-cyan-400 overflow-hidden"
                style={{
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  {siteConfig.contact.phone}
                </span>
                <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="px-12 py-6 font-black text-xl uppercase tracking-wider text-cyan-300 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-3 backdrop-blur-xl"
                style={{
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                }}
              >
                <Sparkles className="w-6 h-6" />
                EXPLORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - Orbital platforms */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 uppercase tracking-wider" style={{
              animation: 'hologram 4s ease-in-out infinite',
              color: '#06B6D4'
            }}>
              STATION SPECS
            </h2>
            <p className="text-xl text-purple-400 font-bold uppercase tracking-[0.2em]">
              Largest venue in sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.venue.features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{
                  animation: `float-rotate ${4 + index}s ease-in-out infinite`
                }}
              >
                <div className="border border-cyan-500/50 bg-black/50 backdrop-blur-xl p-8 text-center relative overflow-hidden group-hover:border-cyan-400 transition-all" style={{
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">{feature.icon}</div>
                    <h3 className="text-4xl font-black mb-3 text-cyan-300 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 font-semibold uppercase text-sm">{feature.description}</p>
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
            <h2 className="text-6xl font-black mb-6 uppercase tracking-wider" style={{
              animation: 'hologram 4s ease-in-out infinite',
              color: '#A855F7'
            }}>
              {siteConfig.ambiance.title}
            </h2>
            <p className="text-2xl font-bold text-cyan-300 mb-4 uppercase tracking-wide">
              {siteConfig.ambiance.subtitle}
            </p>
          </div>

          {/* Renovations grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div 
                key={index} 
                className="border border-cyan-500/30 bg-black/40 backdrop-blur-xl p-8 group hover:border-purple-400/50 transition-all"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                }}
              >
                <div className="text-5xl mb-6 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">{item.icon}</div>
                <h3 className="text-2xl font-black text-cyan-300 mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Quote transmission */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="border-2 border-purple-500 bg-black/60 backdrop-blur-md p-12 relative" style={{
              boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
            }}>
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-purple-400"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-purple-400"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-purple-400"></div>
              
              <p className="text-3xl italic font-bold text-white mb-6 leading-relaxed">
                "{siteConfig.ambiance.parquet.quote}"
              </p>
              <p className="text-xl font-black text-purple-400 uppercase tracking-wide">
                — {siteConfig.ambiance.parquet.author}
              </p>
            </div>
          </div>

          {/* VIP pod */}
          <div className="text-center">
            <div className="inline-block border-2 border-yellow-400 bg-black/60 backdrop-blur-md px-16 py-12 relative" style={{
              boxShadow: '0 0 60px rgba(234, 179, 8, 0.4)',
              animation: 'float-rotate 6s ease-in-out infinite'
            }}>
              <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-400" style={{
                filter: 'drop-shadow(0 0 20px rgba(234, 179, 8, 0.8))'
              }} />
              <h3 className="text-4xl font-black text-yellow-400 mb-4 uppercase tracking-wide">{siteConfig.ambiance.vip.title}</h3>
              <p className="text-2xl text-cyan-300 font-bold uppercase">{siteConfig.ambiance.vip.capacity} SLOTS • {siteConfig.ambiance.vip.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique */}
      <section id="musique" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-6 uppercase tracking-wider" style={{
              animation: 'hologram 4s ease-in-out infinite',
              color: '#3B82F6'
            }}>
              {siteConfig.music.title}
            </h2>
            <p className="text-2xl font-bold text-cyan-300 uppercase tracking-wide">{siteConfig.music.subtitle}</p>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{
                  animation: `float-rotate ${5 + index}s ease-in-out infinite`
                }}
              >
                <div className="border-2 border-cyan-400 bg-black/60 backdrop-blur-md p-16 text-center relative overflow-hidden group-hover:border-purple-400 transition-all" style={{
                  boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative z-10">
                    <Music className="w-20 h-20 mx-auto mb-8 text-cyan-400" style={{
                      filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))'
                    }} />
                    <h3 className="text-7xl font-black text-white uppercase tracking-wider" style={{
                      textShadow: '0 0 30px rgba(6, 182, 212, 0.6)'
                    }}>{style}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Différenciation */}
          <div className="border border-cyan-500/30 bg-black/40 backdrop-blur-xl p-10 mb-16" style={{
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
          }}>
            <h3 className="text-3xl font-black text-cyan-300 mb-8 text-center uppercase tracking-wide">{siteConfig.music.differentiation.title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-cyan-500/20 bg-cyan-500/5">
                <p className="text-cyan-400 font-bold mb-2 text-xs uppercase tracking-widest">LORIENT REGION</p>
                <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.regional}</p>
              </div>
              <div className="text-center p-6 border border-purple-500/20 bg-purple-500/5">
                <p className="text-purple-400 font-bold mb-2 text-xs uppercase tracking-widest">LYON/GRENOBLE</p>
                <p className="text-xl text-white font-bold">{siteConfig.music.differentiation.lyonGrenoble}</p>
              </div>
              <div className="text-center p-6 border-2 border-cyan-400 bg-cyan-500/10" style={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
              }}>
                <p className="text-cyan-400 font-black mb-2 text-xs uppercase tracking-widest">V CLUB</p>
                <p className="text-2xl text-white font-black">{siteConfig.music.differentiation.vClub}</p>
              </div>
            </div>
          </div>

          {/* DJ Sixter */}
          <div className="border-2 border-purple-500 bg-black/60 backdrop-blur-md p-12 relative" style={{
            boxShadow: '0 0 60px rgba(168, 85, 247, 0.4)'
          }}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center relative" style={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                animation: 'float-rotate 5s ease-in-out infinite'
              }}>
                <Radio className="w-12 h-12 text-cyan-400" />
                <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
              </div>
              <div>
                <h3 className="text-5xl font-black mb-2 uppercase tracking-wider" style={{
                  animation: 'hologram 3s ease-in-out infinite',
                  color: '#06B6D4'
                }}>
                  {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-2xl text-purple-400 font-bold uppercase tracking-wide">
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} Y.O.
                </p>
              </div>
            </div>
            <div className="border-l-4 border-cyan-400 pl-8 bg-black/40 p-8">
              <p className="text-2xl italic text-white font-semibold mb-4 leading-relaxed">
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-lg font-bold text-purple-400 uppercase tracking-wide">
                — VALENTIN PERRON • MUSIC DIRECTOR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le Complexe */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 uppercase tracking-wider" style={{
              animation: 'hologram 4s ease-in-out infinite',
              color: '#06B6D4'
            }}>
              DUAL SYSTEMS
            </h2>
            <p className="text-xl text-purple-400 font-bold uppercase tracking-[0.2em]">
              Two venues, Two experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="border-2 border-cyan-400 bg-black/60 backdrop-blur-md p-10 group hover:border-cyan-300 transition-all" style={{
              boxShadow: '0 0 50px rgba(6, 182, 212, 0.4)',
              animation: 'float-rotate 6s ease-in-out infinite'
            }}>
              <h3 className="text-5xl font-black mb-4 uppercase tracking-wide" style={{
                animation: 'hologram 3s ease-in-out infinite',
                color: '#06B6D4'
              }}>V CLUB</h3>
              <p className="text-2xl font-bold text-cyan-300 mb-3 uppercase">{siteConfig.complex.vClub.style}</p>
              <p className="text-lg text-gray-300 uppercase tracking-wide">{siteConfig.complex.vClub.target}</p>
            </div>

            <div className="border-2 border-purple-500 bg-black/60 backdrop-blur-md p-10 group hover:border-purple-400 transition-all" style={{
              boxShadow: '0 0 50px rgba(168, 85, 247, 0.4)',
              animation: 'float-rotate 6s ease-in-out infinite',
              animationDelay: '0.5s'
            }}>
              <h3 className="text-5xl font-black text-purple-400 mb-4 uppercase tracking-wide">VALENTINO</h3>
              <p className="text-2xl font-bold text-purple-300 mb-3 uppercase">{siteConfig.complex.valentino.style}</p>
              <p className="text-lg text-gray-300 uppercase tracking-wide">{siteConfig.complex.valentino.target}</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block border border-cyan-500/50 bg-black/50 backdrop-blur-xl px-10 py-6" style={{
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}>
              <p className="text-2xl font-black text-cyan-300 uppercase tracking-wide">
                {siteConfig.complex.symbolism.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport + Infos */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Navette */}
          <div className="border-2 border-cyan-400 bg-black/60 backdrop-blur-md p-14 mb-12 relative" style={{
            boxShadow: '0 0 60px rgba(6, 182, 212, 0.4)'
          }}>
            <div className="text-center mb-10">
              <div className="inline-block w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-6" style={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                animation: 'float-rotate 5s ease-in-out infinite'
              }}>
                <Bus className="w-10 h-10 text-cyan-400" />
              </div>
              <h2 className="text-4xl font-black text-cyan-300 mb-4 uppercase tracking-wide">FREE TRANSPORT</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div 
                  key={index} 
                  className="px-6 py-3 border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-xl"
                >
                  <span className="font-bold text-cyan-300 text-lg uppercase tracking-wide">{ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-cyan-500/50 bg-black/50 backdrop-blur-xl p-10 text-center" style={{
              boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
            }}>
              <Clock className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
              <h3 className="text-3xl font-black text-cyan-300 mb-6 uppercase tracking-wide">SCHEDULE</h3>
              <p className="text-2xl font-bold text-white mb-4 uppercase">{siteConfig.schedule.days[0]}</p>
              <p className="text-5xl font-black text-cyan-300">{siteConfig.schedule.hours}</p>
            </div>

            <div className="border border-purple-500/50 bg-black/50 backdrop-blur-xl p-10 text-center" style={{
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)'
            }}>
              <Star className="w-16 h-16 mx-auto mb-6 text-purple-400" />
              <h3 className="text-3xl font-black text-purple-300 mb-6 uppercase tracking-wide">RATES</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-gray-400 mb-2 uppercase tracking-widest">STANDARD</p>
                  <p className="text-5xl font-black text-white">{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-lg text-gray-400 mb-2 uppercase tracking-widest">SHOWCASE</p>
                  <p className="text-5xl font-black text-purple-400">{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-6xl font-black mb-16 text-center uppercase tracking-wider" style={{
            animation: 'hologram 4s ease-in-out infinite',
            color: '#06B6D4'
          }}>
            FAQ DATABASE
          </h2>

          <div className="space-y-4">
            {siteConfig.faq.questions.map((item, index) => (
              <div 
                key={index} 
                className="border border-cyan-500/30 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-cyan-400/50 transition-all"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                }}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-bold text-cyan-300 text-xl pr-6 uppercase tracking-wide">{item.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-cyan-500/5 border-t border-cyan-500/20">
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
          <div className="border-2 border-cyan-400 bg-black/60 backdrop-blur-md p-16 relative" style={{
            boxShadow: '0 0 80px rgba(6, 182, 212, 0.5)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-7xl font-black mb-8 uppercase tracking-wider" style={{
                animation: 'hologram 4s ease-in-out infinite',
                color: '#06B6D4'
              }}>
                INITIATE CONTACT
              </h2>
              <p className="text-3xl mb-12 font-bold text-purple-400 uppercase tracking-[0.2em]">
                LAUNCH: {siteConfig.opening.date}
              </p>

              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-4 px-16 py-8 font-black text-3xl uppercase tracking-wider text-black bg-cyan-400 mb-16 group overflow-hidden relative"
                style={{
                  boxShadow: '0 0 50px rgba(6, 182, 212, 0.8)'
                }}
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Phone className="w-10 h-10" />
                  {siteConfig.contact.phone}
                </span>
                <div className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-cyan-500/50 bg-cyan-500/5 backdrop-blur-xl p-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-xl font-black mb-4 text-cyan-300 uppercase tracking-wide">COORDINATES</h3>
                  <p className="text-white font-semibold uppercase text-sm tracking-wide">
                    {siteConfig.address.street}<br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </p>
                </div>

                <div className="border border-purple-500/50 bg-purple-500/5 backdrop-blur-xl p-8">
                  <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-black mb-4 text-purple-300 uppercase tracking-wide">TARGET</h3>
                  <p className="text-white font-semibold uppercase text-sm tracking-wide">
                    {siteConfig.target.age}<br />
                    ELECTRO • POP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-xl text-white py-16 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4 text-cyan-400 uppercase tracking-wide">
                {siteConfig.name}
              </h3>
              <p className="text-gray-400 mb-4 font-semibold">{siteConfig.tagline}</p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-wide">CONTACT</h3>
              <p className="text-gray-400 font-semibold leading-relaxed uppercase text-sm">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                COM: {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-wide">LAUNCH</h3>
              <p className="text-purple-400 font-bold text-xl mb-2 uppercase">{siteConfig.opening.date}</p>
              <p className="text-gray-400 font-semibold uppercase text-sm">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t border-cyan-500/30 pt-8 text-center">
            <p className="text-gray-500 font-semibold uppercase text-sm tracking-wide">
              © {new Date().getFullYear()} {siteConfig.name} • ALL RIGHTS RESERVED
            </p>
            <p className="text-xs mt-2 font-bold text-cyan-400 uppercase tracking-[0.3em]">
              HURST FAMILY OPERATION • EST. 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}