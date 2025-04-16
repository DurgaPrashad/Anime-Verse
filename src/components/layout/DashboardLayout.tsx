
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  ChevronRight, 
  Home, 
  MessageSquare, 
  Image, 
  Compass, 
  Settings, 
  Bell, 
  Search, 
  Users, 
  Star,
  Plus 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import FloatingAnimeCharacter from "@/components/anime/FloatingAnimeCharacter";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [colorTheme, setColorTheme] = useState<"blue" | "yellow" | "green">("blue");
  
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set active section based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/dashboard") setActiveSection("home");
    else if (path === "/explore") setActiveSection("explore");
    else if (path === "/fanart") setActiveSection("fanart");
    else if (path === "/messages") setActiveSection("messages");
    else if (path === "/communities") setActiveSection("communities");
    else if (path === "/settings") setActiveSection("settings");
  }, [location]);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        // Add 3D effect on scroll
        const scrollY = window.scrollY;
        const sections = mainContentRef.current.querySelectorAll('section');
        
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const offsetY = (rect.top - window.innerHeight / 2) / 20;
          
          // Apply only to visible sections
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.transform = `perspective(1000px) translateZ(${-offsetY}px)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply theme color
  useEffect(() => {
    const root = document.documentElement;
    
    if (colorTheme === "blue") {
      root.style.setProperty('--primary-rgb', '93, 47, 223');
    } else if (colorTheme === "yellow") {
      root.style.setProperty('--primary-rgb', '234, 179, 8');
    } else if (colorTheme === "green") {
      root.style.setProperty('--primary-rgb', '34, 197, 94');
    }
  }, [colorTheme]);

  // Navigation function
  const navigateTo = (section: string) => {
    setActiveSection(section);
    if (section === "home") navigate("/dashboard");
    else if (section === "explore") navigate("/explore");
    else if (section === "fanart") navigate("/fanart");
    else if (section === "messages") navigate("/messages");
    else if (section === "communities") navigate("/communities");
    else if (section === "settings") navigate("/settings");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row relative overflow-hidden">
      {/* Floating anime characters in background - smaller size */}
      <div className="fixed pointer-events-none z-0 w-full h-full overflow-hidden">
        {/* Only show one small floating character in dashboard */}
        <FloatingAnimeCharacter 
          imagePath="/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" 
          position="bottom-right"
          speed={0.5}
        />
        
        {/* Particle effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
        <div className="sakura-petals"></div>
        <div className="neon-particles"></div>
      </div>

      {/* Mobile navbar - visible only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-2 bg-card/90 backdrop-blur-md border-t border-border z-50 md:hidden">
        <Link to="/dashboard">
          <Button variant="ghost" size="icon" className={`text-foreground relative group ${activeSection === 'home' ? 'text-primary' : ''}`}>
            <Home size={24} className="group-hover:text-primary transition-colors group-hover:animate-pulse-soft" />
            <span className="absolute -top-2 -right-1 text-[10px] font-future text-primary opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
          </Button>
        </Link>
        <Link to="/explore">
          <Button variant="ghost" size="icon" className={`text-foreground relative group ${activeSection === 'explore' ? 'text-primary' : ''}`}>
            <Compass size={24} className="group-hover:text-primary transition-colors group-hover:animate-pulse-soft" />
            <span className="absolute -top-2 -right-1 text-[10px] font-future text-primary opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full cyber-glow bg-primary hover:bg-primary/90 text-primary-foreground relative">
          <span className="text-xl">+</span>
          <span className="absolute -bottom-6 text-xs font-future tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">New</span>
        </Button>
        <Link to="/fanart">
          <Button variant="ghost" size="icon" className={`text-foreground relative group ${activeSection === 'fanart' ? 'text-primary' : ''}`}>
            <Image size={24} className="group-hover:text-primary transition-colors group-hover:animate-pulse-soft" />
            <span className="absolute -top-2 -right-1 text-[10px] font-future text-primary opacity-0 group-hover:opacity-100 transition-opacity">Art</span>
          </Button>
        </Link>
        <Link to="/communities">
          <Button variant="ghost" size="icon" className={`text-foreground relative group ${activeSection === 'communities' ? 'text-primary' : ''}`}>
            <Users size={24} className="group-hover:text-primary transition-colors group-hover:animate-pulse-soft" />
            <span className="absolute -top-2 -right-1 text-[10px] font-future text-primary opacity-0 group-hover:opacity-100 transition-opacity">Community</span>
          </Button>
        </Link>
      </div>

      {/* Left Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 hidden md:flex md:flex-col 
                    ${isSidebarCollapsed ? 'md:w-16' : 'md:w-64'} 
                    bg-card/90 backdrop-blur-md border-r border-border py-4 cyberpunk-border`}
      >
        <div className="flex items-center justify-between px-4 mb-6">
          {!isSidebarCollapsed && (
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold anime-gradient-text neon-text">AnimeVerse</span>
            </Link>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground hover:bg-primary/20 hover:text-primary transition-all" 
            onClick={toggleSidebar}
          >
            <ChevronRight size={20} className={`transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        <div className="flex flex-col items-center mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-lg opacity-50"></div>
          <Avatar className="h-14 w-14 mb-2 avatar-border glow-effect">
            <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="User avatar" className="anime-avatar" />
          </Avatar>
          {!isSidebarCollapsed && (
            <div className="text-center">
              <div className="font-future font-semibold">KuroNeko</div>
              <div className="text-xs text-primary">Otaku Knight</div>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-auto px-2">
          <nav className="space-y-1">
            <Link to="/dashboard">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'home' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('home')}
              >
                <Home size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Home</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
            
            <Link to="/explore">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'explore' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('explore')}
              >
                <Compass size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Explore</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
            
            <Link to="/fanart">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'fanart' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('fanart')}
              >
                <Image size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Fan Art</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
            
            <Link to="/messages">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'messages' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('messages')}
              >
                <MessageSquare size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Messages</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
            
            <Link to="/communities">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'communities' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('communities')}
              >
                <Users size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Communities</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
            
            <Link to="/settings">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} hover:bg-primary/20 hover:text-primary transition-all ${activeSection === 'settings' ? 'bg-primary/20 text-primary' : ''}`}
                onClick={() => setActiveSection('settings')}
              >
                <Settings size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Settings</span>}
                <div className="absolute left-0 h-full w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
              </Button>
            </Link>
          </nav>

          <div className="mt-6 pt-6 border-t border-primary/10">
            <Link to="/settings?tab=premium">
              <Button 
                variant="ghost" 
                className={`w-full group ${!isSidebarCollapsed ? 'justify-start' : 'justify-center'} bg-gradient-to-r from-amber-500/20 to-yellow-500/20 hover:from-amber-500/30 hover:to-yellow-500/30 text-amber-500 transition-all`}
              >
                <Star size={20} className="flex-shrink-0" />
                {!isSidebarCollapsed && <span className="ml-3 font-future">Premium</span>}
              </Button>
            </Link>
          </div>
        </div>

        <div className="px-4 mt-auto">
          {!isSidebarCollapsed ? (
            <div className="flex justify-between items-center">
              <ThemeToggle />
              <span className="text-xs text-muted-foreground">v1.0.0</span>
            </div>
          ) : (
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          )}
        </div>
      </aside>

      {/* Main content area */}
      <main 
        ref={mainContentRef}
        className={`flex-1 transition-all duration-300 md:ml-64 ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'} pb-16 md:pb-0 relative z-10`}
      >
        {/* Top header */}
        <header className="sticky top-0 bg-card/80 backdrop-blur-md border-b border-border z-30 px-4 py-3">
          <div className="container mx-auto flex justify-between items-center">
            <div className="md:hidden">
              <Link to="/" className="text-xl font-bold anime-gradient-text neon-text">AnimeVerse</Link>
            </div>
            
            <div className="flex-1 max-w-md mx-4 hidden md:block">
              <div className="relative group">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  type="search" 
                  placeholder="Search anime, users, posts..." 
                  className="pl-9 bg-muted/50 border-primary/20 focus:border-primary transition-all cyber-input"
                />
                <div className="absolute inset-0 border border-primary/30 rounded-md opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative group">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-secondary text-secondary-foreground text-xs flex items-center justify-center rounded-full">3</span>
                <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-future">Notifications</span>
              </Button>
              
              <Avatar className="h-9 w-9 md:hidden glow-effect">
                <img src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" alt="User avatar" className="anime-avatar" />
              </Avatar>
            </div>
          </div>
        </header>

        {/* Render fixed/scrollable content sections */}
        <div className="flex flex-col lg:flex-row">
          {/* Main scrollable content area */}
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {children}
          </div>
          
          {/* Fixed sidebar - Trending section */}
          <div className="lg:w-80 p-4 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto hide-scrollbar">
            <div className="bg-card/60 backdrop-blur-md p-4 rounded-lg border border-border mb-4 transform transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <span className="text-primary mr-2">🔥</span>
                <span>Trending Anime Characters</span>
              </h3>
              
              {/* Anime character entries */}
              <div className="py-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src="/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" alt="Saitama" className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Saitama</p>
                    <p className="text-xs text-muted-foreground">One-Punch Man</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src="/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png" alt="Goku" className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Goku</p>
                    <p className="text-xs text-muted-foreground">Dragon Ball</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src="/lovable-uploads/bc97dd34-8773-45db-9c07-cf3e52c46c56.png" alt="Naruto" className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Naruto Uzumaki</p>
                    <p className="text-xs text-muted-foreground">Naruto</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2 border-b border-border">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src="/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png" alt="Luffy" className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Monkey D. Luffy</p>
                    <p className="text-xs text-muted-foreground">One Piece</p>
                  </div>
                </div>
              </div>
              
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <img src="/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png" alt="Tanjiro" className="object-cover" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Tanjiro Kamado</p>
                    <p className="text-xs text-muted-foreground">Demon Slayer</p>
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="w-full mt-2 text-primary">
                See More
              </Button>
            </div>
            
            <div className="bg-card/60 backdrop-blur-md p-4 rounded-lg border border-border transform transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/10">
  <h3 className="text-lg font-bold mb-3">Top Anime Communities</h3>
  
  <div className="py-2 border-b border-border">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <img src="/lovable-uploads/23086714-cacd-4566-a4d9-53896acd8b19.png" alt="One Punch Man" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">One Punch Man</p>
        <p className="text-xs text-muted-foreground">7.2K members</p>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs">
        Join
      </Button>
    </div>
  </div>

  <div className="py-2 border-b border-border">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <img src="/lovable-uploads/a31d16cb-3d52-4d6b-a6c2-d23f681f2f90.png" alt="Attack on Titan" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">Attack on Titan</p>
        <p className="text-xs text-muted-foreground">8.7K members</p>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs">
        Join
      </Button>
    </div>
  </div>

  <div className="py-2 border-b border-border">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <img src="/lovable-uploads/76ff8669-9616-4392-b8bd-f24827feedc7.png" alt="Demon Slayer" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">Demon Slayer</p>
        <p className="text-xs text-muted-foreground">6.8K members</p>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs">
        Join
      </Button>
    </div>
  </div>

  <div className="py-2 border-b border-border">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <img src="/lovable-uploads/7077f4a1-c9a9-4f03-86af-6bec08413983.png" alt="One Piece" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">One Piece</p>
        <p className="text-xs text-muted-foreground">9.1K members</p>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs">
        Join
      </Button>
    </div>
  </div>

  <div className="py-2">
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <img src="/lovable-uploads/d954d644-12d7-438c-800f-002a654cb09b.png" alt="Dragon Ball Z" className="object-cover" />
      </Avatar>
      <div className="flex-1">
        <p className="text-sm font-medium">Dragon Ball Z</p>
        <p className="text-xs text-muted-foreground">6.5K members</p>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs">
        Join
      </Button>
    </div>
  </div>

  <Button variant="ghost" size="sm" className="w-full mt-2 text-primary">
    View All Communities
  </Button>
</div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
