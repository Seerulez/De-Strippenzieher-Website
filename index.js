
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">De Strippenzieher</h1>
        <nav className="mt-4 flex flex-wrap gap-4 text-lg">
          <a href="#leistungen">Leistungen</a>
          <a href="#ueber-uns">Über uns</a>
          <a href="#referenzen">Referenzen</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#impressum">Impressum</a>
        </nav>
      </header>

      <main className="p-8 space-y-16">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Willkommen bei De Strippenzieher</h2>
          <p className="text-lg">Ihr Partner für Elektroinstallationen und Smart-Home-Lösungen</p>
        </section>

        <section id="leistungen">
          <h3 className="text-2xl font-semibold mb-4">Unsere Leistungen</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Montage",
              "Demontage",
              "Sanierung",
              "Renovierung",
              "Smart-Home Lösungen",
              "Beratung",
              "Baubegleitung"
            ].map((leistung) => (
              <Card key={leistung} className="shadow-md">
                <CardContent className="p-4 text-lg font-medium">{leistung}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="ueber-uns">
          <h3 className="text-2xl font-semibold mb-4">Über uns</h3>
          <p>
            De Strippenzieher steht für moderne Elektroinstallationen und kompetente Beratung im Bereich Smart Home. Wir begleiten Sie von der Planung bis zur Umsetzung – zuverlässig und persönlich.
          </p>
        </section>

        <section id="referenzen">
          <h3 className="text-2xl font-semibold mb-4">Referenzen</h3>
          <p>Bilder und Projektbeschreibungen folgen in Kürze.</p>
        </section>

        <section id="kontakt">
          <h3 className="text-2xl font-semibold mb-4">Kontakt</h3>
          <p>Sebastian Schleifenbaum</p>
          <p>Westerwaldweg 5, 53424 Remagen</p>
          <p>Telefon: 0176 57971759</p>
        </section>

        <section id="impressum">
          <h3 className="text-2xl font-semibold mb-4">Impressum</h3>
          <p>Angaben gemäß § 5 TMG: Sebastian Schleifenbaum, Westerwaldweg 5, 53424 Remagen</p>
        </section>
      </main>

      <footer className="bg-blue-700 text-white text-center p-4 mt-8">
        &copy; {new Date().getFullYear()} De Strippenzieher. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
