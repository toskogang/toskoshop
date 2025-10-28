import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const displayImages = product.images || [product.image];
  
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="aspect-square bg-muted rounded-md mb-4 overflow-hidden">
          {displayImages.length > 1 ? (
            <Carousel className="w-full h-full">
              <CarouselContent>
                {displayImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <img
              src={displayImages[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>
        <Badge className="w-fit mb-2">{product.category}</Badge>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold text-primary">
          {product.price.toLocaleString('hu-HU')} Ft
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Kosárba
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
