import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Truck, Construction, Check, Star, Award, DollarSign, Package, Search, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <Truck className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{siteConfig.companyName}</h1>
                <p className="text-sm text-orange-600">{siteConfig.city}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-orange-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('produits')} className="text-gray-700 hover:text-orange-600 transition-colors">Produits</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
                Contact
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'produits', 'services', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 capitalize">
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md border border-orange-200">
              <Construction className="text-orange-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Négoce professionnel</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-600 mb-4 font-semibold">
              {siteConfig.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('stock')} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl flex items-center gap-2">
                <Package size={20} />
                Voir notre stock
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-orange-200">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow border border-gray-200">
                <span className="text-2xl">{value.icon}</span>
                <span className="font-medium text-gray-700">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.about.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre histoire</h3>
              <p className="text-gray-600 leading-relaxed">{siteConfig.about.story}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre mission</h3>
              <p className="text-gray-600 leading-relaxed">{siteConfig.about.mission}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Check className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nos valeurs</h3>
              <p className="text-gray-600 leading-relaxed">{siteConfig.about.values}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section id="produits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.products.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-orange-100">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{category.description}</p>
                <ul className="space-y-2 mb-4">
                  {category.items.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-500 italic">
                  {category.brands.slice(0, 3).join(', ')}...
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{siteConfig.brands.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.brands.description}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.brands.list.map((brand, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.services.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.services.items.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg border border-orange-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-orange-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-orange-400" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.advantages.title}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {siteConfig.advantages.items.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-orange-100 text-center">
                <div className="text-4xl mb-3">{advantage.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock en ligne */}
      <section id="stock" className="py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{siteConfig.onlineStock.title}</h2>
            <p className="text-xl">{siteConfig.onlineStock.description}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            {siteConfig.onlineStock.platforms.map((platform, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                <p className="mb-4">{platform.description}</p>
                {platform.url && (
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-lg">
                    <ExternalLink size={20} />
                    Voir nos annonces
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                    <p className="text-gray-700">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-700">{siteConfig.contact.address.city}</p>
                    <p className="text-gray-600 text-sm mt-2">{siteConfig.contact.address.region}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-gray-700 text-lg font-semibold">{siteConfig.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl text-white mb-6">
                <h3 className="text-2xl font-bold mb-6">{siteConfig.contact.schedule.title}</h3>
                {siteConfig.contact.schedule.hours.map((hour, index) => (
                  <p key={index} className="mb-2">{hour}</p>
                ))}
                <p className="mt-4 text-orange-100 italic">{siteConfig.contact.schedule.note}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-3">Informations légales</h4>
                <p className="text-sm text-gray-600">SIRET : {siteConfig.contact.siret}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">{siteConfig.companyName}</h3>
              <p className="text-gray-300 mb-4">{siteConfig.tagline}</p>
              <p className="text-gray-400">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'produits', 'services', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-300 hover:text-orange-400 transition-colors capitalize">
                    {section}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">SIRET : {siteConfig.contact.siret}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 {siteConfig.companyName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}