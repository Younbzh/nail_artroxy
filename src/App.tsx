// 📁 src/App.tsx - Version pour La Chaloupe
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, ChevronRight, Users, Star } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!ageVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-amber-300 mb-2 tracking-wide">
              {siteConfig.clubName}
            </h1>
            <p className="text-zinc-400 text-sm">{siteConfig.city}</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-zinc-300 text-sm leading-relaxed">
                Ce site est exclusivement réservé à un public majeur et averti.
              </p>
            </div>
            
            <div className="text-zinc-400 text-xs leading-relaxed space-y-3">
              <p>En accédant à ce site, je certifie :</p>
              <ul className="space-y-2 pl-4">
                <li>• Avoir atteint l'âge de majorité légale dans mon pays</li>
                <li>• Être averti du caractère érotique du contenu</li>
                <li>• Avoir mis en place les moyens nécessaires pour empêcher l'accès aux mineurs</li>
                <li>• Consulter ce site à titre personnel</li>
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setAgeVerified(true)}
                className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg transition-all duration-300 font-light tracking-wide"
              >
                J'accepte
              </button>
              <button
                onClick={() => window.location.href = 'https://www.google.com'}
                className="flex-1 bg-white/5 hover:bg-white/10 text-zinc-400 py-3 rounded-lg transition-all duration-300 font-light tracking-wide border border-white/10"
              >
                Quitter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Le Club', href: '#club' },
    { label: 'Espaces', href: '#espaces' },
    { label: 'Soirées', href: '#soirees' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Avis', href: '#avis' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-900/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-light tracking-wider text-amber-300">
                {siteConfig.clubName}
              </h1>
              <p className="text-xs text-zinc-500 font-light">{siteConfig.positioning}</p>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-zinc-400 hover:text-amber-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-zinc-400 hover:text-amber-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm font-light text-zinc-400 hover:text-amber-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-rose-950/20 to-zinc-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(244,63,94,0.06),transparent_40%)]"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-300 mb-6 tracking-wide">
            {siteConfig.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 font-light mb-8 leading-relaxed">
            {siteConfig.hero.subtitle}
          </p>
          <p className="text-lg text-zinc-400 font-light mb-4 max-w-2xl mx-auto italic">
            {siteConfig.hero.tagline}
          </p>
          <p className="text-base text-zinc-500 font-light mb-12 max-w-2xl mx-auto">
            {siteConfig.tone.promise}
          </p>
          <a
            href="#club"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#club')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600 hover:from-rose-700 hover:via-rose-800 hover:to-amber-700 text-white px-8 py-4 rounded-lg transition-all duration-300 font-light tracking-wide shadow-lg shadow-rose-900/30"
          >
            {siteConfig.hero.cta}
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {siteConfig.values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-zinc-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{value.icon}</div>
                <p className="text-zinc-400 text-xs font-light">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="club" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-12 text-center">
            Notre Histoire
          </h3>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.tone.promise}
          </p>
          
          <div className="bg-gradient-to-br from-zinc-800/80 to-rose-950/20 rounded-2xl p-8 border border-rose-500/10 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-rose-300 font-light mb-2">Public Principal</p>
                <p className="text-2xl text-amber-300">{siteConfig.audience.primary}</p>
              </div>
              <div className="text-center">
                <p className="text-rose-300 font-light mb-2">Également</p>
                <p className="text-2xl text-amber-300">{siteConfig.audience.secondary}</p>
              </div>
              <div className="text-center">
                <p className="text-rose-300 font-light mb-2">Ambiance</p>
                <p className="text-xl text-amber-300">{siteConfig.tone.keywords.slice(0, 3).join(' • ')}</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm mt-6 text-center italic">
              {siteConfig.audience.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="espaces" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent mb-4 text-center">
            Nos Espaces
          </h3>
          <p className="text-zinc-400 text-center mb-16 font-light italic">
            Tous nos espaces sont prévus pour vous permettre de vivre intensément chaque moment
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.spaces.map((space, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 hover:border-rose-500/30 hover:bg-gradient-to-br hover:from-zinc-900/80 hover:to-rose-950/20 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {space.emoji}
                </div>
                <h4 className="text-xl font-light text-amber-300 mb-3 group-hover:text-rose-300 transition-colors">
                  {space.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                  {space.description}
                </p>
                <p className="text-zinc-500 text-xs italic">
                  {space.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="soirees" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-4 text-center">
            Nos Soirées
          </h3>
          <p className="text-zinc-400 text-center mb-16 font-light italic">
            Chaque soirée est unique — Une alchimie imprévisible
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.events.map((event, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-zinc-800 to-rose-950/30 border border-rose-500/20 rounded-xl p-8 hover:shadow-2xl hover:shadow-rose-900/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/10 p-3 rounded-lg">
                    <Users className="text-rose-400" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-light text-amber-300 mb-2">{event.title}</h4>
                    <p className="text-rose-300 text-sm font-light">{event.schedule}</p>
                  </div>
                </div>
                <p className="text-zinc-300 mb-4 leading-relaxed">{event.description}</p>
                <p className="text-zinc-500 text-sm italic">{event.atmosphere}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <h3 className="text-4xl font-light bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent mb-4 text-center">
            Tarifs & Formules
          </h3>
          <p className="text-zinc-500 text-center mb-12 font-light">{siteConfig.pricing.includes}</p>
          
          <div className="space-y-8 mb-8">
            {/* Jeudi */}
            {siteConfig.pricing.jeudi && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-amber-300 mb-6 text-center">Jeudi Soir</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {siteConfig.pricing.jeudi.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-zinc-400 font-light mb-2">{item.label}</p>
                      {item.note && <p className="text-zinc-500 text-xs mb-3">{item.note}</p>}
                      <p className="text-3xl font-light text-amber-300">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vendredi */}
            {siteConfig.pricing.vendredi && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-amber-300 mb-6 text-center">Vendredi Soir & Veilles de Fériés</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {siteConfig.pricing.vendredi.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-zinc-400 font-light mb-2">{item.label}</p>
                      {item.note && <p className="text-zinc-500 text-xs mb-3">{item.note}</p>}
                      <p className="text-3xl font-light text-amber-300">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Samedi */}
            {siteConfig.pricing.samedi && (
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-light text-amber-300 mb-6 text-center">Samedi Soir - Couples & Dames</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {siteConfig.pricing.samedi.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-zinc-400 font-light mb-2">{item.label}</p>
                      {item.note && <p className="text-zinc-500 text-xs mb-3">{item.note}</p>}
                      <p className="text-3xl font-light text-amber-300">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Spécifique à La Chaloupe */}
      {siteConfig.testimonials && siteConfig.testimonials.length > 0 && (
        <section id="avis" className="py-24 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl"></div>
          <div className="max-w-6xl mx-auto px-6 relative">
            <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-4 text-center">
              Vos Mots d'Amour
            </h3>
            <p className="text-zinc-400 text-center mb-16 font-light italic">
              Ce que nos visiteurs disent de La Chaloupe
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {siteConfig.testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-zinc-800/80 to-rose-950/20 border border-rose-500/10 rounded-xl p-8 hover:shadow-xl hover:shadow-rose-900/20 transition-all duration-500"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h4 className="text-xl font-light text-amber-300 mb-3">{testimonial.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-rose-300 text-sm font-light">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-4xl font-light bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent mb-16 text-center">
            Nous Contacter
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <MapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Adresse</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}<br />
                    {siteConfig.contact.address.region}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Phone className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Téléphone</h4>
                  <p className="text-zinc-400 font-light">{siteConfig.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Mail className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Email</h4>
                  <p className="text-zinc-400 font-light">{siteConfig.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Clock className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-light text-amber-300 mb-2">Horaires</h4>
                  <div className="text-zinc-400 font-light space-y-1 text-sm">
                    {siteConfig.contact.hours.map((h, idx) => (
                      <p key={idx}>{h.day} : {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 border border-white/5 rounded-2xl p-8">
              <h4 className="text-2xl font-light text-amber-300 mb-6">Infos Pratiques</h4>
              <div className="space-y-4 text-zinc-400 font-light leading-relaxed text-sm">
                <p>{siteConfig.contact.parking}</p>
                <p className="pt-4 border-t border-white/5 text-xs italic text-zinc-500">
                  {siteConfig.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-amber-300 mb-2">{siteConfig.clubName}</h2>
          <p className="text-zinc-500 text-sm font-light mb-6">{siteConfig.positioning}</p>
          <p className="text-zinc-600 text-xs font-light">
            © 2026 {siteConfig.clubName} - Site réservé aux adultes
          </p>
        </div>
      </footer>
    </div>
  );
}