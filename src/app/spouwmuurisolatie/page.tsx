import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Zap, TrendingDown, Clock, CheckCircle, AlertCircle, Drill } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spouwmuurisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
  description:
    'Spouwmuurisolatie: de meest kosteneffectieve isolatiemethode. Kosten €15-30/m², ISDE subsidie €5,25/m². Terugverdientijd slechts 2-4 jaar.',
  keywords:
    'spouwmuurisolatie, spouwmuur isoleren, spouwmuurisolatie kosten, spouwmuur subsidie, isolatiekenner',
  openGraph: {
    title: 'Spouwmuurisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
    description:
      'Spouwmuurisolatie: de meest kosteneffectieve isolatiemethode. Kosten €15-30/m², ISDE subsidie €5,25/m². Terugverdientijd slechts 2-4 jaar.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function SpouwmuurisolatieEPage() {
  const faqItems = [
    {
      question: 'Hoe weet ik of mijn huis een spouwmuur heeft?',
      answer:
        'Dit hangt af van bouwjaar en regio. Huizen gebouwd tussen 1920-1980 hebben meestal een spouwmuur. Kijk naar de muurdikte van buitenwanden (>20cm) of vraag een aannemer om inspectie.',
    },
    {
      question: 'Hoe snel is spouwmuurisolatie uitgevoerd?',
      answer:
        'Spouwmuurisolatie is meestal klaar in 1-3 dagen. Het injectieproces is snel: boren, spuiten, gaten dichten. Werkelijk handarbeid is minimaal.',
    },
    {
      question: 'Is spouwmuurisolatie geschikt voor alle huizen?',
      answer:
        'Nee, niet altijd. Vochtproblemen, smalle spouwen (<5cm) of vervuilde spouwen kunnen problemen veroorzaken. Een gratis inspectie helpt.',
    },
    {
      question: 'Wat is de levensduur van spouwmuurisolatie?',
      answer:
        'Goed uitgevoerde spouwmuurisolatie houdt 50+ jaar mee. De materialen zoals glaswol- en EPS-parels zijn zeer duurzaam.',
    },
    {
      question: 'Hoe lang duurt het tot ik energiebesparing zie?',
      answer:
        'Direct na installatie. In het eerste verwarmingsseizoen zie je duidelijk lagere gasrekeningen. Besparing varieert van 10-20% afhankelijk van andere isolatie.',
    },
    {
      question: 'Kan ik spouwmuurisolatie zelf uitvoeren?',
      answer:
        'Nee, dit moet door gecertificeerd bedrijf. Dit is verplicht voor ISDE subsidie aanspraak en garandeert kwaliteit en veiligheid.',
    },
  ];

  const materialsTabel = [
    { material: 'Glaswolparels', kosten: '€15-20', rd: 'Rd 1.1-1.3', levensduur: '50+ jaar' },
    { material: 'EPS parels', kosten: '€20-25', rd: 'Rd 1.3-1.5', levensduur: '50+ jaar' },
    { material: 'PUR schuim', kosten: '€25-30', rd: 'Rd 1.5-2.0', levensduur: '50+ jaar' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Spouwmuurisolatie"
        badge="Meest Kosteneffectief"
        highlightedSubtitle="Terugverdiend in 2-4 jaar"
        subtitle="De snelste en goedkoopste manier om je gevel te isoleren"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'Spouwmuurisolatie' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Wat is spouwmuurisolatie?</h2>
          <p className="text-stone-700 mb-4">
            Een spouwmuur is de lege ruimte tussen twee lagen baksteen (meestal 4-8cm). Deze lege ruimte
            kan gevuld worden met isolatiemateriaal door <strong>injectie</strong>. Dit is de snelste en
            goedkoopste isolatiemethode.
          </p>
          <p className="text-stone-700 mb-4">
            Spouwmuurisolatie is vooral geschikt voor <strong>huizen gebouwd tussen 1920-1980</strong>.
            Dit zijn de jaren waarin spouwen veel werden gebruikt in Nederlands bouwwerk. Na 1980 werden
            huizen meestal al direct isolerend gebouwd.
          </p>
          <p className="text-stone-700">
            Het grote voordeel: geen werkzaamheden aan buitenkant of binnenkant. Geen timmerwerk, geen
            steigers, geen ruimteverlies. Daarom is de terugverdientijd slechts 2-4 jaar.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Hoe werkt spouwmuurisolatie?</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'Inspectie', desc: 'Controleer spouwbreedte en vochtproblemen' },
              { step: 2, title: 'Boren', desc: 'Gaten boren in de spouw (om en om)' },
              { step: 3, title: 'Injecteren', desc: 'Isolatiemateriaal in spouw spuiten' },
              { step: 4, title: 'Afwerken', desc: 'Gaten dichten met stopverf' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 border border-stone-200">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kostentabel */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Materialen en kosten</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Materiaal</th>
                <th className="px-6 py-4 text-left font-semibold">Kosten/m²</th>
                <th className="px-6 py-4 text-left font-semibold">Rd-waarde</th>
                <th className="px-6 py-4 text-left font-semibold">Levensduur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {materialsTabel.map((mat, idx) => (
                <tr key={idx} className={`hover:${idx % 2 === 0 ? 'bg-emerald-50' : 'bg-stone-100'} transition`}>
                  <td className="px-6 py-4 font-medium text-stone-900">{mat.material}</td>
                  <td className="px-6 py-4 text-stone-700">{mat.kosten}</td>
                  <td className="px-6 py-4 text-stone-700">{mat.rd}</td>
                  <td className="px-6 py-4 text-stone-700">{mat.levensduur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-stone-600">
          * Rd-waarde per laag. Voor 100m² gevel: €1.500-€3.000 totaal inclusief arbeid.
        </p>
      </section>

      {/* Subsidie */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-emerald-600 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">ISDE Spouwmuurisolatie Subsidie</h3>
                <p className="text-emerald-800">Voordeliger dan je denkt!</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-700 mb-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€5,25/m²</strong> voor spouwmuurisolatie (minimaal 10 m²)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€10,50/m²</strong> bij combinatie met 1+ andere maatregel (binnen 24 maanden)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Minimum Rd-waarde: 1.1</span>
              </li>
            </ul>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-stone-700">
                <strong>Voorbeeld:</strong> 100m² spouwmuur isolatie kost €2.000 (€20/m²). ISDE subsidie:
                €525. Netto kostprijs: €1.475. Besparing per jaar: €400-600 → terugverdientijd slechts 2-3
                jaar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geschiktheid */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Is mijn huis geschikt?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Geschikt voor
            </h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>✓ Huizen gebouwd 1920-1980</li>
              <li>✓ Bakstenen buitenmuren</li>
              <li>✓ Spouwbreedte 4-8cm</li>
              <li>✓ Geen vochtproblemen</li>
              <li>✓ Schone spouw</li>
              <li>✓ Gebruikelijk: halvrijstaande/rij</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Niet geschikt voor
            </h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>✗ Smalle spouwen (&lt;5cm)</li>
              <li>✗ Vochtproblemen/opvallend</li>
              <li>✗ Vervuilde spouw</li>
              <li>✗ Houten buitenwerk</li>
              <li>✗ Vrijstaande huizen (veel zijden)</li>
              <li>✗ Zeer oude huizen (&lt;1920)</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-stone-700">
          <strong>Onzeker?</strong> Vraag gratis inspectie aan gecertificeerd isolatiebedrijf.
        </p>
      </section>

      {/* Voordelen & Nadelen */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen en nadelen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Voordelen
              </h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <strong>Goedkoop:</strong> €15-30/m², meest betaalbare methode
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <strong>Snel:</strong> 1-3 dagen installatie, minimale overlast
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <strong>Geen ruimteverlies:</strong> alles gebeurt binnen de bestaande spouw
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <strong>Effectief:</strong> 10-20% energiebesparing
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>
                    <strong>Duurzaam:</strong> 50+ jaar levensduur
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Nadelen
              </h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>
                    <strong>Niet geschikt alle huizen:</strong> vochtproblemen kunnen risico zijn
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>
                    <strong>Inspectie nodig:</strong> voorafgaand moet spouw gecontroleerd
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>
                    <strong>Lagere Rd-waarde:</strong> dan buitenisolatie of binnenisolatie
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>
                    <strong>Installatie alleen pro:</strong> moet door gecertificeerd bedrijf
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor optimaal resultaat</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <Drill className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Kies gecertificeerd bedrijf</h3>
            <p className="text-stone-700 text-sm">
              Werk alleen met gecertificeerd bedrijf. Dit is verplicht voor subsidie en garandeert kwaliteit.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <Clock className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Laat inspectie uitvoeren</h3>
            <p className="text-stone-700 text-sm">
              Gratis inspectie bepaalt of je huis geschikt is. Vochtproblemen moeten eerst opgelost.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <TrendingDown className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Combineer met ander isolatie</h3>
            <p className="text-stone-700 text-sm">
              Voeg dak, vloer of gevel isolatie toe voor subsidie verdubbeling en meer besparing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je spouwmuurisolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Ontdek hoeveel je bespaart op energiekosten met spouwmuurisolatie
          </p>
          <Link
            href="/#calculator"
            className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-stone-50 transition"
          >
            Open Calculator
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border border-stone-200 hover:border-emerald-300 transition"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-stone-900 hover:text-emerald-600 transition">
                  {item.question}
                  <span className="text-emerald-600">+</span>
                </summary>
                <div className="px-6 pb-6 text-stone-700 border-t border-stone-100">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
