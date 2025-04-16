
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Explore = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  
  // Anime data with anime URLs provided by user
  const animeData = [
   {
     id: 1,
     title: "One Punch Man",
     image: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png",
     description: "The story of Saitama, a hero who can defeat any opponent with a single punch but seeks to find a worthy opponent after growing bored by a lack of challenge.",
     rating: 8.7,
     episodes: 24,
     genres: ["Action", "Comedy", "Superhero"]
   },
   {
     id: 2,
     title: "Attack on Titan",
     image: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png",
     description: "In a world where humanity lives within cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason.",
     rating: 9.1,
     episodes: 87,
     genres: ["Action", "Dark Fantasy", "Drama"]
   },
   {
     id: 3,
     title: "Demon Slayer",
     image: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png",
     description: "Tanjiro Kamado's journey to find a cure for his sister who has turned into a demon after their family was slaughtered by demons.",
     rating: 8.9,
     episodes: 44,
     genres: ["Action", "Fantasy", "Adventure"]
   },
   {
     id: 4,
     title: "One Piece",
     image: "/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png",
     description: "Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit, explores the Grand Line in search of the world’s ultimate treasure known as 'One Piece'.",
     rating: 9.0,
     episodes: 1009,
     genres: ["Action", "Adventure", "Fantasy"]
   },
   {
     id: 5,
     title: "Dragon Ball Z",
     image: "/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png",
     description: "Follows the adventures of Goku who, along with his companions, defends the Earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids, and nearly indestructible creatures.",
     rating: 8.5,
     episodes: 291,
     genres: ["Action", "Martial Arts", "Adventure"]
   }
 ];
 

  const weeklyTopAnime = [
    { id: 1, title: "Jujutsu Kaisen Season 2", views: "2.4M", trend: "up" },
    { id: 2, title: "Chainsaw Man", views: "1.9M", trend: "up" },
    { id: 3, title: "Bleach: Thousand-Year Blood War", views: "1.7M", trend: "down" },
    { id: 4, title: "One Piece", views: "1.6M", trend: "stable" },
    { id: 5, title: "Spy x Family", views: "1.4M", trend: "up" },
  ];

  const recentReviews = [
    { id: 1, anime: "Attack on Titan Final Season", user: "AnimeExpert", rating: 9.8, comment: "A masterpiece conclusion to one of the best series ever created." },
    { id: 2, anime: "Demon Slayer: Entertainment District", user: "MangaReader", rating: 9.5, comment: "The animation quality continues to exceed expectations. Absolutely stunning!" },
    { id: 3, anime: "My Hero Academia S6", user: "HeroFanatic", rating: 8.7, comment: "This season finally delivers the action we've been waiting for." },
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Explore Anime</h1>
        
        {/* Featured anime horizontal scroll */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Trending Now</h2>
            <Button variant="link" className="text-primary">View All</Button>
          </div>
          
          <div className="relative w-full">
            <div ref={horizontalScrollRef} className="flex space-x-4 pb-4 overflow-x-auto hide-scrollbar">
              {animeData.map((anime) => (
                <Card key={anime.id} className="flex-shrink-0 w-[250px] overflow-hidden bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1">
                  <div className="relative h-[350px]">
                    <img 
                      src={anime.image} 
                      alt={anime.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                      <h3 className="text-lg font-bold text-white">{anime.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-yellow-500/80 text-black text-xs px-2 py-0.5 rounded-full font-bold">★ {anime.rating}</span>
                        <span className="text-xs text-white/80">{anime.episodes} episodes</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Top Anime */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Weekly Top Anime</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weeklyTopAnime.map((anime, index) => (
              <Card key={anime.id} className="flex items-center p-4 bg-card/80 backdrop-blur-sm border-primary/10">
                <span className="text-2xl font-bold mr-4 text-primary/70">#{index + 1}</span>
                <div className="flex-1">
                  <h3 className="font-bold">{anime.title}</h3>
                  <p className="text-sm text-muted-foreground">{anime.views} weekly views</p>
                </div>
                <span className={`text-sm px-2 py-1 rounded ${
                  anime.trend === 'up' ? 'bg-green-500/20 text-green-500' : 
                  anime.trend === 'down' ? 'bg-red-500/20 text-red-500' : 
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {anime.trend === 'up' ? '↑' : anime.trend === 'down' ? '↓' : '→'}
                </span>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {recentReviews.map(review => (
              <Card key={review.id} className="p-4 bg-card/80 backdrop-blur-sm border-primary/10">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <img src={`/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png`} alt={review.user} />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">{review.anime}</h4>
                      <span className="bg-yellow-500/80 text-black text-sm px-2 py-0.5 rounded-full font-bold">★ {review.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">by {review.user}</p>
                    <p className="text-sm">{review.comment}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Explore;
