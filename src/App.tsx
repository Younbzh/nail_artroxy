import React, { useState } from 'react';
import { MapPin, Phone, Clock, Music, Utensils, Users, ChevronDown, ChevronUp, Heart, Waves, Wine, Leaf, Sun } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const App = () => {
  const [openSection, setOpenSection] = useState<string | null>('menu');
  const [openDay, setOpenDay] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleDay = (day: string) => {
    setOpenDay(openDay === day ? null : day);
  };

  const getDayInfo = (dayName: string) => {
    const hours = siteConfig.hours[dayName as keyof typeof siteConfig.hours];
    if (!hours) return null;
    
    const isClosed = hours.midi === "Fermé" && hours.soir === "Fermé";
    return { ...hours, isClosed };
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section élégant */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-800 via-slate-700 to-stone-600">
        {/* Texture subtile en overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0OGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        {/* Effet eau qui miroite (subtil) */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Logo élégant */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light text-white mb-4 tracking-wide">
              Y'a du Goût
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-stone-200 font-light tracking-widest uppercase">
              Bar-Restaurant
            </p>
          </div>

          <p className="text-lg md:text-xl text-stone-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Au bord du Scorff, dans un cadre d'exception, savourez une cuisine saisonnière
            <br className="hidden md:block" />
            et partagez des moments conviviaux
          </p>

          {/* Caractéristiques subtiles */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 text-stone-300">
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-amber-600" />
              <span className="font-light">Terrasse sur le Scorff</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-amber-600" />
              <span className="font-light">Produits de saison</span>
            </div>
            <div className="flex items-center gap-2">
              <Wine className="w-5 h-5 text-amber-600" />
              <span className="font-light">Bar de caractère</span>
            </div>
          </div>

          {/* CTA élégant */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="group bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-sm font-light text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/30 flex items-center justify-center gap-3 border border-amber-800"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
            <a
              href="#menu"
              className="group bg-transparent hover:bg-white/5 text-white px-10 py-4 rounded-sm font-light text-lg border border-white/30 hover:border-white/60 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Utensils className="w-5 h-5" />
              Découvrir la carte
            </a>
          </div>
        </div>

        {/* Scroll indicator discret */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
        </div>
      </header>

      {/* Le Cadre - Section mise en avant */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Un lieu d'exception
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
              Niché au bord du Scorff, notre établissement occupe un bâtiment remarquable sur pilotis, 
              alliance harmonieuse de bois et de pierres apparentes. Un cadre authentique pour une cuisine sincère.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {siteConfig.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="text-5xl mb-6 text-amber-700">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-serif font-light text-slate-800 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-lg">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section élégante */}
      <section className="py-24 px-4 bg-stone-50" id="menu">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Notre Carte
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto mb-6"></div>
            <p className="text-stone-600 text-lg font-light">
              Une cuisine saisonnière généreuse et réconfortante
            </p>
          </div>

          <div className="space-y-8">
            {siteConfig.menu.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white border border-stone-200 overflow-hidden transition-all duration-500 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full p-8 flex items-center justify-between group hover:bg-stone-50 transition-colors"
                >
                  <h3 className="text-2xl font-serif font-light text-slate-800">
                    {section.title}
                  </h3>
                  {openSection === section.title ? (
                    <ChevronUp className="w-5 h-5 text-amber-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-amber-700" />
                  )}
                </button>
                
                {openSection === section.title && (
                  <div className="px-8 pb-8 space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-l-2 border-amber-700 pl-6 py-3"
                      >
                        <h4 className="text-xl font-serif text-slate-800 mb-2">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-stone-600 font-light leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-amber-50 border border-amber-200">
            <p className="text-stone-700 text-center font-light leading-relaxed">
              {siteConfig.menu.note}
            </p>
          </div>
        </div>
      </section>

      {/* Événements & Ambiance */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Moments de partage
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
              Au-delà de notre table, Y'a du Goût est aussi un lieu de convivialité 
              où culture et moments festifs se rencontrent dans une ambiance chaleureuse.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Music, title: "Concerts Live", desc: "Artistes de la région et programmation variée" },
              { icon: Users, title: "Soirées Thématiques", desc: "Karaoké, blind tests musicaux" },
              { icon: Waves, title: "Événements Sportifs", desc: "Retransmissions dans une ambiance conviviale" }
            ].map((event, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-amber-700 mb-6 group-hover:bg-amber-700 transition-all duration-500">
                  <event.icon className="w-8 h-8 text-amber-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-serif font-light text-slate-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-stone-600 font-light italic">
              Possibilité de privatisation pour vos événements
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-700 to-slate-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Notre Histoire
            </h2>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm p-12 border border-white/10">
            <p className="text-stone-200 text-lg font-light leading-relaxed mb-8 text-center">
              {siteConfig.about.story}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {siteConfig.about.team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 text-center"
                >
                  <p className="text-amber-500 font-serif text-xl mb-1">{member.name}</p>
                  <p className="text-stone-300 font-light text-sm tracking-wider uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-24 px-4 bg-stone-50" id="horaires">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Horaires
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {Object.entries(siteConfig.hours).map(([day, hours]) => {
              const dayInfo = getDayInfo(day);
              const isOpen = !dayInfo?.isClosed;
              const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
              
              return (
                <div
                  key={day}
                  className={`bg-white border transition-all duration-300 ${
                    isOpen 
                      ? 'border-stone-200 hover:border-amber-700 hover:shadow-md' 
                      : 'border-stone-200 opacity-50'
                  }`}
                >
                  <button
                    onClick={() => toggleDay(day)}
                    className="w-full p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <Clock className={`w-5 h-5 ${isOpen ? 'text-amber-700' : 'text-stone-400'}`} />
                      <span className={`font-serif text-xl ${isOpen ? 'text-slate-800' : 'text-stone-400'}`}>
                        {capitalizedDay}
                      </span>
                    </div>
                    
                    {isOpen ? (
                      openDay === day ? (
                        <ChevronUp className="w-5 h-5 text-amber-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-700" />
                      )
                    ) : (
                      <span className="text-stone-400 font-light text-sm tracking-wider uppercase">
                        Fermé
                      </span>
                    )}
                  </button>
                  
                  {openDay === day && isOpen && (
                    <div className="px-6 pb-6 space-y-3 border-t border-stone-100">
                      <div className="flex items-center justify-between text-stone-600 pt-4">
                        <span className="font-light">Déjeuner</span>
                        <span className="font-serif">{hours.midi}</span>
                      </div>
                      <div className="flex items-center justify-between text-stone-600">
                        <span className="font-light">Dîner</span>
                        <span className="font-serif">{hours.soir}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services & Prestations */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Services & Prestations
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-stone-200 hover:border-amber-700 transition-all duration-300 hover:shadow-md"
              >
                <p className="text-stone-700 font-light">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6">
              Nous Trouver
            </h2>
            <div className="w-24 h-px bg-amber-700 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 border border-stone-200">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif text-slate-800 mb-3">Adresse</h3>
                    <p className="text-stone-600 font-light leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                      {siteConfig.address.region}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 border border-stone-200">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif text-slate-800 mb-3">Réservations</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                      className="text-amber-700 hover:text-amber-800 text-lg font-serif transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-8 border border-amber-200">
                <Waves className="w-8 h-8 text-amber-700 mb-4" />
                <p className="text-stone-700 font-light leading-relaxed">
                  Bâtiment remarquable sur pilotis, au bord de la rivière Scorff. 
                  Terrasse panoramique avec vue sur l'eau.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-2 border border-stone-200">
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.5!2d${siteConfig.address.coordinates.lng}!3d${siteConfig.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481059c5151fbe2d%3A0x664cff88c882b6c4!2s6%20Rue%20du%20Vieux%20Pont%2C%2056620%20Pont-Scorff!5e0!3m2!1sfr!2sfr!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Y'a du Goût"
                ></iframe>
              </div>
            </div>
          </div>

          {/* À Proximité */}
          <div className="mt-16 bg-white p-8 border border-stone-200">
            <h3 className="text-2xl font-serif font-light text-slate-800 mb-8 text-center">
              À découvrir aux alentours
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.location.nearbyAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="p-4 border border-stone-200 text-stone-600 font-light text-center"
                >
                  {attraction}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-light text-white mb-4">
              Y'a du Goût
            </h3>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-300 font-light mb-8">
              Bar-Restaurant au bord du Scorff
            </p>
            
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 font-light transition-all duration-500 hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm font-light">
              <p>
                {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
              <p>
                © {new Date().getFullYear()} Y'a du Goût
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;