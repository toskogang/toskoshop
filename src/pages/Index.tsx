// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Üdvözöljük a ToskoShop-ban
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professzionális hálózati megoldások és kiberbiztonság egy helyen. 
            Találja meg a legmodernebb eszközöket vállalkozása számára.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Hálózatépítés</h2>
            <p className="text-muted-foreground mb-4">
              Kiváló minőségű kábelek, routerek és switchek professzionális 
              hálózatok kiépítéséhez. Megbízható kapcsolat minden környezetben.
            </p>
            <a href="/products" className="text-primary hover:underline">
              Termékek megtekintése →
            </a>
          </div>
          
          <div className="p-8 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Kiberbiztonság</h2>
            <p className="text-muted-foreground mb-4">
              Védje meg vállalkozását a modern kiberfenyegetésektől. Tűzfalak, 
              VPN megoldások és behatolásjelző rendszerek.
            </p>
            <a href="/products" className="text-primary hover:underline">
              Termékek megtekintése →
            </a>
          </div>
        </section>

        <section className="text-center bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Miért válasszon minket?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-semibold mb-2">Szakértelem</h3>
              <p className="text-sm text-muted-foreground">
                15 éves tapasztalat az IT infrastruktúra területén
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Minőség</h3>
              <p className="text-sm text-muted-foreground">
                Csak a legjobb gyártók termékeit forgalmazzuk
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Támogatás</h3>
              <p className="text-sm text-muted-foreground">
                24/7 ügyfélszolgálat és technikai segítség
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
