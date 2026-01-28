import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Trophy, CheckCircle, Clock, Award, Star, Calendar, ExternalLink, Zap, Target, Users, Flag } from 'lucide-react';
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
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-green-500/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse">
                <Flag className="text-black" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-400">{siteConfig.teamName}</h1>
                <p className="text-sm text-yellow-400">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-green-400 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('pilote')} className="text-gray-300 hover:text-green-400 transition-colors">Pilote</button>
              <button onClick={() => scrollToSection('palmares')} className="text-gray-300 hover:text-green-400 transition-colors">Palmarès</button>
              <button onClick={() => scrollToSection('partenaires')} className="text-gray-300 hover:text-green-400 transition-colors">Partenaires</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/30 font-bold">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-xl py-4 border-t border-green-500/30">
              {['accueil', 'pilote', 'palmares', 'partenaires', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-green-400 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-gray-900 px-6 py-3 rounded-md mb-6 shadow-lg border border-green-500/50">
              <Trophy className="text-green-400 animate-pulse" size={24} />
              <span className="text-lg font-bold text-green-400">Double Champion de France 🏆🏆</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 animate-gradient">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-white mb-4 font-bold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-full font-black text-xl shadow-lg shadow-green-500/50">
                2024
              </div>
              <span className="text-yellow-400 text-2xl">+</span>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-2 rounded-full font-black text-xl shadow-lg shadow-green-500/50">
                2025
              </div>
            </div>
            
            <p className="text-xl text-yellow-400 mb-6 font-semibold">
              {siteConfig.hero.tagline}
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={siteConfig.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-md font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/30 flex items-center gap-2">
                <ExternalLink size={20} />
                Suivez-nous sur Facebook
              </a>
              <a href={siteConfig.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-green-400 px-8 py-4 rounded-md font-bold hover:bg-gray-800 transition-all shadow-lg border border-green-500/50 flex items-center gap-2">
                <ExternalLink size={20} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats rapides */}
      <section className="py-12 px-4 bg-gray-900 border-y border-green-500/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">{siteConfig.achievements.stats.titres}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Titres nationaux</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-2">{siteConfig.achievements.stats.victoires}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Victoires</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-green-400 mb-2">{siteConfig.achievements.stats.podiums}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Podiums</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-yellow-400 mb-2">#35</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Numéro de course</div>
            </div>
          </div>
        </div>
      </section>

      {/* Le pilote */}
      <section id="pilote" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.pilot.title}</h2>
            <p className="text-2xl text-yellow-400 font-bold">{siteConfig.pilot.name} {siteConfig.pilot.number}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Le pilote</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.pilot.bio}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{siteConfig.pilot.achievements}</p>
              <div className="bg-black/50 rounded-lg p-4 border-l-4 border-yellow-400 mt-6">
                <p className="text-yellow-300 italic">"{siteConfig.pilot.quote}"</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Style de pilotage</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{siteConfig.pilot.style}</p>
              
              <h3 className="text-2xl font-bold text-green-400 mb-4 mt-8">La voiture</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Modèle</span>
                  <span className="text-white font-bold">{siteConfig.car.model}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Catégorie</span>
                  <span className="text-green-400 font-bold">{siteConfig.car.category}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Numéro</span>
                  <span className="text-yellow-400 font-bold">{siteConfig.car.number}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Puissance</span>
                  <span className="text-white font-bold">{siteConfig.car.specs.puissance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palmarès */}
      <section id="palmares" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.achievements.title}</h2>
            <p className="text-xl text-gray-400">Les titres qui font notre fierté</p>
          </div>

          <div className="space-y-8">
            {siteConfig.achievements.titles.map((title, index) => (
              <div key={index} className="bg-black rounded-2xl p-8 shadow-2xl border-2 border-green-500/50 hover:border-green-500 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                      <Trophy className="text-black" size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-green-400">{title.year}</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wide">{title.points}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full font-black text-lg shadow-lg">
                    🏆 CHAMPION
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{title.title}</h3>
                <p className="text-yellow-400 font-semibold mb-6">{title.highlight}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {title.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saison 2025 highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl text-black relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-10 font-black">🏁</div>
            <div className="relative z-10">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">Finale 2025</div>
              <h2 className="text-4xl font-black mb-4">{siteConfig.season.title}</h2>
              <p className="text-xl mb-6 font-semibold">{siteConfig.season.highlight}</p>
              
              <div className="grid md:grid-cols-3 gap-4 bg-black/20 rounded-xl p-6">
                <div>
                  <div className="text-sm opacity-80">Circuit</div>
                  <div className="text-2xl font-bold">{siteConfig.season.finalRace.circuit}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Résultat</div>
                  <div className="text-2xl font-bold">{siteConfig.season.finalRace.position}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Points</div>
                  <div className="text-2xl font-bold">{siteConfig.season.finalRace.points}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Rallycross */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.rallycross.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.rallycross.subtitle}</p>
            <p className="text-gray-300 max-w-3xl mx-auto mt-4">{siteConfig.rallycross.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.rallycross.characteristics.map((char, index) => (
              <div key={index} className="bg-black rounded-2xl p-8 shadow-lg border border-green-500/30 text-center hover:border-green-500 transition-all">
                <div className="text-5xl mb-4">{char.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">{char.title}</h3>
                <p className="text-gray-400">{char.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section id="partenaires" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.partners.title}</h2>
            <p className="text-xl text-gray-400">{siteConfig.partners.subtitle}</p>
          </div>

          {/* Partenaire principal */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-12 shadow-2xl text-black mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-12 h-12" />
              <div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-80">Partenaire principal</div>
                <h3 className="text-3xl font-black">{siteConfig.partners.main[0].name}</h3>
              </div>
            </div>
            <p className="text-lg font-semibold mb-4">{siteConfig.partners.main[0].location}</p>
            <p className="text-lg">{siteConfig.partners.main[0].description}</p>
          </div>

          {/* Autres sponsors */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Nos sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {siteConfig.partners.sponsors.map((sponsor, index) => (
                <div key={index} className="bg-black rounded-lg p-6 text-center border border-gray-800 hover:border-green-500/50 transition-all">
                  <div className="text-xl font-bold text-white mb-1">{sponsor.name}</div>
                  <div className="text-sm text-gray-400">{sponsor.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team values */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.team.title}</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{siteConfig.team.description}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.team.values.map((value, index) => (
              <div key={index} className="bg-black rounded-2xl p-8 shadow-lg border border-green-500/30 text-center hover:border-yellow-500 transition-all">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-green-400 mb-2">{value.text}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl border-2 border-green-500">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-green-400 mb-4">{siteConfig.partnership.title}</h2>
              <p className="text-xl text-gray-300">{siteConfig.partnership.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {siteConfig.partnership.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-black/50 rounded-lg p-4">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-green-500 to-green-600 text-black px-10 py-4 rounded-md font-black text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/30">
                {siteConfig.partnership.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black rounded-2xl p-8 shadow-lg border border-green-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/50">
                    <MapPin className="text-black" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Adresse</h3>
                    <p className="text-gray-300">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-300">{siteConfig.contact.address.city}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-2xl text-black">
                <h3 className="text-2xl font-black mb-4">Suivez nos courses !</h3>
                <p className="mb-6 font-semibold">{siteConfig.contact.cta}</p>
                <div className="space-y-3">
                  <a href={siteConfig.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="block bg-black/20 hover:bg-black/30 rounded-lg p-4 transition-all flex items-center justify-between">
                    <span className="font-bold">Facebook</span>
                    <ExternalLink size={20} />
                  </a>
                  <a href={siteConfig.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="block bg-black/20 hover:bg-black/30 rounded-lg p-4 transition-all flex items-center justify-between">
                    <span className="font-bold">Instagram</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-2xl p-8 shadow-lg border border-yellow-500/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Actualité</h3>
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">{siteConfig.news.latest.date}</div>
                <h4 className="text-xl font-bold text-white mb-3">{siteConfig.news.latest.title}</h4>
                <p className="text-gray-300 leading-relaxed">{siteConfig.news.latest.content}</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 border border-green-500/30">
                <h4 className="font-bold text-green-400 mb-4">Circuits 2025</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {siteConfig.championship.circuits.map((circuit, index) => (
                    <div key={index} className="text-gray-300 flex items-center gap-2">
                      <Flag size={14} className="text-green-400" />
                      {circuit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-green-500/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4 text-green-400">{siteConfig.teamName}</h3>
              <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-500 text-sm">Fondée en {siteConfig.founded}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>{siteConfig.contact.address.street}</p>
                <p>{siteConfig.contact.address.city}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Palmarès</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-bold text-white">🏆 Champion 2024</p>
                <p className="font-bold text-white">🏆 Champion 2025</p>
                <p className="text-yellow-400 font-semibold">Division 4</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 {siteConfig.teamName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}