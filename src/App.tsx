import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Trophy, CheckCircle, Clock, Award, Star, Calendar, ExternalLink, Target, Users, Zap, Flag, Play } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-purple-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-orange-500/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 border-2 border-amber-300">
                <Target className="text-stone-900" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">{siteConfig.barName}</h1>
                <p className="text-sm text-stone-700">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-stone-700 hover:text-orange-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('concept')} className="text-stone-700 hover:text-orange-600 transition-colors">Le Concept</button>
              <button onClick={() => scrollToSection('fondateurs')} className="text-stone-700 hover:text-orange-600 transition-colors">Les Fondateurs</button>
              <button onClick={() => scrollToSection('infos')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg border border-amber-300">
                Infos pratiques
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-stone-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 shadow-xl py-4 border-t border-orange-500/30">
              {['accueil', 'concept', 'fondateurs', 'infos'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-stone-800 hover:text-orange-400 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, #f97316 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6 shadow-lg border-2 border-orange-300">
              <Flag className="text-orange-600" size={24} />
              <span className="text-lg font-bold text-orange-700">Ouverture : 6 février 2026</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 text-stone-900" style={{fontFamily: 'serif', textShadow: '4px 4px 0px rgba(251, 146, 60, 0.3)'}}>
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-3xl md:text-4xl text-orange-600 mb-4 font-bold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded"></div>
              <p className="text-xl text-purple-600 font-semibold">
                {siteConfig.hero.tagline}
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded"></div>
            </div>
            
            <p className="text-lg text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.description}
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl inline-block border-2 border-orange-200 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-left">
                  <Calendar className="text-orange-600" size={24} />
                  <div>
                    <p className="font-bold text-stone-900">{siteConfig.hero.opening}</p>
                    <p className="text-sm text-stone-600">Venez nous découvrir !</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <Trophy className="text-purple-600" size={24} />
                  <div>
                    <p className="font-bold text-stone-900">{siteConfig.hero.inauguration}</p>
                    <p className="text-sm text-stone-600">Grande fête d'inauguration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('infos')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30 border-2 border-amber-300">
                Où nous trouver ?
              </button>
              <button onClick={() => scrollToSection('concept')} className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-lg border-2 border-orange-300">
                Découvrir le concept
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Le Concept */}
      <section id="concept" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.concept.title}</h2>
            <p className="text-2xl text-orange-600">{siteConfig.concept.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg border-2 border-orange-300">
              <Target className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Notre Mission</h3>
              <p className="text-stone-700 leading-relaxed">{siteConfig.concept.mission}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg border-2 border-purple-300">
              <Trophy className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Notre Vision</h3>
              <p className="text-stone-700 leading-relaxed">{siteConfig.concept.vision}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 shadow-xl text-white text-center border-2 border-orange-500">
            <p className="text-2xl font-bold mb-2">{siteConfig.concept.name}</p>
            <p className="text-lg text-orange-300">{siteConfig.concept.atmosphere}</p>
          </div>
        </div>
      </section>

      {/* Ce qu'on propose */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.offers.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.offers.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">{category.title}</h3>
                <p className="text-stone-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-stone-700">
                      <CheckCircle className="text-orange-500 flex-shrink-0" size={18} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Fondateurs */}
      <section id="fondateurs" className="py-20 px-4 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-orange-400">Les Fondateurs</h2>
            <p className="text-xl text-gray-300">Qui se cache derrière le Dartrad ?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Thibault */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-2xl border-2 border-amber-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Trophy className="text-orange-600" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{siteConfig.founder.name}</h3>
                  <p className="text-amber-200 font-semibold">"{siteConfig.founder.nickname}"</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-bold">🏆 {siteConfig.founder.frenchRanking}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-bold">🌍 {siteConfig.founder.currentRanking}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <p className="font-bold">📍 {siteConfig.founder.birthplace}</p>
                </div>
              </div>

              <p className="text-white leading-relaxed mb-6">{siteConfig.founder.bio}</p>

              <div className="bg-stone-900/50 rounded-lg p-4">
                <p className="text-sm font-bold text-amber-200 mb-2">Palmarès :</p>
                <ul className="space-y-1 text-sm">
                  {siteConfig.founder.achievements.slice(0, 5).map((achievement, index) => (
                    <li key={index} className="text-white">• {achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Marie */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-2xl border-2 border-purple-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Users className="text-purple-600" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{siteConfig.coFounder.name}</h3>
                  <p className="text-purple-200 font-semibold">{siteConfig.coFounder.title}</p>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <p className="font-bold text-white">🏪 {siteConfig.coFounder.experience}</p>
              </div>

              <p className="text-white leading-relaxed mb-6">{siteConfig.coFounder.role}</p>
              <p className="text-white leading-relaxed">{siteConfig.coFounder.passion}</p>

              <div className="bg-stone-900/50 rounded-lg p-4 mt-6">
                <p className="text-white italic">"Ensemble, nous voulons créer LE lieu de référence des fléchettes en Bretagne !"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi le Dartrad */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.whyUs.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.whyUs.reasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-orange-200">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{reason.title}</h3>
                <p className="text-stone-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-orange-400">{siteConfig.target.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.target.profiles.map((profile, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-white/20 transition-all border border-orange-500/30">
                <div className="text-4xl mb-3">{profile.icon}</div>
                <h3 className="text-lg font-bold text-orange-400 mb-2">{profile.title}</h3>
                <p className="text-gray-300 text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les Fléchettes */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.darts.title}</h2>
            <p className="text-xl text-orange-600">{siteConfig.darts.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Comment ça marche ?</h3>
              <p className="text-stone-700 mb-6">{siteConfig.darts.description}</p>
              <div className="space-y-4">
                {siteConfig.darts.rules.map((rule, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-1">{rule.title}</h4>
                    <p className="text-stone-600 text-sm">{rule.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Pourquoi jouer ?</h3>
              <ul className="space-y-3">
                {siteConfig.darts.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-stone-700">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-0.5" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white rounded-lg p-6 mt-6 border-2 border-purple-300">
                <p className="text-center text-stone-900 font-bold text-lg">
                  🎯 "Un sport accessible qui passionne des millions de personnes dans le monde !"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.story.title}</h2>
          </div>

          <div className="space-y-6">
            {siteConfig.story.timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg border-2 border-amber-300">
                    {index + 1}
                  </div>
                  {index < siteConfig.story.timeline.length - 1 && (
                    <div className="w-1 h-full bg-orange-300 my-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
                    <p className="text-sm font-bold text-orange-600 mb-1">{item.date}</p>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{item.event}</h3>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section id="infos" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mb-4">{siteConfig.infos.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl text-white border-2 border-amber-300">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Où nous trouver ?</h3>
                <p className="text-lg font-semibold mb-2">{siteConfig.infos.address.street}</p>
                <p className="text-lg font-semibold">{siteConfig.infos.address.city}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-xl text-white border-2 border-purple-300">
                <Calendar className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ouverture</h3>
                <p className="text-lg font-semibold mb-2">{siteConfig.infos.opening.date}</p>
                <p className="text-sm opacity-90">{siteConfig.infos.opening.note}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-2 border-orange-300">
              <Clock className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Horaires</h3>
              <div className="bg-white rounded-lg p-6 mb-6 border border-orange-200">
                <p className="text-orange-600 font-bold text-center">{siteConfig.infos.hours.temp}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="text-sm text-stone-600 mb-1">Téléphone</p>
                  <p className="font-bold text-stone-900">{siteConfig.infos.contact.phone}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <p className="text-sm text-stone-600 mb-1">Email</p>
                  <p className="font-bold text-stone-900">{siteConfig.infos.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <Target className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-5xl font-bold mb-6">Rendez-vous le 6 février !</h2>
          <p className="text-2xl mb-8">Venez découvrir le Dartrad dès l'ouverture</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block border-2 border-amber-300">
            <p className="text-xl font-bold mb-2">📍 14 rue Albert-de-Mun, Pontivy</p>
            <p className="text-lg">On vous attend nombreux ! 🎯</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4 border-t-2 border-orange-500">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-orange-400">{siteConfig.barName}</h3>
              <p className="text-gray-400 mb-4">{siteConfig.slogan}</p>
              <p className="text-gray-500 text-sm">{siteConfig.infos.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Fondateurs</h3>
              <div className="space-y-2 text-gray-400">
                <p>Thibault Tricole</p>
                <p className="text-sm text-purple-400">N°1 français • 61e mondial</p>
                <p className="mt-3">Marie Bouffaut</p>
                <p className="text-sm">Gestion & Convivialité</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Ouverture</h3>
              <div className="space-y-2 text-gray-400">
                <p className="font-bold text-white">📅 6 février 2026</p>
                <p>14 rue Albert-de-Mun</p>
                <p>56300 Pontivy</p>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-500/30 pt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">
              © 2026 {siteConfig.barName} - Tous droits réservés
            </p>
            <p className="text-orange-400 font-bold">
              🎯 Le bar à fléchettes de Pontivy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}