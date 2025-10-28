import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Vissza a főoldalra"
            >
              <Home className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ToskoShop
              </span>
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Főoldal
              </Link>
              <Link
                to="/products"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Termékek
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Rólunk
              </Link>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
