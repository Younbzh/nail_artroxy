import { MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const telBrut = siteConfig.contact.phone.replace(/\s/g, '');

export default function Contact() {
  return (
    <section id="contact" className="section bg-chalk">
      <div className="section-inner">
        <div className="mb-12 max-w-prose">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Prendre rendez-vous</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blush-ink" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-sans text-[15px] font-bold text-ink">Où me trouver</h3>
                <p className="text-[15px] text-ink-mut">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blush-ink" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-sans text-[15px] font-bold text-ink">Téléphone</h3>
                <a
                  href={`tel:${telBrut}`}
                  className="text-[15px] text-ink-mut underline decoration-blush decoration-2 underline-offset-4 hover:text-ink"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blush-ink" aria-hidden="true" />
              <div>
                <h3 className="mb-1 font-sans text-[15px] font-bold text-ink">Horaires</h3>
                <p className="text-[15px] text-ink-mut">
                  Sur rendez-vous uniquement. Réservation en ligne, par téléphone ou en message privé sur
                  Instagram et Facebook.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-line pt-8">
              <a
                href={siteConfig.reservation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill"
              >
                Réserver en ligne
              </a>
              <a href={`tel:${telBrut}`} className="btn-outline">
                Appeler
              </a>
            </div>

            <p className="text-[13.5px] text-ink-mut">
              <span className="font-semibold text-blush-ink">−15 %</span> sur votre première pose, quelle
              que soit la prestation.
            </p>
          </div>

          <div className="min-h-[380px] overflow-hidden bg-paper">
            <iframe
              title="Localisation de Nail.art.rox by Dina à Moréac"
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
