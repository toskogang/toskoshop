import { useEffect, useState } from "react";
import { Shield, MapPin, User, Home, Video, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const [ipAddress, setIpAddress] = useState<string>("Betöltés...");
  const [randomName, setRandomName] = useState<string>("");
  const [randomHouse, setRandomHouse] = useState<string>("");
  const [randomWebcam, setRandomWebcam] = useState<string>("");
  const [randomAddress, setRandomAddress] = useState<string>("");

  const names = [
    "Kovács János",
    "Nagy Péter",
    "Szabó Mária",
    "Tóth Anna",
    "Varga László",
    "Kiss Eszter",
    "Molnár Gábor",
    "Horváth Katalin"
  ];

  const addresses = [
    "1052 Budapest, Petőfi Sándor utca 12.",
    "6720 Szeged, Kossuth Lajos sugárút 45.",
    "4032 Debrecen, Nagy Lajos király tér 8.",
    "9021 Győr, Arany János utca 23.",
    "7621 Pécs, Rákóczi út 67.",
    "3530 Miskolc, Széchenyi István út 34.",
    "8000 Székesfehérvár, Fő utca 18.",
    "2800 Tatabánya, Millennium tér 5."
  ];

  const houses = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop"
  ];

  const webcams = [
    "https://www.youtube.com/embed/1EiC9bvVGnk",
    "https://www.youtube.com/embed/awGd6MN1vG0",
    "https://www.youtube.com/embed/6RgfZwkcQzc",
    "https://www.youtube.com/embed/1-iS7LArMPA"
  ];

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress("Nem sikerült betölteni"));

    setRandomName(names[Math.floor(Math.random() * names.length)]);
    setRandomHouse(houses[Math.floor(Math.random() * houses.length)]);
    setRandomWebcam(webcams[Math.floor(Math.random() * webcams.length)]);
    setRandomAddress(addresses[Math.floor(Math.random() * addresses.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center animate-fade-in">
            <Shield className="w-20 h-20 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Miért válasszon minket?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Yip yap rólunk – A legmegbízhatóbb partner a hálózati biztonság terén
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15 éve biztosítjuk ügyfeleink adatainak védelmét és hálózati infrastruktúrájának kiépítését.
            </p>
          </div>
        </div>
      </section>

      {/* The Twist Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Eye className="w-16 h-16 mx-auto mb-4 text-destructive animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-destructive">
              Mégse minket választana?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Itt van 5 érv, hogy miért MINKET válasszon:
            </p>
          </div>

          <div className="space-y-6">
            {/* 1. IP Address */}
            <div className="p-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-2xl font-bold text-destructive">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Az Ön IP címe
                  </h3>
                  <p className="text-3xl md:text-5xl font-mono font-bold text-destructive">
                    {ipAddress}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Igen, tudjuk honnan böngészik...
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Address */}
            <div className="p-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-2xl font-bold text-destructive">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Az Ön lakcíme
                  </h3>
                  <p className="text-2xl md:text-3xl font-semibold text-destructive">
                    {randomAddress || "Betöltés..."}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Szép a környék, nem? 😊
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Name */}
            <div className="p-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-2xl font-bold text-destructive">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Az Ön neve
                  </h3>
                  <p className="text-2xl md:text-3xl font-semibold text-destructive">
                    {randomName || "Betöltés..."}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Szia {randomName?.split(" ")[1] || ""}! 👋
                  </p>
                </div>
              </div>
            </div>

            {/* 4. House Photo */}
            <div className="p-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-2xl font-bold text-destructive">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Az Ön háza
                  </h3>
                  <div className="mt-4 rounded-lg overflow-hidden border-2 border-destructive/30">
                    {randomHouse && (
                      <img 
                        src={randomHouse} 
                        alt="Ház" 
                        className="w-full h-64 object-cover"
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Szép kis ház, vigyázzon rá! 🏠
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Webcam Link */}
            <div className="p-6 rounded-2xl border-2 border-destructive/50 bg-destructive/5 hover:shadow-xl transition-all animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-2xl font-bold text-destructive">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Élő webkamera
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Nézze meg saját otthonát valós időben!
                  </p>
                  <div className="mt-4 rounded-lg overflow-hidden border-2 border-destructive/30">
                    {randomWebcam && (
                      <iframe 
                        src={randomWebcam}
                        className="w-full h-64 md:h-96"
                        title="Élő webkamera"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    (Viccelünk, ez egy random webkamera stream 😄)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Most már meggyőztük? 😄
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              (Természetesen ez csak egy vicces demo. Az Ön adatai biztonságban vannak!)
            </p>
            <p className="text-muted-foreground mb-8">
              De komolyan: hálózati biztonsága fontos. Vásároljon professzionális eszközöket!
            </p>
            <Button size="lg" asChild className="hover-scale">
              <a href="/products">
                Termékek böngészése
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
