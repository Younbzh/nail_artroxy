import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Building2, Home, Sparkles, Check, Star, Award, Users, Leaf, Zap, Clock, Shield } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">{siteConfig.companyName}</h1>
                <p className="text-sm text-green-600">{siteConfig.city}</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('zone')} className="text-gray-700 hover:text-blue-600 transition-colors">Zone</button>
              <button onClick={() => scrollToSection('references')} className="text-gray-700 hover:text-blue-600 transition-colors">Références</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-green-600 transition-all shadow-lg">
                Devis gratuit
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 border-t border-gray-200">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50">Services</button>
              <button onClick={() => scrollToSection('zone')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50">Zone</button>
              <button onClick={() => scrollToSection('references')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50">Références</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-blue-200">
              <Sparkles className="text-blue-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Depuis 2007</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-700 mb-4 font-medium">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl p-6 mb-6 max-w-3xl mx-auto border border-blue-200">
              <p className="text-lg text-gray-700 italic font-medium">
                "{siteConfig.hero.tagline}"
              </p>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-green-600 transition-all shadow-xl flex items-center gap-2">
                <Phone size={20} />
                Demander un devis gratuit
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg border-2 border-blue-200">
                Découvrir nos services
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
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.about.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre histoire</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{siteConfig.about.story}</p>
                <p className="text-gray-600 leading-relaxed">{siteConfig.about.philosophy}</p>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 shadow-xl text-white">
                <Users className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Direction</h3>
                <p className="text-xl font-semibold mb-2">{siteConfig.about.team.director}</p>
                <p className="text-blue-100 mb-4">{siteConfig.about.team.role}</p>
                <p className="leading-relaxed">{siteConfig.about.team.description}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-blue-100">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{siteConfig.foundedYear}</div>
                  <div className="text-sm text-gray-600">Année de création</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-blue-100">
                  <div className="text-3xl font-bold text-green-600 mb-2">80km</div>
                  <div className="text-sm text-gray-600">Zone d'intervention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Entreprises */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4 shadow-md">
              <Building2 className="text-blue-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Pour les professionnels</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.servicesEntreprises.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.servicesEntreprises.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.servicesEntreprises.categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-blue-100">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                {category.technology && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-xs text-green-600 font-semibold flex items-center gap-1">
                      <Leaf size={14} />
                      {category.technology}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Particuliers */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-md">
              <Home className="text-green-600" size={20} />
              <span className="text-sm font-medium text-gray-700">Pour les particuliers</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.servicesParticuliers.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.servicesParticuliers.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.servicesParticuliers.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-green-600 font-semibold mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Extérieurs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.servicesExterieurs.title}</h2>
            <p className="text-xl text-gray-600">{siteConfig.servicesExterieurs.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.servicesExterieurs.services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{service.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 mb-3">
                  <p className="text-sm text-gray-700"><strong>Processus :</strong> {service.process}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.technologies.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.technologies.items.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{tech.name}</h3>
                <p className="text-gray-700 mb-3">{tech.description}</p>
                <div className="flex items-start gap-2 text-sm text-green-600 font-semibold">
                  <Check className="flex-shrink-0 mt-0.5" size={16} />
                  <span>{tech.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section id="zone" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.zone.title}</h2>
            <p className="text-xl text-gray-600 mb-4">{siteConfig.zone.description}</p>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-full font-bold text-2xl shadow-lg">
              Rayon : {siteConfig.zone.radius}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-xl border border-blue-200">
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.zone.cities.map((city, index) => (
                <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-shadow border border-gray-200">
                  <MapPin className="text-blue-600" size={18} />
                  <span className="font-medium text-gray-700">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Références */}
      <section id="references" className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.references.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.references.clients.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{client.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-2">{client.type}</p>
                    <p className="text-sm text-gray-600">{client.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Témoignages Clients</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{siteConfig.process.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-blue-100 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-400" size={24} />
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-600">Devis gratuit et sans engagement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                    <p className="text-gray-700 text-lg font-semibold">{siteConfig.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
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
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 shadow-xl text-white mb-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Clock size={28} />
                  {siteConfig.schedule.title}
                </h3>
                <p className="mb-4 leading-relaxed">{siteConfig.schedule.description}</p>
                <ul className="space-y-2">
                  {siteConfig.schedule.availability.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3">Informations légales</h4>
                <p className="text-sm text-gray-600 mb-2">SIRET : {siteConfig.contact.siret}</p>
                <p className="text-sm text-gray-600">{siteConfig.contact.manager}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pourquoi choisir Prop' & Net ?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-green-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">{siteConfig.companyName}</h3>
              <p className="text-blue-100 mb-4">{siteConfig.tagline}</p>
              <p className="text-blue-200">{siteConfig.contact.address.city}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">Navigation</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('accueil')} className="block text-blue-100 hover:text-white transition-colors">Accueil</button>
                <button onClick={() => scrollToSection('services')} className="block text-blue-100 hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('zone')} className="block text-blue-100 hover:text-white transition-colors">Zone</button>
                <button onClick={() => scrollToSection('references')} className="block text-blue-100 hover:text-white transition-colors">Références</button>
                <button onClick={() => scrollToSection('contact')} className="block text-blue-100 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-200">Contact</h3>
              <div className="space-y-2 text-blue-100">
                <p>{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="text-sm mt-4">SIRET : {siteConfig.contact.siret}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-8 text-center">
            <p className="text-blue-200 text-sm mb-2">
              © 2026 {siteConfig.companyName} - Tous droits réservés
            </p>
            <p className="text-blue-300 text-xs">
              Entreprise de nettoyage à Loudéac - Centre-Bretagne
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}