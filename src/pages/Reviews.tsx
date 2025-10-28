import { useState } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Kovács János',
    rating: 5,
    date: '2024. Március 15.',
    comment: 'Kiváló minőségű termékek! A CAT6 kábel pontosan azt nyújtja, amit vártam. Gyors szállítás és professzionális kiszolgálás.',
  },
  {
    id: 2,
    name: 'Nagy Eszter',
    rating: 5,
    date: '2024. Március 10.',
    comment: 'A Mesh Wi-Fi rendszer teljesen megváltoztatta az otthoni internetezést. Most már minden szobában tökéletes a lefedettség. Csak ajánlani tudom!',
  },
  {
    id: 3,
    name: 'Tóth Péter',
    rating: 4,
    date: '2024. Március 5.',
    comment: 'Nagyon elégedett vagyok az optikai kábellel. Az ár egy kicsit magasabb, mint gondoltam, de a minőség kifogástalan.',
  },
  {
    id: 4,
    name: 'Szabó Andrea',
    rating: 5,
    date: '2024. Február 28.',
    comment: 'A biztonsági kamera rendszer felülmúlta a várakozásaimat. Könnyű volt felszerelni és a képminőség is kiváló, még éjszaka is.',
  },
  {
    id: 5,
    name: 'Horváth Gábor',
    rating: 4,
    date: '2024. Február 20.',
    comment: 'A Cudy switch nagyon jól működik. Stabil kapcsolat, gyors sebesség. Kicsit zajosabb mint gondoltam, de összességében elégedett vagyok.',
  },
  {
    id: 6,
    name: 'Kiss Mónika',
    rating: 5,
    date: '2024. Február 15.',
    comment: 'Professzionális tanácsadás és kiváló ügyfélszolgálat. A rendszer karbantartási szerződés minden hónapban értéket ad a vállalatunknak.',
  },
  {
    id: 7,
    name: 'Varga László',
    rating: 4,
    date: '2024. Február 10.',
    comment: 'A firewall berendezés remekül működik. A konfigurálás elsőre bonyolultnak tűnt, de az ügyfélszolgálat segített.',
  },
  {
    id: 8,
    name: 'Molnár Éva',
    rating: 5,
    date: '2024. Február 5.',
    comment: 'Fantasztikus élmény volt vásárolni itt! Gyors kiszállítás, tökéletes csomagolás, és a termékek pontosan olyanok, mint a leírásban.',
  },
  {
    id: 9,
    name: 'Farkas Tamás',
    rating: 4,
    date: '2024. Január 30.',
    comment: 'A VPN router nagyszerű minőségű. Az ár-érték arány kiváló, bár a dokumentáció lehetne részletesebb.',
  },
  {
    id: 10,
    name: 'Lakatos Zsuzsanna',
    rating: 5,
    date: '2024. Január 25.',
    comment: 'Már több terméket is vásároltam tőlük. Mindegyik kifogástalan minőségű, és a technikai támogatás is kiváló!',
  },
];

const Reviews = () => {
  const [allReviews, setAllReviews] = useState<Review[]>(reviews);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted-foreground'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderInteractiveStars = (currentRating: number, onRate: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-6 w-6 ${
                star <= currentRating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground hover:text-yellow-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.name.trim()) {
      toast.error('Kérjük, adja meg a nevét!');
      return;
    }

    const blockedNames = ['lakatos', 'arató', 'dzsesszika', 'jessica', 'rodolfó', 'bodega', 'konrád'];
    const nameLower = newReview.name.toLowerCase();
    
    if (blockedNames.some(blocked => nameLower.includes(blocked))) {
      toast.error('Ez a név nem engedélyezett a véleményezéshez.');
      return;
    }
    
    if (newReview.rating < 4) {
      toast.error('Csak 4 vagy 5 csillagos értékeléseket fogadunk el!');
      return;
    }
    
    if (!newReview.comment.trim()) {
      toast.error('Kérjük, írjon véleményt!');
      return;
    }

    const review: Review = {
      id: allReviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' }).replace(/ /g, '. '),
      comment: newReview.comment,
    };

    setAllReviews([review, ...allReviews]);
    setNewReview({ name: '', rating: 0, comment: '' });
    toast.success('Köszönjük a véleményét!');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vásárlói Vélemények</h1>
          <p className="text-muted-foreground mb-8">
            Olvassa el ügyfeleink véleményét termékeinkről és szolgáltatásainkról.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-2xl font-bold">Írjon véleményt</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Név</Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="Az Ön neve"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Értékelés (min. 4 csillag)</Label>
                  {renderInteractiveStars(newReview.rating, (rating) => 
                    setNewReview({ ...newReview, rating })
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Vélemény</Label>
                  <Textarea
                    id="comment"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Ossza meg velünk véleményét..."
                    className="min-h-[100px]"
                    maxLength={500}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Vélemény elküldése
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {allReviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;