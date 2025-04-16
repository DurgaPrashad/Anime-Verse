
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search, User, X, Users, Home, Compass, MessageSquare, Film, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);  // Track theme state

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get theme state from localStorage
    const storedTheme = localStorage.getItem("theme");
    setIsDarkTheme(storedTheme === "dark");
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const root = document.documentElement;
          setIsDarkTheme(root.classList.contains("dark"));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-violet-600 group-hover:drop-shadow-[0_0_15px_rgba(93,47,223,0.8)]">
            AnimeVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)]`}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)]`}
          >
            Explore
          </Link>
          <Link
            to="/fanart"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)]`}
          >
            Fan Art
          </Link>
          <Link
            to="/messages"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)]`}
          >
            Messages
          </Link>
          <Link
            to="/communities"
            className={`${
              isDarkTheme ? "text-white" : "text-black"
            } font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)]`}
          >
            Communities
          </Link>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Avatar className="avatar-border h-9 w-9 ring-2 ring-primary/50 hover:ring-primary transition-all">
            <AvatarImage src="/lovable-uploads/fa4c457f-cde9-4cdc-96b9-f90f42ffb034.png" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary/20 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-4 bg-background/80 backdrop-blur-md">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={16} className="mr-2" />
              Home
            </Link>
            <Link
              to="/explore"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Compass size={16} className="mr-2" />
              Explore
            </Link>
            <Link
              to="/fanart"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Image size={16} className="mr-2" />
              Fan Art
            </Link>
            <Link
              to="/messages"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={16} className="mr-2" />
              Messages
            </Link>
            <Link
              to="/communities"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={16} className="mr-2" />
              Communities
            </Link>
            <Link
              to="/settings"
              className={`${
                isDarkTheme ? "text-white" : "text-black"
              } px-4 py-2 rounded-md flex items-center hover:bg-gradient-to-r hover:from-purple-400 hover:via-indigo-500 hover:to-violet-600 hover:text-white hover:shadow-[0_0_8px_rgba(93,47,223,0.6)] transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={16} className="mr-2" />
              Settings
            </Link>
          </nav>
          <div className="flex items-center space-x-4 mt-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
