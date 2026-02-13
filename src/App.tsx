import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Palette, Paintbrush2, Heart, MapPin, Phone, Clock, Gift, Home, Calendar, Award, CheckCircle, Star, GraduationCap, Shield, Menu, X } from 'lucide-react';
import { siteConfig } from './config/siteConfig';
import { getLatestArticles } from './content/articles';
import emailjs from '@emailjs/browser';
import Blog from './pages/blog';
import ArticlePage from './pages/ArticlePage';

// Icons réseaux sociaux custom
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

// DATA PORTFOLIO OPTIMISÉ
const portfolioItems = [
  { id: 1, category: 'Gel', before: '/portfolio/avant-gel-1.jpg', after: '/portfolio/apres-gel-1.jpg', title: 'Réparation ongles abîmés', description: 'Transformation complète avec pose gel renforcée', featured: true },
  { id: 2, category: 'Semi-permanent', before: '/portfolio/avant-semi-1.jpg', after: '/portfolio/apres-semi-1.jpg', title: 'Manucure transformation', description: 'Semi-permanent + soin cuticules intensif', featured: true },
  { id: 3, category: 'Nail Art', image: '/nail-art-sample.jpg', title: 'Nail art Noël', description: 'Sapins et flocons délicats peints main', featured: true },
  { id: 4, category: 'Pédicure', image: '/portfolio/pedicure-rouge.jpg', title: 'Pédicure été', description: 'Rouge corail éclatant + soin complet pieds', featured: true },
  { id: 5, category: 'Nail Art', image: '/portfolio/nailart-french.jpg', title: 'French moderne', description: 'French revisitée avec paillettes dorées', featured: false },
  { id: 6, category: 'Gel', image: '/portfolio/gel-nude.jpg', title: 'Nude élégant', description: 'Gel naturel brillance intense longue durée', featured: false },
  { id: 7, category: 'Semi-permanent', image: '/portfolio/semi-rose.jpg', title: 'Rose poudré dégradé', description: 'Dégradé délicat rose-mauve avec effet ombré', featured: false },
  { id: 8, category: 'Nail Art', image: '/portfolio/nailart-fleurs.jpg', title: 'Floral aquarelle', description: 'Fleurs délicates aquarelle sur base nude', featured: false },
  { id: 9, category: 'Nail Art', image: '/portfolio/nailart-geometrique.jpg', title: 'Géométrique moderne', description: 'Motifs géométriques minimalistes dorés', featured: false },
  { id: 10, category: 'Semi-permanent', image: '/portfolio/semi-nude-glitter.jpg', title: 'Nude pailleté', description: 'Base nude avec paillettes subtiles', featured: false },
  { id: 11, category: 'Gel', image: '/portfolio/gel-french.jpg', title: 'French classique gel', description: 'French traditionnelle en gel longue tenue', featured: false },
];

// DATA DIPLÔMES
const certifications = [
  { id: 1, title: 'CAP Esthétique Cosmétique', institution: 'Académie de Rennes', year: '2020', type: 'Diplôme d\'État', icon: GraduationCap, color: 'from-pink-500 to-rose-400' },
  { id: 2, title: 'Certification Prothésiste Ongulaire', institution: 'École Française de l\'Ongle', year: '2021', type: 'Certification Professionnelle', icon: Star, color: 'from-purple-500 to-pink-400' },
  { id: 3, title: 'Formation Nail Art Avancé', institution: 'Beauty Academy Paris', year: '2022', type: 'Formation Continue', icon: Paintbrush2, color: 'from-rose-500 to-purple-400' },
  { id: 4, title: 'Hygiène & Salubrité', institution: 'ARS Bretagne', year: '2023', type: 'Attestation Obligatoire', icon: Shield, color: 'from-pink-400 to-rose-500' },
  { id: 5, title: 'Perfectionnement Gel & Résine', institution: 'Formation Younails Pro', year: '2023', type: 'Formation Spécialisée', icon: Award, color: 'from-purple-400 to-pink-500' },
  { id: 6, title: 'Techniques de Pédicure Médicale', institution: 'Institut de Podologie Bretagne', year: '2024', type: 'Formation Continue', icon: CheckCircle, color: 'from-rose-400 to-purple-500' },
];

// DATA SERVICES FUSIONNÉS (description + lien Cal.eu + durée)
const servicesRdv = [
  {
    name: 'Gel',
    description: 'Pose de gel pour des ongles naturels et résistants',
    icon: 'sparkles',
    duree: '1h30',
    dureeColor: 'bg-pink-100 text-pink-600',
    gradient: 'from-pink-500 to-rose-400',
    hoverBorder: 'hover:border-pink-400',
    url: 'https://cal.eu/nail-art-roxy/gel',
    populaire: false,
  },
  {
    name: 'Semi-permanent',
    description: 'Vernis longue durée avec brillance éclatante',
    icon: 'palette',
    duree: '1h',
    dureeColor: 'bg-purple-100 text-purple-600',
    gradient: 'from-purple-500 to-pink-400',
    hoverBorder: 'hover:border-purple-400',
    url: 'https://cal.eu/nail-art-roxy/semi-permanent',
    populaire: false,
  },
  {
    name: 'Nail Art',
    description: 'Créations artistiques personnalisées selon vos envies',
    icon: 'paintbrush-2',
    duree: '1h-1h30',
    dureeColor: 'bg-rose-100 text-rose-600',
    gradient: 'from-rose-500 to-purple-400',
    hoverBorder: 'hover:border-rose-400',
    url: 'https://cal.eu/nail-art-roxy/nail-art',
    populaire: true,
  },
  {
    name: 'Pédicure',
    description: 'Soins et beauté pour vos pieds',
    icon: 'heart',
    duree: '45 min-1h',
    dureeColor: 'bg-pink-100 text-pink-600',
    gradient: 'from-pink-400 to-rose-500',
    hoverBorder: 'hover:border-pink-400',
    url: 'https://cal.eu/nail-art-roxy/pedicure',
    populaire: false,
  },
];

function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDevisModal, setShowDevisModal] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    eventType: '',
    date: '',
    nbPersonnes: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const filteredPortfolio = portfolioItems.filter(item => {
    if (activeFilter === 'all') return item.featured === true;
    else return item.category === activeFilter;
  });

  const latestArticles = getLatestArticles(3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    const templateParams = {
      from_name: formData.nom,
      from_email: formData.email,
      to_email: 'nail.art.rox@gmail.com',
      phone: formData.telephone,
      event_type: formData.eventType,
      event_date: formData.date || 'Non spécifiée',
      nb_people: formData.nbPersonnes,
      message: formData.message || 'Aucun message supplémentaire'
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      setFormData({ nom: '', email: '', telephone: '', eventType: '', date: '', nbPersonnes: '', message: '' });
      setTimeout(() => { setShowDevisModal(false); setFormStatus('idle'); }, 3000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">

      {/* HEADER NAVIGATION STICKY */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-pink-900 text-lg hidden sm:block">Nail.art.rox</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              <a href="#about" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">À propos</a>
              <a href="#services" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Prestations</a>
              <a href="#portfolio" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Portfolio</a>
              <a href="#diplomes" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Diplômes</a>
              <a href="#evenements" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Événements</a>
              <Link to="/blog" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Articles</Link>
              <a href="#contact" className="px-4 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-full transition-all duration-300 font-medium">Contact</a>
            </div>
            <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Calendar className="w-4 h-4" />Réserver
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-pink-100 animate-fade-in">
              <div className="flex flex-col space-y-2">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">À propos</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Prestations</a>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Portfolio</a>
                <a href="#diplomes" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Diplômes</a>
                <a href="#evenements" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Événements</a>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Articles</Link>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all font-medium">Contact</a>
                <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  <Calendar className="w-4 h-4" />Réserver en ligne
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* MODAL DEVIS POPUP */}
      {showDevisModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowDevisModal(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <button onClick={() => setShowDevisModal(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-pink-900 mb-3 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Demander un devis</h3>
                <p className="text-gray-600">Je vous recontacte sous 24h</p>
              </div>
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg text-center">
                  <p className="text-green-800 font-semibold">✓ Demande envoyée avec succès !</p>
                  <p className="text-green-700 text-sm">Je vous recontacte très vite</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border-2 border-red-400 rounded-lg text-center">
                  <p className="text-red-800 font-semibold">✗ Erreur d'envoi</p>
                  <p className="text-red-700 text-sm">Veuillez réessayer ou m'appeler</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Votre nom *</label>
                    <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900 placeholder-gray-400" placeholder="Marie Dupont" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900 placeholder-gray-400" placeholder="marie@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                    <input type="tel" name="telephone" value={formData.telephone} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900 placeholder-gray-400" placeholder="06 12 34 56 78" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Type d'événement *</label>
                    <select name="eventType" value={formData.eventType} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900">
                      <option value="">Sélectionnez...</option>
                      <option value="Mariage">Mariage</option>
                      <option value="Anniversaire">Anniversaire</option>
                      <option value="EVJF">EVJF</option>
                      <option value="Autre">Autre événement</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Date souhaitée</label>
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre de personnes *</label>
                    <input type="number" name="nbPersonnes" value={formData.nbPersonnes} onChange={handleInputChange} min="3" required className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none text-gray-900 placeholder-gray-400" placeholder="5" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Détails de votre projet</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:border-pink-500 focus:outline-none resize-none text-gray-900 placeholder-gray-400" placeholder="Décrivez votre événement..."></textarea>
                </div>
                <button type="submit" disabled={formStatus === 'sending'} className="w-full px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande →'}
                </button>
                <p className="text-sm text-gray-500 text-center">Réponse sous 24h • Devis gratuit</p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header id="hero" className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-medium text-pink-900 tracking-wide">NAIL ART • MORÉAC</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Nail.art.rox</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-pink-900 mt-2 font-light tracking-wider">by Dina</span>
            </h1>
            <p className="text-xl sm:text-2xl text-pink-800 font-light italic max-w-2xl mx-auto">{siteConfig.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <span className="relative z-10 flex items-center gap-2"><Calendar className="w-5 h-5" />Réserver en ligne</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="px-8 py-4 bg-white/80 backdrop-blur-sm text-pink-900 rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />{siteConfig.contact.phone}
              </a>
            </div>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg animate-bounce mt-8">
              <Gift className="w-5 h-5 text-amber-900" />
              <span className="text-sm font-semibold text-amber-900">-15% pour les nouvelles clientes</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">À propos</span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-pink-500 to-purple-400 mt-2"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Roxana, artiste ongulaire</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{siteConfig.about.story}</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {siteConfig.about.values.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                    <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-pink-200 via-rose-200 to-purple-200 p-8 shadow-2xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-inner relative group">
                  <img src="/nail-art-sample.jpg" alt="Nail art de Noël par Dina" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent flex items-end p-6">
                    <p className="text-xl sm:text-2xl font-serif text-white italic leading-tight" style={{ fontFamily: "'Bodoni Moda', serif" }}>Chaque ongle est une petite œuvre d'art</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SECTION SERVICES + RDV FUSIONNÉE ======== */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Mes prestations</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Des ongles sublimes</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Choisissez votre prestation et réservez votre créneau en un clic</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesRdv.map((service, idx) => {
              const icons = { sparkles: Sparkles, palette: Palette, 'paintbrush-2': Paintbrush2, heart: Heart };
              const Icon = icons[service.icon as keyof typeof icons];
              return (
                <a key={idx} href={service.url} target="_blank" rel="noopener noreferrer"
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent ${service.hoverBorder} animate-fade-in`}
                  style={{ animationDelay: `${idx * 100}ms` }}>
                  {service.populaire && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-amber-900">⭐ Populaire</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${service.dureeColor}`}>
                      <Clock className="w-3 h-3" />{service.duree}
                    </div>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-pink-900 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>{service.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:text-pink-700 group-hover:gap-3 transition-all">
                        Réserver <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-3"><Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />Voir tous les créneaux disponibles</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 rounded-3xl p-8 shadow-lg border-2 border-pink-200">
              <h3 className="text-2xl font-bold text-pink-900 mb-6 text-center font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>ℹ️ Bon à savoir</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-400 rounded-lg flex items-center justify-center"><span className="text-white font-bold">✓</span></div>
                  <div><p className="text-gray-800 font-medium">Confirmation immédiate</p><p className="text-gray-600 text-sm">Email après réservation</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-lg flex items-center justify-center"><span className="text-white font-bold">✓</span></div>
                  <div><p className="text-gray-800 font-medium">Modification facile</p><p className="text-gray-600 text-sm">Jusqu'à 24h avant</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-500 to-purple-400 rounded-lg flex items-center justify-center"><span className="text-white font-bold">✓</span></div>
                  <div><p className="text-gray-800 font-medium">Paiement sur place</p><p className="text-gray-600 text-sm">Espèces ou carte</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center"><span className="text-white font-bold">🎁</span></div>
                  <div><p className="text-gray-800 font-medium">Offre -15%</p><p className="text-gray-600 text-sm">Nouvelles clientes</p></div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-pink-200 text-center">
                <p className="text-gray-700">Besoin d'aide ? <a href="tel:0660274820" className="text-pink-600 font-bold hover:text-pink-700 hover:underline">06 60 27 48 20</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Mes réalisations</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Découvrez mes créations et transformations avant/après</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button onClick={() => setActiveFilter('all')} className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeFilter === 'all' ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-pink-50 shadow-md'}`}>Sélection</button>
            <button onClick={() => setActiveFilter('Gel')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === 'Gel' ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-pink-50 shadow-md'}`}><Sparkles className="w-4 h-4" />Gel</button>
            <button onClick={() => setActiveFilter('Semi-permanent')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === 'Semi-permanent' ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-purple-50 shadow-md'}`}><Palette className="w-4 h-4" />Semi-permanent</button>
            <button onClick={() => setActiveFilter('Nail Art')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === 'Nail Art' ? 'bg-gradient-to-r from-rose-500 to-purple-400 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-rose-50 shadow-md'}`}><Paintbrush2 className="w-4 h-4" />Nail Art</button>
            <button onClick={() => setActiveFilter('Pédicure')} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === 'Pédicure' ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg scale-105' : 'bg-white text-gray-700 hover:bg-pink-50 shadow-md'}`}><Heart className="w-4 h-4" />Pédicure</button>
          </div>
          <div className="text-center mb-8">
            <p className="text-gray-600"><span className="font-bold text-pink-600">{filteredPortfolio.length}</span> réalisation{filteredPortfolio.length > 1 ? 's' : ''}{activeFilter === 'all' ? ' (sélection)' : ` en ${activeFilter}`}</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPortfolio.map((item, idx) => (
              <div key={item.id} className="break-inside-avoid animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                {item.before && item.after ? (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative">
                        <img src={item.before} alt={`Avant - ${item.title}`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }} />
                        <div className="absolute top-2 left-2 px-3 py-1 bg-gray-900/90 text-white text-xs font-bold rounded-full">AVANT</div>
                      </div>
                      <div className="relative">
                        <img src={item.after} alt={`Après - ${item.title}`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }} />
                        <div className="absolute top-2 right-2 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold rounded-full shadow-lg">APRÈS</div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-pink-900 text-lg flex-1">{item.title}</h3>
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full ml-2">{item.category}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <div className="text-white"><h3 className="font-bold text-xl mb-1">{item.title}</h3><p className="text-sm text-pink-100">{item.description}</p></div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-pink-900 text-lg">{item.title}</h3>
                        <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">{item.category}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">Aucune réalisation dans cette catégorie pour le moment</p>
              <button onClick={() => setActiveFilter('all')} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">Voir la sélection</button>
            </div>
          )}
          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-6 text-lg">Envie d'ongles sublimes comme ceux-ci ? 💅</p>
            <a href="https://cal.eu/nail-art-roxy" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-3"><Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />Réserver ma prestation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION DIPLÔMES */}
      <section id="diplomes" className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Qualifications Professionnelles</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Diplômes & Certifications</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Prothésiste ongulaire diplômée d'État et formée aux dernières techniques professionnelles</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, idx) => {
              const IconComponent = cert.icon;
              return (
                <div key={cert.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300 hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-pink-900 mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cert.institution}</p>
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full">{cert.year}</span>
                    <span className="text-xs text-gray-500 font-medium">{cert.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-amber-900" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-pink-900 mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Expertise & Hygiène Garanties</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">Formée aux normes d'hygiène et de salubrité les plus strictes. Matériel stérilisé après chaque cliente, produits professionnels certifiés CE.</p>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-2 justify-center"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-sm text-gray-700 font-medium">Matériel stérilisé</span></div>
              <div className="flex items-center gap-2 justify-center"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-sm text-gray-700 font-medium">Produits certifiés</span></div>
              <div className="flex items-center gap-2 justify-center"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-sm text-gray-700 font-medium">Normes ARS</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200"><Home className="w-8 h-8 text-pink-900" /></div>
              <h3 className="text-xl font-bold text-pink-900">Prestations en institut</h3>
              <p className="text-gray-600">Accueil dans un espace dédié et professionnel à Moréac</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4 animate-fade-in ring-2 ring-pink-400 transform scale-105" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-400"><Gift className="w-8 h-8 text-white" /></div>
              <h3 className="text-xl font-bold text-pink-900">Offre découverte</h3>
              <p className="text-gray-600">-15% pour les nouvelles clientes</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-gradient-to-br from-pink-200 to-purple-200"><Clock className="w-8 h-8 text-pink-900" /></div>
              <h3 className="text-xl font-bold text-pink-900">Sur rendez-vous</h3>
              <p className="text-gray-600">Réservation en ligne simple et rapide</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ÉVÉNEMENTS */}
      <section id="evenements" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Événements Spéciaux</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Offres de Groupe</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Célébrez vos moments précieux avec une prestation nail art collective sur-mesure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-300 rounded-2xl flex items-center justify-center mb-6 mx-auto"><span className="text-4xl">💍</span></div>
              <h3 className="text-2xl font-bold text-pink-900 text-center mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Mariage</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Mariée + demoiselles d'honneur</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Nail art coordonné sur thème</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Essais couleurs inclus</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Déplacement possible</span></li>
              </ul>
              <div className="text-center pt-4 border-t border-pink-100">
                <p className="text-pink-600 font-semibold mb-3">À partir de 3 personnes</p>
                <button onClick={() => setShowDevisModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">Demander un devis</button>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full shadow-lg"><span className="text-xs font-bold text-amber-900">⭐ POPULAIRE</span></div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-300 rounded-2xl flex items-center justify-center mb-6 mx-auto"><span className="text-4xl">🎂</span></div>
              <h3 className="text-2xl font-bold text-pink-900 text-center mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Anniversaire</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Bar à ongles à domicile</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Ambiance festive garantie</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Nail art personnalisé</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Formules ados acceptées</span></li>
              </ul>
              <div className="text-center pt-4 border-t border-purple-100">
                <p className="text-purple-600 font-semibold mb-3">À partir de 4 personnes</p>
                <button onClick={() => setShowDevisModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">Demander un devis</button>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-300 rounded-2xl flex items-center justify-center mb-6 mx-auto"><span className="text-4xl">🥂</span></div>
              <h3 className="text-2xl font-bold text-pink-900 text-center mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>EVJF</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Session entre copines</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Nail art thématique</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Ambiance conviviale</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Photos souvenir offertes</span></li>
              </ul>
              <div className="text-center pt-4 border-t border-rose-100">
                <p className="text-rose-600 font-semibold mb-3">À partir de 5 personnes</p>
                <button onClick={() => setShowDevisModal(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">Demander un devis</button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-2"><span className="font-semibold">Besoin d'informations ?</span></p>
            <a href="tel:0660274820" className="text-pink-600 font-bold text-lg hover:text-pink-700 hover:underline">06 60 27 48 20</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Contact</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Me contacter</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0"><MapPin className="w-6 h-6 text-white" /></div>
                  <div><h3 className="font-bold text-pink-900 text-lg mb-1">Adresse</h3><p className="text-gray-600">{siteConfig.contact.address}</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6 text-white" /></div>
                  <div><h3 className="font-bold text-pink-900 text-lg mb-1">Téléphone</h3><a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="text-pink-600 hover:text-pink-700 font-medium">{siteConfig.contact.phone}</a></div>
                </div>
                <div className="pt-6 border-t border-pink-100">
                  <h3 className="font-bold text-pink-900 text-lg mb-4">Suivez-moi</h3>
                  <div className="flex gap-4">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"><Instagram className="w-6 h-6 text-white" /></a>
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"><Facebook className="w-6 h-6 text-white" /></a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-400 to-yellow-300 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-2"><Gift className="w-6 h-6 text-amber-900" /><h3 className="font-bold text-amber-900 text-lg">Offre spéciale</h3></div>
                <p className="text-amber-900 font-medium">15% de réduction pour toutes les nouvelles clientes !</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d${siteConfig.contact.location.lng}!3d${siteConfig.contact.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzEzLjgiTiAywrA0OScwOS44Ilc!5e0!3m2!1sfr!2sfr!4v1234567890`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localisation Nail.art.rox by Dina"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ARTICLES BLOG */}
      <section id="articles" className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-pink-600 uppercase">Blog</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-pink-900 mt-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>Conseils & Actualités</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Découvrez mes conseils d'experte pour prendre soin de vos ongles</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, idx) => (
              <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <Link to={`/articles/${article.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/nail-art-sample.jpg'; }} />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">{article.category}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{article.readTime} min</span>
                    </div>
                    <h3 className="text-xl font-bold text-pink-900 mb-3 group-hover:text-pink-600 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all">Lire l'article<span>→</span></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">Voir tous les articles<span>→</span></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-900 via-rose-800 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h3 className="text-2xl font-bold mb-4 font-serif" style={{ fontFamily: "'Bodoni Moda', serif" }}>{siteConfig.name}</h3><p className="text-pink-200 italic">{siteConfig.tagline}</p></div>
            <div><h4 className="font-bold mb-4">Contact</h4><div className="space-y-2 text-pink-200"><p>{siteConfig.contact.address}</p><p>{siteConfig.contact.phone}</p></div></div>
            <div><h4 className="font-bold mb-4">Cadre intimiste</h4><p className="text-pink-200">Espace dédié, calme et personnalisé,<br />pour une expérience beauté sur-mesure</p></div>
          </div>
          <div className="border-t border-pink-700 pt-8 text-center text-pink-200 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
            <p className="mt-2">Prothésiste ongulaire à Moréac, Morbihan (56)</p>
            <p className="mt-4 text-pink-300/80">Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 underline decoration-pink-300/50">Avalon Stratège</a></p>
          </div>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-in-left { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slide-in-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
