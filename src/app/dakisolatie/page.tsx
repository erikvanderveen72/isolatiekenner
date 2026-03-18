import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { Home, TrendingDown, Zap, Volume2, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dakisolatie Kosten, Besparing & Subsidie 2026 | Isolatiekenner.nl',
  description:
    'Alles over dakisolatie in 2026. Kosten €30-60/m², tot 30% minder warmteverlies, ISDE subsidie €16,25/m². Vergelijk materialen en bereken je besparing.',
  keywords:
    'dakisolatie, dakisolatie kosten, dakisolatie prijs, warmteverlies dak, ISDE subsidie, isolatiekenner',
  openGraph: {
    title: 'Dakisolatie Kosten, Besparing & Subsidie 2026 | Isolatiekenner.nl',
    description:
      'Alles over dakisolatie in 2026. Kosten €30-60/m², tot 30% minder warmteverlies, ISDE subsidie €16,25/m². Vergelijk materialen en bereken je besparing.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function DakisolatieePage() {
  const faqItems = [
    {
      question: 'Hoeveel warmteverlies gaat er via het dak verloren?',
      answer:
        'Het dak is verantwoordelijk voor ongeveer 30% van het totale warmteverlies in een ongeïsoleerd huis. Dit komt omdat warm air openstijgt. Door dakisolatie kan je dit verlies tot 30% reduceren.',
    },
    {
      question: 'Wat is het verschil tussen binnenisolatie en buitenisolatie?',
      answer:
        'Binnenisolatie (tussen kepers) is goedkoper en geschikt voor schuine daken. Buitenisolatie (sarking) is duurder maar beter tegen warmtebruggen. Buitenisolatie past beter bij dakvervanging.',
    },
    {
      question: 'Hoe lang duurt de installatie van dakisolatie?',
      answer:
        'Binnenisolatie duurt meestal 2-5 dagen afhankelijk van dakgrootte. Buitenisolatie neemt langer in beslag (5-10 dagen) omdat het dak deels verwijderd moet worden.',
    },
    {
      question: 'Kan ik dakisolatie combineren met andere isolatiemaatregelen?',
      answer:
        'Ja! Combineren van 2+ isolatiemaatregelen leidt tot verdubbeling van de ISDE subsidie. Bijvoorbeeld: dak + spouw + vloer = veel hogere totale subsidie.',
    },
    {
      question: 'Welke Rd-waarde heb ik nodig voor de subsidie?',
      answer:
        'Voor ISDE dakisolatie geldt een minimum Rd-waarde van 3.5. Dit is haalbaar met de meeste moderne isolatiematerialen zoals glaswol, steenwol of PIR.',
    },
    {
      question: 'Is dakisolatie geschikt voor oude daken?',
      answer:
        'Ja, binnenisolatie kan in bijna alle daktypen. Check wel eerst of het dak waterdicht is. Voor zeer oude of verzwakte dakconstructies kan buitenisolatie beter zijn.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Dakisolatie"
        badge="Prijzen 2026"
        highlightedSubtitle="Tot 30% minder warmteverlies"
        subtitle="Ontdek hoe je het dak isolateert, wat het kost en welke subsidie je krijgt"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Isolatiesoorten', href: '/#isolatie-soorten' },
          { label: 'Dakisolatie' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom dakisolatie?</h2>
          <p className="text-stone-700 mb-4">
            Het dak is verantwoordelijk voor ongeveer <strong>30% van het warmteverlies</strong> in een
            ongeïsoleerd huis. Dit komt doordat warm air openstijgt en ontsnappen via het dak. Door je dak
            goed te isoleren, reduceer je dit verlies aanzienlijk en kun je tot 30% besparen op
            verwarmingskosten.
          </p>
          <p className="text-stone-700 mb-4">
            Er zijn twee hoofdmethoden: <strong>binnenisolatie</strong> (tussen de kepers) en{' '}
            <strong>buitenisolatie</strong> (sarking). Binnenisolatie is goedkoper en geschikt voor
            schuine daken. Buitenisolatie is duurder maar elimineert warmtebruggen en past goed bij
            dakvervanging.
          </p>
        </div>
      </section>

      {/* Kostenentabel */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Kostenoverzicht per methode</h2>
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Methode</th>
                  <th className="px-6 py-4 text-left font-semibold">Kosten per m²</th>
                  <th className="px-6 py-4 text-left font-semibold">Rd-waarde</th>
                  <th className="px-6 py-4 text-left font-semibold">Geschikt voor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="hover:bg-stone-100 transition">
                  <td className="px-6 py-4 font-medium text-stone-900">Binnenzijde (tussen kepers)</td>
                  <td className="px-6 py-4 text-stone-700">€30-45</td>
                  <td className="px-6 py-4 text-stone-700">Rd 3.5-6.0</td>
                  <td className="px-6 py-4 text-stone-700">Schuine daken</td>
                </tr>
                <tr className="bg-emerald-50 hover:bg-emerald-100 transition">
                  <td className="px-6 py-4 font-medium text-stone-900">Buitenzijde (sarking)</td>
                  <td className="px-6 py-4 text-stone-700">€50-80</td>
                  <td className="px-6 py-4 text-stone-700">Rd 4.0-7.0</td>
                  <td className="px-6 py-4 text-stone-700">Bij dakvervanging</td>
                </tr>
                <tr className="hover:bg-stone-100 transition">
                  <td className="px-6 py-4 font-medium text-stone-900">Plat dak</td>
                  <td className="px-6 py-4 text-stone-700">€40-60</td>
                  <td className="px-6 py-4 text-stone-700">Rd 3.5-6.0</td>
                  <td className="px-6 py-4 text-stone-700">Platte daken</td>
                </tr>
                <tr className="bg-emerald-50 hover:bg-emerald-100 transition">
                  <td className="px-6 py-4 font-medium text-stone-900">Zolder/vliering</td>
                  <td className="px-6 py-4 text-stone-700">€15-25</td>
                  <td className="px-6 py-4 text-stone-700">Rd 3.5-5.0</td>
                  <td className="px-6 py-4 text-stone-700">Ongebruikte zolders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Materiaalialen Vergelijking */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Materiaalvergelijking</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full">
            <thead className="bg-stone-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Materiaal</th>
                <th className="px-6 py-4 text-left font-semibold">Rd per cm</th>
                <th className="px-6 py-4 text-left font-semibold">Prijs/m²</th>
                <th className="px-6 py-4 text-left font-semibold">Biobased</th>
                <th className="px-6 py-4 text-left font-semibold">Brandklasse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-stone-50 transition">
                <td className="px-6 py-4 font-medium text-stone-900">PIR/PUR</td>
                <td className="px-6 py-4 text-stone-700">0.20-0.25</td>
                <td className="px-6 py-4 text-stone-700">€35-50</td>
                <td className="px-6 py-4 text-stone-700">Nee</td>
                <td className="px-6 py-4 text-stone-700">B-s2,d0</td>
              </tr>
              <tr className="bg-emerald-50 hover:bg-emerald-100 transition">
                <td className="px-6 py-4 font-medium text-stone-900">Glaswol</td>
                <td className="px-6 py-4 text-stone-700">0.15-0.17</td>
                <td className="px-6 py-4 text-stone-700">€20-30</td>
                <td className="px-6 py-4 text-stone-700">Nee</td>
                <td className="px-6 py-4 text-stone-700">A1</td>
              </tr>
              <tr className="hover:bg-stone-50 transition">
                <td className="px-6 py-4 font-medium text-stone-900">Steenwol</td>
                <td className="px-6 py-4 text-stone-700">0.15-0.18</td>
                <td className="px-6 py-4 text-stone-700">€25-35</td>
                <td className="px-6 py-4 text-stone-700">Nee</td>
                <td className="px-6 py-4 text-stone-700">A1</td>
              </tr>
              <tr className="bg-emerald-50 hover:bg-emerald-100 transition">
                <td className="px-6 py-4 font-medium text-stone-900">Houtvezel</td>
                <td className="px-6 py-4 text-stone-700">0.12-0.15</td>
                <td className="px-6 py-4 text-stone-700">€40-60</td>
                <td className="px-6 py-4 text-stone-700">Ja</td>
                <td className="px-6 py-4 text-stone-700">D-s2,d0</td>
              </tr>
              <tr className="hover:bg-stone-50 transition">
                <td className="px-6 py-4 font-medium text-stone-900">Cellulose</td>
                <td className="px-6 py-4 text-stone-700">0.13-0.15</td>
                <td className="px-6 py-4 text-stone-700">€30-40</td>
                <td className="px-6 py-4 text-stone-700">Ja</td>
                <td className="px-6 py-4 text-stone-700">E-B,s1,d0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Subsidie */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-emerald-600 p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">ISDE Dakisolatie Subsidie</h3>
                <p className="text-emerald-800">Tot €16,25 per m² - Verdubbel door combinatie</p>
              </div>
            </div>
            <ul className="space-y-3 text-stone-700">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€16,25/m²</strong> voor dakisolatie (minimaal 20 m²)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  <strong>€32,50/m²</strong> bij combinatie met 1+ andere maatregel (binnen 24 maanden)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Minimum Rd-waarde: 3.5</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Biobased bonus: +5% aanvullende subsidie</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-stone-600 border-t pt-4">
              Voor een dak van 100 m² krijg je zonder combinatie €1.625. Met combinatie tot €3.250.
            </p>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Voordelen van dakisolatie</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Energiebesparing</h3>
                <p className="text-stone-700">Tot 30% minder warmteverlies via het dak = lager gasverbruik</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Home className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Wooncomfort</h3>
                <p className="text-stone-700">Geen tocht meer onder het dak, warmer interieur, constant klimaat</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <TrendingDown className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Waardestijging woning</h3>
                <p className="text-stone-700">Meer energiezuinig huis stijgt in waarde en trekt meer kopers aan</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-start gap-4">
              <Volume2 className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-900 mb-2">Geluidsdemping</h3>
                <p className="text-stone-700">Minder regen/hagelgeluid van het dak, rustigerder huis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor maximale besparing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Begin bij het dak</h3>
              <p className="text-stone-700 text-sm">
                Het dak veroorzaakt ~30% warmteverlies. Start hier voor maximale besparing met relatief
                lage kosten.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Check je Rd-waarde</h3>
              <p className="text-stone-700 text-sm">
                Zorg voor minimaal Rd 3.5 voor ISDE subsidie. Hogere waarden (Rd 5-6) zijn even maar beter
                voor isolatie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Combineer voor verdubbeling</h3>
              <p className="text-stone-700 text-sm">
                Combineer dakisolatie met spouwmuur, vloer of gevel. Dan verdubbelt je subsidie en bespaar
                je nog meer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je dakisolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Krijg direct inzicht in kosten, besparing en subsidie voor jouw situatie
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
