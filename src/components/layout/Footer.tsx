
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold anime-gradient-text">AnimeVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate social platform for anime fans to connect, share, and discover.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-muted-foreground hover:text-primary transition-colors">
                  Explore Anime
                </Link>
              </li>
              <li>
                <Link to="/forums" className="text-muted-foreground hover:text-primary transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/clips" className="text-muted-foreground hover:text-primary transition-colors">
                  Anime Clips
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Fan Creations
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support & Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest anime news and community updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px]"
              />
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing, you agree to our privacy policy and consent to receive updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AnimeVerse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
