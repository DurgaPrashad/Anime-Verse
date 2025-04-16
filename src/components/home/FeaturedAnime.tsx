import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const featuredAnime = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    rating: 9.8,
    genre: "Action",
    discussions: 1240,
    fanArts: 843
  },
  {
    id: 2,
    title: "My Hero Academia",
    image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    rating: 9.2,
    genre: "Superhero",
    discussions: 950,
    fanArts: 1021
  },
  {
    id: 3,
    title: "Demon Slayer",
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    rating: 9.5,
    genre: "Fantasy",
    discussions: 1102,
    fanArts: 1550
  },
  {
    id: 4,
    title: "Jujutsu Kaisen",
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    rating: 9.7,
    genre: "Supernatural",
    discussions: 832,
    fanArts: 972
  }
];

const FeaturedAnime = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Trending Anime</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join discussions and share fan content about the most popular anime series right now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnime.map((anime) => (
            <Card key={anime.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={anime.image} 
                  alt={anime.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/80 backdrop-blur-sm text-foreground">
                    <Star className="h-3 w-3 text-yellow-500 mr-1 inline" />
                    {anime.rating}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card/90 to-transparent"></div>
                <Badge className="absolute bottom-4 left-4 bg-primary">{anime.genre}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">{anime.title}</h3>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{anime.discussions} Discussions</span>
                  <span>{anime.fanArts} Fan Arts</span>
                </div>
                <Button className="w-full mt-4" variant="outline">View Community</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-anime" size="lg">
            Explore More Anime
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnime;
