/**
 * Le nom, avec ses deux points en rose.
 *
 * C'est la signature de la marque : « nail.art.rox » n'a rien de remarquable
 * en noir, mais les points colorés en font une forme reconnaissable. Le logo
 * et le favicon reprennent le même parti.
 */
export default function Wordmark({ clair = false }: { clair?: boolean }) {
  const encre = clair ? 'text-white' : 'text-ink';
  return (
    <span className={`font-display font-bold tracking-tight ${encre}`}>
      Nail<span className="text-blush">.</span>art<span className="text-blush">.</span>rox
    </span>
  );
}
