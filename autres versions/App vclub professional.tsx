import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Clock, Phone, Instagram, Facebook, Mail, ArrowRight, ChevronRight } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white" style={{
      fontFamily: '"Neue Montreal", "Helvetica Neue", -apple-system, sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
        
        * { box-sizing: border-box; }
        
        .font-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        .fade-in {
          animation: fadeIn 1.2s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        .slide-up {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hover-line {
          position: relative;
        }
        
        .hover-line::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .hover-line:hover::after {
          width: 100%;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #FFFFFF 0%, #999999 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .grain {
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 100;
        }
      `}</style>

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <button onClick={() => scrollToSection('hero')} className="group">
              <h1 className="font-display text-2xl lg:text-3xl tracking-wide hover-line">
                V CLUB
              </h1>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {['Programme', 'Infos', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm uppercase tracking-widest hover-line text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-white/90 transition-all"
              >
                Réserver
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-8 border-t border-white/10">
              <div className="flex flex-col gap-6">
                {['Programme', 'Infos', 'Contact'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-medium text-center"
                >
                  Réserver
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-0" />
        
        {/* Placeholder for hero image/video */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.1), transparent 50%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center fade-in">
          {/* Opening badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 backdrop-blur-sm mb-8" style={{
            animationDelay: '0.2s'
          }}>
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/80">Ouverture {siteConfig.opening.date}</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 slide-up" style={{
            animationDelay: '0.4s',
            lineHeight: '0.95'
          }}>
            V CLUB
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-2xl mx-auto slide-up" style={{
            animationDelay: '0.6s'
          }}>
            {siteConfig.hero.subtitle}
          </p>

          <p className="text-sm sm:text-base text-white/40 mb-12 max-w-xl mx-auto slide-up" style={{
            animationDelay: '0.7s'
          }}>
            {siteConfig.address.city} — {siteConfig.venue.features[0].title}
          </p>

          {/* Featured event */}
          <div className="inline-block border border-white/10 backdrop-blur-sm p-8 mb-12 slide-up" style={{
            animationDelay: '0.8s'
          }}>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Soirée d'ouverture</p>
            <p className="font-display text-4xl sm:text-5xl mb-4">14 Février 2026</p>
            <p className="text-xl text-white/80 mb-2">KGS • Live</p>
            <p className="text-sm text-white/50">Saint-Valentin Special</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{
            animationDelay: '1s'
          }}>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="group px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2"
            >
              Réserver une table
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('programme')}
              className="px-10 py-4 border border-white/20 text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Voir le programme
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in" style={{
          animationDelay: '1.2s'
        }}>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Défiler</span>
          <div className="w-px h-12 bg-white/20" />
        </div>
      </section>

      {/* Programme Section */}
      <section id="programme" className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">À venir</p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6">
              Programme
            </h2>
            <p className="text-white/60 max-w-2xl">
              Tous les vendredis et samedis. Deux ambiances, une soirée inoubliable.
            </p>
          </div>

          {/* Event list */}
          <div className="space-y-6">
            {/* Opening Event */}
            <div className="group border border-white/10 hover:border-white/30 transition-all p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white text-black text-xs uppercase tracking-widest font-medium">
                      Ouverture
                    </span>
                    <span className="text-sm text-white/40">Saint-Valentin</span>
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl mb-3">
                    KGS • Opening Night
                  </h3>
                  <p className="text-white/60 mb-4">
                    Soirée inaugurale avec {siteConfig.music.djSixter.realName}, resident DJ
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-white/50">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Vendredi 14 Février
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {siteConfig.schedule.hours}
                    </span>
                  </div>
                </div>
                <div className="lg:text-right">
                  <p className="text-3xl font-display mb-2">{siteConfig.schedule.prices.showcase}</p>
                  <p className="text-sm text-white/40">Prévente</p>
                </div>
              </div>
            </div>

            {/* Regular nights */}
            <div className="grid md:grid-cols-2 gap-6">
              {siteConfig.music.styles.map((style, index) => (
                <div key={index} className="border border-white/10 hover:border-white/20 transition-all p-8">
                  <div className="mb-6">
                    <h4 className="font-display text-2xl mb-3">{style}</h4>
                    <p className="text-white/60 text-sm mb-4">
                      {index === 0 ? 'Électro, House, Techno' : 'Charts, Hip-Hop, R&B'}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-white/60">{siteConfig.schedule.days[0]}</span>
                      <span className="text-white">{siteConfig.schedule.prices.standard}</span>
                    </div>
                    <p className="text-xs text-white/40">{siteConfig.schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left column */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Le lieu</p>
              <h2 className="font-display text-5xl lg:text-6xl mb-8">
                Deux salles,<br />Deux ambiances
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                {siteConfig.hero.description}
              </p>
              
              {/* Features */}
              <div className="space-y-6">
                {siteConfig.venue.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-lg mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* V Club card */}
              <div className="bg-zinc-900 p-8 border border-white/10">
                <h3 className="font-display text-3xl mb-4">V CLUB</h3>
                <p className="text-white/60 mb-6">{siteConfig.complex.vClub.style}</p>
                <p className="text-sm text-white/40">{siteConfig.complex.vClub.target}</p>
              </div>

              {/* Valentino card */}
              <div className="bg-zinc-900 p-8 border border-white/10">
                <h3 className="font-display text-3xl mb-4">VALENTINO</h3>
                <p className="text-white/60 mb-6">{siteConfig.complex.valentino.style}</p>
                <p className="text-sm text-white/40">{siteConfig.complex.valentino.target}</p>
              </div>

              {/* VIP */}
              <div className="bg-white/5 p-8 border border-white/20">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Espace privatif</p>
                <h3 className="font-display text-3xl mb-4">{siteConfig.ambiance.vip.title}</h3>
                <p className="text-white/60 mb-4">{siteConfig.ambiance.vip.capacity} • {siteConfig.ambiance.vip.location}</p>
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-sm hover-line inline-block">
                  Demander un devis →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos Section */}
      <section id="infos" className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-white/40" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/60">Adresse</h3>
              </div>
              <p className="text-xl mb-2">{siteConfig.address.street}</p>
              <p className="text-white/60 mb-6">
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.street + ' ' + siteConfig.address.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover-line inline-block"
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-white/40" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/60">Horaires</h3>
              </div>
              <p className="text-xl mb-2">{siteConfig.schedule.days[0]}</p>
              <p className="text-white/60 mb-6">{siteConfig.schedule.hours}</p>
              <p className="text-sm text-white/40">
                Ouverture {siteConfig.opening.date}
              </p>
            </div>

            {/* Transport */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ChevronRight className="w-5 h-5 text-white/40" />
                <h3 className="text-xs uppercase tracking-[0.3em] text-white/60">Navette gratuite</h3>
              </div>
              <div className="space-y-2 mb-6">
                {siteConfig.transport.circuit.map((ville, index) => (
                  <p key={index} className="text-white/60">• {ville}</p>
                ))}
              </div>
              <p className="text-sm text-white/40">
                Aller-retour inclus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Réservations</p>
            <h2 className="font-display text-5xl lg:text-6xl mb-8">
              Contactez-nous
            </h2>
            
            {/* Contact methods */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group px-10 py-5 bg-white text-black hover:bg-white/90 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm uppercase tracking-widest font-medium">
                  {siteConfig.contact.phone}
                </span>
              </a>
            </div>

            <p className="text-white/60 mb-8">
              Pour toute demande de réservation de table ou d'espace privatif
            </p>

            <p className="text-sm text-white/40">
              {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-display text-2xl mb-2">V CLUB</h3>
              <p className="text-sm text-white/40">{siteConfig.tagline}</p>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/30 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} V Club • Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}