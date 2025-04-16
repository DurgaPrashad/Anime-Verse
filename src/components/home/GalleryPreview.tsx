
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Heart, MessageSquare, User, ExternalLink, ArrowRight } from "lucide-react";

const fanArt = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Goku Black Rose",
    artist: "ArtMaster",
    likes: 1243,
    comments: 89
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Demon Slayer Fan Art",
    artist: "AnimeFan22",
    likes: 864,
    comments: 52
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Attack on Titan Scene",
    artist: "TitanArtist",
    likes: 1576,
    comments: 124
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Colorful Manga Style",
    artist: "MangaMaster",
    likes: 972,
    comments: 63
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Digital Fantasy",
    artist: "DigitalArtist",
    likes: 782,
    comments: 47
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Anime City Landscape",
    artist: "CityscapeArt",
    likes: 1102,
    comments: 75
  }
];

const cosplay = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Demon Slayer Cosplay",
    artist: "CosplayMaster",
    likes: 1843,
    comments: 154
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1612036782180-6f0822045d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "My Hero Academia Cosplay",
    artist: "HeroFan",
    likes: 1232,
    comments: 87
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Tokyo Revengers Costume",
    artist: "CosplayWiz",
    likes: 1687,
    comments: 132
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Anime Character Tribute",
    artist: "AnimeFan99",
    likes: 1452,
    comments: 110
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Studio Ghibli Cosplay",
    artist: "GhibliFan",
    likes: 1921,
    comments: 176
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Anime Festival Look",
    artist: "FestivalCosplayer",
    likes: 1563,
    comments: 94
  }
];

const GalleryPreview = () => {
  const [activeTab, setActiveTab] = useState("fanArt");

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="h2 mb-2">Fan Creations</h2>
            <p className="text-foreground/70">
              Explore amazing artwork and cosplay from our talented community
            </p>
          </div>
          <Button variant="outline" className="flex items-center mt-4 md:mt-0">
            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="fanArt" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger 
                value="fanArt"
                className={`px-8 py-3 ${activeTab === "fanArt" ? "bg-anime-purple-light/30" : ""}`}
              >
                Fan Art
              </TabsTrigger>
              <TabsTrigger 
                value="cosplay"
                className={`px-8 py-3 ${activeTab === "cosplay" ? "bg-anime-purple-light/30" : ""}`}
              >
                Cosplay
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="fanArt" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fanArt.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cosplay" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cosplay.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="btn-secondary-anime" size="lg">
            Submit Your Creation
          </Button>
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ item }: { item: any }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-square overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
        <h4 className="font-bold text-white text-lg">{item.title}</h4>
        <div className="flex items-center text-white/80 text-sm mb-2">
          <User className="h-3 w-3 mr-1" />
          {item.artist}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <span className="flex items-center text-white/80 text-sm">
              <Heart className="h-3 w-3 mr-1" />
              {item.likes}
            </span>
            <span className="flex items-center text-white/80 text-sm">
              <MessageSquare className="h-3 w-3 mr-1" />
              {item.comments}
            </span>
          </div>
          <Button className="h-7 w-7 rounded-full p-0" size="icon" variant="ghost">
            <ExternalLink className="h-3 w-3 text-white/80" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPreview;
