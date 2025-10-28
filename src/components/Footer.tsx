import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cég információk */}
          <div>
            <h3 className="font-bold text-lg mb-4">ToskoShop</h3>
            <p className="text-sm text-muted-foreground">
              Professzionális hálózati megoldások és kiberbiztonsági termékek.
            </p>
          </div>

          {/* Hasznos linkek */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hasznos linkek</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Főoldal
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-foreground transition-colors">
                  Termékek
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  Rólunk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Kapcsolat
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-foreground transition-colors">
                  Vélemények
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">
                  Adatvédelem
                </Link>
              </li>
            </ul>
          </div>

          {/* Elérhetőségek */}
          <div>
            <h3 className="font-bold text-lg mb-4">Elérhetőségek</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@toskoshop.hu" className="hover:text-foreground transition-colors">
                  info@toskoshop.hu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+36123456789" className="hover:text-foreground transition-colors">
                  +36 1 234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>1234 Budapest, Példa utca 12.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Impresszum */}
        <div className="border-t mt-8 pt-6">
          <div className="text-sm text-muted-foreground space-y-2">
            <h4 className="font-semibold text-foreground mb-3">Impresszum</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p><strong>Cégnév:</strong> ToskoShop Kft.</p>
                <p><strong>Székhely:</strong> 1234 Budapest, Példa utca 12.</p>
                <p><strong>Adószám:</strong> 12345678-2-42</p>
                <p><strong>Cégjegyzékszám:</strong> 01-09-123456</p>
              </div>
              <div className="space-y-1">
                <p><strong>Email:</strong> info@toskoshop.hu</p>
                <p><strong>Telefon:</strong> +36 1 234 5678</p>
                <p><strong>Nyitvatartás:</strong> Hétfő-Péntek 8:00-17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground mt-6 pt-6 border-t">
          <p>&copy; {new Date().getFullYear()} ToskoShop - Toskogang. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;