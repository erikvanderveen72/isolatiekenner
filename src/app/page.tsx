import { Metadata } from 'next';
import Link from 'next/link';
import StatsBar from '@/components/StatsBar';
import IsolatieCalculator from '@/components/IsolatieCalculator';
import FAQSchema from '@/components/FAQSchema';
import {
  Home as HomeIcon,
  Layers,
  Grid3x3,
  PanelTop,
  ArrowDownToLine,
  Building2,
  Award,
  Banknote,
  RefreshCw,
  Shield,
  ArrowRight,
} from 'lucide-react';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Isolatie Kosten, Besparing & Subsidies 2026 | Isolatiekenner.nl',
  description:
    'Ontdek alles over woningisolatie in Nederland. Vergelijk isolatievormen, bereken kosten en besparing, check ISDE subsidies en verbeter je energielabel. 100% gratis en onafhankelijk.',
};

const topics = [
  {
    id: 'dakisolatie',
    title: 'Dakisolatie',
    description: 'Tot 30% minder warmteverlies via het dak. De meest impactvolle isolatiemaatregel.',
    icon: HomeIcon,
    href: '/dakisolatie',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'spouwmuur',
    title: 'Spouwmuurisolatie',
    description: 'Meest kosteneffectief: terugverdiend in 2-4 jaar. Ideaal voor woningen met spouwmuur.',
    icon: Layers,
    href: '/spouwmuurisolatie',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'vloer',
    title: 'Vloerisolatie',
    description: 'Warme voeten, lage kosten. Voorkom warmteverlies via de vloer en kruipruimte.',
    icon: Grid3x3,
    href: '/vloerisolatie',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: 'hr-glas',
    title: 'HR++ Glas',
    description: 'Minder tocht, meer comfort. Vergelijk enkel, dubbel, HR+ en HR++ glas.',
    icon: PanelTop,
    href: '/hr-glas',
    bgColor: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    id: 'kruipruimte',
    title: 'Kruipruimteisolatie',
    description: 'Vocht en kou tegengaan vanuit de basis. Bescherm je woning tegen optrekkend vocht.',
    icon: ArrowDownToLine,
    href: '/kruipruimteisolatie',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 'gevel',
    title: 'Gevelisolatie',
    description: 'Voor woningen zonder spouwmuur. Hoogste subsidie per m² via ISDE.',
    icon: Building2,
    href: '/gevelisolatie',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

const trustIndicators = [
  { icon: Award, title: 'Onafhankelijk', description: 'Geen commissie of provisie' },
  { icon: Banknote, title: 'Gratis', description: '100% kosteloos vergelijken' },
  { icon: RefreshCw, title: 'Actueel', description: 'Gegevens 2026 bijgewerkt' },
  { icon: Shield, title: 'Betrouwbaar', description: 'Bronnen: RVO.nl & Rijksoverheid' },
];

const faqItems = [
  {
    question: 'Wat kost het isoleren van een woning?',
    answer:
      'De kosten variëren per isolatietype. Spouwmuurisolatie kost €15-30/m², dakisolatie €30-60/m², vloerisolatie €20-40/m² en gevelisolatie €80-200/m². Voor een gemiddelde woning komt dit neer op €1.000 tot €15.000 afhankelijk van de maatregelen.',
  },
  {
    question: 'Welke isolatie levert de meeste besparing op?',
    answer:
      'Dakisolatie levert gemiddeld de meeste besparing op: tot 30% minder warmteverlies en circa 400 m³ gas per jaar. Spouwmuurisolatie heeft de beste prijs-kwaliteitverhouding met een terugverdientijd van slechts 2-4 jaar.',
  },
  {
    question: 'Hoeveel ISDE subsidie kan ik krijgen in 2026?',
    answer:
      'De ISDE-subsidie verschilt per type: dakisolatie €16,25/m², gevelisolatie €20,25/m², spouwmuur €5,25/m² en vloer €5,50/m². Bij combinatie van 2+ maatregelen binnen 24 maanden verdubbelen deze bedragen. Het totale budget is €509 miljoen.',
  },
  {
    question: 'Hoe lang duurt het voordat isolatie is terugverdiend?',
    answer:
      'Spouwmuurisolatie is het snelst terugverdiend in 2-4 jaar. Dakisolatie in 3-7 jaar, vloerisolatie in 3-6 jaar. HR++ glas duurt langer: 8-15 jaar. De terugverdientijd hangt af van je woningtype, energieverbruik en gasprijs.',
  },
  {
    question: 'Kan ik zelf isoleren of moet dat een professional doen?',
    answer:
      'Spouwmuurisolatie en gevelisolatie moeten altijd door een gecertificeerd bedrijf. Dit is ook een eis voor ISDE-subsidie. Dakisolatie aan de binnenzijde en vloerisolatie kun je soms zelf doen, maar voor subsidie is een erkend bedrijf vereist.',
  },
  {
    question: 'Verbetert isolatie mijn energielabel?',
    answer:
      'Ja, elke isolatiemaatregel verbetert je energielabel met gemiddeld 1-2 stappen. Dakisolatie heeft het grootste effect. Door meerdere maatregelen te combineren kun je je label significant verbeteren, bijvoorbeeld van label D naar B.',
  },
];

const energielabels = [
  { label: 'A++++', color: 'bg-[#006837]', width: 'w-[25%]' },
  { label: 'A+++', color: 'bg-[#1a9641]', width: 'w-[30%]' },
  { label: 'A++', color: 'bg-[#66bd63]', width: 'w-[35%]' },
  { label: 'A+', color: 'bg-[#a6d96a]', width: 'w-[40%]' },
  { label: 'A', color: 'bg-[#d9ef8b]', width: 'w-[45%]' },
  { label: 'B', color: 'bg-[#fee08b]', width: 'w-[50%]' },
  { label: 'C', color: 'bg-[#fdae61]', width: 'w-[55%]' },
  { label: 'D', color: 'bg-[#f46d43]', width: 'w-[65%]' },
  { label: 'E', color: 'bg-[#d73027]', width: 'w-[75%]' },
  { label: 'F', color: 'bg-[#a50026]', width: 'w-[85%]' },
  { label: 'G', color: 'bg-[#67001f]', width: 'w-full' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-stone-950 py-20 md:py-32">
        {/* Animated Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-600 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 opacity-15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-sky-500 opacity-15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* Plus Pattern */}
        <div className="absolute inset-0 plus-pattern opacity-40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">Gegevens bijgewerkt - maart 2026</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            Bespaar op je{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
              Energierekening
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ontdek welke isolatie het beste past bij jouw woning. Vergelijk kosten, bereken besparing en check subsidies. 100% gratis en onafhankelijk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Bereken je besparing
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#isolatievormen"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Bekijk isolatievormen
            </a>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="-mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <StatsBar />
      </section>

      {/* ===== CALCULATOR SECTION ===== */}
      <section id="calculator" className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              Bereken je Isolatiekosten en Besparing
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Vul je gegevens in en ontdek direct wat isolatie kost, oplevert en welke subsidie je kunt krijgen
            </p>
          </div>
          <IsolatieCalculator />
        </div>
      </section>

      {/* ===== ISOLATIEVORMEN GRID ===== */}
      <section id="isolatievormen" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              Welke Isolatie Past bij Jouw Woning?
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Ontdek alle isolatievormen, vergelijk kosten en besparing per type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.id}
                  href={topic.href}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${topic.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${topic.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2">{topic.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{topic.description}</p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Meer info <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ENERGIELABEL SECTION ===== */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              Verbeter je Energielabel
            </h2>
            <p className="text-text-muted mb-8 text-lg">
              Isolatie is de snelste manier om je energielabel te verbeteren. Eén maatregel kan je label al 1-2 stappen verbeteren.
            </p>

            {/* Energy Label Bars */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-border mb-8">
              <div className="space-y-2">
                {energielabels.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-14 text-sm font-bold text-text-main text-right">{item.label}</span>
                    <div className={`h-8 ${item.width} ${item.color} rounded-r-md flex items-center justify-end pr-3`}>
                      <span className="text-white text-xs font-semibold drop-shadow">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="font-semibold text-blue-900 mb-1">Dakisolatie</p>
                <p className="text-blue-700 text-sm">1-2 labels verbetering</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-emerald-900 mb-1">Spouwmuurisolatie</p>
                <p className="text-emerald-700 text-sm">1 label verbetering</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="font-semibold text-amber-900 mb-1">Vloerisolatie</p>
                <p className="text-amber-700 text-sm">1 label verbetering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST SECTION ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-border hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-text-main">{item.title}</h3>
                  </div>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-8">
            Veelgestelde Vragen
          </h2>
          <FAQSchema items={faqItems} />
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-border hover:border-primary/20 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-text-main">
                  {item.question}
                  <span className="text-primary ml-4 shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-text-muted border-t border-border pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Klaar om te besparen op je energierekening?
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Duizenden Nederlanders besparen al honderden euro&apos;s per jaar met isolatie.
              Bereken nu hoeveel jij kunt besparen.
            </p>
            <a
              href="#calculator"
              className="inline-flex items-center px-8 py-4 bg-white text-stone-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Start de calculator <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
