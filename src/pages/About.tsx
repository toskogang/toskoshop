const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Rólunk - Toskogang
        </h1>
        
        <div className="max-w-3xl space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Kik vagyunk?</h2>
            <p className="text-muted-foreground leading-relaxed">
              A ToskoShop a Toskogang csapat büszkesége, amely 2024-ben jött létre azzal a céllal, 
              hogy professzionális hálózati megoldásokat és kiberbiztonsági termékeket kínáljon. 
              Csapatunk elkötelezett a minőség és az innováció mellett, hogy ügyfeleink mindig 
              a legmodernebb technológiákhoz juthassanak hozzá.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Misszió</h2>
            <p className="text-muted-foreground leading-relaxed">
              Misszionk, hogy minden vállalkozás hozzáférjen a legmegbízhatóbb IT infrastruktúrához 
              és védelemhez. A Toskogang csapat hisz abban, hogy a biztonságos és gyors hálózati 
              kapcsolat alapvető joga minden cégnek a modern digitális világban.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Csapatunk</h2>
            <div className="space-y-6">
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="font-bold text-xl mb-2">Szudor Tamás</h3>
                <p className="text-sm text-muted-foreground italic mb-3">Hálózati szakember</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Én Szudor Tamás vagyok, hálózati szakember. Célom, hogy minden ügyfelem számára 
                  megbízható, stabil és biztonságos hálózatot alakítsak ki, amely hosszú távon is 
                  hatékonyan működik.
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2">Előismereteim:</h4>
                  <p className="text-sm text-muted-foreground">
                    Linux, Windows Server, Visual Studio, HTML, CSS, Python, valamint CISCO hálózati ismeretek.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Szolgáltatásaim:</h4>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Hálózat tervezése, kiépítése és üzemeltetése:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Első lépésként személyesen felmérem a helyszínt, hogy pontos képet kapjak az igényekről 
                    és a lehetőségekről. Ezt követően elkészítem a logikai és fizikai topológiát, amely alapján 
                    a hálózat kialakítása történik. Minden eszközt szakszerűen telepítek és konfigurálok, 
                    a kábeleket pedig esztétikusan, diszkréten vezetem el. A beüzemelés után gondoskodom 
                    a biztonsági beállításokról és a rendszer alapos teszteléséről, hogy a hálózat hibátlanul 
                    és hatékonyan működjön. Törekszem arra, hogy minden ügyfél elégedett legyen, és a létrehozott 
                    hálózat hosszú távon is megfeleljen a modern technikai elvárásoknak.
                  </p>
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <h3 className="font-bold text-xl mb-2">Czimbó Gergő</h3>
                <p className="text-sm text-muted-foreground italic mb-3">Hálózati szakember</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Én Czimbó Gergő vagyok hálózati szakember. Arra törekszem, hogy akik felkeresnek, 
                  azoknak egy működő hálózatot hozzak létre.
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold mb-2">Előismereteim:</h4>
                  <p className="text-sm text-muted-foreground">
                    Linux, Windows Server, Visual Studio, HTML, CSS, Python, CISCO tanfolyam.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Szolgáltatásaim:</h4>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Hálózat tervezése és üzemeltetése:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Első lépésként kimegyek a céghez felmérni a terepet. Hálózat létrehozásának második 
                    lépése a logikai topológia, ezt nagyon szívesen összeállítom önnek és segítek megtervezni 
                    a hálózat elhelyezkedését. Törekszem arra, hogy minden a legnagyobb rendben legyen 
                    a hálózatban és minden hatékonyan hibátlanul működjön. Ezután minden eszközt elhelyezek 
                    a területen belül a topológia szerint majd ezeket be is üzemelem, kábelekkel összekötöm, 
                    ezeket a kábeleket megpróbálom diszkrét módon elvezetni, összekötni. A hálózatban 
                    szükség lesz az eszközök konfigurációjára így a következő lépésként ezt fogom elvégezni. 
                    Legvégül pedig a biztonsági beállításokat, illetve a tesztelést fogom elvégezni.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Mit kínálunk?</h2>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Hálózatépítési megoldások</h3>
                <p className="text-sm text-muted-foreground">
                  Kábelek, routerek, switchek és minden szükséges eszköz 
                  professzionális hálózatok kiépítéséhez. Tapasztalt 
                  szakembereink segítenek a megfelelő termékek kiválasztásában.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Kiberbiztonsági eszközök</h3>
                <p className="text-sm text-muted-foreground">
                  Tűzfalak, VPN megoldások, behatolásjelző rendszerek és 
                  titkosító eszközök. Védje meg vállalkozását a modern 
                  kiberfenyegetésektől a legújabb biztonsági technológiákkal.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Szakértői tanácsadás</h3>
                <p className="text-sm text-muted-foreground">
                  Ingyenes konzultáció, hogy megtaláljuk az Önnek megfelelő 
                  megoldást. Munkatársaink rendelkeznek a szükséges 
                  tanúsítványokkal és gyakorlati tapasztalattal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kapcsolat</h2>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> info@toskoshop.hu</p>
              <p><strong>Telefon:</strong> +36 1 234 5678</p>
              <p><strong>Cím:</strong> 1234 Budapest, Példa utca 12.</p>
              <p><strong>Nyitvatartás:</strong> Hétfő-Péntek 8:00-17:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
