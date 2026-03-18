import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Flame, TrendingDown, Home, Droplets, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vloerisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
  description:
    'Vloerisolatie: warm gevoel, lagere energierekening. Kosten €20-40/m², ISDE subsidie €5,50/m². Vergelijk methoden en bereken je besparing.',
  keywords:
    'vloerisolatie, vloerisolatie kosten, vloer isoleren, kruipruimte isolatie, vloerisolatie prijs, isolatiekenner',
  openGraph: {
    title: 'Vloerisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
    description:
      'Vloerisolatie: warm gevoel, lagere energierekening. Kosten €20-40/m², ISDE subsidie €5,50/m². Vergelijk methoden en bereken je besparing.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function VloerisolatieEPage() {
  const faqItems = [
    {
      question: 'Hoeveel warmteverlies gaat er via de vloer verloren?',
      answer:
        'Via de vloer verlies je 10-15% van je warmte, vooral als je een ongeïsoleerde kruipruimte hebt. Dit komt doordat koude van onderaf je huis binnendringt.',
    },
    {
      question: 'Wat is het verschil tussen vloer- en kruipruimteisolatie?',
      answer:
        'Vloerisolatie isoleert het vloeroppervlak zelf. Kruipruimteisolatie isoleert wanden en bodemisolatie van de kruipruimte. Ideaal: beide samen.',
    },
    {
      question: 'Kan ik vloerisolatie zelf installeren?',
      answer:
        'Ja, voor sommige methoden. Isolatieplaten kunnen zelf gelegd worden. Voor injectie- of spuitwerk moet je gecertificeerd bedrijf inhuren.',
    },
    {
      question: 'Hoe warm wordt mijn vloer echt?',
      answer:
        'Geisoleerde vloeren voelen warm aan. Zonder vloerisolatie kunnen voeten koud aanvoelen. Met isolatie stijgt oppervlakte-temperatuur 3-5°C, voelbaar warmer.',
    },
    {
      question: 'Is vloerisolatie geschikt voor alle huizen?',
      answer:
        'Bijna allemaal. Enige voorwaarde: bereikbare kruipruimte of mogelijkheid bovenzijde te werken. Voor flats/appartementen is oppervlak-isolatie beter.',
    },
    {
      question: 'Hoeveel energie bespaar ik echt op vloerisolatie?',
      answer:
        'Vloerisolatie geeft 5-10% energiebesparing. Gecombineerd met dak en spouwmuur kan je tot 30-40% besparen.',
    },
  ];

  const methodenTabel = [
    {
      methode: 'Onderzijde (kruipruimte)',
      kosten: '€20-30',
      rd: 'Rd 3.5+',
      geschikt: 'Bij bereikbare kruipruimte',
    },
    { methode: 'Bovenzijde', kosten: '€30-50', rd: 'Rd 3.5+', geschikt: 'Bij renovatie' },
    { methode: 'Isolatiechape', kosten: '€25-40', rd: 'Rd 2.0-4.0', geschikt: 'Nieuwe vloeren' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Vloerisolatie"
        badge="Warm & Comfortabel"
        highlightedSubtitle="Warme voeten, lagere kosten"
        subtitle="Isoleer je vloer en geniet van comfort en besparing"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'Vloerisolatie', href: '/vloerisolatie' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom vloerisolatie?</h2>
          <p className="text-stone-700 mb-4">
            Via de vloer verlies je <strong>10-15% van je warmte</strong>, vooral als je een
            ongeïsoleerde kruipruimte hebt. De koude van onder dringt je huis binnen, je voeten voelen
            koud en je moet meer verwarmen.
          </p>
          <p className="text-stone-700 mb-4">
            Geisoleerde vloeren voelen direct warmer aan (3-5°C verschil!) en reduceren je gasverbruik
            significant. Daarnaast voorkom je vochtproblemen en schimmelvorming.
          </p>
          <p className="text-stone-700">
            Vloerisolatie kan op twee manieren: <strong>via de onderzijde</strong> (in kruipruimte) of{' '}
            <strong>via de bovenzijde</strong> (alleen bij renovatie). Kies de methode die past bij je
            situatie.
          </p>
        </div>
      </section>

      {/* Warmth & Comfort */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">De comfort voordelen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center">
              <Flame className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-stone-900 mb-2">Warme vloer</h3>
              <p className="text-stone-700 text-sm">
                Vloertemperatuur stijgt 3-5°C. Veel aangenamer voelen, minder koude voeten.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center">
              <Droplets className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-stone-900 mb-2">Minder vocht</h3>
              <p className="text-stone-700 text-sm">
                Voorkomt condensatie, schimmel en vochtproblemen in kruipruimte.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 text-center">
              <TrendingDown className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-stone-900 mb-2">Lagere rekening</h3>
              <p className="text-stone-700 text-sm">
                5-10% energiebesparing. In combinatie met dak tot 30-40% mogelijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Isolatiemethoden</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
          <table className="w-full">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Methode</th>
                <th className="px-6 py-4 text-left font-semibold">Kosten/m²</th>
                <th className="px-6 py-4 text-left font-semibold">Rd-waarde</th>
                <th className="px-6 py-4 text-left font-semibold">Geschikt voor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {methodenTabel.map((row, idx) => (
                <tr key={idx} className={`hover:${idx % 2 === 0 ? 'bg-emerald-50' : 'bg-stone-100'} transition`}>
                  <td className="px-6 py-4 font-medium text-stone-900">{row.methode}</td>
                  <td className="px-6 py-4 text-stone-700">{row.kosten}</td>
                  <td className="px-6 py-4 text-stone-700">{row.rd}</td>
                  <td className="px-6 py-4 text-stone-700">{row.geschikt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Onderzijde (Kruipruimte)</h3>
            <p className="text-stone-700 text-sm mb-4">
              Isolatieplaten onder de vloer in de kruipruimte. Meest gebruikelijk.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>✓ Bereikbare kruipruimte nodig</li>
              <li>✓ Relatief goedkoop</li>
              <li>✓ Geen verstoring bovenzijde</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Bovenzijde</h3>
            <p className="text-stone-700 text-sm mb-4">
              Isoleert vloer van binnenaf. Bij renovatie of nieuwbouw.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>✓ Geen kruipruimte nodig</li>
              <li>✓ Hogere Rd-waarde</li>
              <li>✗ Duurder en ingrijpend</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Isolatiechape</h3>
            <p className="text-stone-700 text-sm mb-4">
              Isolatiechape als nieuwe vloerlaag. Bij grondvloeren.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>✓ Gelijkmatige warmte</li>
              <li>✓ Ook vloerverwarming mogelijk</li>
              <li>✗ Alleen bij vernieuwing</li>
            </ul>
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">ISDE Vloerisolatie Subsidie</h3>
                <p className="text-emerald-800">Aantrekkelijke subsidie voor comfort</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-700 mb-6">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€5,50/m²</strong> voor vloerisolatie (minimaal 20 m²)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€11,00/m²</strong> bij combinatie met 1+ andere maatregel (binnen 24 maanden)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Minimum Rd-waarde: 2.0 (of 1.5 bij kruipruimte)</span>
              </li>
            </ul>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-stone-700">
                <strong>Voorbeeld:</strong> 100m² vloer isolatie kost €3.000 (€30/m²). ISDE subsidie:
                €550. Netto kostprijs: €2.450. Besparing per jaar: €300-600 → terugverdientijd 4-8 jaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vochtproblemen */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Vocht en gezondheid</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-red-600" />
              Tekenen van vochtproblemen
            </h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Stankhinder vanuit kruipruimte</li>
              <li>• Schimmellucht in huis</li>
              <li>• Druipnatte grondslag kruipruimte</li>
              <li>• Roest/schade aan isolatie/houtwerk</li>
              <li>• Allergieklachten/astma klachten</li>
              <li>• Condensatie op ramen</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Hoe vloerisolatie helpt
            </h3>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li>• Warmer vloeroppervlak = minder condensatie</li>
              <li>• Betere luchtcirculatie in kruipruimte</li>
              <li>• Vochtbarrière onder isolatie</li>
              <li>• Thermische buffer tegen grond</li>
              <li>• Gezondere binnenlucht kwaliteit</li>
              <li>• Minder schimmel/bacteriegroei</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor optimale resultaat</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Check kruipruimte eerst</h3>
              <p className="text-stone-700 text-sm">
                Controleer grondslag, vochtophoping en ventilatie. Los vochtige problemen eerst op.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Vochtbarrière essentieel</h3>
              <p className="text-stone-700 text-sm">
                Polyetheen folie onder isolatie voorkomt vochtophoping. Dit is essentieel voor duurzaamheid.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Combineer voor verdubbeling</h3>
              <p className="text-stone-700 text-sm">
                Voeg dakisolatie of spouwmuur toe voor subsidie verdubbeling. Samen meer besparing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je vloerisolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Ontdek hoeveel je bespaart op warmte en krijg comfort terug
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
