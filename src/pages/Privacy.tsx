const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Adatvédelmi Tájékoztató</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <p className="text-sm mb-6">Utolsó frissítés: {new Date().toLocaleDateString('hu-HU')}</p>
              <p className="leading-relaxed">
                A ToskoShop Kft. (a továbbiakban: Szolgáltató) elkötelezett az Ön személyes adatainak 
                védelme iránt. Jelen Adatvédelmi Tájékoztató célja, hogy részletes információt nyújtson 
                arról, hogyan gyűjtjük, használjuk, tároljuk és védjük az Ön személyes adatait.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Adatkezelő megnevezése</h2>
              <div className="space-y-2">
                <p><strong>Cégnév:</strong> ToskoShop Kft.</p>
                <p><strong>Székhely:</strong> 1234 Budapest, Példa utca 12.</p>
                <p><strong>Adószám:</strong> 12345678-2-42</p>
                <p><strong>Cégjegyzékszám:</strong> 01-09-123456</p>
                <p><strong>Email:</strong> adatvedelem@toskoshop.hu</p>
                <p><strong>Telefon:</strong> +36 1 234 5678</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Kezelt személyes adatok köre</h2>
              <p className="mb-4">A Szolgáltató az alábbi személyes adatokat kezeli:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Azonosító adatok:</strong> név, email cím, telefonszám</li>
                <li><strong>Számlázási adatok:</strong> számlázási név, számlázási cím, adószám (amennyiben vállalkozás)</li>
                <li><strong>Szállítási adatok:</strong> szállítási név, szállítási cím, telefonszám</li>
                <li><strong>Tranzakciós adatok:</strong> rendelési előzmények, fizetési információk</li>
                <li><strong>Technikai adatok:</strong> IP cím, böngésző típusa, eszköz információk, cookie-k</li>
                <li><strong>Kommunikációs adatok:</strong> ügyfélszolgálati levelezés, vélemények, értékelések</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Adatkezelés célja és jogalapja</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.1. Szerződés teljesítése (GDPR 6. cikk (1) b) pont)</h3>
                  <p>Rendelések feldolgozása, számlázás, szállítás, ügyfélszolgálat biztosítása.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.2. Jogi kötelezettség teljesítése (GDPR 6. cikk (1) c) pont)</h3>
                  <p>Számviteli, adózási kötelezettségek teljesítése, hatósági megkeresések teljesítése.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.3. Jogos érdek (GDPR 6. cikk (1) f) pont)</h3>
                  <p>Statisztikák készítése, szolgáltatás fejlesztése, visszaélések megelőzése, biztonsági incidensek kezelése.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3.4. Önkéntes hozzájárulás (GDPR 6. cikk (1) a) pont)</h3>
                  <p>Hírlevél küldése, marketing célú megkeresések, cookie-k használata.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Adatkezelés időtartama</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Szerződéses adatok:</strong> a szerződés teljesítéséig, majd a számviteli és adójogi előírások szerint 8 évig</li>
                <li><strong>Számlázási adatok:</strong> a számla kiállításától számított 8 évig</li>
                <li><strong>Marketing hozzájárulás:</strong> a hozzájárulás visszavonásáig, de legfeljebb 5 évig</li>
                <li><strong>Cookie-k:</strong> a cookie típusától függően, maximum 24 hónap</li>
                <li><strong>Ügyfélszolgálati levelezés:</strong> az ügy lezárásától számított 3 évig</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Adattovábbítás, adatfeldolgozók</h2>
              <p className="mb-4">A Szolgáltató az alábbi esetekben továbbíthat adatot harmadik félnek:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Szállítási szolgáltatók:</strong> a megrendelt termékek kiszállítása céljából</li>
                <li><strong>Fizetési szolgáltatók:</strong> banki tranzakciók lebonyolítása céljából</li>
                <li><strong>Könyvelő, adótanácsadó:</strong> számviteli kötelezettségek teljesítése céljából</li>
                <li><strong>Tárhelyszolgáltató:</strong> adatok biztonságos tárolása céljából</li>
                <li><strong>Email szolgáltató:</strong> kommunikáció biztosítása céljából</li>
                <li><strong>Hatóságok:</strong> jogszabályban előírt esetekben</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Az érintett jogai</h2>
              <p className="mb-4">A GDPR alapján az Ön jogai:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Hozzáférés joga:</strong> tájékoztatást kérhet arról, hogy milyen adatait kezeljük</li>
                <li><strong>Helyesbítés joga:</strong> kérheti pontatlan adatainak helyesbítését</li>
                <li><strong>Törlés joga:</strong> kérheti adatai törlését (az elévülési idő lejárta után)</li>
                <li><strong>Adatkezelés korlátozásának joga:</strong> bizonyos esetekben kérheti az adatkezelés korlátozását</li>
                <li><strong>Adathordozhatóság joga:</strong> kérheti adatainak géppel olvasható formátumban történő átadását</li>
                <li><strong>Tiltakozás joga:</strong> jogos érdeken alapuló adatkezelés ellen tiltakozhat</li>
                <li><strong>Hozzájárulás visszavonásának joga:</strong> bármikor visszavonhatja hozzájárulását</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Adatbiztonság</h2>
              <p className="mb-4">A Szolgáltató az adatbiztonság érdekében az alábbi intézkedéseket alkalmazza:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS titkosítás használata az adatátvitel során</li>
                <li>Rendszeres biztonsági mentések készítése</li>
                <li>Hozzáférés-korlátozási rendszerek alkalmazása</li>
                <li>Tűzfalak és vírusvédelem használata</li>
                <li>Munkatársak folyamatos képzése adatvédelmi kérdésekben</li>
                <li>Adatvédelmi incidensek kezelésére vonatkozó protokollok</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookie-k (sütik) használata</h2>
              <p className="mb-4">Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Alapvető cookie-k:</strong> a weboldal működéséhez szükségesek (pl. kosár tartalma)</li>
                <li><strong>Funkcionális cookie-k:</strong> beállítások mentése (pl. nyelv, téma)</li>
                <li><strong>Analitikai cookie-k:</strong> látogatottsági statisztikák készítése</li>
                <li><strong>Marketing cookie-k:</strong> célzott hirdetések megjelenítése</li>
              </ul>
              <p className="mt-4">A böngésző beállításaiban bármikor letilthatja a cookie-k használatát.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Kiskorúak adatainak kezelése</h2>
              <p>
                Szolgáltatásainkat 18 év alatti személyek csak szülői vagy törvényes képviselői 
                hozzájárulással vehetik igénybe. Amennyiben tudomásunkra jut, hogy 18 év alatti 
                személy önállóan regisztrált, haladéktalanul töröljük az adatait.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Jogorvoslati lehetőségek</h2>
              <p className="mb-4">
                Amennyiben úgy érzi, hogy adatkezelésünk sérti az Ön jogait, az alábbi 
                jogorvoslati lehetőségekkel élhet:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Panasz a Szolgáltatónál:</strong> adatvedelem@toskoshop.hu email címen
                </li>
                <li>
                  <strong>Panasz a felügyeleti hatóságnál:</strong><br />
                  Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)<br />
                  Cím: 1055 Budapest, Falk Miksa utca 9-11.<br />
                  Email: ugyfelszolgalat@naih.hu<br />
                  Telefon: +36 1 391 1400
                </li>
                <li>
                  <strong>Bírósági eljárás kezdeményezése:</strong> lakóhelye vagy tartózkodási helye szerint illetékes törvényszéknél
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Adatvédelmi incidens kezelése</h2>
              <p>
                Adatvédelmi incidens esetén a Szolgáltató 72 órán belül értesíti a NAIH-ot, 
                valamint az érintett személyeket, amennyiben az incidens valószínűsíthetően 
                magas kockázattal jár a jogaikra és szabadságaikra nézve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. A tájékoztató módosítása</h2>
              <p>
                A Szolgáltató fenntartja a jogot, hogy jelen Adatvédelmi Tájékoztatót egyoldalúan 
                módosítsa. A módosításokról a honlapon keresztül tájékoztatjuk ügyfeleinket. 
                A módosítások az oldal frissítésével egyidejűleg lépnek hatályba.
              </p>
            </section>

            <section className="border-t pt-6">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Kapcsolatfelvétel</h2>
              <p className="mb-4">
                Adatvédelmi kérdéseivel, illetve jogainak gyakorlásával kapcsolatban az alábbi 
                elérhetőségeken kereshet bennünket:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> adatvedelem@toskoshop.hu</p>
                <p><strong>Telefon:</strong> +36 1 234 5678</p>
                <p><strong>Postai cím:</strong> 1234 Budapest, Példa utca 12.</p>
              </div>
              <p className="mt-4">
                Megkeresését 30 napon belül megválaszoljuk.
              </p>
            </section>

            <section className="border-t pt-6 text-sm">
              <p className="italic">
                Jelen Adatvédelmi Tájékoztató az Európai Parlament és a Tanács (EU) 2016/679 
                rendelete (Általános Adatvédelmi Rendelet - GDPR), valamint az információs 
                önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény 
                alapján készült.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;