#!/bin/bash

echo "📝 Backup du fichier original..."
cp src/App.tsx src/App.tsx.backup

echo "🔄 Modification du tableau certifications..."
# Remplacer le tableau certifications
sed -i '' '/^const certifications = \[$/,/^\];$/c\
const certifications = [\
  { id: 1, title: '"'"'CAP Esthétique Cosmétique'"'"', institution: '"'"'Académie de Rennes'"'"', year: '"'"'2020'"'"', type: '"'"'Diplôme d'"'"'État'"'"', image: '"'"'/diplome1.png'"'"' },\
  { id: 2, title: '"'"'Certification Prothésiste Ongulaire'"'"', institution: '"'"'École Française de l'"'"'Ongle'"'"', year: '"'"'2021'"'"', type: '"'"'Certification Professionnelle'"'"', image: '"'"'/diplome2.png'"'"' },\
  { id: 3, title: '"'"'Formation Nail Art Avancé'"'"', institution: '"'"'Beauty Academy Paris'"'"', year: '"'"'2022'"'"', type: '"'"'Formation Continue'"'"', image: '"'"'/diplome3.png'"'"' },\
  { id: 4, title: '"'"'Hygiène & Salubrité'"'"', institution: '"'"'ARS Bretagne'"'"', year: '"'"'2023'"'"', type: '"'"'Attestation Obligatoire'"'"', image: '"'"'/diplome4.png'"'"' },\
  { id: 5, title: '"'"'Perfectionnement Gel & Résine'"'"', institution: '"'"'Formation Younails Pro'"'"', year: '"'"'2023'"'"', type: '"'"'Formation Spécialisée'"'"', image: '"'"'/diplome5.png'"'"' },\
  { id: 6, title: '"'"'Techniques de Pédicure Médicale'"'"', institution: '"'"'Institut de Podologie Bretagne'"'"', year: '"'"'2024'"'"', type: '"'"'Formation Continue'"'"', image: '"'"'/diplome6.png'"'"' },\
];
' src/App.tsx

echo "🖼️ Modification du rendu des diplômes..."
# Remplacer le rendu JSX des diplômes
sed -i '' '/{certifications.map((cert, idx) => {/,/})}/c\
            {certifications.map((cert, idx) => (\
              <div key={cert.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>\
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">\
                  <img \
                    src={cert.image} \
                    alt={cert.title} \
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"\
                    onError={(e) => { (e.target as HTMLImageElement).src = '"'"'/nail-art-sample.jpg'"'"'; }}\
                  />\
                </div>\
                <div className="p-6">\
                  <h3 className="text-xl font-bold text-pink-900 mb-2 leading-tight">{cert.title}</h3>\
                  <p className="text-gray-600 text-sm mb-3">{cert.institution}</p>\
                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">\
                    <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1.5 rounded-full">{cert.year}</span>\
                    <span className="text-xs text-gray-500 font-medium">{cert.type}</span>\
                  </div>\
                </div>\
              </div>\
            ))}
' src/App.tsx

echo "✅ Modifications terminées !"
echo "💾 Backup sauvegardé : src/App.tsx.backup"
