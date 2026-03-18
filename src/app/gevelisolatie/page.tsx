import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Building2, TrendingDown, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gevelisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
  description:
    'Gevelisolatie voor woningen zonder spouwmuur. Kosten €80-200/m², ISDE subsidie €20,25/m². Buitengevel vs binnengevel isolatie vergelijken.',
  keywords:
    'gevelisolatie, buitengevelisolatie, binnengevelisolatie, gevel isoleren, spouwmuur, isolatiekenner',
  openGraph: {
    title: 'Gevelisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
    description:
      'Gevelisolatie voor woningen zonder spouwmuur. Kosten €80-200/m², ISDE subsidie €20,25/m². Buitengevel vs binnengevel isolatie vergelijken.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function GevelisolatieEPage() {
  const faqItems = [
    {
      question: 'Wanneer heb ik gevelisolatie nodig?',
      answer:
        'Wanneer je geen spouwmuur hebt (massieve muur van één laag baksteen). Dit is het geval bij veel oude huizen (pre-1920s) of huizen gebouwd 1980+ waar al direct isolerend gebouwd. Check bouwjaar en muurdikte.',
    },
    {
      question: 'Wat is beter: buitengevel of binnengevel isolatie?',
      answer:
        'Buitengevel (ETICS): €120-200/m², Rd 4-6+, geen warmtebruggen, geen ruimteverlies, maar duur en vergunning nodig. Binnengevel: €80-120/m², Rd 2.5-4, goedkoper, geen vergunning, maar ruimteverlies en condensatie risico. Ideaal: buitengevel.',
    },
    {
      question: 'Heb ik vergunning nodig voor gevelisolatie?',
      answer:
        'Ja, voor buitengevelisolatie (ETICS systeem). Dit is inpandige wijziging met externe impact. Binnengevelisolatie vraagt geen vergunning meestal. Check bij je gemeente.',
    },
    {
      question: 'Hoelang duurt gevelisolatie installatie?',
      answer:
        'Buitengevel: 2-4 weken afhankelijk huis oppervlak. Inclusief voorbereiding, installatie, afwerking. Binnengevel: 1-2 weken. Wat overlast, maar binnen termijn gereed.',
    },
    {
      question: 'Kan ik gevelisolatie zelf doen?',
      answer:
        'Nee, gevelisolatie moet door professioneel gecertificeerd bedrijf (ETICS). Dit is verplicht voor kwaliteit, garantie en subsidie. Zelf doen is niet mogelijk.',
    },
    {
      question: 'Hoeveel bespaar ik op energiekosten?',
      answer:
        'Gevelisolatie geeft 20-30% energiebesparing (gevel is ~20% warmteverlies). Samen met dak isolatie (30%) kun je tot 50% totaal bereiken.',
    },
  ];

  const methodenTabel = [
    {
      methode: 'Buitengevelisolatie (ETICS)',
      kosten: '€120-200/m²',
      rd: 'Rd 4.0-6.0+',
      voordelen: 'Geen warmtebruggen, geen ruimteverlies',
      nadelen: 'Duur, vergunning nodig',
    },
    {
      methode: 'Binnengevelisolatie',
      kosten: '€80-120/m²',
      rd: 'Rd 2.5-4.0',
      voordelen: 'Goedkoper, geen vergunning',
      nadelen: 'Ruimteverlies, condensatie risico',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Gevelisolatie"
        badge="Maximale Isolatie"
        highlightedSubtitle="Voor woningen zonder spouw"
        subtitle="Isoleer je gevel volledig en bespaar tot 30% energie"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'Gevelisolatie' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Gevelisolatie voor massieve muren</h2>
          <p className="text-stone-700 mb-4">
            Niet alle huizen hebben een spouwmuur. Veel oude huizen (pre-1920s) en sommige huizen gebouwd
            na 1980 hebben <strong>massieve muren</strong> - één dikke laag baksteen zonder luchtvoids.
          </p>
          <p className="text-stone-700 mb-4">
            Voor massieve muren is <strong>gevelisolatie</strong> de oplossing. Dit kan op twee manieren:
            <br />
            • <strong>Buitengevel (ETICS):</strong> isolatieplaten aan buiten, best resultaat
            <br />
            • <strong>Binnengevel:</strong> isolatieplaten aan binnen, goedkoper maar minder ideaal
          </p>
          <p className="text-stone-700">
            Gevelisolatie heeft <strong>hoogste ISDE subsidie</strong> per m² (€20,25!) omdat het zeer
            effectief is. Investering is groot maar terugverdientijd aanvaardbaar (8-12 jaar).
          </p>
        </div>
      </section>

      {/* Wanneer gevelisolatie */}
      <section className="px-6 py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Heb ik gevelisolatie nodig?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                JA, gevelisolatie nodig
              </h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>✓ Bouwjaar voor 1920 (massieve muur)</li>
                <li>✓ Zeer dikke muren (>25cm)</li>
                <li>✓ Geen spouwmuur controleerbaar</li>
                <li>✓ Koude vochtproblemen gevel</li>
                <li>✓ Hoge warmteverlies gevel</li>
                <li>✓ Na 1980 en niet voorgeisoleerd</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                NEE, misschien spouwmuur
              </h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>✗ Bouwjaar 1920-1970 meestal</li>
                <li>✗ Normaaldikte muren (~20cm)</li>
                <li>✗ Twee lagen bakstenen zichtbaar</li>
                <li>✗ Spouwmuurisolatie goedkoper</li>
                <li>✗ Vochtproblemen pas na opening</li>
                <li>✗ Check eerst bouwjaar dokument</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-stone-700 mt-6">
            <strong>Onzeker?</strong> Laat aannemer muur controleren (klein gat in voegwerk). Kosten
            diagnose: €50-100.
          </p>
        </div>
      </section>

      {/* Methoden Vergelijking */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">
          Buitengevel vs Binnengevel Isolatie
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
          <table className="w-full text-sm">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                <th className="px-6 py-4 text-left font-semibold">Buitengevel (ETICS)</th>
                <th className="px-6 py-4 text-left font-semibold">Binnengevel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Kosten</td>
                <td className="px-6 py-4 text-stone-700">€120-200/m²</td>
                <td className="px-6 py-4 text-stone-700">€80-120/m²</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Rd-waarde</td>
                <td className="px-6 py-4 text-stone-700">Rd 4.0-6.0+</td>
                <td className="px-6 py-4 text-stone-700">Rd 2.5-4.0</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Warmtebruggen</td>
                <td className="px-6 py-4 text-stone-700">Geen / minimaal</td>
                <td className="px-6 py-4 text-stone-700">Veel</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Ruimteverlies</td>
                <td className="px-6 py-4 text-stone-700">Geen</td>
                <td className="px-6 py-4 text-stone-700">5-10cm</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Vergunning</td>
                <td className="px-6 py-4 text-stone-700">Ja nodig</td>
                <td className="px-6 py-4 text-stone-700">Meestal nee</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Condensatie risico</td>
                <td className="px-6 py-4 text-stone-700">Laag</td>
                <td className="px-6 py-4 text-stone-700">Hoog</td>
              </tr>
              <tr className="hover:bg-stone-50">
                <td className="px-6 py-4 font-semibold text-stone-900">Werktijd</td>
                <td className="px-6 py-4 text-stone-700">2-4 weken</td>
                <td className="px-6 py-4 text-stone-700">1-2 weken</td>
              </tr>
              <tr className="bg-emerald-50 hover:bg-emerald-100">
                <td className="px-6 py-4 font-semibold text-stone-900">Aanbeveling</td>
                <td className="px-6 py-4 text-stone-700">
                  <strong>BETER</strong> - minimaal langer dienen
                </td>
                <td className="px-6 py-4 text-stone-700">Budget-optie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Buitengevel Voordelen */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Waarom buitengevel isolatie beter is
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-200">
              <h3 className="font-bold text-stone-900 mb-4 text-emerald-700">Voordelen Buitengevel</h3>
              <ul className="space-y-3 text-stone-700 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Geen warmtebruggen - optimale isolatie</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Geen ruimteverlies binnenin</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Beschermt muurwerk tegen weer</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Geen condensatie risico</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Langere levensduur (30-40 jaar)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200">
              <h3 className="font-bold text-stone-900 mb-4 text-red-700">Nadelen Buitengevel</h3>
              <ul className="space-y-3 text-stone-700 text-sm">
                <li className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Hogere kosten (€120-200/m²)</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Vergunning procedure nodig</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Langere installatietijd</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Geveluiterlijk verandert</span>
                </li>
                <li className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span>Mogelijke burenknaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidie */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-emerald-600 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                  ISDE Gevelisolatie Subsidie
                </h3>
                <p className="text-emerald-800">Hoogste subsidie per m²!</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-700 mb-6">
              <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€20,25/m²</strong> voor gevelisolatie (minimaal 10 m²) - Zeer gul!
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€40,50/m²</strong> bij combinatie met 1+ andere maatregel (binnen 24 maanden)
                </span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Minimum Rd-waarde: 2.5</span>
              </li>
              <li className="flex items-center gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Biobased bonus: +5% aanvullende subsidie</span>
              </li>
            </ul>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-stone-700">
                <strong>Voorbeeld:</strong> 100m² gevelisolatie (buitengevel) kost €15.000 (€150/m²). ISDE
                subsidie: €2.025. Netto: €12.975. Besparing: €1.200-1.500/jaar → terugverdientijd 8-10
                jaar. Met combinatie (dak+gevel): subsidie €4.050 → terugverdientijd 7 jaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ETICS Systeem */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">ETICS Systeem (buitengevel)</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="font-bold text-stone-900 mb-3">Hoe werkt ETICS?</h3>
            <p className="text-stone-700 text-sm mb-4">
              ETICS (External Thermal Insulation Composite System) bestaat uit isolatieplaten (PIR/PUR of
              EPS) aangebracht op de buitenmuur met speciale lijm en ankers. Hierover een netweefsel en
              twee lagen finish pleister/coating.
            </p>
            <div className="space-y-2 text-stone-700 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span>Muur voorbereiding (schoonmaken, vullen gaten)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span>Isolatieplaten plaatsen (3-10cm dik)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span>Netweefsel en primer</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                <span>Base pleister laag</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">5.</span>
                <span>Finish coating (kleur naar keuze)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vergunning */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Vergunning voor buitengevel</h2>
          <div className="bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-700 mb-4">
              Buitengevelisolatie is een <strong>inpandige wijziging</strong> en vraagt meestal
              bouwvergunning. Dit hangt af van je gemeente en bestemmingsplan.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-stone-900 mb-3">Vergunning waarschijnlijk</h3>
                <ul className="text-stone-700 text-sm space-y-1">
                  <li>• Geveluiterlijk verandert</li>
                  <li>• Monumentaal object</li>
                  <li>• Bijzondere omgeving/buurt</li>
                  <li>• Erfgoedzone</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-3">Vergunning mogelijk niet nodig</h3>
                <ul className="text-stone-700 text-sm space-y-1">
                  <li>• Standaard woonwijk</li>
                  <li>• Gelijkmatig uitvoering</li>
                  <li>• Kleine muur oppervlak</li>
                  <li>• Check bij gemeente!</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-stone-600 border-t pt-4">
              <strong>Advies:</strong> Werk met gecertificeerd ETICS bedrijf. Zij helpen vergunning
              aanvraag en tekeningen. Kosten vergunning: €200-500.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor gevelisolatie</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <Building2 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Kies ETICS bedrijf</h3>
            <p className="text-stone-700 text-sm">
              Gebruik gespecialiseerd ETICS bedrijf met ervaring. Certificering/garantie is essentieel.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <Zap className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Combineer met dak</h3>
            <p className="text-stone-700 text-sm">
              Dak (30% warmteverlies) + gevel (20%) samen geeft 50%. Subsidie verdubbelt ook.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <TrendingDown className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-stone-900 mb-3">Plan vooruit</h3>
            <p className="text-stone-700 text-sm">
              Vergunning kost 2-3 maanden. Plan dus vooruit. ETICS installatietijd: 2-4 weken.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je gevelisolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Zie kosten, subsidie en terugverdientijd voor jouw gevel
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
