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
          <p className="text-muted-foreground">Ultima actualizare: Martie 2026</p>

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
            <li><strong>Date de analytics (doar după consimțământ):</strong> prin Google Analytics 4 (GA4) — vizualizări de pagini, interacțiuni cu butoanele CTA (telefon, WhatsApp, email, Facebook), trimiteri de formulare, evenimente de scroll. De asemenea, se colectează informații tehnice: tip de dispozitiv, browser, rezoluția ecranului și locația aproximativă. GA4 anonimizează adresele IP în mod implicit.</li>
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
            <li><strong>Consimțământ — Art. 6(1)(a) GDPR</strong> — pentru activarea cookie-urilor de analytics și colectarea datelor prin GA4</li>
            <li><strong>Interes legitim — Art. 6(1)(f) GDPR</strong> — pentru funcționarea tehnică a site-ului și asigurarea securității</li>
            <li><strong>Executarea contractului — Art. 6(1)(b) GDPR</strong> — pentru prelucrarea datelor din formularul de contact și programările la service</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">5. Tehnologii Utilizate și Cookie-uri</h2>
          <p>Site-ul utilizează următoarele tehnologii:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google Tag Manager (GTM)</strong> — platformă centrală de gestionare a tag-urilor. GTM nu colectează date personale în sine, ci coordonează încărcarea altor instrumente (ex. GA4).</li>
            <li><strong>Google Analytics 4 (GA4)</strong> — instrument de analiză a traficului, furnizat de Google LLC. GA4 utilizează cookie-urile <code>_ga</code> și <code>_ga_*</code> cu o durată de până la 2 ani. Mai multe detalii în <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Politica de confidențialitate Google</a>.</li>
            <li><strong>Consent Mode v2 (implementare de bază)</strong> — toate cookie-urile de analytics sunt blocate implicit. Nu se colectează niciun fel de date până când vizitatorul apasă butonul „Acceptă" din bannerul de cookie-uri. Dacă alegeți „Refuză", nu se activează niciun cookie de analytics și nu se transmit date către Google.</li>
            <li><strong>Preferința de consimțământ</strong> — alegerea dumneavoastră (acceptat/refuzat) este stocată local în browser-ul dumneavoastră (localStorage) și nu este transmisă către niciun server extern.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">6. Partajarea Datelor cu Terți</h2>
          <p>Datele dumneavoastră pot fi partajate cu:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google LLC</strong> — prin Google Analytics 4 (GA4) și Google Tag Manager (GTM), pentru analiza traficului (doar după consimțământ)</li>
          </ul>
          <p>Nu vindem, închiriem sau transferăm datele dumneavoastră personale către alte terțe părți.</p>

          <h2 className="font-heading text-xl font-bold mt-8">7. Durata Stocării</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Datele din formularul de contact: 12 luni de la data trimiterii</li>
            <li>Cookie-urile GA4 (<code>_ga</code>, <code>_ga_*</code>): până la 2 ani</li>
            <li>Preferința de consimțământ: până la ștergerea datelor browser-ului (stocată în localStorage)</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">8. Drepturile Dumneavoastră</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Dreptul de acces</strong> — puteți solicita o copie a datelor pe care le deținem despre dumneavoastră</li>
            <li><strong>Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte</li>
            <li><strong>Dreptul la ștergere</strong> — puteți solicita ștergerea datelor personale</li>
            <li><strong>Dreptul la portabilitate</strong> — puteți solicita transferul datelor într-un format structurat</li>
            <li><strong>Dreptul de retragere a consimțământului</strong> — puteți retrage oricând consimțământul acordat, prin ștergerea cookie-urilor din browser sau prin contactarea noastră directă</li>
          </ul>

          <h2 className="font-heading text-xl font-bold mt-8">9. Contact GDPR</h2>
          <p>
            Pentru orice cereri legate de datele dumneavoastră personale, ne puteți contacta la:{" "}
            <a href="mailto:info@goracing.ro" className="text-primary underline">info@goracing.ro</a>
          </p>

          <h2 className="font-heading text-xl font-bold mt-8">10. Autoritatea de Supraveghere</h2>
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
