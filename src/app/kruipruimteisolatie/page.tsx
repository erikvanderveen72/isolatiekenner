import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Droplets, Wind, TrendingDown, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kruipruimteisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
  description:
    'Kruipruimteisolatie voorkomt vocht en kou. Kosten €20-35/m², subsidie €3-5,50/m². Ontdek methoden en bereken je besparing.',
  keywords:
    'kruipruimteisolatie, kruipruimte isoleren, bodemisolatie, vloerisolatie, vochtproblemen, isolatiekenner',
  openGraph: {
    title: 'Kruipruimteisolatie Kosten & Besparing 2026 | Isolatiekenner.nl',
    description:
      'Kruipruimteisolatie voorkomt vocht en kou. Kosten €20-35/m², subsidie €3-5,50/m². Ontdek methoden en bereken je besparing.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function KruipruimteisolatieEPage() {
  const faqItems = [
    {
      question: 'Wat is het verschil tussen kruipruimte isolatie en vloerisolatie?',
      answer:
        'Kruipruimte isolatie isoleert de ruimte onder je huis (wanden, bodem). Vloerisolatie isoleert de vloer zelf. Ideaal: beide samen voor maximum warmteverlies voorkoming.',
    },
    {
      question: 'Hoe weet ik of ik vochtproblemen in kruipruimte heb?',
      answer:
        'Tekenen: natte grondslag, stankhinder, schimmellucht, roest aan metaal, watervlekken, condensatie. Controleer zelf of vraag inspectie.',
    },
    {
      question: 'Kan ik kruipruimte isolatie zelf doen?',
      answer:
        'Bodemisolatie kan je zelf doen (polyetheen afdekking). Echter: vloerisolatie en PUR spuiten moeten door professionals. Vraag offerte aan.',
    },
    {
      question: 'Moet ik vochtproblemen eerst oplossen?',
      answer:
        'Ja, absoluut. Los vochtproblemen eerst op (drainering, ventilatie). Daarna isolatie. Anders bederft isolatie en kan schimmel erger worden.',
    },
    {
      question: 'Hoe lang houden bodemisolatie materialen mee?',
      answer:
        'Polyetheen folie: 20-30 jaar. Kunststofplaten: 40+ jaar. Regelmatige controle op beschadigingen is belangrijk.',
    },
    {
      question: 'Wat kost kruipruimte isolatie per m²?',
      answer:
        'Bodemisolatie: €15-25/m². Vloerisolatie (onderzijde): €20-30/m². PUR spuiten: €20-30/m². Afhankelijk bereikbaarheid en omstandigheden.',
    },
  ];

  const methodenTabel = [
    {
      methode: 'PUR schuim spuiten',
      kosten: '€20-30/m²',
      rd: 'Rd 3.5+',
      voordelen: 'Beste isolatie, vochtwerend',
    },
    {
      methode: 'Isolatieplaten (onderkant vloer)',
      kosten: '€25-35/m²',
      rd: 'Rd 3.5+',
      voordelen: 'Duurzaam, goed effect',
    },
    {
      methode: 'Bodemisolatie (grond afdekken)',
      kosten: '€15-25/m²',
      rd: 'Rd 2.0-3.5',
      voordelen: 'Goedkoop, vochtvoorkoming',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Kruipruimteisolatie"
        badge="Vocht & Kou Bestrijden"
        highlightedSubtitle="Een droge, warme basis"
        subtitle="Isoleer je kruipruimte en voorkom vochtige problemen en kou"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'Kruipruimteisolatie' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom kruipruimte isolatie?</h2>
          <p className="text-stone-700 mb-4">
            Je kruipruimte is een onzichtbare zone onder je huis. Hier ontstaan <strong>vochtproblemen</strong>{' '}
            en <strong>kou</strong> die binnenshuis voelbaar zijn. Wanden bederven, schimmel groeit, je
            vloer voelt koud en gasrekening stijgt.
          </p>
          <p className="text-stone-700 mb-4">
            Kruipruimte isolatie lost dit op door:
            <br />
            • Grond af te dekken met polyetheen (vochtvoorkoming)
            <br />
            • Vloer onderzijde te isoleren (warmteverlies voorkoming)
            <br />
            • Wanden te isoleren of af te sluiten (airsealing)
          </p>
          <p className="text-stone-700">
            Dit helpt direct: minder vocht, warmere vloer, schoner huis, lagere gasrekening. Investering
            betaalt zich terug in 5-10 jaar.
          </p>
        </div>
      </section>

      {/* Vochtproblemen */}
      <section className="px-6 py-12 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Herken vochtproblemen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Tekenen in kruipruimte
              </h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>✗ Natte grondslag / waterplassen</li>
                <li>✗ Stankhinder / muffe lucht</li>
                <li>✗ Schimmel/algengroei op wanden</li>
                <li>✗ Roest aan stalen elementen</li>
                <li>✗ Verrot houtwerk / balken</li>
                <li>✗ Geen/slechte ventilatie</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Gevolgen in huis
              </h3>
              <ul className="space-y-2 text-stone-700 text-sm">
                <li>✗ Koude voeten / tochtige vloer</li>
                <li>✗ Condensatie op ramen</li>
                <li>✗ Schimmellucht / muffe geur</li>
                <li>✗ Allergieklachten / astma</li>
                <li>✗ Hoog gasverbruik</li>
                <li>✗ Huiswaarde daalt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Isolatiemethoden */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Isolatiemethoden</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
          <table className="w-full">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Methode</th>
                <th className="px-6 py-4 text-left font-semibold">Kosten/m²</th>
                <th className="px-6 py-4 text-left font-semibold">Rd-waarde</th>
                <th className="px-6 py-4 text-left font-semibold">Voordelen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {methodenTabel.map((row, idx) => (
                <tr key={idx} className={`hover:${idx % 2 === 0 ? 'bg-emerald-50' : 'bg-stone-100'} transition`}>
                  <td className="px-6 py-4 font-medium text-stone-900">{row.methode}</td>
                  <td className="px-6 py-4 text-stone-700">{row.kosten}</td>
                  <td className="px-6 py-4 text-stone-700">{row.rd}</td>
                  <td className="px-6 py-4 text-stone-700">{row.voordelen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">1. Bodemisolatie</h3>
            <p className="text-stone-700 text-sm mb-4">
              Polyetheen folie (200-400 micron) over grondslag leggen. Voorkomt vochtopstijging. Meest
              betaalbare methode.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>€15-25/m² inclusief arbeid</li>
              <li>Zelf mogelijk</li>
              <li>Lange levensduur (20-30j)</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">2. Isolatieplaten</h3>
            <p className="text-stone-700 text-sm mb-4">
              PIR/PUR platen onder vloer. Beter isolerend dan folie. Goed tegen vochtophoping.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>€25-35/m² inclusief arbeid</li>
              <li>Professioneel installatie aanbevolen</li>
              <li>40+ jaar levensduur</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">3. PUR Spuiten</h3>
            <p className="text-stone-700 text-sm mb-4">
              PUR schuim spuiten tegen wanden en voet. Beste isolatie en vochtschutz.
            </p>
            <ul className="text-sm text-stone-700 space-y-1">
              <li>€20-30/m² inclusief arbeid</li>
              <li>Professioneel installatie verplicht</li>
              <li>Zeer duurzaam</li>
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
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">ISDE Kruipruimte Subsidie</h3>
                <p className="text-emerald-800">Verschillende subsidies per methode</p>
              </div>
            </div>
            <div className="space-y-3 text-stone-700 mb-6">
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Bodemisolatie:</strong> €3,00/m² (minimaal 10 m²) - Alleen polyetheen afdekking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Vloerisolatie:</strong> €5,50/m² (minimaal 20 m²) - Isolatieplaten onderzijde
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong>Verdubbeling:</strong> Bij combinatie 2+ maatregelen binnen 24 maanden
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <p className="text-sm text-stone-700">
                <strong>Voorbeeld:</strong> 100m² bodemisolatie + vloerisolatie. Kosten €2.500. ISDE subsidie:
                €850 (€300+€550). Netto: €1.650. Besparing: €300-500/jaar → terugverdientijd 3-5 jaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van kruipruimte isolatie</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4 mb-4">
              <Droplets className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Geen vochtproblemen meer</h3>
                <p className="text-stone-700 text-sm">
                  Polyetheen afdekking stopt vochtopstijging. Geen schimmel, geen rot, geen stankhinder.
                  Gezonder huis.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4 mb-4">
              <Wind className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Warme vloer</h3>
                <p className="text-stone-700 text-sm">
                  Vloer voelt warmer aan (3-5°C). Geen tochtige voeten, comfortabeler wonen.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4 mb-4">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Lagere gasrekening</h3>
                <p className="text-stone-700 text-sm">
                  5-10% besparing op gasverbruik door minder warmteverlies via de vloer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Bescherming constructie</h3>
                <p className="text-stone-700 text-sm">
                  Voorkomt rot, schimmel en schade aan isolatie, houtwerk en metaal. Huiswaarde stijgt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advies */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Stap voor stap advies</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2">1. Inspectie en diagnose</h3>
              <p className="text-stone-700 text-sm">
                Controleer kruipruimte zelf of laat inspectie uitvoeren. Identificeer vochtproblemen,
                waterlekken, ventilatie. Dit bepaalt welke methode je nodig hebt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2">2. Los eerst vochtproblemen op</h3>
              <p className="text-stone-700 text-sm">
                Repareer lekkages, verbeter drainage, zorg voor betere ventilatie. Daarna isolatie, niet
                omgekeerd. Isolatie zonder vochtbestrijding helpt niet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2">3. Kies juiste methode</h3>
              <p className="text-stone-700 text-sm">
                Bodemisolatie (polyetheen) voor basis vochtvoorkoming. Vloerisolatie (platen) voor
                warmteverlies + vocht. PUR spuiten voor beste isolatie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2">4. Professioneel aanpak</h3>
              <p className="text-stone-700 text-sm">
                Werk met gecertificeerd bedrijf. Dit is verplicht voor ISDE subsidie. Zij maken foto's,
                controleren kwaliteit, helpen aanvraag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Praktische tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Minder duur beginnen</h3>
            <p className="text-stone-700 text-sm">
              Start met bodemisolatie (goedkoop). Later voeg je vloerisolatie toe. Zo spreidt je kosten.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Combineer met dak</h3>
            <p className="text-stone-700 text-sm">
              Dak + kruipruimte samen levert 30-40% besparing. Subsidie verdubbelt ook. Win-win.
            </p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h3 className="font-bold text-stone-900 mb-3">Controleer regelmatig</h3>
            <p className="text-stone-700 text-sm">
              Na isolatie: jaarlijks kruipruimte checken. Zorg dat ventilatie vrij is, geen nieuw vocht.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je kruipruimte isolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Ontdek kosten, besparing en subsidie voor je situatie
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
