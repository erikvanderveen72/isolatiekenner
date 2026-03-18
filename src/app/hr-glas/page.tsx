import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Wind, Volume2, TrendingDown, Sun, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HR++ Glas Kosten & Besparing 2026 | Isolatiekenner.nl',
  description:
    'HR++ en triple glas vergelijken: kosten €150-350/m², tot 15% minder warmteverlies. Bekijk voordelen, subsidies en terugverdientijd.',
  keywords:
    'HR glas, HR++ glas, triple glas, glas isolatie, ramen vervangen, glas kosten, isolatiekenner',
  openGraph: {
    title: 'HR++ Glas Kosten & Besparing 2026 | Isolatiekenner.nl',
    description:
      'HR++ en triple glas vergelijken: kosten €150-350/m², tot 15% minder warmteverlies. Bekijk voordelen, subsidies en terugverdientijd.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function HRGlasPage() {
  const faqItems = [
    {
      question: 'Wat is HR++ glas eigenlijk?',
      answer:
        'HR++ glas bestaat uit twee glasplaten met een isolerend gas (argon) ertussen en een speciale coating. Deze coating weerspiegelt warmtestraling maar laat licht door. Zeer efficiënt.',
    },
    {
      question: 'Hoe groot is het verschil tussen HR+ en HR++?',
      answer:
        'HR+ glas heeft U-waarde 1.6, HR++ heeft U-waarde 1.1. Dit is een verschil van ~30% betere isolatie. HR++ is minimaal aanbevolen.',
    },
    {
      question: 'Loont triple glas zich?',
      answer:
        'Triple glas (U-waarde 0.6-0.8) is zeer duur (€250-350/m²). Enkel lonend bij passief huizen of extremaal isoleren. Voor normale huizen: HR++ volstaat.',
    },
    {
      question: 'Hoe lang duurt ramaanpassing?',
      answer:
        'Gemiddeld 3-5 dagen voor heel huis afhankelijk aantal ramen. Met professioneel bedrijf loopt het soepel. Kleine overlast, wel wat lawaai.',
    },
    {
      question: 'Kan ik HR++ glas zelf vervangen?',
      answer:
        'Nee, ramaanpassing vraagt vakmanschap. Slechte installatie leidt tot tocht en vochtproblemen. Laat gecertificeerd bedrijf het doen.',
    },
    {
      question: 'Krijg ik subsidie voor ramen?',
      answer:
        'HR++ glas valt onder ISDE maar alleen als onderdeel van totaal isolatiepakket (dak + spouw + glas). Standaard subsidie voor enkel glas bestaat niet.',
    },
  ];

  const glasTypes = [
    {
      type: 'Enkel glas',
      uValue: '5.8',
      kosten: '-',
      geluidsdemping: 'Slecht',
      geschikt: 'Vervanging nodig',
    },
    { type: 'Dubbel glas', uValue: '2.8', kosten: '€80-120', geluidsdemping: 'Matig', geschikt: 'Basis' },
    {
      type: 'HR+ glas',
      uValue: '1.6',
      kosten: '€100-150',
      geluidsdemping: 'Goed',
      geschikt: 'Standaard',
    },
    {
      type: 'HR++ glas',
      uValue: '1.1',
      kosten: '€150-250',
      geluidsdemping: 'Zeer goed',
      geschikt: 'Aanbevolen',
    },
    {
      type: 'Triple glas',
      uValue: '0.6-0.8',
      kosten: '€250-350',
      geluidsdemping: 'Uitstekend',
      geschikt: 'Passief',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="HR++ Glas"
        badge="Comfort & Isolatie"
        highlightedSubtitle="Minder tocht, meer comfort"
        subtitle="Kies het juiste glas voor je ramen - vergelijk types en bespaar energie"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'HR++ Glas' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Ramen zijn belangrijk</h2>
          <p className="text-stone-700 mb-4">
            Via ramen verlies je <strong>10-15% van je warmte</strong> (meer dan vloer). Moderne HR++ glas
            kan dit verlies tot 50% reduceren ten opzichte van oud enkel glas.
          </p>
          <p className="text-stone-700 mb-4">
            Keuze hangt af van je budget en doelen. <strong>HR+ glas</strong> is goed en betaalbaar. HR++
            is aanbevolen voor maximale besparing. <strong>Triple glas</strong> is alleen voor zeer
            energiezuinige nieuwbouw of passieve huizen.
          </p>
          <p className="text-stone-700">
            Voordeel van nieuwe ramen: niet alleen warmte, ook minder tocht, minder geluidsoverlast en meer
            comfort. Ramen in goede staat zijn fijner wonen.
          </p>
        </div>
      </section>

      {/* Glastypen Vergelijking */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Alle glastypen vergeleken</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Glastype</th>
                  <th className="px-6 py-4 text-left font-semibold">U-waarde</th>
                  <th className="px-6 py-4 text-left font-semibold">Kosten/m²</th>
                  <th className="px-6 py-4 text-left font-semibold">Geluidsdemping</th>
                  <th className="px-6 py-4 text-left font-semibold">Geschikt voor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {glasTypes.map((row, idx) => (
                  <tr key={idx} className={`hover:${idx % 2 === 0 ? 'bg-emerald-50' : 'bg-stone-100'} transition`}>
                    <td className="px-6 py-4 font-medium text-stone-900">{row.type}</td>
                    <td className="px-6 py-4 text-stone-700">{row.uValue}</td>
                    <td className="px-6 py-4 text-stone-700">{row.kosten}</td>
                    <td className="px-6 py-4 text-stone-700">{row.geluidsdemping}</td>
                    <td className="px-6 py-4 text-stone-700">{row.geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-stone-600">
            * U-waarde: lager is beter. Bij U=1.1 verlies je ~80% minder warmte via glas dan enkel glas.
          </p>
        </div>
      </section>

      {/* HR+ vs HR++ */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">HR+ vs HR++ - Wat kies je?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">HR+ Glas (U-1.6)</h3>
            <ul className="space-y-3 text-stone-700 text-sm mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Goede isolatie, betaalbaar (€100-150/m²)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Geschikt voor gemiddelde woningen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>10% energie-besparing mogelijk</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>30% minder isolerend dan HR++</span>
              </li>
            </ul>
            <p className="text-xs text-blue-800 font-semibold">Kies voor: Budget-conscious</p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-600">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">HR++ Glas (U-1.1) ⭐</h3>
            <ul className="space-y-3 text-stone-700 text-sm mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Maximale isolatie, comfort (€150-250/m²)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Aanbevolen voor alle huizen</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>15% energie-besparing, minder tocht</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Beste terugverdientijd</span>
              </li>
            </ul>
            <p className="text-xs text-emerald-800 font-semibold">Kies voor: Comfort & besparing</p>
          </div>
        </div>
      </section>

      {/* Kostencalculator */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Kostenberekening</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Klein huis (8 ramen, 15m²)</h3>
              <div className="space-y-2 mb-6 text-stone-700 text-sm">
                <div className="flex justify-between">
                  <span>HR+ glas (€125/m²)</span>
                  <span className="font-bold">€1.875</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span>HR++ glas (€200/m²)</span>
                  <span className="font-bold">€3.000</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-emerald-700">
                  <span>Verschil HR++</span>
                  <span className="font-bold">+€1.125</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 border-t pt-4">
                Bij HR++: €400/jaar besparing → terugverdientijd 3 jaar
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-4">Groot huis (16 ramen, 30m²)</h3>
              <div className="space-y-2 mb-6 text-stone-700 text-sm">
                <div className="flex justify-between">
                  <span>HR+ glas (€125/m²)</span>
                  <span className="font-bold">€3.750</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span>HR++ glas (€200/m²)</span>
                  <span className="font-bold">€6.000</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-emerald-700">
                  <span>Verschil HR++</span>
                  <span className="font-bold">+€2.250</span>
                </div>
              </div>
              <p className="text-xs text-stone-600 border-t pt-4">
                Bij HR++: €800/jaar besparing → terugverdientijd 3 jaar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van HR++ glas</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Wind className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Geen tocht meer</h3>
                <p className="text-stone-700 text-sm">HR++ glas sluit perfect af. Geen koude luchtstroom meer van ramen.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Volume2 className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Stiller huis</h3>
                <p className="text-stone-700 text-sm">30-50% minder geluidsoverlast van straat, trein of vliegtuig.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Sun className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Warme ramen</h3>
                <p className="text-stone-700 text-sm">Geen koudestraling meer. Ramen voelen warm aan in winter.</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Lagere gasrekening</h3>
                <p className="text-stone-700 text-sm">HR++ glas bespaart 10-15% op gasverbruik (via ramen).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidie */}
      <section className="px-6 py-12 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">ISDE Subsidie voor Ramen</h2>
          <div className="bg-white rounded-2xl border border-stone-200 p-8">
            <p className="text-stone-700 mb-4">
              HR++ glas krijgt <strong>geen directe ISDE subsidie</strong> voor ramen alleen. Dit is één van
              de weinige isolatiemaatregelen zonder subsidie.
            </p>
            <p className="text-stone-700 mb-6">
              <strong>Maar:</strong> Ramen vallen wel onder ISDE als je het combineert met 2+ andere
              maatregelen (dak, spouwmuur, vloer, gevel). Dan telt ramen vervangen mee in het totaalbudget.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-stone-700">
                <strong>Tip:</strong> Focus eerst op dak (30% warmteverlies), daarna spouwmuur, dan pas
                ramen. De volgorde bepaalt ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips bij ramaankoop</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200">
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold">1</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-3">Kies HR++ minimaal</h3>
            <p className="text-stone-700 text-sm">
              HR+ is goedkoper maar HR++ is niet veel duurder en geeft veel meer comfort en besparing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200">
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold">2</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-3">Professionele installatie</h3>
            <p className="text-stone-700 text-sm">
              Slechte installatie leidt tot tocht en vochtproblemen. Gebruik altijd gecertificeerd bedrijf.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200">
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-emerald-700 font-bold">3</span>
            </div>
            <h3 className="font-bold text-stone-900 mb-3">Combineer met isolatie</h3>
            <p className="text-stone-700 text-sm">
              Ramen alleen helpen minder. Combineer met dak + spouwmuur voor 30% totale besparing.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je glasisolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Zie hoeveel je bespaart met HR++ glas - alleen of in combinatie
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
