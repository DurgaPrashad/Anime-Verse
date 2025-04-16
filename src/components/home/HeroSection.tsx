
import { Link } from "react-router-dom";
import { GlowButton } from "@/components/ui/glow-button";
import FloatingAnimeCharacter from "@/components/anime/FloatingAnimeCharacter";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center">
      {/* Hero background - black background */}
      <div 
        className="absolute inset-0 bg-black z-0"
      />
      
      {/* Floating Anime Characters - positioned around the text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Character 1 - Saitama (One-Punch Man) */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" 
          position="top-left"
          speed={0.7}
        />
        
        {/* Character 2 - Levi (Attack on Titan) */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png" 
          position="top-right"
          speed={0.8}
        />
        
        {/* Character 3 - Tanjiro (Demon Slayer) */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png" 
          position="bottom-left"
          speed={1}
        />
        
        {/* Character 4 - Luffy (One Piece) */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png" 
          position="bottom-right"
          speed={0.9}
        />
        
        {/* Character 5 - Goku (Dragon Ball) */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png" 
          position="center"
          speed={0.6}
        />
        
        {/* Character 6 - Naruto (Naruto) */}
        <div className="absolute top-1/3 right-1/4">
          <FloatingAnimeCharacter 
            imagePath="/lovable-uploads/bc97dd34-8773-45db-9c07-cf3e52c46c56.png" 
            position="top-right"
            speed={1.2}
          />
        </div>
      </div>
      
      {/* Content area */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 relative inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Welcome to AnimeVerse
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg -z-10"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-2xl mx-auto">
            Connect with fellow anime fans
          </p>
          
          <Link to="/dashboard" className="inline-block">
            <GlowButton variant="neon" size="lg" className="text-xl font-future tracking-wider px-10 py-6 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold transition-all hover:shadow-[0_0_15px_rgba(255,223,0,0.8)]">
              Enter Dashboard
            </GlowButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
