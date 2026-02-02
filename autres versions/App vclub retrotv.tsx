import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Calendar, Music, Sparkles,
  Star, Check, ChevronDown, Users, Zap, Radio, Bus, Crown, Tv
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const timer = setInterval(() => setTime(new Date()), 1000);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-black text-white relative" style={{
      fontFamily: '"Courier New", "Courier", monospace',
      borderRadius: '20px', // CRT curvature
      overflow: 'hidden'
    }}>
      {/* CRT screen effect */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
        borderRadius: '20px'
      }}></div>

      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-15" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        animation: 'scanline 8s linear infinite'
      }}></div>

      {/* VHS static noise */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-30 mix-blend-overlay" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        animation: 'noise 0.3s steps(2) infinite'
      }}></div>

      {/* Test pattern corner */}
      <div className="fixed top-4 right-4 w-16 h-16 opacity-20 pointer-events-none z-20">
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF', '#000000'].map((color, i) => (
            <div key={i} style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>

      {/* Timecode */}
      <div className="fixed bottom-4 right-4 font-mono text-xs bg-black/80 px-3 py-2 border border-lime-500 z-20 tracking-widest" style={{
        textShadow: '0 0 10px rgba(0,255,0,0.8)'
      }}>
        REC ● {formatTime(time)}
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes noise {
          0%, 100% { opacity: 0.02; }
          50% { opacity: 0.04; }
        }
        @keyframes tracking {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(2px); }
        }
        @keyframes rgb-shift {
          0%, 100% { 
            text-shadow: 2px 0 0 rgba(255,0,0,0.7), -2px 0 0 rgba(0,255,255,0.7);
          }
          50% { 
            text-shadow: 3px 0 0 rgba(255,0,0,0.9), -3px 0 0 rgba(0,255,255,0.9);
          }
        }
        @keyframes color-cycle {
          0%, 100% { background-color: #FF0000; }
          33% { background-color: #00FF00; }
          66% { background-color: #0000FF; }
        }
      `}</style>

      {/* Navigation - VCR style */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 border-b-2 border-lime-500' 
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo TV */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-black border-2 border-lime-500 flex items-center justify-center relative" style={{
                  boxShadow: '0 0 20px rgba(0,255,0,0.5)'
                }}>
                  <Tv className="w-7 h-7 text-lime-500" strokeWidth={3} />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-widest text-lime-500" style={{
                  textShadow: '2px 0 0 rgba(255,0,0,0.7), -2px 0 0 rgba(0,255,255,0.7)'
                }}>
                  V CLUB
                </h1>
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest">CHANNEL 14 • QUÉVEN</p>
              </div>
            </div>

            {/* Desktop Navigation - Remote buttons */}
            <div className="hidden md:flex items-center gap-4">
              {['accueil', 'ambiance', 'musique'].map((section, i) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="px-4 py-2 font-bold text-sm uppercase border-2 border-lime-500 bg-black text-lime-500 hover:bg-lime-500 hover:text-black transition-all tracking-widest"
                  style={{
                    boxShadow: '2px 2px 0px rgba(0,255,0,0.5)',
                    fontFamily: 'Courier New, monospace'
                  }}
                >
                  [{i + 1}] {section}
                </button>
              ))}
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-6 py-3 bg-red-600 text-white font-black uppercase text-sm border-2 border-red-800 hover:bg-red-700 transition-all tracking-widest"
                style={{
                  boxShadow: '3px 3px 0px rgba(0,0,0,0.5)',
                  fontFamily: 'Courier New, monospace'
                }}
              >
                ● REC CALL
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-lime-500">
              {isMenuOpen ? <X className="w-8 h-8" strokeWidth={3} /> : <Menu className="w-8 h-8" strokeWidth={3} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 bg-black border-t-2 border-lime-500">
              <div className="flex flex-col gap-3">
                {['accueil', 'ambiance', 'musique'].map(section => (
                  <button 
                    key={section} 
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 px-6 border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-black capitalize font-bold uppercase tracking-widest"
                  >
                    ▶ {section}
                  </button>
                ))}
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="py-3 px-6 bg-red-600 text-white text-center font-black uppercase border-2 border-red-800 tracking-widest"
                >
                  ● CALL
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Broadcast style */}
      <section id="accueil" className="relative pt-40 pb-32 overflow-hidden">
        {/* Signal bars */}
        <div className="absolute top-32 left-0 right-0 h-24 flex gap-2 opacity-20">
          {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#FFFFFF'].map((color, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: color }}></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* ON AIR badge */}
            <div className="inline-flex items-center gap-3 mb-12 px-8 py-4 bg-black border-2 border-red-600" style={{
              boxShadow: '0 0 30px rgba(255,0,0,0.6)'
            }}>
              <div className="w-3 h-3 bg-red-600 rounded-full" style={{ animation: 'color-cycle 2s infinite' }}></div>
              <p className="font-black text-red-600 tracking-widest uppercase">
                ON AIR • {siteConfig.opening.date.toUpperCase()}
              </p>
            </div>
            
            {/* Titre principal RGB shift */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-wider uppercase" style={{
              animation: 'rgb-shift 2s ease-in-out infinite',
              fontFamily: 'Impact, sans-serif'
            }}>
              V CLUB
            </h1>
            
            {/* Info box */}
            <div className="max-w-3xl mx-auto mb-12 bg-black border-4 border-lime-500 p-8" style={{
              boxShadow: '0 0 40px rgba(0,255,0,0.4)'
            }}>
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="w-4 h-4 bg-lime-500 animate-pulse"></div>
                <p className="font-black text-lime-500 tracking-widest uppercase text-sm">NOW BROADCASTING</p>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase tracking-wide text-yellow-400">
                {siteConfig.hero.subtitle}
              </p>
              <p className="text-lg text-white leading-relaxed font-bold uppercase tracking-wide">
                {siteConfig.hero.description}
              </p>
            </div>

            {/* Channel info boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { label: 'CAPACITY', value: '700', unit: 'PLACES' },
                { label: 'DATE', value: '14', unit: 'FÉV 26' },
                { label: 'GENRE', value: 'ÉLECTRO', unit: '' },
                { label: 'GENRE', value: 'POP', unit: '' }
              ].map((item, index) => (
                <div key={index} className="bg-black border-2 border-lime-500 p-6" style={{
                  boxShadow: '3px 3px 0px rgba(0,255,0,0.5)'
                }}>
                  <p className="text-xs font-black text-lime-500 mb-2 tracking-widest">[{item.label}]</p>
                  <p className="text-4xl font-black text-yellow-400 mb-1">{item.value}</p>
                  {item.unit && <p className="text-sm font-black text-white uppercase">{item.unit}</p>}
                </div>
              ))}
            </div>

            {/* Program info */}
            <div className="bg-red-600 border-4 border-black p-10 mb-12" style={{
              boxShadow: '6px 6px 0px rgba(0,0,0,1)'
            }}>
              <p className="text-sm font-black text-black mb-2 tracking-widest uppercase">▶ SPECIAL BROADCAST</p>
              <p className="text-6xl sm:text-7xl font-black text-white mb-4 uppercase tracking-tight">14.02.2026</p>
              <p className="text-3xl font-black text-black mb-2 uppercase">🎤 FEATURING: KGS</p>
              <p className="text-lg font-black text-white uppercase tracking-wider">VALENTINE'S NIGHT • OPENING SHOW</p>
            </div>

            {/* VCR buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="bg-lime-500 text-black px-12 py-6 font-black text-2xl uppercase hover:bg-yellow-400 transition-all border-4 border-black flex items-center gap-3"
                style={{
                  boxShadow: '6px 6px 0px rgba(0,0,0,1)'
                }}
              >
                <Phone className="w-7 h-7" strokeWidth={3} />
                {siteConfig.contact.phone}
              </a>
              <button 
                onClick={() => scrollToSection('ambiance')}
                className="bg-black text-lime-500 px-12 py-6 font-black text-2xl uppercase border-4 border-lime-500 hover:bg-lime-500 hover:text-black transition-all flex items-center gap-3"
                style={{
                  boxShadow: '6px 6px 0px rgba(0,255,0,0.5)'
                }}
              >
                <span>▶</span> PLAY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specs - TV Grid */}
      <section className="py-32 bg-gradient-to-b from-blue-950 to-black border-y-4 border-lime-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-black border-4 border-yellow-400 px-8 py-4 mb-6" style={{
              boxShadow: '4px 4px 0px rgba(255,255,0,0.8)'
            }}>
              <h2 className="text-6xl font-black text-yellow-400 uppercase tracking-widest" style={{
                textShadow: '2px 2px 0px rgba(0,0,0,1)',
                fontFamily: 'Impact, sans-serif'
              }}>
                [STATION DATA]
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.venue.features.map((feature, index) => (
              <div key={index} className="bg-black border-2 border-lime-500 p-8" style={{
                boxShadow: '4px 4px 0px rgba(0,255,0,0.5)'
              }}>
                <div className="text-xs font-black text-lime-500 mb-2 tracking-widest">[CH.{index + 1}]</div>
                <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-4xl font-black text-yellow-400 mb-3 text-center uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white font-bold text-center uppercase text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance - VHS style */}
      <section id="ambiance" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block bg-red-600 border-4 border-black px-10 py-6 mb-8" style={{
              boxShadow: '6px 6px 0px rgba(0,0,0,1)'
            }}>
              <h2 className="text-7xl font-black text-white uppercase tracking-widest" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                [AMBIANCE]
              </h2>
            </div>
            <p className="text-3xl font-black text-lime-500 uppercase mb-4 tracking-wide">
              {siteConfig.ambiance.subtitle}
            </p>
          </div>

          {/* Renovations grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {siteConfig.ambiance.renovations.map((item, index) => (
              <div key={index} className="bg-black border-2 border-lime-500 p-8" style={{
                boxShadow: '3px 3px 0px rgba(0,255,0,0.5)'
              }}>
                <p className="text-xs font-black text-lime-500 mb-4 tracking-widest">[FEATURE.{index + 1}]</p>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-black text-yellow-400 mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white font-bold uppercase text-sm leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-yellow-400 border-4 border-black p-12 mb-16" style={{
            boxShadow: '8px 8px 0px rgba(0,0,0,1)'
          }}>
            <p className="text-xs font-black text-black mb-4 tracking-widest">[AUDIO CLIP]</p>
            <p className="text-4xl font-black text-black mb-6 uppercase leading-tight">
              "{siteConfig.ambiance.parquet.quote}"
            </p>
            <p className="text-2xl font-black text-black uppercase tracking-wide">
              — {siteConfig.ambiance.parquet.author.toUpperCase()}
            </p>
          </div>

          {/* VIP */}
          <div className="text-center">
            <div className="inline-block bg-black border-4 border-yellow-400 px-16 py-12" style={{
              boxShadow: '8px 8px 0px rgba(255,255,0,1)'
            }}>
              <Crown className="w-20 h-20 mx-auto mb-6 text-yellow-400" strokeWidth={3} />
              <h3 className="text-5xl font-black text-yellow-400 mb-4 uppercase tracking-tight">
                [VIP ZONE]
              </h3>
              <p className="text-2xl font-black text-white uppercase">
                {siteConfig.ambiance.vip.capacity} SLOTS • {siteConfig.ambiance.vip.location.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Musique - Broadcast program */}
      <section id="musique" className="py-32 bg-gradient-to-b from-black to-blue-950 border-y-4 border-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-black border-4 border-cyan-400 px-10 py-6 mb-8" style={{
              boxShadow: '6px 6px 0px rgba(0,255,255,1)'
            }}>
              <h2 className="text-7xl font-black text-cyan-400 uppercase tracking-widest" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                [PROGRAM]
              </h2>
            </div>
          </div>

          {/* Styles musicaux */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {siteConfig.music.styles.map((style, index) => (
              <div key={index} className="bg-black border-4 border-cyan-500 p-20 text-center" style={{
                boxShadow: '8px 8px 0px rgba(0,255,255,0.5)'
              }}>
                <Music className="w-24 h-24 mx-auto mb-10 text-cyan-500" strokeWidth={4} />
                <h3 className="text-8xl font-black text-yellow-400 uppercase tracking-tighter" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>
                  {style}
                </h3>
              </div>
            ))}
          </div>

          {/* DJ Sixter */}
          <div className="bg-lime-500 border-4 border-black p-12" style={{
            boxShadow: '10px 10px 0px rgba(0,0,0,1)'
          }}>
            <div className="flex items-center gap-8 mb-10">
              <div className="w-28 h-28 bg-black border-4 border-black flex items-center justify-center">
                <Radio className="w-16 h-16 text-lime-500" strokeWidth={4} />
              </div>
              <div>
                <p className="text-xs font-black text-black mb-2 tracking-widest">[DJ ON AIR]</p>
                <h3 className="text-6xl font-black text-black uppercase tracking-tighter" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>
                  {siteConfig.music.djSixter.name}
                </h3>
                <p className="text-2xl text-black font-black uppercase">
                  {siteConfig.music.djSixter.realName} • {siteConfig.team.programmer.age} Y.O.
                </p>
              </div>
            </div>
            <div className="bg-black border-4 border-black p-10">
              <p className="text-xs font-black text-lime-500 mb-4 tracking-widest">[QUOTE.WAV]</p>
              <p className="text-3xl font-black text-lime-500 mb-4 uppercase">
                "{siteConfig.music.djSixter.quote}"
              </p>
              <p className="text-xl font-black text-yellow-400 uppercase">— VALENTIN PERRON</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infos - Signal bars */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navette */}
          <div className="bg-red-600 border-4 border-black p-14 mb-12" style={{
            boxShadow: '10px 10px 0px rgba(0,0,0,1)'
          }}>
            <div className="text-center mb-10">
              <Bus className="w-20 h-20 mx-auto mb-6 text-white" strokeWidth={4} />
              <h2 className="text-6xl font-black text-white mb-4 uppercase tracking-tight" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                [FREE SHUTTLE]
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.transport.circuit.map((ville, index) => (
                <div key={index} className="bg-black border-4 border-black px-8 py-4">
                  <span className="font-black text-yellow-400 text-2xl uppercase">{ville}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horaires & Tarifs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border-4 border-lime-500 p-10 text-center" style={{
              boxShadow: '6px 6px 0px rgba(0,255,0,0.8)'
            }}>
              <Clock className="w-16 h-16 mx-auto mb-6 text-lime-500" strokeWidth={4} />
              <h3 className="text-4xl font-black text-lime-500 mb-6 uppercase tracking-tight">[SCHEDULE]</h3>
              <p className="text-2xl font-black text-yellow-400 mb-4 uppercase">{siteConfig.schedule.days[0]}</p>
              <p className="text-6xl font-black text-white">{siteConfig.schedule.hours}</p>
            </div>

            <div className="bg-black border-4 border-yellow-400 p-10 text-center" style={{
              boxShadow: '6px 6px 0px rgba(255,255,0,0.8)'
            }}>
              <Star className="w-16 h-16 mx-auto mb-6 text-yellow-400" strokeWidth={4} />
              <h3 className="text-4xl font-black text-yellow-400 mb-6 uppercase tracking-tight">[PRICING]</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xl font-black text-lime-500 mb-2 uppercase">STANDARD</p>
                  <p className="text-7xl font-black text-white">{siteConfig.schedule.prices.standard}</p>
                </div>
                <div>
                  <p className="text-xl font-black text-lime-500 mb-2 uppercase">SHOWCASE</p>
                  <p className="text-7xl font-black text-yellow-400">{siteConfig.schedule.prices.showcase}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-black border-4 border-cyan-400 px-10 py-6" style={{
              boxShadow: '6px 6px 0px rgba(0,255,255,1)'
            }}>
              <h2 className="text-7xl font-black text-cyan-400 uppercase tracking-widest" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                [FAQ]
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {siteConfig.faq.questions.map((item, index) => (
              <div key={index} className="bg-black border-2 border-lime-500" style={{
                boxShadow: '4px 4px 0px rgba(0,255,0,0.5)'
              }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between"
                >
                  <span className="font-black text-lime-500 text-xl pr-6 uppercase tracking-tight">
                    [{index + 1}] {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-8 h-8 text-yellow-400 flex-shrink-0 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`}
                    strokeWidth={4}
                  />
                </button>
                {activeAccordion === index && (
                  <div className="px-8 py-6 bg-lime-500 border-t-4 border-black">
                    <p className="text-black font-black text-lg uppercase leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-black border-4 border-black px-16 py-12 mb-16" style={{
            boxShadow: '12px 12px 0px rgba(0,0,0,1)'
          }}>
            <h2 className="text-8xl font-black text-yellow-400 mb-8 uppercase tracking-tight" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              [CALL NOW]
            </h2>
            <p className="text-4xl font-black text-white uppercase">
              LAUNCH: {siteConfig.opening.date.toUpperCase()}
            </p>
          </div>

          <a 
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-6 bg-red-600 text-white px-20 py-10 hover:bg-black transition-all font-black text-4xl uppercase border-4 border-black mb-16"
            style={{
              boxShadow: '10px 10px 0px rgba(0,0,0,1)',
              fontFamily: 'Impact, sans-serif'
            }}
          >
            <Phone className="w-12 h-12" strokeWidth={4} />
            {siteConfig.contact.phone}
          </a>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border-4 border-black p-10">
              <MapPin className="w-14 h-14 mx-auto mb-6 text-yellow-400" strokeWidth={4} />
              <h3 className="text-2xl font-black mb-4 uppercase text-yellow-400">
                [LOCATION]
              </h3>
              <p className="text-white font-black text-lg uppercase">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>

            <div className="bg-white border-4 border-black p-10">
              <Users className="w-14 h-14 mx-auto mb-6" strokeWidth={4} />
              <h3 className="text-2xl font-black mb-4 uppercase">
                [AUDIENCE]
              </h3>
              <p className="font-black text-lg uppercase">
                {siteConfig.target.age}<br />
                ELECTRO • POP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t-4 border-lime-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <h3 className="text-4xl font-black mb-6 text-lime-500 uppercase">
                {siteConfig.name}
              </h3>
              <p className="text-white mb-4 font-black uppercase text-lg">{siteConfig.tagline}</p>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 text-white uppercase">
                [CONTACT]
              </h3>
              <p className="text-white font-black uppercase text-lg leading-relaxed">
                {siteConfig.address.street}<br />
                {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                TEL: {siteConfig.contact.phone}
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black mb-6 text-white uppercase">
                [ON AIR]
              </h3>
              <p className="text-yellow-400 font-black text-2xl mb-3 uppercase">{siteConfig.opening.date}</p>
              <p className="text-white font-black uppercase text-lg">
                {siteConfig.schedule.days[0]}<br />
                {siteConfig.schedule.hours}
              </p>
            </div>
          </div>

          <div className="border-t-4 border-lime-500 pt-12 text-center">
            <p className="font-black text-xl uppercase tracking-wide">
              © {new Date().getFullYear()} {siteConfig.name} - ALL RIGHTS RESERVED
            </p>
            <p className="text-lg mt-4 font-black uppercase text-lime-500">
              HURST FAMILY BROADCAST • EST. 1988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}