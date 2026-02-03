import React, { useState } from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Beer, Music, Gamepad2, Users, Calendar, Star, ChevronDown, Palmtree } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section - Tropical Lounge */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-rose-950/30 to-neutral-900">
        {/* Animated tropical lights effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo avec effet tropical */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Palmtree className="w-12 h-12 text-emerald-400 animate-pulse" />
              <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-400" style={{ fontFamily: "'Oswald', sans-serif" }}>
                ZE BAR
              </h1>
              <Palmtree className="w-12 h-12 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex items-center justify-center gap-6 my-6">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
              <Beer className="w-8 h-8 text-rose-400" />
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-3xl md:text-5xl font-bold text-rose-400 mb-4 tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
            AMBIANCE TROPICALE & LOUNGE
          </p>
          
          <p className="text-xl md:text-2xl text-amber-200/90 mb-12 font-light">
            Rooftop • Billard • Soirées • Fauteuils Cosy
          </p>

          {/* Key features avec style tropical */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 bg-gradient-to-r from-rose-900/50 to-fuchsia-900/50 px-6 py-3 rounded-full border border-rose-400/30 backdrop-blur-sm">
              <Palmtree className="w-5 h-5 text-emerald-400" />
              <span className="text-amber-100 font-medium">Ambiance Tropical</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 px-6 py-3 rounded-full border border-emerald-400/30 backdrop-blur-sm">
              <Music className="w-5 h-5 text-rose-400" />
              <span className="text-amber-100 font-medium">Soirées Live</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-900/50 to-pink-900/50 px-6 py-3 rounded-full border border-fuchsia-400/30 backdrop-blur-sm">
              <Gamepad2 className="w-5 h-5 text-emerald-400" />
              <span className="text-amber-100 font-medium">Billard & Jeux</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="group bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 text-white px-10 py-4 font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/50 flex items-center justify-center gap-3 rounded-lg"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <a
              href="#horaires"
              className="group bg-amber-800/80 hover:bg-amber-700 text-amber-100 px-10 py-4 font-bold text-lg border-2 border-rose-400/30 hover:border-rose-400 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Clock className="w-5 h-5" />
              HORAIRES
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-rose-400" />
        </div>
      </header>

      {/* Points Forts - Style tropical lounge */}
      <section className="py-20 px-4 bg-gradient-to-br from-neutral-900 to-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              POURQUOI ZE BAR ?
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-800 to-neutral-900 p-8 border-2 border-rose-500/20 hover:border-rose-400/50 transition-all duration-300 group rounded-lg"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                <h3 className="text-2xl font-bold text-rose-400 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {highlight.title}
                </h3>
                <p className="text-amber-100/80 font-light leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire avec fond bois */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-950/40 via-stone-900 to-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              LE BAR INCONTOURNABLE
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-stone-800/80 to-neutral-900/80 p-10 border-l-4 border-rose-500 rounded-lg backdrop-blur-sm">
            <p className="text-amber-100/90 text-lg font-light leading-relaxed mb-6">
              {siteConfig.about.story}
            </p>
            
            <div className="bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-fuchsia-500/10 p-6 border-l-4 border-emerald-500 rounded">
              <p className="text-amber-50 font-light italic leading-relaxed text-lg">
                "{siteConfig.about.vision}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Boissons avec ambiance chaleureuse */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              NOTRE CARTE
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-amber-200/90 font-light text-xl">
              Bières, cocktails tropicaux et planches apéro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.drinks.categories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-800 to-neutral-900 p-8 border-2 border-amber-700/30 hover:border-rose-400/50 transition-all duration-300 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{category.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-200 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {category.name}
                    </h3>
                    {category.price && (
                      <p className="text-rose-400 font-bold text-xl">{category.price}</p>
                    )}
                  </div>
                </div>
                {category.description && (
                  <p className="text-amber-100/70 mb-4 font-light">{category.description}</p>
                )}
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-amber-100/80 font-light pl-4 border-l-2 border-rose-500/30">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités & Jeux avec style lounge */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-900 via-neutral-900 to-rose-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ACTIVITÉS & JEUX
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteConfig.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-900/30 to-stone-900/80 p-6 text-amber-100/90 font-light border border-amber-700/30 hover:border-rose-400/50 hover:bg-gradient-to-br hover:from-rose-900/20 hover:to-stone-900 transition-all duration-300 rounded-lg"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Événements avec néons tropicaux */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ÉVÉNEMENTS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto"></div>
          </div>

          {/* Événements réguliers */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {siteConfig.events.regular.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-900/30 via-stone-800 to-fuchsia-900/30 p-8 border-2 border-rose-500/30 hover:border-rose-400 transition-all duration-300 rounded-lg"
              >
                <Calendar className="w-10 h-10 text-rose-400 mb-4" />
                <h3 className="text-2xl font-bold text-amber-200 mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {event.day}
                </h3>
                <p className="text-rose-400 font-bold mb-3">{event.type}</p>
                <p className="text-amber-100/80 font-light">{event.description}</p>
              </div>
            ))}
          </div>

          {/* Événements spéciaux */}
          <div className="bg-gradient-to-br from-stone-800 to-neutral-900 p-8 border-l-4 border-emerald-500 rounded-lg">
            <h3 className="text-2xl font-bold text-amber-200 mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ÉVÉNEMENTS SPÉCIAUX
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.events.special.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-amber-900/20 text-amber-100/90 font-light border border-amber-700/30 rounded"
                >
                  • {event}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horaires avec style bois chaud */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-950/40 to-stone-900" id="horaires">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              HORAIRES
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-stone-800/80 to-neutral-900/80 p-8 space-y-4 rounded-lg backdrop-blur-sm">
            {Object.entries(siteConfig.hours).map(([day, info]) => (
              <div
                key={day}
                className={`p-6 border-l-4 ${
                  info.ouvert ? 'border-rose-500 bg-gradient-to-r from-rose-900/20 to-transparent' : 'border-stone-600 bg-stone-900/30'
                } hover:bg-gradient-to-r hover:from-rose-900/30 hover:to-transparent transition-colors duration-300 rounded`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Clock className={`w-6 h-6 ${info.ouvert ? 'text-rose-400' : 'text-stone-500'}`} />
                    <span className={`font-bold text-xl capitalize ${info.ouvert ? 'text-amber-200' : 'text-stone-500'}`} style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {day}
                    </span>
                  </div>
                  <span className={`font-light text-lg ${info.ouvert ? 'text-amber-100/90' : 'text-stone-500'}`}>
                    {info.horaires}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-amber-300/80 font-light text-lg">
              Ouvert jusqu'à 2h du matin du mardi au samedi ! 🎉🍹
            </p>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section className="py-20 px-4 bg-gradient-to-br from-neutral-900 to-rose-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ILS EN PARLENT
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto mb-4"></div>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <Star className="w-6 h-6 fill-current" />
              <span className="text-2xl font-bold">4.5/5</span>
              <span className="text-amber-300/70 font-light">• Plus de 400 avis</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-800/80 to-neutral-900/80 p-8 border-l-4 border-rose-500 hover:bg-stone-800/90 transition-colors duration-300 rounded-lg backdrop-blur-sm"
              >
                <p className="text-amber-100/90 font-light leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-rose-400 font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section className="py-20 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              NOUS TROUVER
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Infos */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-stone-800 to-neutral-900 p-8 border-l-4 border-rose-500 rounded-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-rose-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-200 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      ADRESSE
                    </h3>
                    <p className="text-amber-100/90 font-light leading-relaxed mb-2">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                      {siteConfig.address.region}
                    </p>
                    <p className="text-amber-300/60 font-light text-sm italic">
                      {siteConfig.address.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-stone-800 to-neutral-900 p-8 border-l-4 border-emerald-500 rounded-lg">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-amber-200 mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      CONTACT
                    </h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-emerald-400 hover:text-emerald-300 text-xl font-light transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-500/10 via-emerald-500/10 to-fuchsia-500/10 p-8 border-l-4 border-fuchsia-500 rounded-lg backdrop-blur-sm">
                <p className="text-amber-100/90 font-light leading-relaxed mb-4">
                  {siteConfig.location.description}
                </p>
                <p className="text-amber-200/80 font-light text-sm">
                  🚗 {siteConfig.location.parking}<br />
                  🚂 {siteConfig.location.access}
                </p>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-br from-stone-800 to-neutral-900 hover:from-blue-600 hover:to-blue-700 p-6 border border-amber-700/30 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="font-medium text-amber-100">Facebook</span>
                </a>
                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-br from-stone-800 to-neutral-900 hover:from-pink-600 hover:to-pink-700 p-6 border border-amber-700/30 hover:border-pink-500 transition-all duration-300 flex items-center justify-center gap-3 rounded-lg"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-medium text-amber-100">Instagram</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-stone-800 p-2 border-2 border-amber-700/30 rounded-lg">
              <div className="aspect-square overflow-hidden rounded">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.5!2d${siteConfig.address.coordinates.lng}!3d${siteConfig.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA0JzAwLjEiTiAywrA1OCcwMC4xIlc!5e0!3m2!1sfr!2sfr!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Ze Bar"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-rose-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-400 mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ZE BAR
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-rose-400 via-emerald-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-amber-300/80 font-light text-lg mb-8">
              Ambiance tropicale & lounge à Pontivy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 text-white px-8 py-4 font-bold transition-colors rounded-lg"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm font-light">
              <p>
                {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p>
                © {new Date().getFullYear()} Ze Bar Pontivy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;