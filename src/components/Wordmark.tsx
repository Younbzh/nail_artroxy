/**
 * Le nom, avec son point en rose.
 *
 * C'est la signature de la marque : « Roxé Beauté » en noir seul n'a rien de
 * remarquable, mais le point coloré qui le termine en fait une forme
 * reconnaissable. Le favicon reprend l'initiale, le R.
 */
export default function Wordmark({ clair = false }: { clair?: boolean }) {
  const encre = clair ? 'text-white' : 'text-ink';
  return (
    <span className={`font-display font-bold tracking-tight ${encre}`}>
      Roxé <em className="font-normal italic">Beauté</em><span className="text-blush">.</span>
    </span>
  );
}
