import React, { useState, useEffect } from 'react';
import AppOriginal from './App_VClub';
import AppBrutalist from './App_VClub_Brutalist';
import AppMiami from './App_VClub_Miami';
import AppGlitch from './App_VClub_Glitch';
import AppLiquid from './App_VClub_Liquid';
import AppRaveCollage from './App_VClub_RaveCollage';
import AppCosmic from './App_VClub_Cosmic';
import AppRetroTV from './App_VClub_RetroTV';
import { Palette, X } from 'lucide-react';

type VersionId = 'original' | 'brutalist' | 'miami' | 'glitch' | 'liquid' | 'rave' | 'cosmic' | 'retrotv';

interface Version {
  id: VersionId;
  name: string;
  color: string;
  bgColor: string;
  description: string;
  component: React.ComponentType;
}

const versions: Version[] = [
  { 
    id: 'original', 
    name: 'Original', 
    color: '#EC4899', 
    bgColor: '#831843',
    description: 'Néon clubbing classique',
    component: AppOriginal 
  },
  { 
    id: 'brutalist', 
    name: 'Brutalist', 
    color: '#FFFF00', 
    bgColor: '#000000',
    description: 'Underground rave radical',
    component: AppBrutalist 
  },
  { 
    id: 'miami', 
    name: 'Miami Vice', 
    color: '#00FFFF', 
    bgColor: '#831843',
    description: 'Rétro synthwave 80s',
    component: AppMiami 
  },
  { 
    id: 'glitch', 
    name: 'Glitch', 
    color: '#00FF41', 
    bgColor: '#000000',
    description: 'Cyberpunk Matrix',
    component: AppGlitch 
  },
  { 
    id: 'liquid', 
    name: 'Liquid Motion', 
    color: '#A855F7', 
    bgColor: '#1E1B4B',
    description: 'Formes organiques fluides',
    component: AppLiquid 
  },
  { 
    id: 'rave', 
    name: 'Rave Collage', 
    color: '#FFFFFF', 
    bgColor: '#000000',
    description: 'Punk anarchique 90s',
    component: AppRaveCollage 
  },
  { 
    id: 'cosmic', 
    name: 'Cosmic Club', 
    color: '#06B6D4', 
    bgColor: '#1E1B4B',
    description: 'Spatial futuriste',
    component: AppCosmic 
  },
  { 
    id: 'retrotv', 
    name: 'Retro TV', 
    color: '#00FF00', 
    bgColor: '#000000',
    description: 'VHS broadcast 80s',
    component: AppRetroTV 
  }
];

export default function App() {
  const [activeVersion, setActiveVersion] = useState<VersionId>(() => {
    // Load from localStorage or default to 'miami'
    const saved = localStorage.getItem('vclub-version');
    return (saved as VersionId) || 'miami';
  });
  const [showSwitcher, setShowSwitcher] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Save to localStorage when version changes
  useEffect(() => {
    localStorage.setItem('vclub-version', activeVersion);
  }, [activeVersion]);

  const handleVersionChange = (versionId: VersionId) => {
    setActiveVersion(versionId);
    setIsMinimized(true); // Minimize after selecting
  };

  const activeVersionData = versions.find(v => v.id === activeVersion)!;
  const ActiveComponent = activeVersionData.component;

  return (
    <div className="relative min-h-screen">
      {/* Version Switcher Bandeau */}
      {showSwitcher && (
        <div 
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-auto'
          }`}
          style={{
            background: `linear-gradient(135deg, ${activeVersionData.bgColor} 0%, #000000 100%)`,
            backdropFilter: 'blur(20px)',
            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px ${activeVersionData.color}40`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Minimized View */}
            {isMinimized ? (
              <div className="h-14 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Palette className="w-5 h-5 text-white/60" />
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: activeVersionData.color }}
                    ></div>
                    <span className="text-white font-bold text-sm tracking-wide">
                      {activeVersionData.name}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMinimized(false)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Changer de version
                </button>
              </div>
            ) : (
              /* Expanded View */
              <div className="py-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Palette className="w-6 h-6 text-white" />
                    <h2 className="text-white font-black text-lg uppercase tracking-wider">
                      Sélecteur de Version
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Version Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                  {versions.map((version) => {
                    const isActive = activeVersion === version.id;
                    return (
                      <button
                        key={version.id}
                        onClick={() => handleVersionChange(version.id)}
                        className={`relative p-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all transform ${
                          isActive
                            ? 'bg-white text-black scale-105 shadow-2xl'
                            : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                        }`}
                        style={{
                          borderTop: isActive ? `4px solid ${version.color}` : 'none',
                          boxShadow: isActive ? `0 8px 32px ${version.color}40, 0 0 20px ${version.color}60` : 'none'
                        }}
                      >
                        {/* Color indicator */}
                        <div 
                          className="w-full h-2 rounded-full mb-3"
                          style={{ backgroundColor: version.color }}
                        ></div>
                        
                        {/* Name */}
                        <div className="mb-2 font-black">{version.name}</div>
                        
                        {/* Description */}
                        <div className={`text-[10px] leading-tight ${isActive ? 'text-black/60' : 'text-white/50'}`}>
                          {version.description}
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute top-2 right-2">
                            <div 
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: version.color }}
                            ></div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Info text */}
                <p className="mt-4 text-center text-white/40 text-xs">
                  Votre choix est automatiquement sauvegardé
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Active Version Content */}
      <div className={showSwitcher ? (isMinimized ? 'pt-14' : 'pt-48 sm:pt-40 lg:pt-32') : ''}>
        <ActiveComponent />
      </div>

      {/* Floating toggle button (if switcher is hidden) */}
      {!showSwitcher && (
        <button
          onClick={() => setShowSwitcher(true)}
          className="fixed top-4 right-4 z-[100] p-3 bg-black/80 backdrop-blur-xl rounded-full text-white hover:scale-110 transition-transform"
          style={{
            boxShadow: `0 4px 20px rgba(0, 0, 0, 0.5), 0 0 20px ${activeVersionData.color}60`
          }}
        >
          <Palette className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}