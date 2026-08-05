import { useEffect, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

type Statut = 'repos' | 'envoi' | 'succes' | 'erreur';

const CHAMPS_VIDES = {
  nom: '',
  email: '',
  telephone: '',
  typeEvenement: '',
  date: '',
  nbPersonnes: '',
  message: '',
};

const champClasses =
  'w-full border border-line bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-mut/60 ' +
  'focus:border-ink focus:outline-none';

export default function DevisModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(CHAMPS_VIDES);
  const [statut, setStatut] = useState<Statut>('repos');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const maj = (champ: keyof typeof CHAMPS_VIDES, valeur: string) =>
    setForm((f) => ({ ...f, [champ]: valeur }));

  const envoyer = async (e: FormEvent) => {
    e.preventDefault();
    setStatut('envoi');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nom,
          from_email: form.email,
          phone: form.telephone,
          event_type: form.typeEvenement,
          event_date: form.date || 'Non précisée',
          nb_people: form.nbPersonnes,
          message: form.message || 'Aucun message',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatut('succes');
      setForm(CHAMPS_VIDES);
      setTimeout(onClose, 2600);
    } catch (err) {
      console.error('Envoi du devis impossible :', err);
      setStatut('erreur');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titre-devis"
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto bg-paper p-7 sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 p-2 text-ink-mut transition-colors hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="eyebrow">Événement</p>
        <h2 id="titre-devis" className="section-title mb-2 text-[1.7rem]">
          Demander un devis
        </h2>
        <p className="mb-7 text-[14.5px] text-ink-mut">Je vous réponds sous vingt-quatre heures.</p>

        {statut === 'succes' && (
          <p className="mb-6 border-l-2 border-blush-ink bg-blush-pale px-4 py-3 text-[14.5px] text-ink">
            Demande envoyée. Je vous recontacte très vite.
          </p>
        )}
        {statut === 'erreur' && (
          <p className="mb-6 border-l-2 border-blush-ink bg-blush-pale px-4 py-3 text-[14.5px] text-ink">
            L'envoi n'a pas abouti. Réessayez, ou appelez-moi directement au 06 60 27 48 20.
          </p>
        )}

        <form onSubmit={envoyer} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Votre nom</span>
              <input
                required
                value={form.nom}
                onChange={(e) => maj('nom', e.target.value)}
                className={champClasses}
                placeholder="Marie Dupont"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => maj('email', e.target.value)}
                className={champClasses}
                placeholder="marie@exemple.fr"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Téléphone</span>
              <input
                type="tel"
                required
                value={form.telephone}
                onChange={(e) => maj('telephone', e.target.value)}
                className={champClasses}
                placeholder="06 12 34 56 78"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Occasion</span>
              <select
                required
                value={form.typeEvenement}
                onChange={(e) => maj('typeEvenement', e.target.value)}
                className={champClasses}
              >
                <option value="">Choisissez…</option>
                <option>Mariage</option>
                <option>EVJF</option>
                <option>Anniversaire</option>
                <option>Autre</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Date souhaitée</span>
              <input
                type="date"
                value={form.date}
                onChange={(e) => maj('date', e.target.value)}
                className={champClasses}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Nombre de personnes</span>
              <input
                type="number"
                min={3}
                required
                value={form.nbPersonnes}
                onChange={(e) => maj('nbPersonnes', e.target.value)}
                className={champClasses}
                placeholder="5"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-[13px] font-semibold text-ink">Votre projet</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => maj('message', e.target.value)}
              className={`${champClasses} resize-none`}
              placeholder="Thème, couleurs, lieu, horaire…"
            />
          </label>

          <button type="submit" disabled={statut === 'envoi'} className="btn-dark w-full disabled:opacity-50">
            {statut === 'envoi' ? 'Envoi…' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </div>
  );
}
