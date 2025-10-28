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
