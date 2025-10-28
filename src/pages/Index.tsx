import { Link } from "react-router-dom";
import { Shield, Network, Zap, Award, Clock, HeadphonesIcon, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

const Index = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 6);
  const [ipAddress, setIpAddress] = useState<string>("Betöltés...");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress("Nem sikerült betölteni"));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="text-center animate-fade-in">
            <div className="mb-8 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-2 border-primary/30 inline-block">
              <p className="text-sm text-muted-foreground mb-2">Az Ön IP címe:</p>
              <p className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {ipAddress}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-scale-in">
              ToskoShop
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professzionális hálózati megoldások és kiberbiztonság egy helyen
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Találja meg a legmodernebb eszközöket vállalkozása számára
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="gap-2 hover-scale group">
                  Termékek böngészése
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="hover-scale">
                  Kapcsolat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          <div className="group p-8 border rounded-2xl bg-gradient-to-br from-primary/5 to-background hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover-scale">
            <Network className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Hálózatépítés</h2>
            <p className="text-muted-foreground mb-6">
              Kiváló minőségű kábelek, routerek és switchek professzionális 
              hálózatok kiépítéséhez. Megbízható kapcsolat minden környezetben.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
              Termékek megtekintése <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="group p-8 border rounded-2xl bg-gradient-to-br from-secondary/5 to-background hover:shadow-2xl hover:border-secondary/50 transition-all duration-300 hover-scale">
            <Shield className="h-12 w-12 text-secondary mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Kiberbiztonság</h2>
            <p className="text-muted-foreground mb-6">
              Védje meg vállalkozását a modern kiberfenyegetésektől. Tűzfalak, 
              VPN megoldások és behatolásjelző rendszerek.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
              Termékek megtekintése <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kiemelt Termékek</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fedezze fel legkeresettebb termékeink válogatását
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-scale-in">
              <ProductCard product={product} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" variant="outline" className="hover-scale">
              Összes termék megtekintése
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Miért válasszon minket?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            15 éve vagyunk a piac meghatározó szereplői
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-background border hover:shadow-xl transition-all hover-scale">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Szakértelem</h3>
            <p className="text-muted-foreground">
              15 éves tapasztalat az IT infrastruktúra területén
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-background border hover:shadow-xl transition-all hover-scale">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Minőség</h3>
            <p className="text-muted-foreground">
              Csak a legjobb gyártók termékeit forgalmazzuk
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-background border hover:shadow-xl transition-all hover-scale sm:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <HeadphonesIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Támogatás</h3>
            <p className="text-muted-foreground">
              24/7 ügyfélszolgálat és technikai segítség
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
