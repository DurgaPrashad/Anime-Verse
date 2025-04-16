
import { 
  TrendingUp, Calendar, Users, Plus, Image, MessageSquare, Star, Heart, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState, useRef, useEffect } from "react";

const Dashboard = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [activePost, setActivePost] = useState<number | null>(null);
  const [colorTheme, setColorTheme] = useState<"blue" | "yellow" | "green">("blue");
  
  // Refs for scrollable sections
  const exploreRef = useRef<HTMLDivElement>(null);
  const fanArtRef = useRef<HTMLDivElement>(null);
  const communitiesRef = useRef<HTMLDivElement>(null);

  // Mock data for posts with anime images
  const posts = [
    {
      id: 1,
      author: "MangaMaster",
      avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      time: "2h ago",
      content: "Just finished watching the latest episode of Demon Slayer! The animation was incredible! #DemonSlayer #Animation",
      image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      likes: 124,
      comments: 18,
      shares: 4,
    },
    {
      id: 2,
      author: "AnimeQueen",
      avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      time: "5h ago",
      content: "My newest fan art of Gojo from Jujutsu Kaisen. What do you think? #JujutsuKaisen #FanArt",
      image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      likes: 253,
      comments: 42,
      shares: 31,
    },
    {
      id: 3,
      author: "OtakuLegend",
      avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      time: "1d ago",
      content: "My anime figure collection keeps growing! Just got this limited edition Naruto figure today.",
      image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png",
      likes: 87,
      comments: 12,
      shares: 3,
    }
  ];

  // Mock data for trending anime with more specific anime images
  const trendingAnime = [
    { id: 1, title: "Demon Slayer S3", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", viewers: "1.2M", tag: "Popular" },
    { id: 2, title: "Jujutsu Kaisen", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", viewers: "984K", tag: "Action" },
    { id: 3, title: "My Hero Academia", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", viewers: "756K", tag: "Hero" },
    { id: 4, title: "One Piece", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", viewers: "2.5M", tag: "Adventure" },
    { id: 5, title: "Spy x Family", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", viewers: "689K", tag: "Comedy" },
  ];

  // Mock data for online friends with anime-style avatars
  const onlineFriends = [
    { id: 1, name: "Sakura_Fan", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", status: "online" },
    { id: 2, name: "NarutoUzumaki", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", status: "online" },
    { id: 3, name: "SasukeUchiha", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", status: "idle" },
    { id: 4, name: "HinataHyuga", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", status: "offline" },
    { id: 5, name: "KakashiSensei", avatar: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", status: "online" },
  ];

  // Communities data
  const communities = [
    { id: 1, name: "Demon Slayer Fans", members: "15.2K", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", isJoined: true },
    { id: 2, name: "Naruto Universe", members: "23.7K", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", isJoined: true },
    { id: 3, name: "One Piece Crew", members: "31.4K", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", isJoined: false },
    { id: 4, name: "Attack on Titan", members: "18.9K", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", isJoined: false },
    { id: 5, name: "My Hero Academia", members: "12.5K", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", isJoined: true },
  ];
  
  // Fan art data
  const fanArt = [
    { id: 1, title: "Gojo Satoru", artist: "ArtMaster", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", likes: 542 },
    { id: 2, title: "Tanjiro & Nezuko", artist: "AnimeArtist", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", likes: 389 },
    { id: 3, title: "Eren Yeager", artist: "TitanFan", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", likes: 421 },
    { id: 4, title: "Luffy Gear 5", artist: "PirateDreamer", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", likes: 703 },
    { id: 5, title: "Gon & Killua", artist: "HunterArt", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png", likes: 328 },
  ];
  
  // Explore data
  const exploreData = [
    { id: 1, title: "Chainsaw Man", description: "A new dark fantasy action manga and anime following Denji, who merges with his chainsaw devil pet to hunt other devils.", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
    { id: 2, title: "Jujutsu Kaisen", description: "Follows Yuji Itadori who joins a secret organization of sorcerers to kill a powerful Curse named Ryomen Sukuna.", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
    { id: 3, title: "Demon Slayer", description: "Tanjiro Kamado's journey to avenge his family and cure his sister after they were attacked by demons.", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
    { id: 4, title: "One Piece", description: "Follows Monkey D. Luffy and his pirate crew in their search for the world's ultimate treasure known as the 'One Piece'.", image: "/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" },
  ];

  // Custom reaction types with emoji
  const reactionTypes = [
    { icon: <Heart className="text-rose-500" />, label: "Like", emoji: "❤️" },
    { icon: <MessageSquare className="text-blue-500" />, label: "Reply", emoji: "💬" },
    { icon: <Star className="text-yellow-500" />, label: "Favorite", emoji: "⭐" },
    { icon: <Zap className="text-purple-500" />, label: "Amazing", emoji: "⚡" }
  ];

  // Handle post click for expanded view animation
  const handlePostClick = (id: number) => {
    if (activePost === id) {
      setActivePost(null);
    } else {
      setActivePost(id);
    }
  };
  
  // Apply theme color
  const applyTheme = (theme: "blue" | "yellow" | "green") => {
    setColorTheme(theme);
    const root = document.documentElement;
    
    if (theme === "blue") {
      root.style.setProperty('--primary-rgb', '93, 47, 223');
    } else if (theme === "yellow") {
      root.style.setProperty('--primary-rgb', '234, 179, 8');
    } else if (theme === "green") {
      root.style.setProperty('--primary-rgb', '34, 197, 94');
    }
  };

  // Add 3D effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Apply 3D effect to cards when scrolling
      document.querySelectorAll('.futuristic-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Calculate distance from center of screen
        const offsetX = (rect.left + rect.width / 2 - centerX) / 50;
        const offsetY = (rect.top + rect.height / 2 - centerY) / 50;
        
        // Apply subtle 3D rotation based on position
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (card as HTMLElement).style.transform = `perspective(1000px) rotateY(${-offsetX}deg) rotateX(${offsetY}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <DashboardLayout>
      {/* Content grid */}
      <div className="container mx-auto p-4">
        {/* Main feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Post input */}
            <div className="futuristic-card glow-effect group relative">
              <div className="flex space-x-3">
                <Avatar className="h-10 w-10 ring-2 ring-primary ring-offset-2 ring-offset-background">
                  <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="Your avatar" className="anime-avatar" />
                </Avatar>
                <Input 
                  type="text" 
                  placeholder="Share your anime feels..." 
                  className="futuristic-input bg-background/40"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground group">
                    <Image size={18} className="mr-1 group-hover:text-primary transition-colors" />
                    <span className="group-hover:text-primary transition-colors">Image</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hidden md:flex group">
                    <MessageSquare size={18} className="mr-1 group-hover:text-primary transition-colors" />
                    <span className="group-hover:text-primary transition-colors">GIF</span>
                  </Button>
                </div>
                <Button size="sm" className="cyber-button relative overflow-hidden">
                  <span className="relative z-10">Post</span>
                </Button>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-xl"></div>
            </div>

            {/* Posts feed with enhanced interactions */}
            <h2 className="text-2xl font-bold my-4">Your Feed</h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <Card 
                  key={post.id} 
                  className={`futuristic-card animate-fade-in relative overflow-hidden group cursor-pointer transition-all duration-300 ${
                    activePost === post.id ? 'ring-2 ring-primary/50 scale-[1.01]' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(post.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => handlePostClick(post.id)}
                >
                  {/* Enhanced anime-style decorative corners with animation */}
                  <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                    <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary transition-all duration-300 ${
                      activePost === post.id || isHovered === post.id ? 'w-8 h-8' : ''
                    }`}></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                    <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary transition-all duration-300 ${
                      activePost === post.id || isHovered === post.id ? 'w-8 h-8' : ''
                    }`}></div>
                  </div>
                  
                  {/* Enhanced writing background effect */}
                  <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-[0.02] pointer-events-none overflow-hidden">
                    <span className="text-6xl font-bold animate-pulse-soft">Anime Manga</span>
                  </div>
                  
                  <div className="flex items-center mb-3 relative">
                    <Avatar className={`h-10 w-10 mr-3 ring-offset-1 ring-offset-background transition-all duration-300 ${
                      activePost === post.id || isHovered === post.id 
                        ? 'ring-2 ring-primary scale-110' 
                        : 'ring-1 ring-primary/30'
                    }`}>
                      <img src={post.avatar} alt={post.author} className="anime-avatar" />
                    </Avatar>
                    <div>
                      <div className="font-medium font-future">{post.author}</div>
                      <div className="text-xs text-muted-foreground">{post.time}</div>
                    </div>
                  </div>
                  
                  <p className="mb-4 whitespace-pre-line">{post.content}</p>
                  
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden relative group">
                      <img 
                        src={post.image} 
                        alt="Post image" 
                        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform"
                      />
                      
                      {/* Enhanced image overlay effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Enhanced anime-style corner decoration */}
                      <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  )}
                  
                  <div className="flex justify-between border-t border-border pt-3">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`text-muted-foreground group hover:text-rose-500 hover:bg-rose-500/10 transition-colors ${
                        post.id === isHovered || post.id === activePost ? 'animate-pulse-soft' : ''
                      }`}
                    >
                      <Heart 
                        size={16} 
                        className={`mr-1 transition-transform group-hover:scale-125 ${
                          post.id === isHovered || post.id === activePost ? 'text-rose-500' : ''
                        }`} 
                        fill={(post.id === isHovered || post.id === activePost) ? "currentColor" : "none"}
                      />
                      <span className="mr-1">{post.likes}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Like</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground group hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
                    >
                      <MessageSquare 
                        size={16} 
                        className="mr-1 transition-transform group-hover:scale-125"
                      />
                      <span className="mr-1">{post.comments}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Comment</span>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground group hover:text-purple-500 hover:bg-purple-500/10 transition-colors"
                    >
                      <span className="mr-1 text-lg">🔄</span>
                      <span className="mr-1">{post.shares}</span>
                      <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
                    </Button>
                  </div>
                  
                  {/* Enhanced reactions that appear on hover */}
                  <div className={`absolute -right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 transition-opacity ${
                    isHovered === post.id || activePost === post.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    {reactionTypes.map((reaction, index) => (
                      <Button 
                        key={index}
                        size="icon" 
                        variant="ghost" 
                        className={`rounded-full h-8 w-8 bg-${index === 0 ? 'rose' : index === 1 ? 'blue' : index === 2 ? 'amber' : 'purple'}-500/20 text-${index === 0 ? 'rose' : index === 1 ? 'blue' : index === 2 ? 'amber' : 'purple'}-500 hover:bg-${index === 0 ? 'rose' : index === 1 ? 'blue' : index === 2 ? 'amber' : 'purple'}-500/30 transition-transform hover:scale-110`}
                      >
                        <span className="text-sm font-bold">{reaction.emoji}</span>
                      </Button>
                    ))}
                  </div>
                  
                  {/* Expanded view content - visible when post is active */}
                  {activePost === post.id && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <div className="flex items-center mb-3">
                        <Avatar className="h-8 w-8 mr-2">
                          <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="Your avatar" className="anime-avatar" />
                        </Avatar>
                        <Input 
                          type="text" 
                          placeholder="Add a comment..." 
                          className="futuristic-input bg-background/40 h-9 text-sm" 
                        />
                        <Button size="sm" variant="ghost" className="ml-2 text-primary">
                          Send
                        </Button>
                      </div>
                      
                      {/* Sample comments */}
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          <Avatar className="h-7 w-7 flex-shrink-0">
                            <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="Commenter" className="anime-avatar" />
                          </Avatar>
                          <div className="anime-comment text-sm flex-1">
                            <div className="font-semibold text-xs">AnimeMania</div>
                            <p>Amazing post!</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Avatar className="h-7 w-7 flex-shrink-0">
                            <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="Commenter" className="anime-avatar" />
                          </Avatar>
                          <div className="anime-comment text-sm flex-1">
                            <div className="font-semibold text-xs">MangaReader</div>
                            <p>I love this too!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* Explore Section - Horizontally Scrollable */}
            <h2 className="text-2xl font-bold my-6">Explore New Anime</h2>
            <div className="relative w-full overflow-x-auto pb-4 hide-scrollbar" ref={exploreRef}>
              <div className="flex space-x-4 min-w-max">
                {exploreData.map((item) => (
                  <div key={item.id} className="w-72 flex-shrink-0">
                    <div className="futuristic-card overflow-hidden h-full">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <h3 className="absolute bottom-2 left-2 text-lg font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="p-3">
                        <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                        <Button variant="outline" size="sm" className="mt-3 w-full">Read More</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fan Art Section - Horizontally Scrollable */}
            <h2 className="text-2xl font-bold my-6">Fan Art Gallery</h2>
            <div className="relative w-full overflow-x-auto pb-4 hide-scrollbar" ref={fanArtRef}>
              <div className="flex space-x-4 min-w-max">
                {fanArt.map((art) => (
                  <div key={art.id} className="w-60 flex-shrink-0">
                    <div className="futuristic-card overflow-hidden">
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={art.image}
                          alt={art.title}
                          className="w-full h-full object-cover transition-transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <div className="absolute bottom-2 left-2 text-white">
                          <h3 className="font-bold">{art.title}</h3>
                          <p className="text-xs">by {art.artist}</p>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/50 rounded-full px-2 py-1 flex items-center text-xs text-white">
                          <Heart size={12} className="text-rose-500 mr-1" fill="currentColor" />
                          {art.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communities Section - Horizontally Scrollable */}
            <h2 className="text-2xl font-bold my-6">Anime Communities</h2>
            <div className="relative w-full overflow-x-auto pb-4 hide-scrollbar" ref={communitiesRef}>
              <div className="flex space-x-4 min-w-max">
                {communities.map((community) => (
                  <div key={community.id} className="w-64 flex-shrink-0">
                    <div className="futuristic-card overflow-hidden h-full">
                      <div className="flex items-center p-3 border-b border-border">
                        <Avatar className="h-10 w-10 mr-3">
                          <img src={community.image} alt={community.name} className="object-cover" />
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm">{community.name}</h3>
                          <p className="text-xs text-muted-foreground">{community.members} members</p>
                        </div>
                      </div>
                      <div className="p-3">
                        <Button 
                          variant={community.isJoined ? "outline" : "default"}
                          size="sm" 
                          className="w-full"
                        >
                          {community.isJoined ? "Joined" : "Join"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Settings Section */}
            <h2 className="text-2xl font-bold my-6">Settings</h2>
            <div className="futuristic-card">
              <h3 className="text-lg font-bold mb-4">Theme Colors</h3>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  onClick={() => applyTheme("blue")}
                >
                  Blue
                </Button>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => applyTheme("yellow")}
                >
                  Yellow
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => applyTheme("green")}
                >
                  Green
                </Button>
              </div>
            </div>
          </div>

          {/* The sidebar is now handled in the DashboardLayout component */}
        </div>
      </div>

      {/* Enhanced floating action button for mobile */}
      <div className="fixed right-4 bottom-20 md:hidden z-50">
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground cyber-glow"
        >
          <Plus size={24} />
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-40"></div>
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
