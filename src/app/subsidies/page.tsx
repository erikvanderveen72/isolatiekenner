import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { DollarSign, TrendingUp, CheckCircle, AlertCircle, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Isolatie Subsidies 2026 - ISDE Overzicht | Isolatiekenner.nl',
  description:
    'Compleet overzicht ISDE subsidie isolatie 2026. Budget €509 miljoen. Bedragen per m² per isolatietype. Voorwaarden en aanvraagproces uitgelegd.',
  keywords:
    'ISDE subsidie, isolatie subsidie, energiesubsidie, isolatiekenner, subsidie 2026',
  openGraph: {
    title: 'Isolatie Subsidies 2026 - ISDE Overzicht | Isolatiekenner.nl',
    description:
      'Compleet overzicht ISDE subsidie isolatie 2026. Budget €509 miljoen. Bedragen per m² per isolatietype. Voorwaarden en aanvraagproces uitgelegd.',
    type: 'website',
  },
};

export const revalidate = 3600;

export default function SubsidiesPage() {
  const faqItems = [
    {
      question: 'Wat is ISDE?',
      answer:
        'ISDE (Irrigatie-Subsidie Duurzame Energie) is de overheidssubsidie voor isolatie en duurzame energie. Voor isolatie kan je €3-20/m² krijgen per maatregel. In 2026 is €509 miljoen beschikbaar.',
    },
    {
      question: 'Kan ik ISDE echt dubbelen met twee maatregelen?',
      answer:
        'Ja! Als je twee of meer isolatiemaatregelen uitvoert binnen 24 maanden, verdubbelt de ISDE. Voorbeeld: dak + spouw = €31/m² in plaats van €21/m² samen. Dit is veel voordeel.',
    },
    {
      question: 'Hoe lang duurt ISDE aanvraag?',
      answer:
        'Aanvraag zelf: 30 minuten online. Beoordeling: 4-6 weken. Betaling: nog 2-4 weken daarna. Totaal: 2-3 maanden van aanvraag tot geld op rekening.',
    },
    {
      question: 'Moet werk klaar zijn voor ik ISDE aanvraag?',
      answer:
        'Ja, werk moet compleet afgerond zijn met foto\'s. Pas daarna aanvragen op mijn.rvo.nl. Fotos zijn essentieel: van-voor, tijdens, na-situatie.',
    },
    {
      question: 'Kan ik ISDE aanvragen als ik zelf het werk doe?',
      answer:
        'Nee, werk moet door gecertificeerd bedrijf uitgevoerd. Dit is verplicht voor ISDE. Zelf werken = geen subsidie. Certificering garandeert kwaliteit.',
    },
    {
      question: 'Is ISDE voor koop of huur huizen?',
      answer:
        'Alleen eigenaar-bewoners van woningen. Huurders, zakelijke eigenaars en bedrijven hebben andere regelingen. Check op rvo.nl voor je situatie.',
    },
  ];

  const subsidieTable = [
    {
      type: 'Dakisolatie',
      enkel: '€16,25',
      combi: '€32,50',
      minM2: '20',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥3.5',
    },
    {
      type: 'Spouwmuurisolatie',
      enkel: '€5,25',
      combi: '€10,50',
      minM2: '10',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥1.1',
    },
    {
      type: 'Vloerisolatie',
      enkel: '€5,50',
      combi: '€11,00',
      minM2: '20',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥2.0',
    },
    {
      type: 'Kruipruimteisolatie (vloer)',
      enkel: '€5,50',
      combi: '€11,00',
      minM2: '20',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥2.0',
    },
    {
      type: 'Bodemisolatie',
      enkel: '€3,00',
      combi: '€6,00',
      minM2: '10',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥1.5',
    },
    {
      type: 'Gevelisolatie',
      enkel: '€20,25',
      combi: '€40,50',
      minM2: '10',
      maxM2: 'onbeperkt',
      rdEis: 'Rd ≥2.5',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title="Isolatie Subsidies"
        badge="ISDE 2026"
        highlightedSubtitle="€509 miljoen beschikbaar"
        subtitle="Compleet overzicht van alle ISDE isolatie subsidies en hoe je ze aanvraagt"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Informatie', href: '/#' },
          { label: 'Subsidies' },
        ]}
      />

      {/* Introduction */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">ISDE: Isolatiesubsidie 2026</h2>
          <p className="text-stone-700 mb-4">
            De <strong>ISDE (Irrigatie-Subsidie Duurzame Energie)</strong> is dé overheidsregeling voor
            isolatie in Nederland. In 2026 is <strong>€509 miljoen</strong> beschikbaar voor huiseigenaren
            die hun woning isoleren.
          </p>
          <p className="text-stone-700 mb-4">
            De subsidie varieert van <strong>€3-20 per m²</strong> afhankelijk isolatietype. Hoe beter je
            isoleert, hoe hoger de subsidie. En: <strong>combineer je 2+ maatregelen?</strong> Dan
            verdubbelt je subsidie!
          </p>
          <p className="text-stone-700">
            Voorwaarden zijn minimaal: eigenaar-bewoner, gecertificeerd bedrijf, goede foto's, en aanvraag
            binnen 3 maanden na werk. Meer informatie op{' '}
            <a href="https://www.rvo.nl" className="text-emerald-600 underline">
              rvo.nl
            </a>
            .
          </p>
        </div>
      </section>

      {/* Budget Overview */}
      <section className="px-6 py-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Budget 2026</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center">
              <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-stone-700 mb-2">Totaal beschikbaar</p>
              <p className="text-3xl font-bold text-emerald-700">€509 miljoen</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-stone-700 mb-2">Grootste subsidie per m²</p>
              <p className="text-3xl font-bold text-emerald-700">€20,25</p>
              <p className="text-sm text-stone-600">(Gevelisolatie)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-emerald-200 text-center">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <p className="text-stone-700 mb-2">Verdubbeling mogelijk</p>
              <p className="text-3xl font-bold text-emerald-700">Ja!</p>
              <p className="text-sm text-stone-600">(2+ maatregelen)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volledige Subsidietabel */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Complete Subsidieoverzicht</h2>
        <div className="overflow-x-auto rounded-2xl border border-stone-200">
          <table className="w-full text-sm">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Isolatietype</th>
                <th className="px-4 py-3 text-center font-semibold">Enkel (€/m²)</th>
                <th className="px-4 py-3 text-center font-semibold">Combinatie (€/m²)</th>
                <th className="px-4 py-3 text-center font-semibold">Min m²</th>
                <th className="px-4 py-3 text-left font-semibold">Rd-eis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {subsidieTable.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'hover:bg-emerald-50' : 'hover:bg-stone-50'}
                >
                  <td className="px-4 py-3 font-medium text-stone-900">{row.type}</td>
                  <td className="px-4 py-3 text-center text-stone-700">
                    <span className="font-bold text-emerald-700">{row.enkel}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-stone-700">
                    <span className="font-bold text-emerald-600">{row.combi}</span>
                  </td>
                  <td className="px-4 py-3 text-center text-stone-700">{row.minM2}</td>
                  <td className="px-4 py-3 text-stone-700">{row.rdEis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-stone-600">
          * Combinatie = 2+ maatregelen binnen 24 maanden. Biobased materiaal: +5% extra bonus.
        </p>
      </section>

      {/* Verdubbeling Uitleg */}
      <section className="px-6 py-12 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Subsidie Verdubbeling</h2>
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Hoe werkt verdubbeling?</h3>
            <p className="text-stone-700 mb-4">
              Als je <strong>twee of meer isolatiemaatregelen</strong> uitvoert binnen een periode van{' '}
              <strong>24 maanden</strong>, verdubbelt ISDE je subsidie. Dit geldt voor alle maatregelen
              tezamen.
            </p>
            <p className="text-stone-700 text-sm mb-4">
              Voorbeeld: Dak (16,25/m²) + Spouw (5,25/m²) = €21,50 samengeteld. MET verdubbeling = €43/m²
              op beide!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-stone-900 mb-4 text-blue-700">Voorbeeld 1: Dak + Spouw</h3>
              <div className="space-y-2 text-sm text-stone-700 mb-4">
                <div className="flex justify-between p-2 bg-stone-50 rounded">
                  <span>Dakisolatie 100m²</span>
                  <span className="font-bold">€1.625 (€16,25/m²)</span>
                </div>
                <div className="flex justify-between p-2 bg-stone-50 rounded">
                  <span>Spouwmuur 100m²</span>
                  <span className="font-bold">€525 (€5,25/m²)</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span>Totaal zonder verdubbeling</span>
                  <span className="font-bold">€2.150</span>
                </div>
              </div>
              <div className="border-2 border-blue-200 rounded p-3 bg-blue-50">
                <p className="text-xs text-blue-800 mb-2">
                  <strong>MET VERDUBBELING:</strong>
                </p>
                <div className="flex justify-between text-sm font-bold text-blue-700">
                  <span>Totaal subsidie</span>
                  <span>€4.300</span>
                </div>
                <p className="text-xs text-blue-800 mt-1">= +€2.150 extra voordeel!</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-blue-200">
              <h3 className="font-bold text-stone-900 mb-4 text-blue-700">Voorbeeld 2: Dak + Spouw + Vloer</h3>
              <div className="space-y-2 text-sm text-stone-700 mb-4">
                <div className="flex justify-between p-2 bg-stone-50 rounded">
                  <span>Dakisolatie 100m²</span>
                  <span className="font-bold">€1.625</span>
                </div>
                <div className="flex justify-between p-2 bg-stone-50 rounded">
                  <span>Spouwmuur 100m²</span>
                  <span className="font-bold">€525</span>
                </div>
                <div className="flex justify-between p-2 bg-stone-50 rounded">
                  <span>Vloerisolatie 100m²</span>
                  <span className="font-bold">€550</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span>Totaal zonder verdubbeling</span>
                  <span className="font-bold">€2.700</span>
                </div>
              </div>
              <div className="border-2 border-blue-200 rounded p-3 bg-blue-50">
                <p className="text-xs text-blue-800 mb-2">
                  <strong>MET VERDUBBELING:</strong>
                </p>
                <div className="flex justify-between text-sm font-bold text-blue-700">
                  <span>Totaal subsidie</span>
                  <span>€5.400</span>
                </div>
                <p className="text-xs text-blue-800 mt-1">= +€2.700 extra voordeel!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biobased Bonus */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">Biobased Bonus</h2>
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-600">
          <div className="flex items-start gap-4 mb-6">
            <Zap className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">+5% Extra Bonus</h3>
              <p className="text-green-800">Bij gebruik van biobased isolatiematerialen</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h4 className="font-bold text-stone-900 mb-3">Biobased Materialen:</h4>
            <ul className="grid md:grid-cols-2 gap-4 text-sm text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Cellulose isolatie
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Houtvezel isolatie
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Kurk isolatie
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Dierlijk haar
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Seaweed (zeewier)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Linnen/katoenisolatie
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded p-4 border border-green-200">
            <p className="text-sm text-green-900">
              <strong>Voorbeeld:</strong> 100m² dakisolatie met cellulose (biobased). Subsidie: €16,25 + 5%
              = €17,06/m² = €1.706 in plaats van €1.625. Een extra €81 voor keuze van materiaal!
            </p>
          </div>
        </div>
      </section>

      {/* Voorwaarden */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">ISDE Voorwaarden</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Eigenaar-bewoner
              </h3>
              <p className="text-stone-700 text-sm">
                Je moet eigenaar en inwoonde zijn van de woning. Niet huurders, niet bedrijven, niet
                zakelijke doeleinden.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Gecertificeerd bedrijf
              </h3>
              <p className="text-stone-700 text-sm">
                Werk moet door gecertificeerd isolatiebedrijf uitgevoerd. Deze hebben ISDE-erkenning.
                Zelf werk = geen subsidie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Foto's en documentatie
              </h3>
              <p className="text-stone-700 text-sm">
                Voor/na foto's, offerte, factuur, en werken zijn nodig. Bedrijf helpt hiermee. Dit is
                essentieel voor goedkeuring.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Minimale Rd-waarde
              </h3>
              <p className="text-stone-700 text-sm">
                Ieder type isolatie heeft minimum Rd-vereiste. Zie tabel. Beter isoleren = meer subsidie
                (geen max).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Minimale oppervlak
              </h3>
              <p className="text-stone-700 text-sm">
                Elk type heeft minimum m² vereiste (10-20m²). Zie tabel. Onder minimum = geen subsidie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-emerald-600">
              <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Aanvraag binnen 3 maanden
              </h3>
              <p className="text-stone-700 text-sm">
                Moet binnen 3 maanden na werk afronding worden aangevraagd. Te laat = geen subsidie meer.
                Begin met aanvraag na afronding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aanvraagproces */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-8">ISDE Aanvraagproces</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <h3 className="font-bold text-stone-900">Kies isolatiebedrijf</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Zoek gecertificeerd bedrijf in buurt. Vraag naar ISDE-erkenning. Meeste groot bedrijven
                hebben dit.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <h3 className="font-bold text-stone-900">Laat inspectie doen</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Bedrijf come langs voor inspectie. Dit is meestal gratis. Ze bepalen oppervlak en Rd
                doelen.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <h3 className="font-bold text-stone-900">Ontvang offerte</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Bedrijf maakt offerte met gedetailleerde info. Dit document heb je voor ISDE aanvraag
                nodig.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <h3 className="font-bold text-stone-900">Werk uitvoeren</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Bedrijf voert werk uit. Duurt typisch 2-5 dagen. Zorg dat aannemer foto's maakt
                (voor/tijdens/na).
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <h3 className="font-bold text-stone-900">Verzamel documenten</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Verzamel: foto's, offerte, factuur, betaalbewijs. Bedrijf helpt hiermee meestal.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  6
                </div>
                <h3 className="font-bold text-stone-900">Aanvraag op mijn.rvo.nl</h3>
              </div>
              <p className="text-stone-700 text-sm ml-11">
                Log in op mijn.rvo.nl, vul ISDE formulier in, upload documenten. Aanvraag in 30 min klaar.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-600">
          <h3 className="font-bold text-stone-900 mb-3">Na aanvraag</h3>
          <p className="text-stone-700 text-sm mb-2">
            RVO beoordeelt aanvraag in 4-6 weken. Mogelijk vragen ze aanvullende info. Daarna betaling op
            je rekening in 2-4 weken.
          </p>
          <p className="text-xs text-stone-600 mt-2">
            <strong>Let op:</strong> Zorg dat alles kloppy. RVO voert steekproeven uit. Foute info = afkeuring
            en terugbetaling risico.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-12 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">Tips voor Maximale Subsidie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">1</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Combineer 2+ maatregelen</h3>
              <p className="text-stone-700 text-sm">
                Verdubbeling van subsidie is beste voordeel. Dak + spouw samen geeft veel meer dan apart.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">2</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Kies biobased materiaal</h3>
              <p className="text-stone-700 text-sm">
                +5% extra bonus voor duurzaam materiaal. Kleine meerkosten, maar extra subsidie rechtvaardigt
                het.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">3</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Zorg voor goede foto's</h3>
              <p className="text-stone-700 text-sm">
                Voor/na foto's zijn essentieel. Zorg dat aannemer deze maakt. Blurry/incomplete foto's =
                afkeuring risico.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">4</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Check minimale oppervlak</h3>
              <p className="text-stone-700 text-sm">
                Elk type heeft minimum (10-20m²). Onder minimum = geen subsidie. Plan werk groot genoeg.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">5</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Vraag hulp aannemer</h3>
              <p className="text-stone-700 text-sm">
                Goed bedrijf helpt met aanvraag. Ze kennen procedure, helpen foto's, sturen documenten.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-emerald-700 font-bold">6</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-3">Aanvraag snel indienen</h3>
              <p className="text-stone-700 text-sm">
                Deadline: 3 maanden na werk. Te laat = geen subsidie. Plan aanvraag meteen na afronding.
              </p>
            </div>
          </div>
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

      {/* CTA */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Bereken je totale isolatie besparing</h3>
          <p className="mb-6 text-emerald-50">
            Inclusief ISDE subsidie en verdubbeling door combinatie
          </p>
          <Link
            href="/#calculator"
            className="inline-block bg-white text-emerald-600 font-bold px-8 py-3 rounded-lg hover:bg-stone-50 transition"
          >
            Open Calculator
          </Link>
        </div>
      </section>

      <FAQSchema items={faqItems} />
    </div>
  );
}
