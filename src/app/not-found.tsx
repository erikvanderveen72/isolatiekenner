import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Home className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-6xl md:text-8xl font-bold text-text-main mb-4">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Pagina niet gevonden
        </h2>

        <p className="text-lg text-text-muted mb-10 leading-relaxed">
          Het spijt ons, maar de pagina die je zoekt bestaat niet of is verplaatst.
          Ga terug naar de homepage of bezoek een van onze populaire pagina&apos;s.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all"
          >
            Terug naar homepage
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <p className="text-text-muted font-medium mb-6">Populaire pagina&apos;s:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Dakisolatie', desc: 'Tot 30% minder warmteverlies', href: '/dakisolatie' },
              { title: 'Calculator', desc: 'Bereken je besparing', href: '/#calculator' },
              { title: 'Subsidies', desc: 'ISDE & andere regelingen', href: '/subsidies' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-text-main mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted mb-4">{item.desc}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Meer info <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
