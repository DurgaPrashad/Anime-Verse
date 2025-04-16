
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, Filter } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";

const FanArt = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const fanArtData = [
    {
      id: 1,
      title: "Goku Power Up",
      artist: "DragonArtist",
      image: "/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png",
      likes: 1248,
      comments: 42,
      shares: 87,
      category: "dragon-ball"
    },
    {
      id: 2,
      title: "Tanjiro's Determination",
      artist: "DemonSlayerFan",
      image: "/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png",
      likes: 982,
      comments: 36,
      shares: 65,
      category: "demon-slayer"
    },
    {
      id: 3,
      title: "Saitama Serious Mode",
      artist: "OnePunchFan",
      image: "/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png",
      likes: 2134,
      comments: 98,
      shares: 154,
      category: "one-punch-man"
    },
    {
      id: 4,
      title: "Levi in Action",
      artist: "TitanHunter",
      image: "/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png",
      likes: 1567,
      comments: 73,
      shares: 112,
      category: "attack-on-titan"
    },
    {
      id: 5,
      title: "Luffy's Smile",
      artist: "PirateKing",
      image: "/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png",
      likes: 1876,
      comments: 86,
      shares: 134,
      category: "one-piece"
    },
    {
      id: 6,
      title: "Naruto Sage Mode",
      artist: "HokageFan",
      image: "/lovable-uploads/bc97dd34-8773-45db-9c07-cf3e52c46c56.png",
      likes: 1723,
      comments: 92,
      shares: 118,
      category: "naruto"
    }
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "one-punch-man", label: "One Punch Man" },
    { id: "attack-on-titan", label: "Attack on Titan" },
    { id: "demon-slayer", label: "Demon Slayer" },
    { id: "one-piece", label: "One Piece" },
    { id: "dragon-ball", label: "Dragon Ball" },
    { id: "naruto", label: "Naruto" },
  ];

  const filteredArt = activeFilter === "all" 
    ? fanArtData
    : fanArtData.filter(art => art.category === activeFilter);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h1 className="text-4xl font-bold mb-4 md:mb-0">Fan Art Gallery</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={18} />
            Submit Your Art
          </Button>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto hide-scrollbar pb-2">
          {filters.map(filter => (
            <Button 
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full ${activeFilter === filter.id ? 'bg-primary text-primary-foreground' : ''}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Fan art grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredArt.map(art => (
            <Card key={art.id} className="overflow-hidden bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative aspect-square">
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white">{art.title}</h3>
                  <p className="text-sm text-white/80">by {art.artist}</p>
                </div>
              </div>
              
              <div className="p-4 border-t border-primary/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt={art.artist} className="object-cover" />
                    </Avatar>
                    <span className="font-medium text-sm">{art.artist}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Heart size={16} className="text-rose-500" />
                    <span>{art.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageSquare size={16} />
                    <span>{art.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Share2 size={16} />
                    <span>{art.shares}</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FanArt;
