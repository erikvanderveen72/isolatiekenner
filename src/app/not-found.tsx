import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowRight } from "lucide-react";

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
        <h1 className="text-6xl md:text-8xl font-bold text-text-main mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Pagina niet gevonden
        </h2>

        {/* Description */}
        <p className="text-lg text-text-muted mb-10 leading-relaxed">
          Het spijt ons, maar de pagina die je zoekt bestaat niet of is verplaatst.
          Ga terug naar de homepage of bezoek een van onze populaire pagina's.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <Link href="/">Terug naar homepage</Link>
          </Button>
        </div>

        {/* Popular Pages */}
        <div className="mb-12">
          <p className="text-text-muted font-medium mb-6">Populaire pagina's:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/dakisolatie">
              <Card className="p-6 bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <h3 className="font-semibold text-text-main mb-2">Dakisolatie</h3>
                <p className="text-sm text-text-muted mb-4">
                  Tot 30% minder warmteverlies
                </p>
                <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Meer info
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link href="#calculator">
              <Card className="p-6 bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <h3 className="font-semibold text-text-main mb-2">Calculator</h3>
                <p className="text-sm text-text-muted mb-4">
                  Bereken je besparing
                </p>
                <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Meer info
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            <Link href="/subsidies">
              <Card className="p-6 bg-white border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <h3 className="font-semibold text-text-main mb-2">Subsidies</h3>
                <p className="text-sm text-text-muted mb-4">
                  ISDE & andere regelingen
                </p>
                <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Meer info
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-sm text-text-muted">
          Heb je nog vragen? Neem contact met ons op via het contactformulier.
        </p>
      </div>
    </div>
  );
}
