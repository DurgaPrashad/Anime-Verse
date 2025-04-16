import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Heart, MessageSquare, Share2, ChevronLeft, ChevronRight } from "lucide-react";

// Use trusted image URLs
const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Available";

const animeClips = [
   {
     id: 1,
     thumbnail: "/new/1.png",
     title: "Epic Battle Scene",
     anime: "Demon Slayer",
     likes: "15.4K",
     comments: "1.2K",
     videoUrl: "https://www.youtube.com/watch?v=1"
   },
   {
     id: 2,
     thumbnail: "/new/2.png",
     title: "Funny Moment",
     anime: "One Punch Man",
     likes: "9.8K",
     comments: "834",
     videoUrl: "https://www.youtube.com/watch?v=2"
   },
   {
     id: 3,
     thumbnail: "/new/3.png",
     title: "Character Transformation",
     anime: "My Hero Academia",
     likes: "12.1K",
     comments: "945",
     videoUrl: "https://www.youtube.com/watch?v=3"
   },
   {
     id: 4,
     thumbnail: "/new/4.png",
     title: "Plot Twist",
     anime: "Attack on Titan",
     likes: "18.7K",
     comments: "2.3K",
     videoUrl: "https://www.youtube.com/watch?v=4"
   },
   {
     id: 5,
     thumbnail: "/new/5.png",
     title: "Emotional Scene",
     anime: "Your Lie in April",
     likes: "14.2K",
     comments: "1.7K",
     videoUrl: "https://www.youtube.com/watch?v=5"
   }
 ];
 

const ClipsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current >= animeClips.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current <= 0 ? animeClips.length - 1 : current - 1
    );
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImage; // Set fallback image if main image fails
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatically move to next slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-24 bg-gradient-anime-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Popular Anime Clips</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch and share your favorite moments from anime series
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/30 backdrop-blur-sm hover:bg-background/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/30 backdrop-blur-sm hover:bg-background/50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Clips Carousel */}
          <div className="overflow-hidden mx-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {animeClips.map((clip) => (
                <div key={clip.id} className="min-w-full px-4">
                  <div className="clip-card group relative">
                    <img
                      src={clip.thumbnail}
                      alt={clip.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      onError={handleImageError} // Handle image error
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        className="rounded-full h-14 w-14 bg-primary/80 hover:bg-primary"
                        onClick={() => window.open(clip.videoUrl, "_blank")} // Opens the YouTube video in a new tab
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <h4 className="font-bold text-white">{clip.title}</h4>
                      <p className="text-sm text-white/80">{clip.anime}</p>

                      {/* Interactions */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex space-x-4">
                          <span className="flex items-center text-white/80 text-sm">
                            <Heart className="h-4 w-4 mr-1" />
                            {clip.likes}
                          </span>
                          <span className="flex items-center text-white/80 text-sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {clip.comments}
                          </span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4 text-white/80" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="btn-anime" size="lg">
            Explore All Clips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClipsSection;
