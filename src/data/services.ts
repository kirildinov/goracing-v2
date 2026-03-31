export interface ServiceData {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  fullDescription: string;
  faqs: { question: string; answer: string }[];
  schemaServiceType: string;
  schemaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "mecanica-intretinere",
    name: "Mecanică și Întreținere",
    shortDescription: "Revizie completă, schimb ulei, filtre, plăcuțe frână și întreținere periodică pentru orice marcă.",
    image: "/service-mecanica.webp",
    metaTitle: "Mecanică Moto București | Revizie | GoRacing",
    metaDescription: "Revizie și întreținere motociclete în București. Schimb ulei, filtre, plăcuțe frână, lanț. Service autorizat RAR. Programări: 0761.320.240",
    h1: "Mecanică și Întreținere Moto în București",
    fullDescription: `La GoRacing, oferim servicii complete de mecanică și întreținere pentru toate mărcile și modelele de motociclete. Cu peste 15 ani de experiență în domeniu și autorizare RAR, suntem alegerea de încredere pentru motocicliștii din București și împrejurimi.

Serviciile noastre de întreținere includ: schimb ulei și filtre (ulei, aer, combustibil), înlocuire plăcuțe de frână și discuri, reglaj și ungere lanț de transmisie, verificare și completare lichide (frână, răcire, ambreiaj), reglaj supape, înlocuire bujii, verificare sistem de iluminare și semnalizare, control general al stării tehnice conform normelor RAR.

Lucrăm cu toate mărcile majore: Honda, Yamaha, Kawasaki, Suzuki, KTM, BMW, Ducati, Triumph, Aprilia, Harley-Davidson și multe altele. Folosim echipamente profesionale de diagnoză și scule specialize pentru fiecare tip de motocicletă.

Timpul de execuție pentru o revizie completă variază între 2 și 4 ore, în funcție de complexitatea lucrărilor necesare. Recomandăm programarea din timp pentru a vă asigura un loc cât mai rapid. Folosim uleiuri și consumabile de la branduri premium precum Ipone, Motul și Castrol.

De ce să alegi GoRacing? Suntem un service autorizat RAR, ceea ce înseamnă că lucrările noastre respectă cele mai înalte standarde de calitate și siguranță. Echipa noastră de mecanici experimentați — Zdrobi, Ștefan și Ovidiu — are experiență vastă cu toate tipurile de motociclete, de la scutere la superbike-uri. Oferim garanție pentru toate lucrările efectuate și folosim exclusiv piese originale sau de calitate echivalentă.`,
    faqs: [
      { question: "Cât costă o revizie completă la motocicletă?", answer: "Prețul unei revizii complete depinde de marca și modelul motocicletei, precum și de consumabilele necesare. Prețurile pornesc de la 200 lei pentru manoperă, la care se adaugă costul pieselor. Contactați-ne pentru o estimare precisă." },
      { question: "Cât de des trebuie făcută revizia la motocicletă?", answer: "Recomandăm efectuarea reviziei la fiecare 5.000-10.000 km sau o dată pe an, în funcție de recomandările producătorului și de condițiile de utilizare. La începutul fiecărui sezon moto este ideal pentru un control complet." },
      { question: "Pot aduce motocicleta fără programare?", answer: "Recomandăm programarea în avans pentru a vă asigura disponibilitate. Cu toate acestea, pentru urgențe, facem tot posibilul să vă ajutăm cât mai rapid. Sunați-ne la 0761.320.240." },
      { question: "Ce mărci de motociclete acceptați la service?", answer: "Suntem un service multimarcă și lucrăm cu toate mărcile de motociclete: japoneze (Honda, Yamaha, Kawasaki, Suzuki), europene (KTM, BMW, Ducati, Triumph, Aprilia) și americane (Harley-Davidson, Indian)." },
    ],
    schemaServiceType: "Mecanică și Întreținere Moto",
    schemaDescription: "Servicii complete de mecanică și întreținere pentru motociclete: revizie, schimb ulei, filtre, plăcuțe frână. Service autorizat RAR în București.",
  },
  {
    slug: "reparatii-accidente",
    name: "Reparații Accidente",
    shortDescription: "Reparăm și recondiționăm motocicletele avariate. Lucrăm cu toate companiile de asigurări.",
    image: "/service-accidente.webp",
    metaTitle: "Reparații Motocicletă după Accident București | GoRacing",
    metaDescription: "Reparăm motociclete avariate în București. Recondiționare cadru, carenaj, motor. Lucrăm cu asigurări. Programări: 0761.320.240",
    h1: "Reparații Motociclete după Accident în București",
    fullDescription: `Un accident pe motocicletă este o experiență neplăcută, dar la GoRacing ne asigurăm că motocicleta ta va fi readusă la starea inițială cu profesionalism și atenție la detalii. Suntem specializați în reparații post-accident pentru toate tipurile de motociclete.

Serviciile noastre de reparații accidente includ: evaluarea completă a daunelor, îndreptare și reparație cadru, înlocuire și recondiționare carenaje, reparații mecanice complexe (motor, transmisie, suspensii), realiniere roți și cadru, vopsire și finisaje profesionale, verificare completă post-reparație.

Colaborăm cu toate companiile de asigurări din România și vă asistăm în procesul de constatare și decontare. Întocmim devize de reparație detaliate și fotografiem fiecare etapă a lucrărilor pentru transparență totală.

Folosim echipamente profesionale de diagnoză pentru a identifica toate problemele, inclusiv cele care nu sunt vizibile la prima vedere — deformări subtile ale cadrului, probleme la sistemul electronic, defecțiuni ale suspensiilor. Timpul de execuție variază de la câteva zile pentru daune minore la câteva săptămâni pentru recondiționări complete.

La GoRacing, înțelegem urgența situației și ne străduim să vă readucem motocicleta pe drum cât mai repede posibil, fără a face compromisuri în privința calității.`,
    faqs: [
      { question: "Lucrați cu companiile de asigurări?", answer: "Da, colaborăm cu toate companiile de asigurări din România. Vă asistăm în procesul de constatare și decontare, și întocmim toate documentele necesare pentru dosarul de daună." },
      { question: "Cât durează reparația unei motociclete avariate?", answer: "Durata depinde de gravitatea daunelor. Reparațiile minore durează 3-5 zile, iar recondiționările complete pot dura 2-4 săptămâni. Vă oferim o estimare exactă după evaluarea inițială." },
      { question: "Folosiți piese originale pentru reparații?", answer: "Da, preferăm întotdeauna piese originale (OEM). Când acestea nu sunt disponibile sau clientul preferă o alternativă, folosim piese aftermarket de calitate superioară, cu garanție." },
    ],
    schemaServiceType: "Reparații Motociclete după Accident",
    schemaDescription: "Reparăm și recondiționăm motociclete avariate. Lucrăm cu toate companiile de asigurări. Service autorizat RAR în București.",
  },
  {
    slug: "reparatii-motoare",
    name: "Reparații Motoare",
    shortDescription: "Rectificări, recondiționări complete de motor, înlocuire componente interne.",
    image: "/service-motoare.webp",
    metaTitle: "Reparații Motor Moto București | GoRacing",
    metaDescription: "Reparații și recondiționare motoare motociclete în București. Rectificare cilindri, înlocuire pistoane, arbore cotit. Programări: 0761.320.240",
    h1: "Reparații Motoare Motocicletă în București",
    fullDescription: `Motorul este inima motocicletei tale, iar la GoRacing îi acordăm toată atenția pe care o merită. Cu experiență de peste 15 ani în reparații și recondiționări de motoare, suntem echipați să rezolvăm orice problemă — de la reparații minore la recondiționări complete.

Serviciile noastre de reparații motoare includ: diagnosticarea problemelor mecanice, rectificare cilindri, înlocuire pistoane și segmenți, recondiționare sau înlocuire arbore cotit, reparații chiulasă (supape, ghiduri supape, arcuri), înlocuire garnituri complete, reglaj distribuție, recondiționare ambreiaj și cutie de viteze.

Lucrăm cu motoare de toate tipurile: monocilindru, bicilindru (paralel, V-twin, L-twin), tricilindru și tetracilindru în linie. Indiferent dacă aveți un motor în 2 timpi de enduro sau un motor în 4 timpi de sportbike, avem experiența și echipamentele necesare.

Folosim instrumente de precizie pentru măsurători (micrometre, comparatoare, calibre), precum și echipamente specializate de rectificare. Toate piesele sunt inspectate și măsurate conform specificațiilor producătorului.

Timpul de execuție pentru o recondiționare completă de motor variază între 1 și 3 săptămâni, în funcție de complexitate și disponibilitatea pieselor. Oferim garanție de 6 luni pentru toate lucrările de recondiționare motor.`,
    faqs: [
      { question: "Cum știu că motorul motocicletei mele are probleme?", answer: "Semne comune: pierdere de putere, consum excesiv de ulei, fum la eșapament (alb sau albastru), zgomote anormale (bătăi, ciocănituri), supraîncălzire. Vă recomandăm un diagnostic profesional la primele semne." },
      { question: "Merită recondiționarea motorului sau e mai bine să cumpăr unul nou?", answer: "Depinde de starea motorului și de modelul motocicletei. În multe cazuri, recondiționarea este mai avantajoasă economic. Vă oferim o evaluare sinceră și un deviz detaliat pentru a lua cea mai bună decizie." },
      { question: "Ce garanție oferiți pentru recondiționarea motorului?", answer: "Oferim garanție de 6 luni sau 5.000 km (ce survine primul) pentru toate lucrările de recondiționare motor, cu condiția respectării programului de întreținere recomandat." },
    ],
    schemaServiceType: "Reparații Motoare Motocicletă",
    schemaDescription: "Rectificări și recondiționări complete de motor pentru motociclete. Piese originale, garanție. Service autorizat RAR în București.",
  },
  {
    slug: "diagnoza-remapare-ecu",
    name: "Diagnoză și Remapare ECU",
    shortDescription: "Diagnoză computerizată și optimizare software ECU pentru performanță maximă.",
    image: "/service-ecu.webp",
    metaTitle: "Remapare ECU Moto București | GoRacing",
    metaDescription: "Remapare și diagnoză ECU pentru motociclete în București. Optimizare performanță, deblocare software, testare dyno. Programări: 0761.320.240",
    h1: "Remapare și Diagnoză ECU Motocicletă în București",
    fullDescription: `Deblocarea software-ului preprogramat din interiorul ECU-ului, accesarea diverselor hărți și modificarea valorilor numerice pentru a schimba instrucțiunile trimise de ECU reprezintă esența remapării. La GoRacing, oferim servicii profesionale de diagnoză computerizată și remapare ECU pentru toate mărcile de motociclete.

Serviciile noastre de ECU includ mai multe tipuri de intervenții: diagnoză computerizată completă cu citire și ștergere coduri de eroare, remapare pentru performanță maximă (creștere putere și cuplu), remapare economie (optimizare consum combustibil), dezactivare limitatoare de viteză, dezactivare sistem de evacuare (valve servo), eliminare catalizator din hărțile ECU (pentru uz off-road/circuit), rezolvare probleme intermitente cauzate de senzori sau software.

Remaparea ECU oferă câștiguri semnificative: în medie, între 5% și 15% creștere a puterii și cuplului, în funcție de motocicletă. Pentru motoarele turbo sau supraalimentate, câștigurile pot fi și mai mari. Optimizarea se face pe dinamometru (dyno) pentru rezultate precise și sigure.

Lucrăm cu toate mărcile majore: Honda, Yamaha, Kawasaki, Suzuki, KTM (cu expertiză specială ca service oficial), BMW, Ducati, Triumph, Aprilia, MV Agusta și altele. Folosim echipamente de diagnoză de ultimă generație și software licențiat.

Procesul durează de obicei 2-4 ore, inclusiv sesiunile de dyno pentru verificare. Fiecare remapare este personalizată pentru motocicleta dumneavoastră — nu folosim hărți generice „one size fits all". Salvăm întotdeauna harta originală, astfel încât puteți reveni la setările din fabrică oricând.

Prețurile pentru remapare ECU pornesc de la 500 lei, în funcție de complexitatea intervenției și marca motocicletei. Diagnoză computerizată simplă (citire coduri eroare) pornește de la 100 lei.`,
    faqs: [
      { question: "Ce înseamnă remaparea ECU la o motocicletă?", answer: "Remaparea ECU presupune modificarea software-ului care controlează parametrii motorului (injecție combustibil, avans aprindere, limitări). Rezultatul este o motocicletă cu performanțe superioare: mai multă putere, răspuns mai rapid la accelerație și, opțional, consum redus." },
      { question: "Cât durează o remapare ECU?", answer: "O sesiune completă de remapare durează între 2 și 4 ore, incluzând diagnoza inițială, modificarea hărților ECU și testarea pe dinamometru (dyno) pentru verificare și ajustări fine." },
      { question: "Remaparea ECU afectează garanția motocicletei?", answer: "Din punct de vedere tehnic, producătorul poate refuza garanția dacă detectează modificări software. Însă salvăm întotdeauna harta originală, permițându-vă să reveniți la setările din fabrică înaintea unei vizite la dealer. Discutați cu noi pentru detalii." },
      { question: "Ce mărci de motociclete puteți remapa?", answer: "Remapăm ECU-uri pentru toate mărcile majore: Honda, Yamaha, Kawasaki, Suzuki, KTM (cu expertiză specială ca service oficial), BMW, Ducati, Triumph, Aprilia, MV Agusta, Harley-Davidson și altele." },
    ],
    schemaServiceType: "Diagnoză și Remapare ECU Moto",
    schemaDescription: "Diagnoză computerizată și remapare ECU pentru motociclete. Optimizare performanță, testare pe dinamometru. Service autorizat în București.",
  },
  {
    slug: "vulcanizare-moto",
    name: "Vulcanizare Moto",
    shortDescription: "Montaj anvelope, echilibrare roți, reparații cauciucuri pentru toate tipurile de motociclete.",
    image: "/service-vulcanizare.webp",
    metaTitle: "Vulcanizare Moto București | GoRacing",
    metaDescription: "Vulcanizare moto în București. Montaj anvelope, echilibrare roți, reparații. Anvelope stradă, sport, enduro. Programări: 0761.320.240",
    h1: "Vulcanizare Moto în București",
    fullDescription: `Anvelopele sunt singurul punct de contact dintre motocicleta ta și asfalt, iar starea lor afectează direct siguranța și performanța. La GoRacing, oferim servicii complete de vulcanizare moto cu echipamente profesionale dedicate motocicletelor.

Serviciile noastre de vulcanizare includ: montaj și demontaj anvelope moto (roți cu spițe și jante aluminiu), echilibrare dinamică computerizată, reparații anvelope (petice și vulcanizare la cald), verificare presiune și stare generală, consultanță în alegerea anvelopelor potrivite, stocarea anvelopelor sezoniere.

Lucrăm cu toate tipurile de anvelope: stradă (touring, sport-touring), sport (supersport, racing), enduro și off-road, dual-sport/adventure, cruiser și custom, scuter. Avem în stoc anvelope de la producători de top și putem comanda orice model în 1-2 zile lucrătoare.

Echipamentele noastre de vulcanizare sunt special concepute pentru motociclete, evitând deteriorarea jantelor din aluminiu sau a spițelor. Echilibrarea computerizată asigură un mers lin și fără vibrații.

Timpul de execuție: schimbul unui set de anvelope durează aproximativ 30-60 de minute, în funcție de tipul roților. Nu este necesară programare pentru vulcanizare, dar o recomandăm în sezonul de vârf (martie-mai și septembrie-octombrie).

Vă sfătuim să verificați anvelopele regulat: profilul minim legal este de 1.6mm, dar recomandăm înlocuirea la 2mm pentru siguranță optimă. Anvelopele mai vechi de 5 ani trebuie inspectate și eventual înlocuite, chiar dacă au profil suficient.`,
    faqs: [
      { question: "Cât durează schimbul de anvelope la motocicletă?", answer: "Schimbul complet (2 anvelope, montaj, echilibrare) durează aproximativ 30-60 de minute. Dacă aduceți roțile demontate, timpul se reduce semnificativ." },
      { question: "Pot veni cu anvelopele mele sau trebuie să le cumpăr de la voi?", answer: "Puteți veni cu anvelopele dumneavoastră, iar noi le montăm și echilibrăm. De asemenea, avem un stoc variat de anvelope și putem comanda orice model în 1-2 zile." },
      { question: "Ce tip de anvelope recomandați pentru drum și circuit?", answer: "Pentru stradă recomandăm anvelope sport-touring pentru un echilibru între aderență și durabilitate. Pentru circuit, recomandăm anvelope supersport sau racing. Vă sfătuim personalizat în funcție de motocicletă și stilul de condus." },
    ],
    schemaServiceType: "Vulcanizare și Anvelope Moto",
    schemaDescription: "Montaj anvelope moto, echilibrare roți computerizată, reparații cauciucuri. Service profesional în București.",
  },
  {
    slug: "reparatii-electrice",
    name: "Reparații Electrice",
    shortDescription: "Diagnoză și reparații sisteme electrice, cablaje, instalații de iluminat.",
    image: "/service-electrice.webp",
    metaTitle: "Reparații Electrice Moto București | Diagnoză | GoRacing",
    metaDescription: "Reparații electrice motociclete în București. Diagnoză sisteme electrice, cablaje, iluminat LED. Service autorizat. Programări: 0761.320.240",
    h1: "Reparații Electrice Motocicletă în București",
    fullDescription: `Sistemele electrice moderne ale motocicletelor sunt complexe și necesită cunoștințe specializate pentru diagnoză și reparație. La GoRacing, echipa noastră are experiența și echipamentele necesare pentru a rezolva orice problemă electrică.

Serviciile noastre de reparații electrice includ: diagnoză completă a sistemului electric cu echipamente profesionale, reparații și înlocuire cablaje, reparații sisteme de încărcare (alternator, regulator-redresor), reparații și upgrade sisteme de iluminare (conversie LED), diagnoză și reparații sistem de pornire (demaror, releu), reparații instrumente de bord și indicatoare, instalare accesorii electrice (prize USB, încălzire mânere, alarme GPS), reparații sisteme ABS și control tracțiune.

Problemele electrice sunt adesea cele mai dificil de diagnosticat — simptomele pot fi intermitente și cauza poate fi departe de locul unde se manifestă problema. Folosim multimetre digitale, osciloscoape și software de diagnoză pentru a identifica rapid și precis sursa problemei.

Timpul de execuție variază: o diagnoză electrică durează 1-2 ore, iar reparațiile pot dura de la câteva ore la 1-2 zile, în funcție de complexitate. Refacerea completă a unui cablaj durează 2-3 zile.

La GoRacing, nu facem doar „petice" — identificăm cauza reală a problemei și o rezolvăm definitiv, prevenind recurența. Toate lucrările electrice vin cu garanție.`,
    faqs: [
      { question: "Motocicleta mea nu pornește — poate fi o problemă electrică?", answer: "Da, cauzele comune pot fi: baterie descărcată sau defectă, releu demaror defect, contact defectuos, siguranță arsă sau probleme la cablaj. Recomandăm o diagnoză profesională pentru identificarea exactă a problemei." },
      { question: "Puteți instala accesorii electrice pe motocicletă?", answer: "Da, instalăm orice accesoriu electric: prize USB/12V, încălzire mânere, sisteme GPS, alarme, iluminat suplimentar LED, și multe altele. Toate instalările sunt realizate profesional cu protecție la scurtcircuit." },
      { question: "Cât costă o diagnoză electrică?", answer: "Diagnoza electrică pornește de la 100 lei și include identificarea completă a problemei, testarea sistemelor și raport detaliat. Dacă alegeți să reparați la noi, costul diagnozei se scade din manoperă." },
    ],
    schemaServiceType: "Reparații Electrice Motocicletă",
    schemaDescription: "Diagnoză și reparații sisteme electrice motociclete. Cablaje, iluminat, ABS, sisteme de pornire. Service autorizat în București.",
  },
  {
    slug: "dyno-tuning",
    name: "Dyno Tuning",
    shortDescription: "Testare pe dinamometru și reglaj fin pentru putere și cuplu optime.",
    image: "/service-dyno.webp",
    metaTitle: "Dyno Tuning Moto București | Testare Dinamometru | GoRacing",
    metaDescription: "Dyno tuning motociclete în București. Testare pe dinamometru, măsurare putere și cuplu, optimizare performanță. Programări: 0761.320.240",
    h1: "Dyno Tuning Motocicletă în București",
    fullDescription: `Dinamometrul (dyno) este instrumentul suprem pentru măsurarea și optimizarea performanțelor motocicletei tale. La GoRacing, dispunem de un dinamometru profesional care ne permite să măsurăm cu precizie puterea și cuplul motocicletei, și să optimizăm reglajele pentru performanță maximă.

Serviciile noastre de dyno tuning includ: sesiune de dyno run (măsurare putere și cuplu la roata din spate), comparație before/after pentru orice modificare, optimizare remapare ECU pe dyno, reglaj carburatoare asistat de dinamometru, testare performanță după modificări mecanice (eșapament, filtru aer, came), raport complet cu grafice putere/cuplu.

Sesiunea standard de dyno include 3-5 rulaje pentru stabilirea baseline-ului, urmate de rulaje suplimentare pentru optimizare. Primești un raport imprimat cu graficele putere și cuplu în funcție de turație.

Testarea pe dyno este esențială atunci când: ai montat un eșapament aftermarket, ai făcut remapare ECU și vrei verificare, ai modificat motorul (came, pistoane, cilindri), vrei să știi exact cât de puternică este motocicleta ta, ai o problemă de performanță și vrei o diagnoză obiectivă.

Timpul de execuție: o sesiune de dyno standard durează aproximativ 1-2 ore. O sesiune completă de optimizare (dyno + remapare ECU) poate dura 3-5 ore. Prețurile pornesc de la 200 lei pentru o sesiune de măsurare și de la 400 lei pentru o sesiune de optimizare.`,
    faqs: [
      { question: "Ce este un dyno run și de ce am nevoie de el?", answer: "Un dyno run este o testare pe dinamometru care măsoară puterea și cuplul motocicletei la roata din spate. Este util pentru a verifica starea motorului, a confirma efectul modificărilor, sau a optimiza reglajele pentru performanță maximă." },
      { question: "Pot veni doar pentru o măsurătoare, fără tuning?", answer: "Absolut! Oferim sesiuni de dyno run doar pentru măsurare, în care primești un raport cu graficul putere/cuplu. Este o modalitate excelentă de a cunoaște performanța reală a motocicletei." },
      { question: "Trebuie să pregătesc motocicleta înainte de dyno?", answer: "Motocicleta trebuie să fie în stare bună de funcționare, cu lanțul reglat, anvelopele la presiunea corectă și rezervorul plin cel puțin pe jumătate. Vă recomandăm un ulei proaspăt pentru rezultate optime." },
    ],
    schemaServiceType: "Dyno Tuning Motocicletă",
    schemaDescription: "Testare pe dinamometru și optimizare performanță motociclete. Măsurare putere, cuplu, reglaj fin. Service profesional în București.",
  },
  {
    slug: "custom-cafe-racer",
    name: "Custom Cafe Racer",
    shortDescription: "Transformări și personalizări custom. Construim motocicleta visurilor tale.",
    image: "/service-custom.webp",
    metaTitle: "Custom Cafe Racer București | Personalizare Moto | GoRacing",
    metaDescription: "Construcții custom cafe racer în București. Transformări și personalizări complete. Design unic, execuție profesională. Programări: 0761.320.240",
    h1: "Custom Cafe Racer în București",
    fullDescription: `Visezi la o motocicletă unică, construită exact după imaginația ta? La GoRacing, transformăm motociclete standard în opere de artă pe două roți. Specializați în cafe racer, scrambler, tracker și bobber, aducem la viață cele mai curajoase viziuni.

Serviciile noastre de custom includ: design și concept (schițe, randări 3D), modificare cadru (scurtare, îngustare, tab-uri noi), fabricare piese unice (rezervor, aripi, șa, suport faruri), vopsire și finisaje custom, conversie sistem electric (simplificare, mini cablaj), upgrade suspensii și frâne, instalare componente aftermarket premium, montaj ghidon, semi-ghidon sau clip-ons, modificare eșapament (wrap, ceramică, custom build).

Procesul nostru de custom build: 1) Consultare inițială — discutăm viziunea ta, bugetul și baza (motocicleta donor). 2) Design — creăm concept-ul vizual și lista de componente. 3) Dezmembrare — dezasamblăm motocicleta și evaluăm starea componentelor. 4) Fabricare — construim piesele unice și modificăm cadrul. 5) Asamblare — montăm totul cu atenție la detaliu. 6) Vopsire — aplicăm schema de culori aleasă. 7) Testare — verificare completă pe dyno și pe drum.

Durata unui proiect custom variază de la 2 la 6 luni, în funcție de complexitate. Proiectele mai simple (schimbare ghidon, șa, faruri, eșapament) pot fi finalizate în 1-2 săptămâni. Prețurile depind de amploarea transformării — contactați-ne pentru o estimare personalizată.`,
    faqs: [
      { question: "Ce motociclete sunt potrivite ca bază pentru un cafe racer?", answer: "Clasicele Honda CB, Yamaha XS/SR, Suzuki GS, BMW R-series și Kawasaki Z sunt cele mai populare baze. Dar putem transforma aproape orice motocicletă. Important este ca motorul și cadrul să fie în stare bună." },
      { question: "Cât durează un proiect custom complet?", answer: "Un proiect custom complet durează între 2 și 6 luni, în funcție de complexitatea transformării, disponibilitatea pieselor și finisajele dorite. Proiecte mai simple (modificări cosmetice) pot fi finalizate în 1-2 săptămâni." },
      { question: "Motocicleta custom poate fi înmatriculată?", answer: "Da, dar necesită omologare RAR pentru modificările structurale. Ca service autorizat RAR, vă ghidăm prin întreg procesul de omologare și ne asigurăm că motocicleta respectă toate normele tehnice." },
    ],
    schemaServiceType: "Custom Cafe Racer",
    schemaDescription: "Construcții și transformări custom cafe racer, scrambler, bobber. Design unic și execuție profesională în București.",
  },
  {
    slug: "restaurare-clasice",
    name: "Restaurare Motociclete Clasice",
    shortDescription: "Readucem la viață motocicletele de colecție cu atenție la detaliu și piese originale.",
    image: "/service-restaurare.webp",
    metaTitle: "Restaurare Motociclete Clasice București | GoRacing",
    metaDescription: "Restaurare motociclete clasice și de colecție în București. Piese originale, recondiționare completă. Programări: 0761.320.240",
    h1: "Restaurare Motociclete Clasice în București",
    fullDescription: `Motocicletele clasice au un farmec aparte și merită să fie păstrate în stare impecabilă. La GoRacing, restaurăm motociclete de colecție cu respect pentru istoria și autenticitatea fiecărui model, folosind piese originale ori de câte ori este posibil.

Serviciile noastre de restaurare includ: evaluare completă a stării motocicletei, dezmembrare și catalogare piese, recondiționare motor completă (intern și extern), recondiționare cadru (sablare, grunduire, vopsire), recromare piese metalice, recondiționare sau înlocuire suspensii originale, refacere instalație electrică, retapițare șa cu materiale autentice, vopsire în schema de culori originală, căutare și achiziție piese originale rare.

Lucrăm cu o gamă largă de mărci clasice: Jawa, MZ, IZH, Ural, BMW clasice (R-series), Honda CB, Yamaha XS, Kawasaki Z, Suzuki GS, Triumph Bonneville, Norton, BSA, Ducati clasice și multe altele.

Procesul de restaurare este meticulos: fiecare piesă este fotografiată, catalogată, inspectată și recondiționată sau înlocuită cu piese originale NOS (New Old Stock) sau reproduse fidel. Avem o rețea de furnizori de piese clasice din întreaga Europă.

Durata unei restaurări complete variază de la 3 la 12 luni, în funcție de starea motocicletei și de disponibilitatea pieselor. Oferim și restaurări parțiale sau recondiționări cosmetice pentru cine dorește să păstreze patina originală.`,
    faqs: [
      { question: "Puteți găsi piese originale pentru motocicleta mea clasică?", answer: "Da, avem acces la o rețea extinsă de furnizori de piese clasice din Europa. Folosim piese NOS (New Old Stock) originale ori de câte ori sunt disponibile, iar când nu sunt, folosim reproduceri de calitate sau recondiționăm piesele existente." },
      { question: "Cât costă restaurarea completă a unei motociclete clasice?", answer: "Costul variază semnificativ în funcție de marca, modelul, starea inițială și nivelul de restaurare dorit. O restaurare completă poate costa între 3.000 și 15.000 EUR. Vă oferim o estimare detaliată după evaluarea inițială." },
      { question: "Pot aduce o motocicletă clasică necompletă?", answer: "Absolut. Multe motociclete clasice ajung la noi în stare de proiect — incomplete, dezmembrate sau cu piese lipsă. Le evaluăm, stabilim un plan de restaurare și căutăm piesele necesare." },
    ],
    schemaServiceType: "Restaurare Motociclete Clasice",
    schemaDescription: "Restaurare profesională a motocicletelor clasice și de colecție. Piese originale, recondiționare completă în București.",
  },
  {
    slug: "spalatorie-detailing",
    name: "Spălătorie și Detailing Moto",
    shortDescription: "Spălare profesională, polish, ceruire și protecție ceramică pentru motociclete.",
    image: "/service-detailing.webp",
    metaTitle: "Detailing Moto București | Spălătorie | GoRacing",
    metaDescription: "Spălare și detailing profesional motociclete în București. Polish, ceruire, protecție ceramică. Programări: 0761.320.240",
    h1: "Spălătorie și Detailing Moto în București",
    fullDescription: `O motocicletă îngrijită nu arată doar spectaculos — se și păstrează mai bine în timp. La GoRacing, oferim servicii profesionale de spălare și detailing special concepute pentru motociclete, cu produse și tehnici care protejează finisajele delicate.

Serviciile noastre de detailing includ: spălare exterioară profesională (fără jet de presiune pe componente sensibile), curățare lanț și ungere, polish caroserie și rezervor, ceruire cu produse premium, protecție ceramică profesională (durabilitate 1-3 ani), curățare jante și spițe, tratament plastice și cauciucuri, curățare și tratament șa (piele sau material textil), decontaminare chimică (rășină, insecte, gudron).

Folosim exclusiv produse profesionale certificate, special formulate pentru motociclete. Nu folosim jet de înaltă presiune pe rulmenți, conexiuni electrice sau componente sensibile — cunoaștem punctele vulnerabile ale fiecărui tip de motocicletă.

Pachetele noastre: Spălare Standard (30 min, exterior + lanț), Spălare Premium (60 min, exterior complet + detalii), Detailing Complet (2-3 ore, polish + ceruire/ceramică + toate suprafețele).

Recomandăm un detailing complet cel puțin o dată pe sezon, și protecția ceramică pentru motocicletele noi sau proaspăt vopsite — aceasta reduce semnificativ aderența murdăriei și facilitează spălările ulterioare.`,
    faqs: [
      { question: "Protecția ceramică merită investiția?", answer: "Da, protecția ceramică creează un strat hidrofob care respinge apa, murdăria și insectele. Durează 1-3 ani și face spălările ulterioare mult mai ușoare. Este o investiție excelentă pentru motocicletele noi sau proaspăt vopsite." },
      { question: "Cât durează un detailing complet?", answer: "Un detailing complet durează între 2 și 3 ore și include spălare, decontaminare, polish, ceruire sau protecție ceramică, tratament plastice și cauciucuri. Rezultatul este o motocicletă care arată ca nouă." },
      { question: "Folosiți jet de înaltă presiune?", answer: "Nu pe componentele sensibile. Cunoaștem punctele vulnerabile ale motocicletelor (rulmenți, conexiuni electrice, radiator) și evităm presiunea excesivă în acele zone. Folosim tehnici sigure de spălare manuală." },
    ],
    schemaServiceType: "Spălătorie și Detailing Moto",
    schemaDescription: "Spălare profesională și detailing motociclete. Polish, ceruire, protecție ceramică. Service specializat în București.",
  },
  {
    slug: "hotel-moto",
    name: "Hotel Moto",
    shortDescription: "Depozitare sigură pe timp de iarnă în spațiu încălzit și monitorizat.",
    image: "/service-hotel.webp",
    metaTitle: "Hotel Moto București | Depozitare Iarnă | GoRacing",
    metaDescription: "Depozitare motociclete pe timp de iarnă în București. Spațiu încălzit, monitorizat, pregătire sezon. Programări: 0761.320.240",
    h1: "Hotel Moto — Depozitare Motociclete în București",
    fullDescription: `Iarna este perioada în care motocicleta ta merită o grijă deosebită. La GoRacing, oferim servicii de depozitare pe timp de iarnă (și nu numai) în spațiu securizat, încălzit și monitorizat permanent.

Serviciile noastre de Hotel Moto includ: depozitare în spațiu închis, încălzit și uscat, monitorizare video 24/7, acces restricționat — doar personalul autorizat, pregătire motocicletă pentru hibernare (stabilizator combustibil, deconectare baterie, nivel optim lichide), mentenanță periodică în timpul depozitării (pornire motor, verificare presiune anvelope), pregătire pentru sezon la predare (spălare, verificare generală, încărcare baterie).

De ce să nu lași motocicleta în garaj? Fluctuațiile de temperatură și umiditate pot cauza condensare în motor și rezervor, corodarea componentelor metalice, deteriorarea anvelopelor și garniturilor. Într-un spațiu climatizat, aceste riscuri sunt eliminate.

Perioada de depozitare standard este noiembrie — martie (5 luni), dar oferim și depozitare pe perioade mai scurte (vacanțe, deplasări). Capacitatea este limitată, recomandăm rezervarea din timp — locurile se ocupă rapid în septembrie-octombrie.

La predarea motocicletei, o pregătim complet pentru sezonul următor: spălare, verificare generală, încărcare baterie, verificare presiune anvelope și teste funcționale. Astfel, ești gata de drum din prima zi.

Prețurile pornesc de la 150 lei/lună și includ depozitare + pregătire hibernare + pregătire sezon. Pachetele cu revizie completă sunt disponibile la prețuri preferențiale.`,
    faqs: [
      { question: "Ce include serviciul de Hotel Moto?", answer: "Include depozitare în spațiu încălzit și monitorizat, pregătire pentru hibernare (stabilizator combustibil, deconectare baterie), mentenanță periodică și pregătire pentru sezon la predare (spălare, verificare, încărcare baterie)." },
      { question: "Când trebuie să rezerv un loc de depozitare?", answer: "Recomandăm rezervarea în septembrie-octombrie, deoarece locurile sunt limitate și se ocupă rapid. Contactați-ne cât mai devreme pentru a vă asigura un loc." },
      { question: "Pot accesa motocicleta în timpul depozitării?", answer: "Da, cu programare prealabilă puteți accesa motocicleta. Vă rugăm să ne anunțați cu cel puțin 24 de ore înainte pentru a pregăti accesul." },
    ],
    schemaServiceType: "Hotel Moto — Depozitare Iarnă",
    schemaDescription: "Depozitare sigură motociclete pe timp de iarnă. Spațiu încălzit, monitorizat, pregătire sezon. Service profesional în București.",
  },
];

export const magazinService: Omit<ServiceData, "faqs" | "schemaServiceType" | "schemaDescription"> = {
  slug: "magazin",
  name: "Magazin Piese și Echipament",
  shortDescription: "Piese originale, accesorii și echipament moto de la branduri premium.",
  image: "/service-magazin.webp",
  metaTitle: "Magazin Piese și Echipament Moto București | GoRacing",
  metaDescription: "Piese originale, accesorii și echipament moto de la branduri premium. Enduro, stradă, sport. Vizitează magazinul GoRacing în București.",
  h1: "Magazin Piese, Accesorii și Echipament Moto",
  fullDescription: "",
};
