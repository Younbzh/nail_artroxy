import React from 'react';
import { Sparkles, Palette, Paintbrush2, Heart, MapPin, Phone, Instagram, Facebook, Clock, Gift, Home } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-6 animate-fade-in">
            {/* Logo/Brand */}
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-medium text-pink-900 tracking-wide">NAIL ART • MORÉAC</span>
            </div>

            {/* Main title with unique typography */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                Nail.art.rox
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-pink-900 mt-2 font-light tracking-wider">
                by Dina
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-pink-800 font-light italic max-w-2xl mx-auto">
              {siteConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-pink-900 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>

            {/* Promo badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg animate-bounce mt-8">
              <Gift className="w-5 h-5 text-amber-900" />
              <span className="text-sm font-semibold text-amber-900">
                -15% pour les nouvelles clientes
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">À propos</span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-pink-500 to-purple-400 mt-2"></div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                Roxana, artiste ongulaire
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                {siteConfig.about.story}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {siteConfig.about.values.map((value, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 p-8 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-inner relative group">
                  <img 
                    src="/nail-art-sample.jpg"
                    alt="Nail art de Noël par Dina - Sapins et flocons"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent flex items-end p-6">
                    <p className="text-xl sm:text-2xl font-serif text-white italic leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                      Chaque ongle est une petite œuvre d'art
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Mes prestations</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              Des ongles sublimes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.services.map((service, idx) => {
              const icons = {
                sparkles: Sparkles,
                palette: Palette,
                'paintbrush-2': Paintbrush2,
                heart: Heart
              };
              const Icon = icons[service.icon as keyof typeof icons];

              return (
                <div 
                  key={idx}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-pink-900 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, idx) => {
              const icons = {
                'À domicile': Home,
                'Offre découverte': Gift,
                'Sur rendez-vous': Clock
              };
              const Icon = icons[feature.title as keyof typeof icons];

              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl p-8 shadow-lg text-center space-y-4 animate-fade-in ${
                    feature.highlight ? 'ring-2 ring-pink-400 transform scale-105' : ''
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    feature.highlight 
                      ? 'bg-gradient-to-br from-pink-500 to-purple-400' 
                      : 'bg-gradient-to-br from-pink-200 to-purple-200'
                  }`}>
                    <Icon className={`w-8 h-8 ${feature.highlight ? 'text-white' : 'text-pink-900'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-pink-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-400 rounded-full shadow-lg">
            <Clock className="w-6 h-6 text-white" />
            <span className="text-lg font-medium text-white">
              {siteConfig.hours.type}
            </span>
          </div>
          <p className="text-gray-600 mt-4">
            {siteConfig.hours.note}
          </p>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              Prendre rendez-vous
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-900 text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-pink-900 text-lg mb-1">Téléphone</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-pink-100">
                  <h3 className="font-bold text-pink-900 text-lg mb-4">Suivez-moi</h3>
                  <div className="flex gap-4">
                    <a 
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-6 h-6 text-amber-900" />
                  <h3 className="font-bold text-amber-900 text-lg">Offre spéciale</h3>
                </div>
                <p className="text-amber-900 font-medium">
                  15% de réduction pour toutes les nouvelles clientes !
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzEzLjgiTiAywrA0OScwOS44Ilc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Nail.art.rox by Dina"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                {siteConfig.name}
              </h3>
              <p className="text-pink-200 italic">{siteConfig.tagline}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-pink-200">
                <p>{siteConfig.contact.address}</p>
                <p>{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Zone d'intervention</h4>
              <p className="text-pink-200">
                Moréac et alentours<br />
                (20 km autour de Moréac)
              </p>
            </div>
          </div>

          <div className="border-t border-pink-700 pt-8 text-center text-pink-200 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
            <p className="mt-2">Prothésiste ongulaire à Moréac, Morbihan (56)</p>
            <p className="mt-4 text-pink-300/80">
              Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 underline decoration-pink-300/50">Avalon Stratège</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap');

        * {
          font-family: 'DM Sans', sans-serif;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;