import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const Products = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('Összes');

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} hozzáadva a kosárhoz!`);
  };

  const filteredProducts = filter === 'Összes'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Termékeink</h1>
        
        <Tabs defaultValue="Összes" className="mb-8" onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="Összes">Összes</TabsTrigger>
            <TabsTrigger value="Hálózatépítés">Hálózatépítés</TabsTrigger>
            <TabsTrigger value="Kiberbiztonság">Kiberbiztonság</TabsTrigger>
            <TabsTrigger value="Szolgáltatások">Szolgáltatások</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nincsenek termékek ebben a kategóriában.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
