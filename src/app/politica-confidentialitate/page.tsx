import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | GoRacing",
  description: "Politica de confidențialitate și protecția datelor personale GoRacing. Informații GDPR.",
  alternates: { canonical: "/politica-confidentialitate" },
  openGraph: { type: "article" },
};

export default function PoliticaConfidentialitatePage() {
  return (
    <section className="section-padding">
      <div className="container-content max-w-4xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Politica de Confidențialitate
        </h1>

        <div className="space-y-6 text-foreground leading-relaxed text-sm">
          <p className="text-muted-foreground">Ultima actualizare: Ianuarie 2026</p>

          <h2 className="font-heading text-xl font-bold mt-8">1. Identitatea Operatorului de Date</h2>
          <p>
            GoRacing SRL, CUI: 22223887, cu sediul în Bulevardul Ion Ionescu de la Brad 4, Sector 1, 013813 București, România,
            este operatorul datelor dumneavoastră cu caracter personal colectate prin intermediul site-ului goracing.ro.
          </p>

          <h2 className="font-heading text-xl font-bold mt-8">2. Datele Colectate</h2>
          <p>Colectăm următoarele categorii de date:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Date furnizate prin formularul de contact:</strong> nume, număr de telefon, adresă de email (opțional), mesaj.</li>
            <li><strong>Cookie-uri tehnice:</strong> necesare pentru funcționarea corectă a site-ului.</li>
            <li><strong>Date de analytics:</strong> prin Google Analytics (doar după consimțământul dumneavoastră) — adresă IP anonimizată, pagini vizitate, durata vizitei, tip de dispozitiv.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">3. Scopul Prelucrării</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Răspuns la solicitările trimise prin formularul de contact</li>
            <li>Programări la service</li>
            <li>Îmbunătățirea experienței de navigare pe site</li>
            <li>Analiza traficului și comportamentului utilizatorilor (după consimțământ)</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">4. Temeiul Legal</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Consimțământ</strong> — pentru trimiterea formularului de contact și activarea cookie-urilor de analytics</li>
            <li><strong>Interes legitim</strong> — pentru funcționarea tehnică a site-ului și asigurarea securității</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">5. Partajarea Datelor cu Terți</h2>
          <p>Datele dumneavoastră pot fi partajate cu:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Analytics / Google Tag Manager</strong> — pentru analiza traficului (doar după consimțământ)</li>
            <li><strong>Meta (Facebook) Pixel</strong> — pentru măsurarea eficienței campaniilor (doar după consimțământ)</li>
          </ul>
          <p>Nu vindem, închiriem sau transferăm datele dumneavoastră personale către alte terțe părți.</p>

          <h2 className="font-heading text-xl font-bold mt-8">6. Durata Stocării</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Datele din formularul de contact: 12 luni de la data trimiterii</li>
            <li>Cookie-urile: conform setărilor browser-ului dumneavoastră</li>
            <li>Preferința de consimțământ: 12 luni</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">7. Drepturile Dumneavoastră</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Dreptul de acces</strong> — puteți solicita o copie a datelor pe care le deținem despre dumneavoastră</li>
            <li><strong>Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte</li>
            <li><strong>Dreptul la ștergere</strong> — puteți solicita ștergerea datelor personale</li>
            <li><strong>Dreptul la portabilitate</strong> — puteți solicita transferul datelor într-un format structurat</li>
            <li><strong>Dreptul de retragere a consimțământului</strong> — puteți retrage oricând consimțământul acordat</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">8. Contact GDPR</h2>
          <p>
            Pentru orice cereri legate de datele dumneavoastră personale, ne puteți contacta la:{" "}
            <a href="mailto:info@goracing.ro" className="text-primary underline">info@goracing.ro</a>
          </p>

          <h2 className="font-heading text-xl font-bold mt-8">9. Autoritatea de Supraveghere</h2>
          <p>
            Dacă considerați că drepturile dumneavoastră au fost încălcate, aveți dreptul de a depune o plângere la
            Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP):{" "}
            <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              www.dataprotection.ro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
